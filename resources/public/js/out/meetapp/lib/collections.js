// Compiled by ClojureScript 0.0-2760 {}
goog.provide('meetapp.lib.collections');
goog.require('cljs.core');
meetapp.lib.collections.without = (function without(n,coll){
var v = cljs.core.vec.call(null,coll);
return cljs.core.into.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1))));
});
meetapp.lib.collections.insert = (function insert(coll,n,value){
var v = cljs.core.vec.call(null,coll);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),cljs.core.subvec.call(null,v,n)));
});
meetapp.lib.collections.reposition = (function reposition(coll,from,to){
var v = cljs.core.vec.call(null,coll);
return meetapp.lib.collections.insert.call(null,meetapp.lib.collections.without.call(null,from,v),to,v.call(null,from));
});

//# sourceMappingURL=collections.js.map