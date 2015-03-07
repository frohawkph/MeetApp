// Compiled by ClojureScript 0.0-2760 {}
goog.provide('meetapp.roster');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('meetapp.lib.collapse');
goog.require('meetapp.store');
goog.require('reagent.core');
if(typeof meetapp.roster.collapse_open_QMARK_ !== 'undefined'){
} else {
meetapp.roster.collapse_open_QMARK_ = reagent.core.atom.call(null,false);
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

var G__27000 = event.key;
switch (G__27000) {
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
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),meetapp.roster.blur_handler,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meetapp.store.current_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search or Add",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),meetapp.roster.keyhandler,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27002_SHARP_){
return cljs.core.reset_BANG_.call(null,meetapp.store.current_name,meetapp.roster.get_event_value.call(null,p1__27002_SHARP_));
})], null)], null);
})], null));
});
meetapp.roster.main = (function main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roster","div.roster",542391514),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-section","div.search-section",318831423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.roster.roster_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__27003_SHARP_){
return p1__27003_SHARP_.preventDefault();
})], null),(function (){var iter__18083__auto__ = (function iter__27009(s__27010){
return (new cljs.core.LazySeq(null,(function (){
var s__27010__$1 = s__27010;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27010__$1);
if(temp__4126__auto__){
var s__27010__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27010__$2)){
var c__18081__auto__ = cljs.core.chunk_first.call(null,s__27010__$2);
var size__18082__auto__ = cljs.core.count.call(null,c__18081__auto__);
var b__27012 = cljs.core.chunk_buffer.call(null,size__18082__auto__);
if((function (){var i__27011 = (0);
while(true){
if((i__27011 < size__18082__auto__)){
var name = cljs.core._nth.call(null,c__18081__auto__,i__27011);
cljs.core.chunk_append.call(null,b__27012,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27011,name,c__18081__auto__,size__18082__auto__,b__27012,s__27010__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(i__27011,name,c__18081__auto__,size__18082__auto__,b__27012,s__27010__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27011,name,c__18081__auto__,size__18082__auto__,b__27012,s__27010__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(i__27011,name,c__18081__auto__,size__18082__auto__,b__27012,s__27010__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null));

var G__27013 = (i__27011 + (1));
i__27011 = G__27013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27012),iter__27009.call(null,cljs.core.chunk_rest.call(null,s__27010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27012),null);
}
} else {
var name = cljs.core.first.call(null,s__27010__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__27010__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(name,s__27010__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__27010__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(name,s__27010__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null),iter__27009.call(null,cljs.core.rest.call(null,s__27010__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18083__auto__.call(null,cljs.core.sort.call(null,((cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.store.current_name)))?cljs.core.filter.call(null,((function (iter__18083__auto__){
return (function (p1__27004_SHARP_){
return goog.string.caseInsensitiveContains(p1__27004_SHARP_,cljs.core.deref.call(null,meetapp.store.current_name));
});})(iter__18083__auto__))
,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532))):cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532)))));
})()], null)], null);
});

//# sourceMappingURL=roster.js.map