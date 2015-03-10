// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.roster');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('meetapp.lib.collapse');
goog.require('clojure.set');
goog.require('meetapp.store');
goog.require('meetapp.util');
if(typeof meetapp.roster.selected_index !== 'undefined'){
} else {
meetapp.roster.selected_index = reagent.core.atom.call(null,null);
}
meetapp.roster.get_event_value = (function get_event_value(event){
return event.target.value;
});
meetapp.roster.enter_handler = (function enter_handler(){
if(cljs.core.not.call(null,cljs.core.deref.call(null,meetapp.roster.selected_index))){
if(cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,meetapp.store.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roster","roster",-2092272532)], null)),cljs.core.deref.call(null,meetapp.store.current_name))){
console.log("Error: name exists");
} else {
}

if((cljs.core.count.call(null,cljs.core.deref.call(null,meetapp.store.current_name)) > (0))){
return meetapp.store.add_to_roster.call(null,cljs.core.deref.call(null,meetapp.store.current_name));
} else {
return console.log("Error: name is blank");
}
} else {
return null;
}
});
meetapp.roster.keyhandler = (function keyhandler(event){
event.stopPropagation();

var G__34753 = event.key;
switch (G__34753) {
case "Enter":
return meetapp.roster.enter_handler.call(null);

break;
default:
return "default";

}
});
meetapp.roster.roster_input = (function roster_input(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
if(cljs.core.truth_(reagent.core.props.call(null,this$).call(null,new cljs.core.Keyword(null,"focused","focused",1851572115)))){
return reagent.core.dom_node.call(null,this$).focus();
} else {
return reagent.core.dom_node.call(null,this$).blur();
}
}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (this$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"roster-input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meetapp.store.current_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search or Add",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),meetapp.roster.keyhandler,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34755_SHARP_){
return cljs.core.reset_BANG_.call(null,meetapp.store.current_name,meetapp.roster.get_event_value.call(null,p1__34755_SHARP_));
})], null)], null);
})], null));
});
meetapp.roster.filtered_roster = (function filtered_roster(){
if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.store.current_name))){
return cljs.core.apply.call(null,cljs.core.sorted_set,clojure.set.select.call(null,(function (p1__34756_SHARP_){
return goog.string.caseInsensitiveContains(p1__34756_SHARP_,cljs.core.deref.call(null,meetapp.store.current_name));
}),cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532))));
} else {
return cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532));
}
});
meetapp.roster.main_keyhandler = (function main_keyhandler(event){
var max_count = (cljs.core.count.call(null,meetapp.roster.filtered_roster.call(null)) - (1));
var within_bounds_QMARK_ = (cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.roster.selected_index))) && ((cljs.core.deref.call(null,meetapp.roster.selected_index) <= max_count)) && ((cljs.core.deref.call(null,meetapp.roster.selected_index) >= (0)));
var clamp = ((function (max_count,within_bounds_QMARK_){
return (function (min_v,max_v,v){
var x__15982__auto__ = max_v;
var y__15983__auto__ = (function (){var x__15975__auto__ = min_v;
var y__15976__auto__ = v;
return ((x__15975__auto__ > y__15976__auto__) ? x__15975__auto__ : y__15976__auto__);
})();
return ((x__15982__auto__ < y__15983__auto__) ? x__15982__auto__ : y__15983__auto__);
});})(max_count,within_bounds_QMARK_))
;
var selected_name = ((function (max_count,within_bounds_QMARK_,clamp){
return (function (){
return cljs.core.vec.call(null,meetapp.roster.filtered_roster.call(null)).call(null,cljs.core.deref.call(null,meetapp.roster.selected_index));
});})(max_count,within_bounds_QMARK_,clamp))
;
var go_home = ((function (max_count,within_bounds_QMARK_,clamp,selected_name){
return (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});})(max_count,within_bounds_QMARK_,clamp,selected_name))
;
var G__34760 = meetapp.util.key_mapping.call(null,event.keyCode);
switch (G__34760) {
case "enter":
if(within_bounds_QMARK_){
meetapp.store.add_to_queue.call(null,selected_name.call(null));
} else {
}

cljs.core.reset_BANG_.call(null,meetapp.roster.selected_index,null);

return go_home.call(null);

break;
case "delete":
if(within_bounds_QMARK_){
return meetapp.store.remove_from_roster.call(null,selected_name.call(null));
} else {
return null;
}

break;
case "escape":
if(cljs.core.truth_(cljs.core.deref.call(null,meetapp.roster.selected_index))){
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_index,null);
} else {
return go_home.call(null);
}

break;
case "down":
event.preventDefault();

if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.roster.selected_index))){
return cljs.core.swap_BANG_.call(null,meetapp.roster.selected_index,((function (G__34760,max_count,within_bounds_QMARK_,clamp,selected_name,go_home){
return (function (p1__34757_SHARP_){
return clamp.call(null,(0),max_count,(p1__34757_SHARP_ + (1)));
});})(G__34760,max_count,within_bounds_QMARK_,clamp,selected_name,go_home))
);
} else {
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_index,(0));
}

break;
case "up":
event.preventDefault();

console.log("Derp");

if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.roster.selected_index))){
return cljs.core.swap_BANG_.call(null,meetapp.roster.selected_index,((function (G__34760,max_count,within_bounds_QMARK_,clamp,selected_name,go_home){
return (function (p1__34758_SHARP_){
return clamp.call(null,(0),max_count,(p1__34758_SHARP_ - (1)));
});})(G__34760,max_count,within_bounds_QMARK_,clamp,selected_name,go_home))
);
} else {
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_index,max_count);
}

break;
default:
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_index,null);

}
});
meetapp.roster.main = (function main(){
var go_home = (function (){
return secretary.core.dispatch_BANG_.call(null,"/");
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (go_home){
return (function (){
document.removeEventListener("keydown",meetapp.roster.main_keyhandler);

return document.addEventListener("keydown",meetapp.roster.main_keyhandler);
});})(go_home))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (go_home){
return (function (){
return document.removeEventListener("keydown",meetapp.roster.main_keyhandler);
});})(go_home))
,new cljs.core.Keyword(null,"component-function","component-function",654728922),((function (go_home){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),go_home], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-back","i.icon-arrow-back",1710557319)], null)], null),"derp"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roster.main","div.roster.main",-1846186817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-section","div.search-section",318831423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.roster.roster_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"focused","focused",1851572115),cljs.core.not.call(null,cljs.core.deref.call(null,meetapp.roster.selected_index))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (go_home){
return (function (p1__34762_SHARP_){
return p1__34762_SHARP_.preventDefault();
});})(go_home))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (go_home){
return (function (index,name){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),name,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,index,cljs.core.deref.call(null,meetapp.roster.selected_index)))?"selected":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (go_home){
return (function (){
meetapp.store.add_to_queue.call(null,name);

return go_home.call(null);
});})(go_home))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (go_home){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(go_home))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null);
});})(go_home))
,meetapp.roster.filtered_roster.call(null)))], null)], null)], null);
});})(go_home))
], null));
});

//# sourceMappingURL=roster.js.map