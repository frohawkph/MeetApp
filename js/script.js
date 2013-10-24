window.onbeforeunload = function(){ return "This list of names will be discarded."; }

var app = angular.module('meetapp', ['ui', 'ngTouch']);

function pad(number) {   
  var str = '' + number;
  while (str.length < 2) {
    str = '0' + str;
  }
  return str;
}

app.controller('MeetApp', function($scope){

	var name = document.getElementById("name");

	$scope.names = [];
	$scope.add = function(name){
		if(!name || !name.length) return;
		$scope.names.push(name);
		$scope.names.sort();
		$scope.name = null;
	}

	$scope.queue = [];
	$scope.current = null;
	$scope.enqueue = function(name){

		if(!name || !name.length) return;

		var e = {
			name: name,
			startTime: $scope.queue.length ? null : new Date(),
			endTime: null
		}

		if(!$scope.queue.length) $scope.current = e;
		$scope.queue.push(e);

	}

	$scope.dequeue = function(i){
		if($scope.queue[i] == $scope.current){
			$scope.next();
		} else {
			$scope.queue.splice(i, 1);
		}
	}

	$scope.displayTime = function(entry){

		if(!entry.startTime) return "00:00.00";

		var dd;
		if(entry.endTime){
			dd = entry.endTime - entry.startTime;
		} else {
			dd = new Date() - entry.startTime;
		}

		var ms = pad(Math.floor((dd%1000)/10));
		dd/=1000;
		
		var s = pad(Math.floor(dd%60));
		dd/=60;

		var m = pad(Math.floor(dd%60));
		dd/=60;

		return m + ":" + s + "." + ms;

	}

	$scope.overtime = function(entry){
		return parseInt($scope.displayTime(entry).split(":")[0]);
	}

	$scope.next = function(){
		var now = new Date();
		var i = $scope.queue.indexOf($scope.current);
		if(i < $scope.queue.length - 1){
			$scope.current.endTime = now;
			$scope.current = $scope.queue[++i];
			$scope.current.startTime = now;
		}
	}

	var panes = ['names', 'queue'];
	$scope.currentPane = panes[0];

	function switchPane(x){
		var i = panes.indexOf($scope.currentPane);
		i = (i + panes.length + x) % panes.length;
		$scope.currentPane = panes[i];
		if($scope.currentPane == 'name'){
			name.focus();
		} else {
			name.blur();
		}
	}

	$scope.nav = { names: 0, queue: 0 };

	function deleteFocus(){
		var sn = $scope.nav;
		var cp = $scope.currentPane;
		$scope[cp].splice(sn[cp], 1);
		sn[cp] = Math.min(Math.max(0, sn[cp]), $scope[cp].length - 1);
	}

	function scroll(dx){
		var sn = $scope.nav;
		var cp = $scope.currentPane;
		sn[cp] = Math.min(Math.max(0, sn[cp] + dx), $scope[cp].length - 1);
	}

	function scrollUp(){ scroll(-1); }
	function scrollDown(){ scroll(1); }

	$scope.keynav = {
		press: function(f, e){
			var name = document.getElementById("name");
			if(document.activeElement != name){
				e.preventDefault();
				f(e);
			} else if([$scope.keynav.up, $scope.keynav.down].indexOf(f) != -1){
				document.activeElement = document;
				f(e);
			}
		},
		backspace: deleteFocus,
		delete: deleteFocus,
		up: scrollUp,
		down: scrollDown,
		left: function(e){ $scope.keynav.tab(-1, e); },
		right: function(e){ $scope.keynav.tab(1, e); },
		tab: function(x, e){
			e.preventDefault();
			switchPane(x)
		},
		enter: function(){
			switch($scope.currentPane){
				case 'names': $scope.add($scope.name); break;
				// case 'names': $scope.enqueue($scope.names[$scope.nav.names]); break;
				case 'queue': $scope.next(); break;
			}
		}
	}

	$scope.midStyle = function(){
		return {top: ($scope.currentPane == 'input' ? 20 : 40) + '%'};
	}

	$scope.instructionsStyle = function(){
		return {opacity: $scope.currentPane == 'input' ? 1 : 0};
	}

	var loop = function(){
		if(!$scope.$$phase){ $scope.$apply(); }
		setTimeout(loop, 50);
	}
	loop();

	name.focus();

});
