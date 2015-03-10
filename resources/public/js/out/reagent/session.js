// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__22927){
var vec__22929 = p__22927;
var default$ = cljs.core.nth.call(null,vec__22929,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__22927 = null;
if (arguments.length > 1) {
var G__22930__i = 0, G__22930__a = new Array(arguments.length -  1);
while (G__22930__i < G__22930__a.length) {G__22930__a[G__22930__i] = arguments[G__22930__i + 1]; ++G__22930__i;}
  p__22927 = new cljs.core.IndexedSeq(G__22930__a,0);
} 
return get__delegate.call(this,k,p__22927);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__22931){
var k = cljs.core.first(arglist__22931);
var p__22927 = cljs.core.rest(arglist__22931);
return get__delegate(k,p__22927);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
reagent.session.put_BANG_ = (function put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
* Gets the value at the path specified by the vector ks from the session,
* returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get_in = (function() { 
var get_in__delegate = function (ks,p__22932){
var vec__22934 = p__22932;
var default$ = cljs.core.nth.call(null,vec__22934,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__22932 = null;
if (arguments.length > 1) {
var G__22935__i = 0, G__22935__a = new Array(arguments.length -  1);
while (G__22935__i < G__22935__a.length) {G__22935__a[G__22935__i] = arguments[G__22935__i + 1]; ++G__22935__i;}
  p__22932 = new cljs.core.IndexedSeq(G__22935__a,0);
} 
return get_in__delegate.call(this,ks,p__22932);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__22936){
var ks = cljs.core.first(arglist__22936);
var p__22932 = cljs.core.rest(arglist__22936);
return get_in__delegate(ks,p__22932);
});
get_in.cljs$core$IFn$_invoke$arity$variadic = get_in__delegate;
return get_in;
})()
;
/**
* Replace the current session's value with the result of executing f with
* the current value and args.
* @param {...*} var_args
*/
reagent.session.swap_BANG_ = (function() { 
var swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__22937__i = 0, G__22937__a = new Array(arguments.length -  1);
while (G__22937__i < G__22937__a.length) {G__22937__a[G__22937__i] = arguments[G__22937__i + 1]; ++G__22937__i;}
  args = new cljs.core.IndexedSeq(G__22937__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__22938){
var f = cljs.core.first(arglist__22938);
var args = cljs.core.rest(arglist__22938);
return swap_BANG___delegate(f,args);
});
swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_BANG___delegate;
return swap_BANG_;
})()
;
/**
* Remove all data from the session and start over cleanly.
*/
reagent.session.clear_BANG_ = (function clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
* Remove a key from the session
*/
reagent.session.remove_BANG_ = (function remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
* Associates a value in the session, where ks is a
* sequence of keys and v is the new value and returns
* a new nested structure. If any levels do not exist,
* hash-maps will be created.
*/
reagent.session.assoc_in_BANG_ = (function assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22939_SHARP_){
return cljs.core.assoc_in.call(null,p1__22939_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__22940){
var vec__22942 = p__22940;
var default$ = cljs.core.nth.call(null,vec__22942,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__22940 = null;
if (arguments.length > 1) {
var G__22943__i = 0, G__22943__a = new Array(arguments.length -  1);
while (G__22943__i < G__22943__a.length) {G__22943__a[G__22943__i] = arguments[G__22943__i + 1]; ++G__22943__i;}
  p__22940 = new cljs.core.IndexedSeq(G__22943__a,0);
} 
return get_BANG___delegate.call(this,k,p__22940);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__22944){
var k = cljs.core.first(arglist__22944);
var p__22940 = cljs.core.rest(arglist__22944);
return get_BANG___delegate(k,p__22940);
});
get_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_BANG___delegate;
return get_BANG_;
})()
;
/**
* Destructive get from the session. This returns the current value of the path
* specified by the vector ks and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_in_BANG_ = (function() { 
var get_in_BANG___delegate = function (ks,p__22945){
var vec__22947 = p__22945;
var default$ = cljs.core.nth.call(null,vec__22947,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__22945 = null;
if (arguments.length > 1) {
var G__22948__i = 0, G__22948__a = new Array(arguments.length -  1);
while (G__22948__i < G__22948__a.length) {G__22948__a[G__22948__i] = arguments[G__22948__i + 1]; ++G__22948__i;}
  p__22945 = new cljs.core.IndexedSeq(G__22948__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__22945);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__22949){
var ks = cljs.core.first(arglist__22949);
var p__22945 = cljs.core.rest(arglist__22949);
return get_in_BANG___delegate(ks,p__22945);
});
get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = get_in_BANG___delegate;
return get_in_BANG_;
})()
;
/**
* 'Updates' a value in the session, where ks is a
* sequence of keys and f is a function that will
* take the old value along with any supplied args and return
* the new value. If any levels do not exist, hash-maps
* will be created.
* @param {...*} var_args
*/
reagent.session.update_in_BANG_ = (function() { 
var update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__22950_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__22950_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__22951__i = 0, G__22951__a = new Array(arguments.length -  2);
while (G__22951__i < G__22951__a.length) {G__22951__a[G__22951__i] = arguments[G__22951__i + 2]; ++G__22951__i;}
  args = new cljs.core.IndexedSeq(G__22951__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__22952){
var ks = cljs.core.first(arglist__22952);
arglist__22952 = cljs.core.next(arglist__22952);
var f = cljs.core.first(arglist__22952);
var args = cljs.core.rest(arglist__22952);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map