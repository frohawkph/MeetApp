// Compiled by ClojureScript 0.0-2760 {}
goog.provide('meetapp.core');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('alandipert.storage_atom');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.string.format');
if(typeof meetapp.core.roster !== 'undefined'){
} else {
meetapp.core.roster = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.set.call(null,null)),new cljs.core.Keyword(null,"roster","roster",-2092272532));
}
if(typeof meetapp.core.queue !== 'undefined'){
} else {
meetapp.core.queue = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"queue","queue",1455835879));
}
if(typeof meetapp.core.current_name !== 'undefined'){
} else {
meetapp.core.current_name = reagent.core.atom.call(null,"");
}
if(typeof meetapp.core.current_speaker !== 'undefined'){
} else {
meetapp.core.current_speaker = reagent.core.atom.call(null,"");
}
if(typeof meetapp.core.initial_time !== 'undefined'){
} else {
meetapp.core.initial_time = reagent.core.atom.call(null,Date.now());
}
if(typeof meetapp.core.delta_time !== 'undefined'){
} else {
meetapp.core.delta_time = reagent.core.atom.call(null,(new Date((0))));
}
if(typeof meetapp.core.time_color !== 'undefined'){
} else {
meetapp.core.time_color = reagent.core.atom.call(null,"#f34");
}
if(typeof meetapp.core.dragging !== 'undefined'){
} else {
meetapp.core.dragging = reagent.core.atom.call(null,null);
}
meetapp.core.reset_timer = (function reset_timer(){
cljs.core.reset_BANG_.call(null,meetapp.core.initial_time,Date.now());

if(cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.core.current_speaker))){
setInterval((function (){
return cljs.core.reset_BANG_.call(null,meetapp.core.delta_time,(new Date((Date.now() - cljs.core.deref.call(null,meetapp.core.initial_time)))));
}),(1000));
} else {
}

