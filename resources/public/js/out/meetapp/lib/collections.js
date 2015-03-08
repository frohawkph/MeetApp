// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.lib.collections');
goog.require('cljs.core');
meetapp.lib.collections.without = (function without(n,vctr){
return cljs.core.into.call(null,cljs.core.subvec.call(null,vctr,(0),n),cljs.core.subvec.call(null,vctr,(n + (1))));
});
meetapp.lib.collections.insert = (function insert(vctr,n,value){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,vctr,(0),n),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),cljs.core.subvec.call(null,vctr,n)));
});
meetapp.lib.collections.reposition = (function reposition(vctr,from,to){
return meetapp.lib.collections.insert.call(null,meetapp.lib.collections.without.call(null,from,vctr),to,vctr.call(null,from));
});

//# sourceMappingURL=collections.js.map