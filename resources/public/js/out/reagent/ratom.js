// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_23855 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_23855;
}});
reagent.ratom.captured = (function captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj23857 = {};
return obj23857;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
reagent.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__23861__delegate = function (x,p__23858){
var map__23860 = p__23858;
var map__23860__$1 = ((cljs.core.seq_QMARK_.call(null,map__23860))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);
var validator = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__23861 = function (x,var_args){
var p__23858 = null;
if (arguments.length > 1) {
var G__23862__i = 0, G__23862__a = new Array(arguments.length -  1);
while (G__23862__i < G__23862__a.length) {G__23862__a[G__23862__i] = arguments[G__23862__i + 1]; ++G__23862__i;}
  p__23858 = new cljs.core.IndexedSeq(G__23862__a,0);
} 
return G__23861__delegate.call(this,x,p__23858);};
G__23861.cljs$lang$maxFixedArity = 1;
G__23861.cljs$lang$applyTo = (function (arglist__23863){
var x = cljs.core.first(arglist__23863);
var p__23858 = cljs.core.rest(arglist__23863);
return G__23861__delegate(x,p__23858);
});
G__23861.cljs$core$IFn$_invoke$arity$variadic = G__23861__delegate;
return G__23861;
})()
;
atom = function(x,var_args){
var p__23858 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
var G__23864 = null;
if (arguments.length > 1) {
var G__23865__i = 0, G__23865__a = new Array(arguments.length -  1);
while (G__23865__i < G__23865__a.length) {G__23865__a[G__23865__i] = arguments[G__23865__i + 1]; ++G__23865__i;}
G__23864 = new cljs.core.IndexedSeq(G__23865__a,0);
}
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__23864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__23872 = self__.ratom;
if(G__23872){
var bit__18299__auto__ = (G__23872.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18299__auto__) || (G__23872.cljs$core$IDeref$)){
return true;
} else {
if((!G__23872.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__23872);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__23872);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__23867_SHARP_,p2__23866_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__23866_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__23869_SHARP_,p2__23868_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__23868_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__23871_SHARP_,p2__23870_SHARP_){
return self__.ratom.call(null,self__.path,p2__23870_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_23873 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_23873;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function __GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function cursor(src,path){
if((function (){var G__23878 = path;
if(G__23878){
var bit__18299__auto__ = (G__23878.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__18299__auto__) || (G__23878.cljs$core$IDeref$)){
return true;
} else {
if((!G__23878.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__23878);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__23878);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__23879 = path;
if(G__23879){
var bit__18299__auto__ = null;
if(cljs.core.truth_((function (){var or__17618__auto__ = bit__18299__auto__;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return G__23879.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__23879.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__23879);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__23879);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__17618__auto__ = (function (){var G__23881 = src;
if(G__23881){
var bit__18299__auto__ = null;
if(cljs.core.truth_((function (){var or__17618__auto__ = bit__18299__auto__;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return G__23881.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__23881.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__23881);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__23881);
}
})();
if(or__17618__auto__){
return or__17618__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj23883 = {};
return obj23883;
})();

reagent.ratom.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__17606__auto__ = this$;
if(and__17606__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__17606__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__18262__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17618__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj23885 = {};
return obj23885;
})();

reagent.ratom.run = (function run(this$){
if((function (){var and__17606__auto__ = this$;
if(and__17606__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__17606__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__18262__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17618__auto__ = (reagent.ratom.run[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (reagent.ratom.run["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj23887 = {};
return obj23887;
})();

reagent.ratom._update_watching = (function _update_watching(this$,derefed){
if((function (){var and__17606__auto__ = this$;
if(and__17606__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__17606__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__18262__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17618__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){
if((function (){var and__17606__auto__ = k;
if(and__17606__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__17606__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__18262__auto__ = (((k == null))?null:k);
return (function (){var or__17618__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__17606__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__17606__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__17606__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__17618__auto__ = self__.auto_run;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__23888_23900 = cljs.core.seq.call(null,derefed);
var chunk__23889_23901 = null;
var count__23890_23902 = (0);
var i__23891_23903 = (0);
while(true){
if((i__23891_23903 < count__23890_23902)){
var w_23904 = cljs.core._nth.call(null,chunk__23889_23901,i__23891_23903);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_23904)){
} else {
cljs.core.add_watch.call(null,w_23904,this$__$1,reagent.ratom._handle_change);
}

var G__23905 = seq__23888_23900;
var G__23906 = chunk__23889_23901;
var G__23907 = count__23890_23902;
var G__23908 = (i__23891_23903 + (1));
seq__23888_23900 = G__23905;
chunk__23889_23901 = G__23906;
count__23890_23902 = G__23907;
i__23891_23903 = G__23908;
continue;
} else {
var temp__4126__auto___23909 = cljs.core.seq.call(null,seq__23888_23900);
if(temp__4126__auto___23909){
var seq__23888_23910__$1 = temp__4126__auto___23909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23888_23910__$1)){
var c__18405__auto___23911 = cljs.core.chunk_first.call(null,seq__23888_23910__$1);
var G__23912 = cljs.core.chunk_rest.call(null,seq__23888_23910__$1);
var G__23913 = c__18405__auto___23911;
var G__23914 = cljs.core.count.call(null,c__18405__auto___23911);
var G__23915 = (0);
seq__23888_23900 = G__23912;
chunk__23889_23901 = G__23913;
count__23890_23902 = G__23914;
i__23891_23903 = G__23915;
continue;
} else {
var w_23916 = cljs.core.first.call(null,seq__23888_23910__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_23916)){
} else {
cljs.core.add_watch.call(null,w_23916,this$__$1,reagent.ratom._handle_change);
}

var G__23917 = cljs.core.next.call(null,seq__23888_23910__$1);
var G__23918 = null;
var G__23919 = (0);
var G__23920 = (0);
seq__23888_23900 = G__23917;
chunk__23889_23901 = G__23918;
count__23890_23902 = G__23919;
i__23891_23903 = G__23920;
continue;
}
} else {
}
}
break;
}

var seq__23892_23921 = cljs.core.seq.call(null,self__.watching);
var chunk__23893_23922 = null;
var count__23894_23923 = (0);
var i__23895_23924 = (0);
while(true){
if((i__23895_23924 < count__23894_23923)){
var w_23925 = cljs.core._nth.call(null,chunk__23893_23922,i__23895_23924);
if(cljs.core.contains_QMARK_.call(null,derefed,w_23925)){
} else {
cljs.core.remove_watch.call(null,w_23925,this$__$1);
}

var G__23926 = seq__23892_23921;
var G__23927 = chunk__23893_23922;
var G__23928 = count__23894_23923;
var G__23929 = (i__23895_23924 + (1));
seq__23892_23921 = G__23926;
chunk__23893_23922 = G__23927;
count__23894_23923 = G__23928;
i__23895_23924 = G__23929;
continue;
} else {
var temp__4126__auto___23930 = cljs.core.seq.call(null,seq__23892_23921);
if(temp__4126__auto___23930){
var seq__23892_23931__$1 = temp__4126__auto___23930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23892_23931__$1)){
var c__18405__auto___23932 = cljs.core.chunk_first.call(null,seq__23892_23931__$1);
var G__23933 = cljs.core.chunk_rest.call(null,seq__23892_23931__$1);
var G__23934 = c__18405__auto___23932;
var G__23935 = cljs.core.count.call(null,c__18405__auto___23932);
var G__23936 = (0);
seq__23892_23921 = G__23933;
chunk__23893_23922 = G__23934;
count__23894_23923 = G__23935;
i__23895_23924 = G__23936;
continue;
} else {
var w_23937 = cljs.core.first.call(null,seq__23892_23931__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_23937)){
} else {
cljs.core.remove_watch.call(null,w_23937,this$__$1);
}

var G__23938 = cljs.core.next.call(null,seq__23892_23931__$1);
var G__23939 = null;
var G__23940 = (0);
var G__23941 = (0);
seq__23892_23921 = G__23938;
chunk__23893_23922 = G__23939;
count__23894_23923 = G__23940;
i__23895_23924 = G__23941;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__23896_23942 = cljs.core.seq.call(null,self__.watching);
var chunk__23897_23943 = null;
var count__23898_23944 = (0);
var i__23899_23945 = (0);
while(true){
if((i__23899_23945 < count__23898_23944)){
var w_23946 = cljs.core._nth.call(null,chunk__23897_23943,i__23899_23945);
cljs.core.remove_watch.call(null,w_23946,this$__$1);

var G__23947 = seq__23896_23942;
var G__23948 = chunk__23897_23943;
var G__23949 = count__23898_23944;
var G__23950 = (i__23899_23945 + (1));
seq__23896_23942 = G__23947;
chunk__23897_23943 = G__23948;
count__23898_23944 = G__23949;
i__23899_23945 = G__23950;
continue;
} else {
var temp__4126__auto___23951 = cljs.core.seq.call(null,seq__23896_23942);
if(temp__4126__auto___23951){
var seq__23896_23952__$1 = temp__4126__auto___23951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23896_23952__$1)){
var c__18405__auto___23953 = cljs.core.chunk_first.call(null,seq__23896_23952__$1);
var G__23954 = cljs.core.chunk_rest.call(null,seq__23896_23952__$1);
var G__23955 = c__18405__auto___23953;
var G__23956 = cljs.core.count.call(null,c__18405__auto___23953);
var G__23957 = (0);
seq__23896_23942 = G__23954;
chunk__23897_23943 = G__23955;
count__23898_23944 = G__23956;
i__23899_23945 = G__23957;
continue;
} else {
var w_23958 = cljs.core.first.call(null,seq__23896_23952__$1);
cljs.core.remove_watch.call(null,w_23958,this$__$1);

var G__23959 = cljs.core.next.call(null,seq__23896_23952__$1);
var G__23960 = null;
var G__23961 = (0);
var G__23962 = (0);
seq__23896_23942 = G__23959;
chunk__23897_23943 = G__23960;
count__23898_23944 = G__23961;
i__23899_23945 = G__23962;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,self__.state,x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,self__.state,x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,(function (){var or__17618__auto__ = self__.auto_run;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_23963 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_23963 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_23963,self__.state);
}
} else {
}

return self__.state;
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
* @param {...*} var_args
*/
reagent.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__23964){
var map__23966 = p__23964;
var map__23966__$1 = ((cljs.core.seq_QMARK_.call(null,map__23966))?cljs.core.apply.call(null,cljs.core.hash_map,map__23966):map__23966);
var derefed = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var make_reaction = function (f,var_args){
var p__23964 = null;
if (arguments.length > 1) {
var G__23967__i = 0, G__23967__a = new Array(arguments.length -  1);
while (G__23967__i < G__23967__a.length) {G__23967__a[G__23967__i] = arguments[G__23967__i + 1]; ++G__23967__i;}
  p__23964 = new cljs.core.IndexedSeq(G__23967__a,0);
} 
return make_reaction__delegate.call(this,f,p__23964);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__23968){
var f = cljs.core.first(arglist__23968);
var p__23964 = cljs.core.rest(arglist__23968);
return make_reaction__delegate(f,p__23964);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__17606__auto__ = self__.changed;
if(cljs.core.truth_(and__17606__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__17606__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function __GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map