return cljs.core.reset_BANG_.call(null,meetapp.core.delta_time,(new Date((0))));
});
meetapp.core.clock = (function clock(){
var time_str = clojure.string.join.call(null,":",cljs.core.map.call(null,(function (p1__23533_SHARP_){
return goog.string.format("%02d",p1__23533_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,meetapp.core.delta_time).getMinutes(),cljs.core.deref.call(null,meetapp.core.delta_time).getSeconds()], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,meetapp.core.time_color)], null)], null),time_str], null);
});
meetapp.core.get_event_value = (function get_event_value(event){
return event.target.value;
});
meetapp.core.add_to_roster = (function add_to_roster(name){
cljs.core.reset_BANG_.call(null,meetapp.core.current_name,null);

return cljs.core.swap_BANG_.call(null,meetapp.core.roster,cljs.core.conj,name);
});
meetapp.core.remove_from_roster = (function remove_from_roster(name){
return cljs.core.swap_BANG_.call(null,meetapp.core.roster,cljs.core.disj,name);
});
meetapp.core.remove_from_queue = (function remove_from_queue(index){
return cljs.core.swap_BANG_.call(null,meetapp.core.queue,cljs.core.partial.call(null,meetapp.lib.collections.without,index));
});
meetapp.core.add_to_queue = (function add_to_queue(name){
return cljs.core.swap_BANG_.call(null,meetapp.core.queue,cljs.core.conj,name);
});
meetapp.core.next_speaker = (function next_speaker(){
meetapp.core.reset_timer.call(null);

cljs.core.reset_BANG_.call(null,meetapp.core.current_speaker,cljs.core.first.call(null,cljs.core.deref.call(null,meetapp.core.queue)));

return cljs.core.swap_BANG_.call(null,meetapp.core.queue,cljs.core.subvec,(1));
});
meetapp.core.drag_start_handler = (function drag_start_handler(event){
cljs.core.reset_BANG_.call(null,meetapp.core.dragging,Number(event.currentTarget.dataset.id));

event.dataTransfer.effectAllowed = "move";

return event.dataTransfer.setData("text/html",event.currentTarget);
});
meetapp.core.drag_end_handler = (function drag_end_handler(index,event){
return cljs.core.reset_BANG_.call(null,meetapp.core.dragging,null);
});
meetapp.core.drag_over_handler = (function drag_over_handler(event){
event.preventDefault();

var from = cljs.core.deref.call(null,meetapp.core.dragging);
var to = Number(event.currentTarget.dataset.id);
cljs.core.swap_BANG_.call(null,meetapp.core.queue,((function (from,to){
return (function (p1__23534_SHARP_){
return meetapp.lib.collections.reposition.call(null,p1__23534_SHARP_,from,to);
});})(from,to))
);

return cljs.core.reset_BANG_.call(null,meetapp.core.dragging,to);
});
meetapp.core.dragging_QMARK_ = (function dragging_QMARK_(index){
return cljs.core._EQ_.call(null,index,cljs.core.deref.call(null,meetapp.core.dragging));
});
meetapp.core.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://torchapps.github.io/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-torch","i.icon-torch",-993760056)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"MeetApp"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.roster","div.roster",542391514),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.search-section","div.search-section",318831423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,meetapp.core.current_name),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search or Add",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__23535_SHARP_){
return cljs.core.reset_BANG_.call(null,meetapp.core.current_name,meetapp.core.get_event_value.call(null,p1__23535_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((cljs.core.count.call(null,cljs.core.deref.call(null,meetapp.core.current_name)) > (0))){
return meetapp.core.add_to_roster.call(null,cljs.core.deref.call(null,meetapp.core.current_name));
} else {
return console.log("Error: name is blank");
}
})], null),"Add"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),(function (){var iter__18083__auto__ = (function iter__23541(s__23542){
return (new cljs.core.LazySeq(null,(function (){
var s__23542__$1 = s__23542;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23542__$1);
if(temp__4126__auto__){
var s__23542__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23542__$2)){
var c__18081__auto__ = cljs.core.chunk_first.call(null,s__23542__$2);
var size__18082__auto__ = cljs.core.count.call(null,c__18081__auto__);
var b__23544 = cljs.core.chunk_buffer.call(null,size__18082__auto__);
if((function (){var i__23543 = (0);
while(true){
if((i__23543 < size__18082__auto__)){
var name = cljs.core._nth.call(null,c__18081__auto__,i__23543);
cljs.core.chunk_append.call(null,b__23544,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23543,name,c__18081__auto__,size__18082__auto__,b__23544,s__23542__$2,temp__4126__auto__){
return (function (){
return meetapp.core.add_to_queue.call(null,name);
});})(i__23543,name,c__18081__auto__,size__18082__auto__,b__23544,s__23542__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__23543,name,c__18081__auto__,size__18082__auto__,b__23544,s__23542__$2,temp__4126__auto__){
return (function (){
return meetapp.core.remove_from_roster.call(null,name);
});})(i__23543,name,c__18081__auto__,size__18082__auto__,b__23544,s__23542__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null));

var G__23545 = (i__23543 + (1));
i__23543 = G__23545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23544),iter__23541.call(null,cljs.core.chunk_rest.call(null,s__23542__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23544),null);
}
} else {
var name = cljs.core.first.call(null,s__23542__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.entry","a.entry",-1521680861),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__23542__$2,temp__4126__auto__){
return (function (){
return meetapp.core.add_to_queue.call(null,name);
});})(name,s__23542__$2,temp__4126__auto__))
], null),name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (name,s__23542__$2,temp__4126__auto__){
return (function (){
return meetapp.core.remove_from_roster.call(null,name);
});})(name,s__23542__$2,temp__4126__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null),iter__23541.call(null,cljs.core.rest.call(null,s__23542__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18083__auto__.call(null,cljs.core.sort.call(null,((cljs.core.boolean$.call(null,cljs.core.deref.call(null,meetapp.core.current_name)))?cljs.core.filter.call(null,((function (iter__18083__auto__){
return (function (p1__23536_SHARP_){
return goog.string.caseInsensitiveContains(p1__23536_SHARP_,cljs.core.deref.call(null,meetapp.core.current_name));
});})(iter__18083__auto__))
,cljs.core.deref.call(null,meetapp.core.roster)):cljs.core.deref.call(null,meetapp.core.roster))));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.queue","div.queue",1342999594),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return meetapp.core.next_speaker.call(null);
})], null),meetapp.core.clock.call(null),cljs.core.deref.call(null,meetapp.core.current_speaker)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data-id","data-id",1023855591),index,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),cljs.core.partial.call(null,meetapp.core.drag_end_handler,index),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),meetapp.core.drag_over_handler,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),meetapp.core.drag_start_handler,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,meetapp.core.dragging),index))?"dragging":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry","div.entry",-1702818662),item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return meetapp.core.remove_from_queue.call(null,index);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null);
}),cljs.core.deref.call(null,meetapp.core.queue)))], null)], null)], null)], null);
});
meetapp.core.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About meetapp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
meetapp.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__19322__auto___23548 = (function (params__19323__auto__){
if(cljs.core.map_QMARK_.call(null,params__19323__auto__)){
var map__23546 = params__19323__auto__;
var map__23546__$1 = ((cljs.core.seq_QMARK_.call(null,map__23546))?cljs.core.apply.call(null,cljs.core.hash_map,map__23546):map__23546);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.home_page;},new cljs.core.Symbol("meetapp.core","home-page","meetapp.core/home-page",-493532420,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.home_page)?meetapp.core.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19323__auto__)){
var vec__23547 = params__19323__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.home_page;},new cljs.core.Symbol("meetapp.core","home-page","meetapp.core/home-page",-493532420,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.home_page)?meetapp.core.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),78,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19322__auto___23548);

var action__19322__auto___23551 = (function (params__19323__auto__){
if(cljs.core.map_QMARK_.call(null,params__19323__auto__)){
var map__23549 = params__19323__auto__;
var map__23549__$1 = ((cljs.core.seq_QMARK_.call(null,map__23549))?cljs.core.apply.call(null,cljs.core.hash_map,map__23549):map__23549);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.about_page;},new cljs.core.Symbol("meetapp.core","about-page","meetapp.core/about-page",-1772091460,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.about_page)?meetapp.core.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),127,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19323__auto__)){
var vec__23550 = params__19323__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.about_page;},new cljs.core.Symbol("meetapp.core","about-page","meetapp.core/about-page",-1772091460,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.about_page)?meetapp.core.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),127,new cljs.core.Keyword(null,"file","file",-1269645878),"src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19322__auto___23551);

meetapp.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__23553 = (new goog.History());
goog.events.listen(G__23553,goog.history.EventType.NAVIGATE,((function (G__23553){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23553))
);

G__23553.setEnabled(true);

return G__23553;
});
meetapp.core.init_BANG_ = (function init_BANG_(){
meetapp.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map