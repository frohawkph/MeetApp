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

var G__25632 = event.key;
switch (G__25632) {
case "Enter":
return meetapp.roster.enter_handler.call(null);

break;
default:
return "default";

}
});
meetapp.roster.main = (function main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roster","div.roster",542391514),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-section","div.search-section",318831423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.reset_BANG_.call(null,meetapp.roster.collapse_open_QMARK_,true);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),meetapp.roster.blur_handler,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meetapp.store.current_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search or Add",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),meetapp.roster.keyhandler,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25634_SHARP_){
return cljs.core.reset_BANG_.call(null,meetapp.store.current_name,meetapp.roster.get_event_value.call(null,p1__25634_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,meetapp.store.current_name)) > (0))){
return meetapp.store.add_to_roster.call(null,cljs.core.deref.call(null,meetapp.store.current_name));
} else {
return console.log("Error: name is blank");
}
})], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (p1__25635_SHARP_){
return p1__25635_SHARP_.preventDefault();
})], null),(function (){var iter__18083__auto__ = (function iter__25641(s__25642){
return (new cljs.core.LazySeq(null,(function (){
var s__25642__$1 = s__25642;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25642__$1);
if(temp__4126__auto__){
var s__25642__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25642__$2)){
var c__18081__auto__ = cljs.core.chunk_first.call(null,s__25642__$2);
var size__18082__auto__ = cljs.core.count.call(null,c__18081__auto__);
var b__25644 = cljs.core.chunk_buffer.call(null,size__18082__auto__);
if((function (){var i__25643 = (0);
while(true){
if((i__25643 < size__18082__auto__)){
var name = cljs.core._nth.call(null,c__18081__auto__,i__25643);
cljs.core.chunk_append.call(null,b__25644,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25643,name,c__18081__auto__,size__18082__auto__,b__25644,s__25642__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(i__25643,name,c__18081__auto__,size__18082__auto__,b__25644,s__25642__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25643,name,c__18081__auto__,size__18082__auto__,b__25644,s__25642__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(i__25643,name,c__18081__auto__,size__18082__auto__,b__25644,s__25642__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null));

var G__25645 = (i__25643 + (1));
i__25643 = G__25645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25644),iter__25641.call(null,cljs.core.chunk_rest.call(null,s__25642__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25644),null);
}
} else {
var name = cljs.core.first.call(null,s__25642__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#/",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__25642__$2,temp__4126__auto__){
return (function (){
return meetapp.store.add_to_queue.call(null,name);
});})(name,s__25642__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__25642__$2,temp__4126__auto__){
return (function (){
return meetapp.store.remove_from_roster.call(null,name);
});})(name,s__25642__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null),iter__25641.call(null,cljs.core.rest.call(null,s__25642__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18083__auto__.call(null,cljs.core.sort.call(null,((cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.store.current_name)))?cljs.core.filter.call(null,((function (iter__18083__auto__){
return (function (p1__25636_SHARP_){
return goog.string.caseInsensitiveContains(p1__25636_SHARP_,cljs.core.deref.call(null,meetapp.store.current_name));
});})(iter__18083__auto__))
,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532))):cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"roster","roster",-2092272532)))));
})()], null)], null);
});

//# sourceMappingURL=roster.js.map