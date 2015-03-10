// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.store');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('alandipert.storage_atom');
goog.require('reagent.core');
if(typeof meetapp.store.state !== 'undefined'){
} else {
meetapp.store.state = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"roster","roster",-2092272532),new cljs.core.Keyword(null,"queue","queue",1455835879)],[cljs.core.sorted_set.call(null),cljs.core.PersistentVector.EMPTY])),new cljs.core.Keyword(null,"meetapp-state","meetapp-state",1477621213));
}
if(typeof meetapp.store.current_name !== 'undefined'){
} else {
meetapp.store.current_name = reagent.core.atom.call(null,"");
}
meetapp.store.add_to_roster = (function add_to_roster(name){
cljs.core.reset_BANG_.call(null,meetapp.store.current_name,null);

return cljs.core.swap_BANG_.call(null,meetapp.store.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roster","roster",-2092272532)], null),(function (p1__17742_SHARP_){
return cljs.core.conj.call(null,p1__17742_SHARP_,name);
}));
});
meetapp.store.remove_from_roster = (function remove_from_roster(name){
return cljs.core.swap_BANG_.call(null,meetapp.store.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"roster","roster",-2092272532)], null),(function (p1__17743_SHARP_){
return cljs.core.disj.call(null,p1__17743_SHARP_,name);
}));
});
meetapp.store.add_to_queue = (function add_to_queue(name){
return cljs.core.swap_BANG_.call(null,meetapp.store.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),(function (p1__17744_SHARP_){
return cljs.core.conj.call(null,p1__17744_SHARP_,name);
}));
});
meetapp.store.remove_from_queue = (function remove_from_queue(index){
if(cljs.core.boolean$.call(null,index)){
return cljs.core.swap_BANG_.call(null,meetapp.store.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.partial.call(null,meetapp.lib.collections.without,index));
} else {
return null;
}
});

//# sourceMappingURL=store.js.map