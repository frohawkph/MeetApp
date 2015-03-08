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
var get__delegate = function (k,p__23700){
var vec__23702 = p__23700;
var default$ = cljs.core.nth.call(null,vec__23702,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__23700 = null;
if (arguments.length > 1) {
var G__23703__i = 0, G__23703__a = new Array(arguments.length -  1);
while (G__23703__i < G__23703__a.length) {G__23703__a[G__23703__i] = arguments[G__23703__i + 1]; ++G__23703__i;}
  p__23700 = new cljs.core.IndexedSeq(G__23703__a,0);
} 
return get__delegate.call(this,k,p__23700);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23704){
var k = cljs.core.first(arglist__23704);
var p__23700 = cljs.core.rest(arglist__23704);
return get__delegate(k,p__23700);
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
var get_in__delegate = function (ks,p__23705){
var vec__23707 = p__23705;
var default$ = cljs.core.nth.call(null,vec__23707,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__23705 = null;
if (arguments.length > 1) {
var G__23708__i = 0, G__23708__a = new Array(arguments.length -  1);
while (G__23708__i < G__23708__a.length) {G__23708__a[G__23708__i] = arguments[G__23708__i + 1]; ++G__23708__i;}
  p__23705 = new cljs.core.IndexedSeq(G__23708__a,0);
} 
return get_in__delegate.call(this,ks,p__23705);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__23709){
var ks = cljs.core.first(arglist__23709);
var p__23705 = cljs.core.rest(arglist__23709);
return get_in__delegate(ks,p__23705);
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
var G__23710__i = 0, G__23710__a = new Array(arguments.length -  1);
while (G__23710__i < G__23710__a.length) {G__23710__a[G__23710__i] = arguments[G__23710__i + 1]; ++G__23710__i;}
  args = new cljs.core.IndexedSeq(G__23710__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__23711){
var f = cljs.core.first(arglist__23711);
var args = cljs.core.rest(arglist__23711);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23712_SHARP_){
return cljs.core.assoc_in.call(null,p1__23712_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__23713){
var vec__23715 = p__23713;
var default$ = cljs.core.nth.call(null,vec__23715,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__23713 = null;
if (arguments.length > 1) {
var G__23716__i = 0, G__23716__a = new Array(arguments.length -  1);
while (G__23716__i < G__23716__a.length) {G__23716__a[G__23716__i] = arguments[G__23716__i + 1]; ++G__23716__i;}
  p__23713 = new cljs.core.IndexedSeq(G__23716__a,0);
} 
return get_BANG___delegate.call(this,k,p__23713);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__23717){
var k = cljs.core.first(arglist__23717);
var p__23713 = cljs.core.rest(arglist__23717);
return get_BANG___delegate(k,p__23713);
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
var get_in_BANG___delegate = function (ks,p__23718){
var vec__23720 = p__23718;
var default$ = cljs.core.nth.call(null,vec__23720,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__23718 = null;
if (arguments.length > 1) {
var G__23721__i = 0, G__23721__a = new Array(arguments.length -  1);
while (G__23721__i < G__23721__a.length) {G__23721__a[G__23721__i] = arguments[G__23721__i + 1]; ++G__23721__i;}
  p__23718 = new cljs.core.IndexedSeq(G__23721__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__23718);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__23722){
var ks = cljs.core.first(arglist__23722);
var p__23718 = cljs.core.rest(arglist__23722);
return get_in_BANG___delegate(ks,p__23718);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__23723_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__23723_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23724__i = 0, G__23724__a = new Array(arguments.length -  2);
while (G__23724__i < G__23724__a.length) {G__23724__a[G__23724__i] = arguments[G__23724__i + 2]; ++G__23724__i;}
  args = new cljs.core.IndexedSeq(G__23724__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__23725){
var ks = cljs.core.first(arglist__23725);
arglist__23725 = cljs.core.next(arglist__23725);
var f = cljs.core.first(arglist__23725);
var args = cljs.core.rest(arglist__23725);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map