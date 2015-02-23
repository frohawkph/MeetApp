// Compiled by ClojureScript 0.0-2760 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Get the key's value from the session, returns nil if it doesn't exist.
* @param {...*} var_args
*/
reagent.session.get = (function() { 
var get__delegate = function (k,p__9394){
var vec__9396 = p__9394;
var default$ = cljs.core.nth.call(null,vec__9396,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var get = function (k,var_args){
var p__9394 = null;
if (arguments.length > 1) {
var G__9397__i = 0, G__9397__a = new Array(arguments.length -  1);
while (G__9397__i < G__9397__a.length) {G__9397__a[G__9397__i] = arguments[G__9397__i + 1]; ++G__9397__i;}
  p__9394 = new cljs.core.IndexedSeq(G__9397__a,0);
} 
return get__delegate.call(this,k,p__9394);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__9398){
var k = cljs.core.first(arglist__9398);
var p__9394 = cljs.core.rest(arglist__9398);
return get__delegate(k,p__9394);
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
var get_in__delegate = function (ks,p__9399){
var vec__9401 = p__9399;
var default$ = cljs.core.nth.call(null,vec__9401,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var get_in = function (ks,var_args){
var p__9399 = null;
if (arguments.length > 1) {
var G__9402__i = 0, G__9402__a = new Array(arguments.length -  1);
while (G__9402__i < G__9402__a.length) {G__9402__a[G__9402__i] = arguments[G__9402__i + 1]; ++G__9402__i;}
  p__9399 = new cljs.core.IndexedSeq(G__9402__a,0);
} 
return get_in__delegate.call(this,ks,p__9399);};
get_in.cljs$lang$maxFixedArity = 1;
get_in.cljs$lang$applyTo = (function (arglist__9403){
var ks = cljs.core.first(arglist__9403);
var p__9399 = cljs.core.rest(arglist__9403);
return get_in__delegate(ks,p__9399);
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
var G__9404__i = 0, G__9404__a = new Array(arguments.length -  1);
while (G__9404__i < G__9404__a.length) {G__9404__a[G__9404__i] = arguments[G__9404__i + 1]; ++G__9404__i;}
  args = new cljs.core.IndexedSeq(G__9404__a,0);
} 
return swap_BANG___delegate.call(this,f,args);};
swap_BANG_.cljs$lang$maxFixedArity = 1;
swap_BANG_.cljs$lang$applyTo = (function (arglist__9405){
var f = cljs.core.first(arglist__9405);
var args = cljs.core.rest(arglist__9405);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__9406_SHARP_){
return cljs.core.assoc_in.call(null,p1__9406_SHARP_,ks,v);
}));
});
/**
* Destructive get from the session. This returns the current value of the key
* and then removes it from the session.
* @param {...*} var_args
*/
reagent.session.get_BANG_ = (function() { 
var get_BANG___delegate = function (k,p__9407){
var vec__9409 = p__9407;
var default$ = cljs.core.nth.call(null,vec__9409,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var get_BANG_ = function (k,var_args){
var p__9407 = null;
if (arguments.length > 1) {
var G__9410__i = 0, G__9410__a = new Array(arguments.length -  1);
while (G__9410__i < G__9410__a.length) {G__9410__a[G__9410__i] = arguments[G__9410__i + 1]; ++G__9410__i;}
  p__9407 = new cljs.core.IndexedSeq(G__9410__a,0);
} 
return get_BANG___delegate.call(this,k,p__9407);};
get_BANG_.cljs$lang$maxFixedArity = 1;
get_BANG_.cljs$lang$applyTo = (function (arglist__9411){
var k = cljs.core.first(arglist__9411);
var p__9407 = cljs.core.rest(arglist__9411);
return get_BANG___delegate(k,p__9407);
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
var get_in_BANG___delegate = function (ks,p__9412){
var vec__9414 = p__9412;
var default$ = cljs.core.nth.call(null,vec__9414,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var get_in_BANG_ = function (ks,var_args){
var p__9412 = null;
if (arguments.length > 1) {
var G__9415__i = 0, G__9415__a = new Array(arguments.length -  1);
while (G__9415__i < G__9415__a.length) {G__9415__a[G__9415__i] = arguments[G__9415__i + 1]; ++G__9415__i;}
  p__9412 = new cljs.core.IndexedSeq(G__9415__a,0);
} 
return get_in_BANG___delegate.call(this,ks,p__9412);};
get_in_BANG_.cljs$lang$maxFixedArity = 1;
get_in_BANG_.cljs$lang$applyTo = (function (arglist__9416){
var ks = cljs.core.first(arglist__9416);
var p__9412 = cljs.core.rest(arglist__9416);
return get_in_BANG___delegate(ks,p__9412);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__9417_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__9417_SHARP_,ks,f),args);
}));
};
var update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__9418__i = 0, G__9418__a = new Array(arguments.length -  2);
while (G__9418__i < G__9418__a.length) {G__9418__a[G__9418__i] = arguments[G__9418__i + 2]; ++G__9418__i;}
  args = new cljs.core.IndexedSeq(G__9418__a,0);
} 
return update_in_BANG___delegate.call(this,ks,f,args);};
update_in_BANG_.cljs$lang$maxFixedArity = 2;
update_in_BANG_.cljs$lang$applyTo = (function (arglist__9419){
var ks = cljs.core.first(arglist__9419);
arglist__9419 = cljs.core.next(arglist__9419);
var f = cljs.core.first(arglist__9419);
var args = cljs.core.rest(arglist__9419);
return update_in_BANG___delegate(ks,f,args);
});
update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_in_BANG___delegate;
return update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map