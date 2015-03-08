// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.roster');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('meetapp.lib.collapse');
goog.require('meetapp.store');
goog.require('meetapp.util');
if(typeof meetapp.roster.collapse_open_QMARK_ !== 'undefined'){
} else {
meetapp.roster.collapse_open_QMARK_ = reagent.core.atom.call(null,false);
}
if(typeof meetapp.roster.selected_item !== 'undefined'){
} else {
meetapp.roster.selected_item = reagent.core.atom.call(null,null);
}
meetapp.roster.get_event_value = (function get_event_value(event){
return event.target.value;
});
meetapp.roster.blur_handler = (function blur_handler(event){
return cljs.core.reset_BANG_.call(null,meetapp.roster.collapse_open_QMARK_,false);
});
meetapp.roster.enter_handler = (function enter_handler(){
if(cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,meetapp.store.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roster","roster",-2092272532)], null)),cljs.core.deref.call(null,meetapp.store.current_name))){
console.log("Error: name exists");
} else {
}

if((cljs.core.count.call(null,cljs.core.deref.call(null,meetapp.store.current_name)) > (0))){
return meetapp.store.add_to_roster.call(null,cljs.core.deref.call(null,meetapp.store.current_name));
} else {
return console.log("Error: name is blank");
}
});
meetapp.roster.keyhandler = (function keyhandler(event){
console.log(event.key);

event.stopPropagation();

var G__34899 = event.key;
switch (G__34899) {
case "Enter":
return meetapp.roster.enter_handler.call(null);

break;
default:
return "default";

}
});
meetapp.roster.roster_input = (function roster_input(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return reagent.core.dom_node.call(null,this$).focus();
}),new cljs.core.Keyword(null,"component-function","component-function",654728922),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"ref","ref",1289896967),"focus",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.reset_BANG_.call(null,meetapp.roster.collapse_open_QMARK_,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),meetapp.roster.blur_handler,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meetapp.store.current_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search or Add",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),meetapp.roster.keyhandler,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34901_SHARP_){
return cljs.core.reset_BANG_.call(null,meetapp.store.current_name,meetapp.roster.get_event_value.call(null,p1__34901_SHARP_));
})], null)], null);
})], null));
});
meetapp.roster.main_keyhandler = (function main_keyhandler(event){
var max_count = (cljs.core.count.call(null,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532))) - (1));
var G__34903 = meetapp.util.key_mapping.call(null,event.keyCode);
switch (G__34903) {
case "enter":
return console.log("what");

break;
case "escape":
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_item,null);

break;
case "down":
event.preventDefault();

if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.roster.selected_item))){
return cljs.core.swap_BANG_.call(null,meetapp.roster.selected_item,(((cljs.core.deref.call(null,meetapp.roster.selected_item) < max_count))?cljs.core.inc:cljs.core.identity));
} else {
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_item,(0));
}

break;
case "up":
event.preventDefault();

if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.roster.selected_item))){
return cljs.core.swap_BANG_.call(null,meetapp.roster.selected_item,(((cljs.core.deref.call(null,meetapp.roster.selected_item) > (0)))?cljs.core.dec:cljs.core.identity));
} else {
return cljs.core.reset_BANG_.call(null,meetapp.roster.selected_item,max_count);
}

break;
default:
return console.log("any key");

}
});
meetapp.roster.main = (function main(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return document.addEventListener("keydown",meetapp.roster.main_keyhandler);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return document.removeEventListener("keydown",meetapp.roster.main_keyhandler);
}),new cljs.core.Keyword(null,"component-function","component-function",654728922),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-back","i.icon-arrow-back",1710557319)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roster.main","div.roster.main",-1846186817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-section","div.search-section",318831423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.roster.roster_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__34905_SHARP_){
return p1__34905_SHARP_.preventDefault();
})], null),(function (){var iter__18374__auto__ = (function iter__34911(s__34912){
return (new cljs.core.LazySeq(null,(function (){
var s__34912__$1 = s__34912;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34912__$1);
if(temp__4126__auto__){
var s__34912__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34912__$2)){
var c__18372__auto__ = cljs.core.chunk_first.call(null,s__34912__$2);
var size__18373__auto__ = cljs.core.count.call(null,c__18372__auto__);
var b__34914 = cljs.core.chunk_buffer.call(null,size__18373__auto__);
if((function (){var i__34913 = (0);
while(true){
if((i__34913 < size__18373__auto__)){
var name = cljs.core._nth.call(null,c__18372__auto__,i__34913);
cljs.core.chunk_append.call(null,b__34914,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34913,name,c__18372__auto__,size__18373__auto__,b__34914,s__34912__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(i__34913,name,c__18372__auto__,size__18373__auto__,b__34914,s__34912__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34913,name,c__18372__auto__,size__18373__auto__,b__34914,s__34912__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(i__34913,name,c__18372__auto__,size__18373__auto__,b__34914,s__34912__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null));

var G__34915 = (i__34913 + (1));
i__34913 = G__34915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34914),iter__34911.call(null,cljs.core.chunk_rest.call(null,s__34912__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34914),null);
}
} else {
var name = cljs.core.first.call(null,s__34912__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__34912__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(name,s__34912__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__34912__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(name,s__34912__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null),iter__34911.call(null,cljs.core.rest.call(null,s__34912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18374__auto__.call(null,cljs.core.sort.call(null,((cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.store.current_name)))?cljs.core.filter.call(null,((function (iter__18374__auto__){
return (function (p1__34906_SHARP_){
return goog.string.caseInsensitiveContains(p1__34906_SHARP_,cljs.core.deref.call(null,meetapp.store.current_name));
});})(iter__18374__auto__))
,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532))):cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532)))));
})()], null)], null)], null);
})], null));
});

//# sourceMappingURL=roster.js.map