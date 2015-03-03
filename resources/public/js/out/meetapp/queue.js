// Compiled by ClojureScript 0.0-2760 {}
goog.provide('meetapp.queue');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('meetapp.timer');
goog.require('meetapp.store');
goog.require('meetapp.lib.drag_list');
meetapp.queue.next_speaker = (function next_speaker(){
meetapp.timer.reset.call(null);

if(cljs.core.boolean$.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"queue","queue",1455835879))))){
return meetapp.store.remove_from_queue.call(null,(0));
} else {
return null;
}
});
meetapp.queue.main = (function main(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.queue","div.queue",1342999594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return meetapp.queue.next_speaker.call(null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.timer.main], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.basic-list","ul.basic-list",-684973660),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data-id","data-id",1023855591),index,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),meetapp.lib.drag_list.end,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),cljs.core.partial.call(null,meetapp.lib.drag_list.over,meetapp.store.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null)),new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),meetapp.lib.drag_list.start,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,meetapp.lib.drag_list.dragging),index))?"dragging":"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.entry","div.entry",-1702818662),item], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return meetapp.store.remove_from_queue.call(null,index);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-close","i.icon-close",980811899)], null)], null)], null);
}),cljs.core.deref.call(null,meetapp.store.state).call(null,new cljs.core.Keyword(null,"queue","queue",1455835879))))], null)], null);
});
});

//# sourceMappingURL=queue.js.map