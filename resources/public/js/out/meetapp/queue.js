// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.queue');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('meetapp.timer');
goog.require('meetapp.store');
goog.require('meetapp.lib.drag_list');
goog.require('meetapp.util');
meetapp.queue.next_speaker = (function next_speaker(){
meetapp.timer.reset.call(null);

if(cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"queue","queue",1455835879))))){
return meetapp.store.remove_from_queue.call(null,(0));
} else {
return null;
}
});
meetapp.queue.key_handler = (function key_handler(event){
meetapp.queue.preventDefault = (function preventDefault(){
return event.preventDefault();
});

var G__23187 = meetapp.util.key_mapping.call(null,event.keyCode);
switch (G__23187) {
case "down":
return console.log("going down");

break;
case "up":
return console.log("going up");

break;
case "left":
return console.log("left");

break;
case "right":
return console.log("right");

break;
case "enter":
return console.log("enter");

break;
case "delete":
return console.log("delete");

break;
default:
return secretary.core.dispatch_BANG_.call(null,"/roster");

}
});
meetapp.queue.main = (function main(){
var go_roster = (function (){
return secretary.core.dispatch_BANG_.call(null,"/roster");
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (go_roster){
return (function (){
return document.addEventListener("keydown",meetapp.queue.key_handler);
});})(go_roster))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (go_roster){
return (function (){
return document.removeEventListener("keydown",meetapp.queue.key_handler);
});})(go_roster))
,new cljs.core.Keyword(null,"render","render",-1408033454),((function (go_roster){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://torchapps.github.io/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-torch","i.icon-torch",-993760056)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"MeetApp beta"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spacer","div.spacer",2037275558)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_roster], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-add","i.icon-add",-74563495)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.queue.main","div.queue.main",-672596961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (go_roster){
return (function (){
return meetapp.queue.next_speaker.call(null);
});})(go_roster))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.timer.main], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (go_roster){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data-id","data-id",1023855591),index,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),meetapp.lib.drag_list.end,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),cljs.core.partial.call(null,meetapp.lib.drag_list.over,meetapp.store.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null)),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),meetapp.lib.drag_list.start,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,meetapp.lib.drag_list.dragging),index))?"dragging":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry","div.entry",-1702818662),item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (go_roster){
return (function (){
return meetapp.store.remove_from_queue.call(null,index);
});})(go_roster))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null);
});})(go_roster))
,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"queue","queue",1455835879))))], null)], null)], null);
});})(go_roster))
], null));
});

//# sourceMappingURL=queue.js.map