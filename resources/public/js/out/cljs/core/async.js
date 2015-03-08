// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t30729 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30729 = (function (f,fn_handler,meta30730){
this.f = f;
this.fn_handler = fn_handler;
this.meta30730 = meta30730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t30729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t30729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30731){
var self__ = this;
var _30731__$1 = this;
return self__.meta30730;
});

cljs.core.async.t30729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30731,meta30730__$1){
var self__ = this;
var _30731__$1 = this;
return (new cljs.core.async.t30729(self__.f,self__.fn_handler,meta30730__$1));
});

cljs.core.async.t30729.cljs$lang$type = true;

cljs.core.async.t30729.cljs$lang$ctorStr = "cljs.core.async/t30729";

cljs.core.async.t30729.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t30729");
});

cljs.core.async.__GT_t30729 = (function __GT_t30729(f__$1,fn_handler__$1,meta30730){
return (new cljs.core.async.t30729(f__$1,fn_handler__$1,meta30730));
});

}

return (new cljs.core.async.t30729(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__30733 = buff;
if(G__30733){
var bit__18299__auto__ = null;
if(cljs.core.truth_((function (){var or__17618__auto__ = bit__18299__auto__;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return G__30733.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__30733.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30733);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30733);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30734 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30734);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30734,ret){
return (function (){
return fn1.call(null,val_30734);
});})(val_30734,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__18505__auto___30735 = n;
var x_30736 = (0);
while(true){
if((x_30736 < n__18505__auto___30735)){
(a[x_30736] = (0));

var G__30737 = (x_30736 + (1));
x_30736 = G__30737;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30738 = (i + (1));
i = G__30738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t30742 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30742 = (function (flag,alt_flag,meta30743){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30743 = meta30743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30742.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t30742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t30742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30744){
var self__ = this;
var _30744__$1 = this;
return self__.meta30743;
});})(flag))
;

cljs.core.async.t30742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30744,meta30743__$1){
var self__ = this;
var _30744__$1 = this;
return (new cljs.core.async.t30742(self__.flag,self__.alt_flag,meta30743__$1));
});})(flag))
;

cljs.core.async.t30742.cljs$lang$type = true;

cljs.core.async.t30742.cljs$lang$ctorStr = "cljs.core.async/t30742";

cljs.core.async.t30742.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t30742");
});})(flag))
;

cljs.core.async.__GT_t30742 = ((function (flag){
return (function __GT_t30742(flag__$1,alt_flag__$1,meta30743){
return (new cljs.core.async.t30742(flag__$1,alt_flag__$1,meta30743));
});})(flag))
;

}

return (new cljs.core.async.t30742(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t30748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30748 = (function (cb,flag,alt_handler,meta30749){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30749 = meta30749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30748.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t30748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t30748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30750){
var self__ = this;
var _30750__$1 = this;
return self__.meta30749;
});

cljs.core.async.t30748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30750,meta30749__$1){
var self__ = this;
var _30750__$1 = this;
return (new cljs.core.async.t30748(self__.cb,self__.flag,self__.alt_handler,meta30749__$1));
});

cljs.core.async.t30748.cljs$lang$type = true;

cljs.core.async.t30748.cljs$lang$ctorStr = "cljs.core.async/t30748";

cljs.core.async.t30748.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t30748");
});

cljs.core.async.__GT_t30748 = (function __GT_t30748(cb__$1,flag__$1,alt_handler__$1,meta30749){
return (new cljs.core.async.t30748(cb__$1,flag__$1,alt_handler__$1,meta30749));
});

}

return (new cljs.core.async.t30748(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30751_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30752_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17618__auto__ = wport;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30753 = (i + (1));
i = G__30753;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17618__auto__ = ret;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17606__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17606__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17606__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__30754){
var map__30756 = p__30754;
var map__30756__$1 = ((cljs.core.seq_QMARK_.call(null,map__30756))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);
var opts = map__30756__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__30754 = null;
if (arguments.length > 1) {
var G__30757__i = 0, G__30757__a = new Array(arguments.length -  1);
while (G__30757__i < G__30757__a.length) {G__30757__a[G__30757__i] = arguments[G__30757__i + 1]; ++G__30757__i;}
  p__30754 = new cljs.core.IndexedSeq(G__30757__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__30754);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30758){
var ports = cljs.core.first(arglist__30758);
var p__30754 = cljs.core.rest(arglist__30758);
return alts_BANG___delegate(ports,p__30754);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__20719__auto___30853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___30853){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___30853){
return (function (state_30829){
var state_val_30830 = (state_30829[(1)]);
if((state_val_30830 === (7))){
var inst_30825 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30831_30854 = state_30829__$1;
(statearr_30831_30854[(2)] = inst_30825);

(statearr_30831_30854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (1))){
var state_30829__$1 = state_30829;
var statearr_30832_30855 = state_30829__$1;
(statearr_30832_30855[(2)] = null);

(statearr_30832_30855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (4))){
var inst_30808 = (state_30829[(7)]);
var inst_30808__$1 = (state_30829[(2)]);
var inst_30809 = (inst_30808__$1 == null);
var state_30829__$1 = (function (){var statearr_30833 = state_30829;
(statearr_30833[(7)] = inst_30808__$1);

return statearr_30833;
})();
if(cljs.core.truth_(inst_30809)){
var statearr_30834_30856 = state_30829__$1;
(statearr_30834_30856[(1)] = (5));

} else {
var statearr_30835_30857 = state_30829__$1;
(statearr_30835_30857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (13))){
var state_30829__$1 = state_30829;
var statearr_30836_30858 = state_30829__$1;
(statearr_30836_30858[(2)] = null);

(statearr_30836_30858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (6))){
var inst_30808 = (state_30829[(7)]);
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30829__$1,(11),to,inst_30808);
} else {
if((state_val_30830 === (3))){
var inst_30827 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30829__$1,inst_30827);
} else {
if((state_val_30830 === (12))){
var state_30829__$1 = state_30829;
var statearr_30837_30859 = state_30829__$1;
(statearr_30837_30859[(2)] = null);

(statearr_30837_30859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (2))){
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30829__$1,(4),from);
} else {
if((state_val_30830 === (11))){
var inst_30818 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
if(cljs.core.truth_(inst_30818)){
var statearr_30838_30860 = state_30829__$1;
(statearr_30838_30860[(1)] = (12));

} else {
var statearr_30839_30861 = state_30829__$1;
(statearr_30839_30861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (9))){
var state_30829__$1 = state_30829;
var statearr_30840_30862 = state_30829__$1;
(statearr_30840_30862[(2)] = null);

(statearr_30840_30862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (5))){
var state_30829__$1 = state_30829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30841_30863 = state_30829__$1;
(statearr_30841_30863[(1)] = (8));

} else {
var statearr_30842_30864 = state_30829__$1;
(statearr_30842_30864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (14))){
var inst_30823 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30843_30865 = state_30829__$1;
(statearr_30843_30865[(2)] = inst_30823);

(statearr_30843_30865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (10))){
var inst_30815 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30844_30866 = state_30829__$1;
(statearr_30844_30866[(2)] = inst_30815);

(statearr_30844_30866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (8))){
var inst_30812 = cljs.core.async.close_BANG_.call(null,to);
var state_30829__$1 = state_30829;
var statearr_30845_30867 = state_30829__$1;
(statearr_30845_30867[(2)] = inst_30812);

(statearr_30845_30867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___30853))
;
return ((function (switch__20663__auto__,c__20719__auto___30853){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_30849 = [null,null,null,null,null,null,null,null];
(statearr_30849[(0)] = state_machine__20664__auto__);

(statearr_30849[(1)] = (1));

return statearr_30849;
});
var state_machine__20664__auto____1 = (function (state_30829){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_30829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e30850){if((e30850 instanceof Object)){
var ex__20667__auto__ = e30850;
var statearr_30851_30868 = state_30829;
(statearr_30851_30868[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30869 = state_30829;
state_30829 = G__30869;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_30829){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_30829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___30853))
})();
var state__20721__auto__ = (function (){var statearr_30852 = f__20720__auto__.call(null);
(statearr_30852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___30853);

return statearr_30852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___30853))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31053){
var vec__31054 = p__31053;
var v = cljs.core.nth.call(null,vec__31054,(0),null);
var p = cljs.core.nth.call(null,vec__31054,(1),null);
var job = vec__31054;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20719__auto___31236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results){
return (function (state_31059){
var state_val_31060 = (state_31059[(1)]);
if((state_val_31060 === (2))){
var inst_31056 = (state_31059[(2)]);
var inst_31057 = cljs.core.async.close_BANG_.call(null,res);
var state_31059__$1 = (function (){var statearr_31061 = state_31059;
(statearr_31061[(7)] = inst_31056);

return statearr_31061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31059__$1,inst_31057);
} else {
if((state_val_31060 === (1))){
var state_31059__$1 = state_31059;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31059__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results))
;
return ((function (switch__20663__auto__,c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31065 = [null,null,null,null,null,null,null,null];
(statearr_31065[(0)] = state_machine__20664__auto__);

(statearr_31065[(1)] = (1));

return statearr_31065;
});
var state_machine__20664__auto____1 = (function (state_31059){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31066){if((e31066 instanceof Object)){
var ex__20667__auto__ = e31066;
var statearr_31067_31237 = state_31059;
(statearr_31067_31237[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31238 = state_31059;
state_31059 = G__31238;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31059){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results))
})();
var state__20721__auto__ = (function (){var statearr_31068 = f__20720__auto__.call(null);
(statearr_31068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___31236);

return statearr_31068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___31236,res,vec__31054,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31069){
var vec__31070 = p__31069;
var v = cljs.core.nth.call(null,vec__31070,(0),null);
var p = cljs.core.nth.call(null,vec__31070,(1),null);
var job = vec__31070;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18505__auto___31239 = n;
var __31240 = (0);
while(true){
if((__31240 < n__18505__auto___31239)){
var G__31071_31241 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31071_31241) {
case "async":
var c__20719__auto___31243 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31240,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (__31240,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function (state_31084){
var state_val_31085 = (state_31084[(1)]);
if((state_val_31085 === (7))){
var inst_31080 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
var statearr_31086_31244 = state_31084__$1;
(statearr_31086_31244[(2)] = inst_31080);

(statearr_31086_31244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (6))){
var state_31084__$1 = state_31084;
var statearr_31087_31245 = state_31084__$1;
(statearr_31087_31245[(2)] = null);

(statearr_31087_31245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (5))){
var state_31084__$1 = state_31084;
var statearr_31088_31246 = state_31084__$1;
(statearr_31088_31246[(2)] = null);

(statearr_31088_31246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (4))){
var inst_31074 = (state_31084[(2)]);
var inst_31075 = async.call(null,inst_31074);
var state_31084__$1 = state_31084;
if(cljs.core.truth_(inst_31075)){
var statearr_31089_31247 = state_31084__$1;
(statearr_31089_31247[(1)] = (5));

} else {
var statearr_31090_31248 = state_31084__$1;
(statearr_31090_31248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31085 === (3))){
var inst_31082 = (state_31084[(2)]);
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31084__$1,inst_31082);
} else {
if((state_val_31085 === (2))){
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31084__$1,(4),jobs);
} else {
if((state_val_31085 === (1))){
var state_31084__$1 = state_31084;
var statearr_31091_31249 = state_31084__$1;
(statearr_31091_31249[(2)] = null);

(statearr_31091_31249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31240,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
;
return ((function (__31240,switch__20663__auto__,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31095 = [null,null,null,null,null,null,null];
(statearr_31095[(0)] = state_machine__20664__auto__);

(statearr_31095[(1)] = (1));

return statearr_31095;
});
var state_machine__20664__auto____1 = (function (state_31084){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31096){if((e31096 instanceof Object)){
var ex__20667__auto__ = e31096;
var statearr_31097_31250 = state_31084;
(statearr_31097_31250[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31251 = state_31084;
state_31084 = G__31251;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31084){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(__31240,switch__20663__auto__,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
})();
var state__20721__auto__ = (function (){var statearr_31098 = f__20720__auto__.call(null);
(statearr_31098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___31243);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(__31240,c__20719__auto___31243,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
);


break;
case "compute":
var c__20719__auto___31252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31240,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (__31240,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function (state_31111){
var state_val_31112 = (state_31111[(1)]);
if((state_val_31112 === (7))){
var inst_31107 = (state_31111[(2)]);
var state_31111__$1 = state_31111;
var statearr_31113_31253 = state_31111__$1;
(statearr_31113_31253[(2)] = inst_31107);

(statearr_31113_31253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (6))){
var state_31111__$1 = state_31111;
var statearr_31114_31254 = state_31111__$1;
(statearr_31114_31254[(2)] = null);

(statearr_31114_31254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (5))){
var state_31111__$1 = state_31111;
var statearr_31115_31255 = state_31111__$1;
(statearr_31115_31255[(2)] = null);

(statearr_31115_31255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (4))){
var inst_31101 = (state_31111[(2)]);
var inst_31102 = process.call(null,inst_31101);
var state_31111__$1 = state_31111;
if(cljs.core.truth_(inst_31102)){
var statearr_31116_31256 = state_31111__$1;
(statearr_31116_31256[(1)] = (5));

} else {
var statearr_31117_31257 = state_31111__$1;
(statearr_31117_31257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31112 === (3))){
var inst_31109 = (state_31111[(2)]);
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31111__$1,inst_31109);
} else {
if((state_val_31112 === (2))){
var state_31111__$1 = state_31111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31111__$1,(4),jobs);
} else {
if((state_val_31112 === (1))){
var state_31111__$1 = state_31111;
var statearr_31118_31258 = state_31111__$1;
(statearr_31118_31258[(2)] = null);

(statearr_31118_31258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__31240,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
;
return ((function (__31240,switch__20663__auto__,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31122 = [null,null,null,null,null,null,null];
(statearr_31122[(0)] = state_machine__20664__auto__);

(statearr_31122[(1)] = (1));

return statearr_31122;
});
var state_machine__20664__auto____1 = (function (state_31111){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31123){if((e31123 instanceof Object)){
var ex__20667__auto__ = e31123;
var statearr_31124_31259 = state_31111;
(statearr_31124_31259[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31260 = state_31111;
state_31111 = G__31260;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31111){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(__31240,switch__20663__auto__,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
})();
var state__20721__auto__ = (function (){var statearr_31125 = f__20720__auto__.call(null);
(statearr_31125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___31252);

return statearr_31125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(__31240,c__20719__auto___31252,G__31071_31241,n__18505__auto___31239,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31261 = (__31240 + (1));
__31240 = G__31261;
continue;
} else {
}
break;
}

var c__20719__auto___31262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___31262,jobs,results,process,async){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___31262,jobs,results,process,async){
return (function (state_31147){
var state_val_31148 = (state_31147[(1)]);
if((state_val_31148 === (9))){
var inst_31140 = (state_31147[(2)]);
var state_31147__$1 = (function (){var statearr_31149 = state_31147;
(statearr_31149[(7)] = inst_31140);

return statearr_31149;
})();
var statearr_31150_31263 = state_31147__$1;
(statearr_31150_31263[(2)] = null);

(statearr_31150_31263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (8))){
var inst_31133 = (state_31147[(8)]);
var inst_31138 = (state_31147[(2)]);
var state_31147__$1 = (function (){var statearr_31151 = state_31147;
(statearr_31151[(9)] = inst_31138);

return statearr_31151;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31147__$1,(9),results,inst_31133);
} else {
if((state_val_31148 === (7))){
var inst_31143 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
var statearr_31152_31264 = state_31147__$1;
(statearr_31152_31264[(2)] = inst_31143);

(statearr_31152_31264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (6))){
var inst_31133 = (state_31147[(8)]);
var inst_31128 = (state_31147[(10)]);
var inst_31133__$1 = cljs.core.async.chan.call(null,(1));
var inst_31134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31135 = [inst_31128,inst_31133__$1];
var inst_31136 = (new cljs.core.PersistentVector(null,2,(5),inst_31134,inst_31135,null));
var state_31147__$1 = (function (){var statearr_31153 = state_31147;
(statearr_31153[(8)] = inst_31133__$1);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31147__$1,(8),jobs,inst_31136);
} else {
if((state_val_31148 === (5))){
var inst_31131 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31147__$1 = state_31147;
var statearr_31154_31265 = state_31147__$1;
(statearr_31154_31265[(2)] = inst_31131);

(statearr_31154_31265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (4))){
var inst_31128 = (state_31147[(10)]);
var inst_31128__$1 = (state_31147[(2)]);
var inst_31129 = (inst_31128__$1 == null);
var state_31147__$1 = (function (){var statearr_31155 = state_31147;
(statearr_31155[(10)] = inst_31128__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31129)){
var statearr_31156_31266 = state_31147__$1;
(statearr_31156_31266[(1)] = (5));

} else {
var statearr_31157_31267 = state_31147__$1;
(statearr_31157_31267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31148 === (3))){
var inst_31145 = (state_31147[(2)]);
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31147__$1,inst_31145);
} else {
if((state_val_31148 === (2))){
var state_31147__$1 = state_31147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31147__$1,(4),from);
} else {
if((state_val_31148 === (1))){
var state_31147__$1 = state_31147;
var statearr_31158_31268 = state_31147__$1;
(statearr_31158_31268[(2)] = null);

(statearr_31158_31268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___31262,jobs,results,process,async))
;
return ((function (switch__20663__auto__,c__20719__auto___31262,jobs,results,process,async){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31162[(0)] = state_machine__20664__auto__);

(statearr_31162[(1)] = (1));

return statearr_31162;
});
var state_machine__20664__auto____1 = (function (state_31147){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object)){
var ex__20667__auto__ = e31163;
var statearr_31164_31269 = state_31147;
(statearr_31164_31269[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31270 = state_31147;
state_31147 = G__31270;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31147){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___31262,jobs,results,process,async))
})();
var state__20721__auto__ = (function (){var statearr_31165 = f__20720__auto__.call(null);
(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___31262);

return statearr_31165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___31262,jobs,results,process,async))
);


var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__,jobs,results,process,async){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__,jobs,results,process,async){
return (function (state_31203){
var state_val_31204 = (state_31203[(1)]);
if((state_val_31204 === (7))){
var inst_31199 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31205_31271 = state_31203__$1;
(statearr_31205_31271[(2)] = inst_31199);

(statearr_31205_31271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (20))){
var state_31203__$1 = state_31203;
var statearr_31206_31272 = state_31203__$1;
(statearr_31206_31272[(2)] = null);

(statearr_31206_31272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (1))){
var state_31203__$1 = state_31203;
var statearr_31207_31273 = state_31203__$1;
(statearr_31207_31273[(2)] = null);

(statearr_31207_31273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (4))){
var inst_31168 = (state_31203[(7)]);
var inst_31168__$1 = (state_31203[(2)]);
var inst_31169 = (inst_31168__$1 == null);
var state_31203__$1 = (function (){var statearr_31208 = state_31203;
(statearr_31208[(7)] = inst_31168__$1);

return statearr_31208;
})();
if(cljs.core.truth_(inst_31169)){
var statearr_31209_31274 = state_31203__$1;
(statearr_31209_31274[(1)] = (5));

} else {
var statearr_31210_31275 = state_31203__$1;
(statearr_31210_31275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (15))){
var inst_31181 = (state_31203[(8)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31203__$1,(18),to,inst_31181);
} else {
if((state_val_31204 === (21))){
var inst_31194 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31211_31276 = state_31203__$1;
(statearr_31211_31276[(2)] = inst_31194);

(statearr_31211_31276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (13))){
var inst_31196 = (state_31203[(2)]);
var state_31203__$1 = (function (){var statearr_31212 = state_31203;
(statearr_31212[(9)] = inst_31196);

return statearr_31212;
})();
var statearr_31213_31277 = state_31203__$1;
(statearr_31213_31277[(2)] = null);

(statearr_31213_31277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (6))){
var inst_31168 = (state_31203[(7)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31203__$1,(11),inst_31168);
} else {
if((state_val_31204 === (17))){
var inst_31189 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31189)){
var statearr_31214_31278 = state_31203__$1;
(statearr_31214_31278[(1)] = (19));

} else {
var statearr_31215_31279 = state_31203__$1;
(statearr_31215_31279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (3))){
var inst_31201 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31203__$1,inst_31201);
} else {
if((state_val_31204 === (12))){
var inst_31178 = (state_31203[(10)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31203__$1,(14),inst_31178);
} else {
if((state_val_31204 === (2))){
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31203__$1,(4),results);
} else {
if((state_val_31204 === (19))){
var state_31203__$1 = state_31203;
var statearr_31216_31280 = state_31203__$1;
(statearr_31216_31280[(2)] = null);

(statearr_31216_31280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (11))){
var inst_31178 = (state_31203[(2)]);
var state_31203__$1 = (function (){var statearr_31217 = state_31203;
(statearr_31217[(10)] = inst_31178);

return statearr_31217;
})();
var statearr_31218_31281 = state_31203__$1;
(statearr_31218_31281[(2)] = null);

(statearr_31218_31281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (9))){
var state_31203__$1 = state_31203;
var statearr_31219_31282 = state_31203__$1;
(statearr_31219_31282[(2)] = null);

(statearr_31219_31282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (5))){
var state_31203__$1 = state_31203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31220_31283 = state_31203__$1;
(statearr_31220_31283[(1)] = (8));

} else {
var statearr_31221_31284 = state_31203__$1;
(statearr_31221_31284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (14))){
var inst_31181 = (state_31203[(8)]);
var inst_31183 = (state_31203[(11)]);
var inst_31181__$1 = (state_31203[(2)]);
var inst_31182 = (inst_31181__$1 == null);
var inst_31183__$1 = cljs.core.not.call(null,inst_31182);
var state_31203__$1 = (function (){var statearr_31222 = state_31203;
(statearr_31222[(8)] = inst_31181__$1);

(statearr_31222[(11)] = inst_31183__$1);

return statearr_31222;
})();
if(inst_31183__$1){
var statearr_31223_31285 = state_31203__$1;
(statearr_31223_31285[(1)] = (15));

} else {
var statearr_31224_31286 = state_31203__$1;
(statearr_31224_31286[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (16))){
var inst_31183 = (state_31203[(11)]);
var state_31203__$1 = state_31203;
var statearr_31225_31287 = state_31203__$1;
(statearr_31225_31287[(2)] = inst_31183);

(statearr_31225_31287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (10))){
var inst_31175 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31226_31288 = state_31203__$1;
(statearr_31226_31288[(2)] = inst_31175);

(statearr_31226_31288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (18))){
var inst_31186 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31227_31289 = state_31203__$1;
(statearr_31227_31289[(2)] = inst_31186);

(statearr_31227_31289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (8))){
var inst_31172 = cljs.core.async.close_BANG_.call(null,to);
var state_31203__$1 = state_31203;
var statearr_31228_31290 = state_31203__$1;
(statearr_31228_31290[(2)] = inst_31172);

(statearr_31228_31290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto__,jobs,results,process,async))
;
return ((function (switch__20663__auto__,c__20719__auto__,jobs,results,process,async){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31232[(0)] = state_machine__20664__auto__);

(statearr_31232[(1)] = (1));

return statearr_31232;
});
var state_machine__20664__auto____1 = (function (state_31203){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31233){if((e31233 instanceof Object)){
var ex__20667__auto__ = e31233;
var statearr_31234_31291 = state_31203;
(statearr_31234_31291[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31292 = state_31203;
state_31203 = G__31292;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31203){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__,jobs,results,process,async))
})();
var state__20721__auto__ = (function (){var statearr_31235 = f__20720__auto__.call(null);
(statearr_31235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__,jobs,results,process,async))
);

return c__20719__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20719__auto___31393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___31393,tc,fc){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___31393,tc,fc){
return (function (state_31368){
var state_val_31369 = (state_31368[(1)]);
if((state_val_31369 === (7))){
var inst_31364 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
var statearr_31370_31394 = state_31368__$1;
(statearr_31370_31394[(2)] = inst_31364);

(statearr_31370_31394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (1))){
var state_31368__$1 = state_31368;
var statearr_31371_31395 = state_31368__$1;
(statearr_31371_31395[(2)] = null);

(statearr_31371_31395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (4))){
var inst_31345 = (state_31368[(7)]);
var inst_31345__$1 = (state_31368[(2)]);
var inst_31346 = (inst_31345__$1 == null);
var state_31368__$1 = (function (){var statearr_31372 = state_31368;
(statearr_31372[(7)] = inst_31345__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31346)){
var statearr_31373_31396 = state_31368__$1;
(statearr_31373_31396[(1)] = (5));

} else {
var statearr_31374_31397 = state_31368__$1;
(statearr_31374_31397[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (13))){
var state_31368__$1 = state_31368;
var statearr_31375_31398 = state_31368__$1;
(statearr_31375_31398[(2)] = null);

(statearr_31375_31398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (6))){
var inst_31345 = (state_31368[(7)]);
var inst_31351 = p.call(null,inst_31345);
var state_31368__$1 = state_31368;
if(cljs.core.truth_(inst_31351)){
var statearr_31376_31399 = state_31368__$1;
(statearr_31376_31399[(1)] = (9));

} else {
var statearr_31377_31400 = state_31368__$1;
(statearr_31377_31400[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (3))){
var inst_31366 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31368__$1,inst_31366);
} else {
if((state_val_31369 === (12))){
var state_31368__$1 = state_31368;
var statearr_31378_31401 = state_31368__$1;
(statearr_31378_31401[(2)] = null);

(statearr_31378_31401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (2))){
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31368__$1,(4),ch);
} else {
if((state_val_31369 === (11))){
var inst_31345 = (state_31368[(7)]);
var inst_31355 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31368__$1,(8),inst_31355,inst_31345);
} else {
if((state_val_31369 === (9))){
var state_31368__$1 = state_31368;
var statearr_31379_31402 = state_31368__$1;
(statearr_31379_31402[(2)] = tc);

(statearr_31379_31402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (5))){
var inst_31348 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31349 = cljs.core.async.close_BANG_.call(null,fc);
var state_31368__$1 = (function (){var statearr_31380 = state_31368;
(statearr_31380[(8)] = inst_31348);

return statearr_31380;
})();
var statearr_31381_31403 = state_31368__$1;
(statearr_31381_31403[(2)] = inst_31349);

(statearr_31381_31403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (14))){
var inst_31362 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
var statearr_31382_31404 = state_31368__$1;
(statearr_31382_31404[(2)] = inst_31362);

(statearr_31382_31404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (10))){
var state_31368__$1 = state_31368;
var statearr_31383_31405 = state_31368__$1;
(statearr_31383_31405[(2)] = fc);

(statearr_31383_31405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31369 === (8))){
var inst_31357 = (state_31368[(2)]);
var state_31368__$1 = state_31368;
if(cljs.core.truth_(inst_31357)){
var statearr_31384_31406 = state_31368__$1;
(statearr_31384_31406[(1)] = (12));

} else {
var statearr_31385_31407 = state_31368__$1;
(statearr_31385_31407[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___31393,tc,fc))
;
return ((function (switch__20663__auto__,c__20719__auto___31393,tc,fc){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = state_machine__20664__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var state_machine__20664__auto____1 = (function (state_31368){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__20667__auto__ = e31390;
var statearr_31391_31408 = state_31368;
(statearr_31391_31408[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31409 = state_31368;
state_31368 = G__31409;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31368){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___31393,tc,fc))
})();
var state__20721__auto__ = (function (){var statearr_31392 = f__20720__auto__.call(null);
(statearr_31392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___31393);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___31393,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__){
return (function (state_31456){
var state_val_31457 = (state_31456[(1)]);
if((state_val_31457 === (7))){
var inst_31452 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
var statearr_31458_31474 = state_31456__$1;
(statearr_31458_31474[(2)] = inst_31452);

(statearr_31458_31474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (6))){
var inst_31442 = (state_31456[(7)]);
var inst_31445 = (state_31456[(8)]);
var inst_31449 = f.call(null,inst_31442,inst_31445);
var inst_31442__$1 = inst_31449;
var state_31456__$1 = (function (){var statearr_31459 = state_31456;
(statearr_31459[(7)] = inst_31442__$1);

return statearr_31459;
})();
var statearr_31460_31475 = state_31456__$1;
(statearr_31460_31475[(2)] = null);

(statearr_31460_31475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (5))){
var inst_31442 = (state_31456[(7)]);
var state_31456__$1 = state_31456;
var statearr_31461_31476 = state_31456__$1;
(statearr_31461_31476[(2)] = inst_31442);

(statearr_31461_31476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (4))){
var inst_31445 = (state_31456[(8)]);
var inst_31445__$1 = (state_31456[(2)]);
var inst_31446 = (inst_31445__$1 == null);
var state_31456__$1 = (function (){var statearr_31462 = state_31456;
(statearr_31462[(8)] = inst_31445__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31446)){
var statearr_31463_31477 = state_31456__$1;
(statearr_31463_31477[(1)] = (5));

} else {
var statearr_31464_31478 = state_31456__$1;
(statearr_31464_31478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31457 === (3))){
var inst_31454 = (state_31456[(2)]);
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31456__$1,inst_31454);
} else {
if((state_val_31457 === (2))){
var state_31456__$1 = state_31456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31456__$1,(4),ch);
} else {
if((state_val_31457 === (1))){
var inst_31442 = init;
var state_31456__$1 = (function (){var statearr_31465 = state_31456;
(statearr_31465[(7)] = inst_31442);

return statearr_31465;
})();
var statearr_31466_31479 = state_31456__$1;
(statearr_31466_31479[(2)] = null);

(statearr_31466_31479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20719__auto__))
;
return ((function (switch__20663__auto__,c__20719__auto__){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31470 = [null,null,null,null,null,null,null,null,null];
(statearr_31470[(0)] = state_machine__20664__auto__);

(statearr_31470[(1)] = (1));

return statearr_31470;
});
var state_machine__20664__auto____1 = (function (state_31456){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31471){if((e31471 instanceof Object)){
var ex__20667__auto__ = e31471;
var statearr_31472_31480 = state_31456;
(statearr_31472_31480[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31481 = state_31456;
state_31456 = G__31481;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31456){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__))
})();
var state__20721__auto__ = (function (){var statearr_31473 = f__20720__auto__.call(null);
(statearr_31473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_31473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__))
);

return c__20719__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__){
return (function (state_31555){
var state_val_31556 = (state_31555[(1)]);
if((state_val_31556 === (7))){
var inst_31537 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31557_31580 = state_31555__$1;
(statearr_31557_31580[(2)] = inst_31537);

(statearr_31557_31580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (1))){
var inst_31531 = cljs.core.seq.call(null,coll);
var inst_31532 = inst_31531;
var state_31555__$1 = (function (){var statearr_31558 = state_31555;
(statearr_31558[(7)] = inst_31532);

return statearr_31558;
})();
var statearr_31559_31581 = state_31555__$1;
(statearr_31559_31581[(2)] = null);

(statearr_31559_31581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (4))){
var inst_31532 = (state_31555[(7)]);
var inst_31535 = cljs.core.first.call(null,inst_31532);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31555__$1,(7),ch,inst_31535);
} else {
if((state_val_31556 === (13))){
var inst_31549 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31560_31582 = state_31555__$1;
(statearr_31560_31582[(2)] = inst_31549);

(statearr_31560_31582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (6))){
var inst_31540 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31540)){
var statearr_31561_31583 = state_31555__$1;
(statearr_31561_31583[(1)] = (8));

} else {
var statearr_31562_31584 = state_31555__$1;
(statearr_31562_31584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (3))){
var inst_31553 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31555__$1,inst_31553);
} else {
if((state_val_31556 === (12))){
var state_31555__$1 = state_31555;
var statearr_31563_31585 = state_31555__$1;
(statearr_31563_31585[(2)] = null);

(statearr_31563_31585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (2))){
var inst_31532 = (state_31555[(7)]);
var state_31555__$1 = state_31555;
if(cljs.core.truth_(inst_31532)){
var statearr_31564_31586 = state_31555__$1;
(statearr_31564_31586[(1)] = (4));

} else {
var statearr_31565_31587 = state_31555__$1;
(statearr_31565_31587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (11))){
var inst_31546 = cljs.core.async.close_BANG_.call(null,ch);
var state_31555__$1 = state_31555;
var statearr_31566_31588 = state_31555__$1;
(statearr_31566_31588[(2)] = inst_31546);

(statearr_31566_31588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (9))){
var state_31555__$1 = state_31555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31567_31589 = state_31555__$1;
(statearr_31567_31589[(1)] = (11));

} else {
var statearr_31568_31590 = state_31555__$1;
(statearr_31568_31590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (5))){
var inst_31532 = (state_31555[(7)]);
var state_31555__$1 = state_31555;
var statearr_31569_31591 = state_31555__$1;
(statearr_31569_31591[(2)] = inst_31532);

(statearr_31569_31591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (10))){
var inst_31551 = (state_31555[(2)]);
var state_31555__$1 = state_31555;
var statearr_31570_31592 = state_31555__$1;
(statearr_31570_31592[(2)] = inst_31551);

(statearr_31570_31592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31556 === (8))){
var inst_31532 = (state_31555[(7)]);
var inst_31542 = cljs.core.next.call(null,inst_31532);
var inst_31532__$1 = inst_31542;
var state_31555__$1 = (function (){var statearr_31571 = state_31555;
(statearr_31571[(7)] = inst_31532__$1);

return statearr_31571;
})();
var statearr_31572_31593 = state_31555__$1;
(statearr_31572_31593[(2)] = null);

(statearr_31572_31593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto__))
;
return ((function (switch__20663__auto__,c__20719__auto__){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_31576 = [null,null,null,null,null,null,null,null];
(statearr_31576[(0)] = state_machine__20664__auto__);

(statearr_31576[(1)] = (1));

return statearr_31576;
});
var state_machine__20664__auto____1 = (function (state_31555){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e31577){if((e31577 instanceof Object)){
var ex__20667__auto__ = e31577;
var statearr_31578_31594 = state_31555;
(statearr_31578_31594[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31595 = state_31555;
state_31555 = G__31595;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31555){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__))
})();
var state__20721__auto__ = (function (){var statearr_31579 = f__20720__auto__.call(null);
(statearr_31579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_31579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__))
);

return c__20719__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj31597 = {};
return obj31597;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__17606__auto__ = _;
if(and__17606__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17606__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18262__auto__ = (((_ == null))?null:_);
return (function (){var or__17618__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj31599 = {};
return obj31599;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t31821 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31821 = (function (cs,ch,mult,meta31822){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31822 = meta31822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31821.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t31821.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t31821.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t31821.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t31821.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t31821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t31821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31823){
var self__ = this;
var _31823__$1 = this;
return self__.meta31822;
});})(cs))
;

cljs.core.async.t31821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31823,meta31822__$1){
var self__ = this;
var _31823__$1 = this;
return (new cljs.core.async.t31821(self__.cs,self__.ch,self__.mult,meta31822__$1));
});})(cs))
;

cljs.core.async.t31821.cljs$lang$type = true;

cljs.core.async.t31821.cljs$lang$ctorStr = "cljs.core.async/t31821";

cljs.core.async.t31821.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t31821");
});})(cs))
;

cljs.core.async.__GT_t31821 = ((function (cs){
return (function __GT_t31821(cs__$1,ch__$1,mult__$1,meta31822){
return (new cljs.core.async.t31821(cs__$1,ch__$1,mult__$1,meta31822));
});})(cs))
;

}

return (new cljs.core.async.t31821(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20719__auto___32042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___32042,cs,m,dchan,dctr,done){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___32042,cs,m,dchan,dctr,done){
return (function (state_31954){
var state_val_31955 = (state_31954[(1)]);
if((state_val_31955 === (7))){
var inst_31950 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31956_32043 = state_31954__$1;
(statearr_31956_32043[(2)] = inst_31950);

(statearr_31956_32043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (20))){
var inst_31855 = (state_31954[(7)]);
var inst_31865 = cljs.core.first.call(null,inst_31855);
var inst_31866 = cljs.core.nth.call(null,inst_31865,(0),null);
var inst_31867 = cljs.core.nth.call(null,inst_31865,(1),null);
var state_31954__$1 = (function (){var statearr_31957 = state_31954;
(statearr_31957[(8)] = inst_31866);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31867)){
var statearr_31958_32044 = state_31954__$1;
(statearr_31958_32044[(1)] = (22));

} else {
var statearr_31959_32045 = state_31954__$1;
(statearr_31959_32045[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (27))){
var inst_31902 = (state_31954[(9)]);
var inst_31826 = (state_31954[(10)]);
var inst_31897 = (state_31954[(11)]);
var inst_31895 = (state_31954[(12)]);
var inst_31902__$1 = cljs.core._nth.call(null,inst_31895,inst_31897);
var inst_31903 = cljs.core.async.put_BANG_.call(null,inst_31902__$1,inst_31826,done);
var state_31954__$1 = (function (){var statearr_31960 = state_31954;
(statearr_31960[(9)] = inst_31902__$1);

return statearr_31960;
})();
if(cljs.core.truth_(inst_31903)){
var statearr_31961_32046 = state_31954__$1;
(statearr_31961_32046[(1)] = (30));

} else {
var statearr_31962_32047 = state_31954__$1;
(statearr_31962_32047[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (1))){
var state_31954__$1 = state_31954;
var statearr_31963_32048 = state_31954__$1;
(statearr_31963_32048[(2)] = null);

(statearr_31963_32048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (24))){
var inst_31855 = (state_31954[(7)]);
var inst_31872 = (state_31954[(2)]);
var inst_31873 = cljs.core.next.call(null,inst_31855);
var inst_31835 = inst_31873;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31954__$1 = (function (){var statearr_31964 = state_31954;
(statearr_31964[(13)] = inst_31838);

(statearr_31964[(14)] = inst_31872);

(statearr_31964[(15)] = inst_31836);

(statearr_31964[(16)] = inst_31837);

(statearr_31964[(17)] = inst_31835);

return statearr_31964;
})();
var statearr_31965_32049 = state_31954__$1;
(statearr_31965_32049[(2)] = null);

(statearr_31965_32049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (39))){
var state_31954__$1 = state_31954;
var statearr_31969_32050 = state_31954__$1;
(statearr_31969_32050[(2)] = null);

(statearr_31969_32050[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (4))){
var inst_31826 = (state_31954[(10)]);
var inst_31826__$1 = (state_31954[(2)]);
var inst_31827 = (inst_31826__$1 == null);
var state_31954__$1 = (function (){var statearr_31970 = state_31954;
(statearr_31970[(10)] = inst_31826__$1);

return statearr_31970;
})();
if(cljs.core.truth_(inst_31827)){
var statearr_31971_32051 = state_31954__$1;
(statearr_31971_32051[(1)] = (5));

} else {
var statearr_31972_32052 = state_31954__$1;
(statearr_31972_32052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (15))){
var inst_31838 = (state_31954[(13)]);
var inst_31836 = (state_31954[(15)]);
var inst_31837 = (state_31954[(16)]);
var inst_31835 = (state_31954[(17)]);
var inst_31851 = (state_31954[(2)]);
var inst_31852 = (inst_31838 + (1));
var tmp31966 = inst_31836;
var tmp31967 = inst_31837;
var tmp31968 = inst_31835;
var inst_31835__$1 = tmp31968;
var inst_31836__$1 = tmp31966;
var inst_31837__$1 = tmp31967;
var inst_31838__$1 = inst_31852;
var state_31954__$1 = (function (){var statearr_31973 = state_31954;
(statearr_31973[(18)] = inst_31851);

(statearr_31973[(13)] = inst_31838__$1);

(statearr_31973[(15)] = inst_31836__$1);

(statearr_31973[(16)] = inst_31837__$1);

(statearr_31973[(17)] = inst_31835__$1);

return statearr_31973;
})();
var statearr_31974_32053 = state_31954__$1;
(statearr_31974_32053[(2)] = null);

(statearr_31974_32053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (21))){
var inst_31876 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31978_32054 = state_31954__$1;
(statearr_31978_32054[(2)] = inst_31876);

(statearr_31978_32054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (31))){
var inst_31902 = (state_31954[(9)]);
var inst_31906 = done.call(null,null);
var inst_31907 = cljs.core.async.untap_STAR_.call(null,m,inst_31902);
var state_31954__$1 = (function (){var statearr_31979 = state_31954;
(statearr_31979[(19)] = inst_31906);

return statearr_31979;
})();
var statearr_31980_32055 = state_31954__$1;
(statearr_31980_32055[(2)] = inst_31907);

(statearr_31980_32055[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (32))){
var inst_31897 = (state_31954[(11)]);
var inst_31896 = (state_31954[(20)]);
var inst_31894 = (state_31954[(21)]);
var inst_31895 = (state_31954[(12)]);
var inst_31909 = (state_31954[(2)]);
var inst_31910 = (inst_31897 + (1));
var tmp31975 = inst_31896;
var tmp31976 = inst_31894;
var tmp31977 = inst_31895;
var inst_31894__$1 = tmp31976;
var inst_31895__$1 = tmp31977;
var inst_31896__$1 = tmp31975;
var inst_31897__$1 = inst_31910;
var state_31954__$1 = (function (){var statearr_31981 = state_31954;
(statearr_31981[(11)] = inst_31897__$1);

(statearr_31981[(20)] = inst_31896__$1);

(statearr_31981[(22)] = inst_31909);

(statearr_31981[(21)] = inst_31894__$1);

(statearr_31981[(12)] = inst_31895__$1);

return statearr_31981;
})();
var statearr_31982_32056 = state_31954__$1;
(statearr_31982_32056[(2)] = null);

(statearr_31982_32056[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (40))){
var inst_31922 = (state_31954[(23)]);
var inst_31926 = done.call(null,null);
var inst_31927 = cljs.core.async.untap_STAR_.call(null,m,inst_31922);
var state_31954__$1 = (function (){var statearr_31983 = state_31954;
(statearr_31983[(24)] = inst_31926);

return statearr_31983;
})();
var statearr_31984_32057 = state_31954__$1;
(statearr_31984_32057[(2)] = inst_31927);

(statearr_31984_32057[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (33))){
var inst_31913 = (state_31954[(25)]);
var inst_31915 = cljs.core.chunked_seq_QMARK_.call(null,inst_31913);
var state_31954__$1 = state_31954;
if(inst_31915){
var statearr_31985_32058 = state_31954__$1;
(statearr_31985_32058[(1)] = (36));

} else {
var statearr_31986_32059 = state_31954__$1;
(statearr_31986_32059[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (13))){
var inst_31845 = (state_31954[(26)]);
var inst_31848 = cljs.core.async.close_BANG_.call(null,inst_31845);
var state_31954__$1 = state_31954;
var statearr_31987_32060 = state_31954__$1;
(statearr_31987_32060[(2)] = inst_31848);

(statearr_31987_32060[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (22))){
var inst_31866 = (state_31954[(8)]);
var inst_31869 = cljs.core.async.close_BANG_.call(null,inst_31866);
var state_31954__$1 = state_31954;
var statearr_31988_32061 = state_31954__$1;
(statearr_31988_32061[(2)] = inst_31869);

(statearr_31988_32061[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (36))){
var inst_31913 = (state_31954[(25)]);
var inst_31917 = cljs.core.chunk_first.call(null,inst_31913);
var inst_31918 = cljs.core.chunk_rest.call(null,inst_31913);
var inst_31919 = cljs.core.count.call(null,inst_31917);
var inst_31894 = inst_31918;
var inst_31895 = inst_31917;
var inst_31896 = inst_31919;
var inst_31897 = (0);
var state_31954__$1 = (function (){var statearr_31989 = state_31954;
(statearr_31989[(11)] = inst_31897);

(statearr_31989[(20)] = inst_31896);

(statearr_31989[(21)] = inst_31894);

(statearr_31989[(12)] = inst_31895);

return statearr_31989;
})();
var statearr_31990_32062 = state_31954__$1;
(statearr_31990_32062[(2)] = null);

(statearr_31990_32062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (41))){
var inst_31913 = (state_31954[(25)]);
var inst_31929 = (state_31954[(2)]);
var inst_31930 = cljs.core.next.call(null,inst_31913);
var inst_31894 = inst_31930;
var inst_31895 = null;
var inst_31896 = (0);
var inst_31897 = (0);
var state_31954__$1 = (function (){var statearr_31991 = state_31954;
(statearr_31991[(27)] = inst_31929);

(statearr_31991[(11)] = inst_31897);

(statearr_31991[(20)] = inst_31896);

(statearr_31991[(21)] = inst_31894);

(statearr_31991[(12)] = inst_31895);

return statearr_31991;
})();
var statearr_31992_32063 = state_31954__$1;
(statearr_31992_32063[(2)] = null);

(statearr_31992_32063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (43))){
var state_31954__$1 = state_31954;
var statearr_31993_32064 = state_31954__$1;
(statearr_31993_32064[(2)] = null);

(statearr_31993_32064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (29))){
var inst_31938 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_31994_32065 = state_31954__$1;
(statearr_31994_32065[(2)] = inst_31938);

(statearr_31994_32065[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (44))){
var inst_31947 = (state_31954[(2)]);
var state_31954__$1 = (function (){var statearr_31995 = state_31954;
(statearr_31995[(28)] = inst_31947);

return statearr_31995;
})();
var statearr_31996_32066 = state_31954__$1;
(statearr_31996_32066[(2)] = null);

(statearr_31996_32066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (6))){
var inst_31886 = (state_31954[(29)]);
var inst_31885 = cljs.core.deref.call(null,cs);
var inst_31886__$1 = cljs.core.keys.call(null,inst_31885);
var inst_31887 = cljs.core.count.call(null,inst_31886__$1);
var inst_31888 = cljs.core.reset_BANG_.call(null,dctr,inst_31887);
var inst_31893 = cljs.core.seq.call(null,inst_31886__$1);
var inst_31894 = inst_31893;
var inst_31895 = null;
var inst_31896 = (0);
var inst_31897 = (0);
var state_31954__$1 = (function (){var statearr_31997 = state_31954;
(statearr_31997[(29)] = inst_31886__$1);

(statearr_31997[(30)] = inst_31888);

(statearr_31997[(11)] = inst_31897);

(statearr_31997[(20)] = inst_31896);

(statearr_31997[(21)] = inst_31894);

(statearr_31997[(12)] = inst_31895);

return statearr_31997;
})();
var statearr_31998_32067 = state_31954__$1;
(statearr_31998_32067[(2)] = null);

(statearr_31998_32067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (28))){
var inst_31894 = (state_31954[(21)]);
var inst_31913 = (state_31954[(25)]);
var inst_31913__$1 = cljs.core.seq.call(null,inst_31894);
var state_31954__$1 = (function (){var statearr_31999 = state_31954;
(statearr_31999[(25)] = inst_31913__$1);

return statearr_31999;
})();
if(inst_31913__$1){
var statearr_32000_32068 = state_31954__$1;
(statearr_32000_32068[(1)] = (33));

} else {
var statearr_32001_32069 = state_31954__$1;
(statearr_32001_32069[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (25))){
var inst_31897 = (state_31954[(11)]);
var inst_31896 = (state_31954[(20)]);
var inst_31899 = (inst_31897 < inst_31896);
var inst_31900 = inst_31899;
var state_31954__$1 = state_31954;
if(cljs.core.truth_(inst_31900)){
var statearr_32002_32070 = state_31954__$1;
(statearr_32002_32070[(1)] = (27));

} else {
var statearr_32003_32071 = state_31954__$1;
(statearr_32003_32071[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (34))){
var state_31954__$1 = state_31954;
var statearr_32004_32072 = state_31954__$1;
(statearr_32004_32072[(2)] = null);

(statearr_32004_32072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (17))){
var state_31954__$1 = state_31954;
var statearr_32005_32073 = state_31954__$1;
(statearr_32005_32073[(2)] = null);

(statearr_32005_32073[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (3))){
var inst_31952 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31954__$1,inst_31952);
} else {
if((state_val_31955 === (12))){
var inst_31881 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32006_32074 = state_31954__$1;
(statearr_32006_32074[(2)] = inst_31881);

(statearr_32006_32074[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (2))){
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31954__$1,(4),ch);
} else {
if((state_val_31955 === (23))){
var state_31954__$1 = state_31954;
var statearr_32007_32075 = state_31954__$1;
(statearr_32007_32075[(2)] = null);

(statearr_32007_32075[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (35))){
var inst_31936 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32008_32076 = state_31954__$1;
(statearr_32008_32076[(2)] = inst_31936);

(statearr_32008_32076[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (19))){
var inst_31855 = (state_31954[(7)]);
var inst_31859 = cljs.core.chunk_first.call(null,inst_31855);
var inst_31860 = cljs.core.chunk_rest.call(null,inst_31855);
var inst_31861 = cljs.core.count.call(null,inst_31859);
var inst_31835 = inst_31860;
var inst_31836 = inst_31859;
var inst_31837 = inst_31861;
var inst_31838 = (0);
var state_31954__$1 = (function (){var statearr_32009 = state_31954;
(statearr_32009[(13)] = inst_31838);

(statearr_32009[(15)] = inst_31836);

(statearr_32009[(16)] = inst_31837);

(statearr_32009[(17)] = inst_31835);

return statearr_32009;
})();
var statearr_32010_32077 = state_31954__$1;
(statearr_32010_32077[(2)] = null);

(statearr_32010_32077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (11))){
var inst_31855 = (state_31954[(7)]);
var inst_31835 = (state_31954[(17)]);
var inst_31855__$1 = cljs.core.seq.call(null,inst_31835);
var state_31954__$1 = (function (){var statearr_32011 = state_31954;
(statearr_32011[(7)] = inst_31855__$1);

return statearr_32011;
})();
if(inst_31855__$1){
var statearr_32012_32078 = state_31954__$1;
(statearr_32012_32078[(1)] = (16));

} else {
var statearr_32013_32079 = state_31954__$1;
(statearr_32013_32079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (9))){
var inst_31883 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32014_32080 = state_31954__$1;
(statearr_32014_32080[(2)] = inst_31883);

(statearr_32014_32080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (5))){
var inst_31833 = cljs.core.deref.call(null,cs);
var inst_31834 = cljs.core.seq.call(null,inst_31833);
var inst_31835 = inst_31834;
var inst_31836 = null;
var inst_31837 = (0);
var inst_31838 = (0);
var state_31954__$1 = (function (){var statearr_32015 = state_31954;
(statearr_32015[(13)] = inst_31838);

(statearr_32015[(15)] = inst_31836);

(statearr_32015[(16)] = inst_31837);

(statearr_32015[(17)] = inst_31835);

return statearr_32015;
})();
var statearr_32016_32081 = state_31954__$1;
(statearr_32016_32081[(2)] = null);

(statearr_32016_32081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (14))){
var state_31954__$1 = state_31954;
var statearr_32017_32082 = state_31954__$1;
(statearr_32017_32082[(2)] = null);

(statearr_32017_32082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (45))){
var inst_31944 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32018_32083 = state_31954__$1;
(statearr_32018_32083[(2)] = inst_31944);

(statearr_32018_32083[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (26))){
var inst_31886 = (state_31954[(29)]);
var inst_31940 = (state_31954[(2)]);
var inst_31941 = cljs.core.seq.call(null,inst_31886);
var state_31954__$1 = (function (){var statearr_32019 = state_31954;
(statearr_32019[(31)] = inst_31940);

return statearr_32019;
})();
if(inst_31941){
var statearr_32020_32084 = state_31954__$1;
(statearr_32020_32084[(1)] = (42));

} else {
var statearr_32021_32085 = state_31954__$1;
(statearr_32021_32085[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (16))){
var inst_31855 = (state_31954[(7)]);
var inst_31857 = cljs.core.chunked_seq_QMARK_.call(null,inst_31855);
var state_31954__$1 = state_31954;
if(inst_31857){
var statearr_32022_32086 = state_31954__$1;
(statearr_32022_32086[(1)] = (19));

} else {
var statearr_32023_32087 = state_31954__$1;
(statearr_32023_32087[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (38))){
var inst_31933 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32024_32088 = state_31954__$1;
(statearr_32024_32088[(2)] = inst_31933);

(statearr_32024_32088[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (30))){
var state_31954__$1 = state_31954;
var statearr_32025_32089 = state_31954__$1;
(statearr_32025_32089[(2)] = null);

(statearr_32025_32089[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (10))){
var inst_31838 = (state_31954[(13)]);
var inst_31836 = (state_31954[(15)]);
var inst_31844 = cljs.core._nth.call(null,inst_31836,inst_31838);
var inst_31845 = cljs.core.nth.call(null,inst_31844,(0),null);
var inst_31846 = cljs.core.nth.call(null,inst_31844,(1),null);
var state_31954__$1 = (function (){var statearr_32026 = state_31954;
(statearr_32026[(26)] = inst_31845);

return statearr_32026;
})();
if(cljs.core.truth_(inst_31846)){
var statearr_32027_32090 = state_31954__$1;
(statearr_32027_32090[(1)] = (13));

} else {
var statearr_32028_32091 = state_31954__$1;
(statearr_32028_32091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (18))){
var inst_31879 = (state_31954[(2)]);
var state_31954__$1 = state_31954;
var statearr_32029_32092 = state_31954__$1;
(statearr_32029_32092[(2)] = inst_31879);

(statearr_32029_32092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (42))){
var state_31954__$1 = state_31954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31954__$1,(45),dchan);
} else {
if((state_val_31955 === (37))){
var inst_31826 = (state_31954[(10)]);
var inst_31922 = (state_31954[(23)]);
var inst_31913 = (state_31954[(25)]);
var inst_31922__$1 = cljs.core.first.call(null,inst_31913);
var inst_31923 = cljs.core.async.put_BANG_.call(null,inst_31922__$1,inst_31826,done);
var state_31954__$1 = (function (){var statearr_32030 = state_31954;
(statearr_32030[(23)] = inst_31922__$1);

return statearr_32030;
})();
if(cljs.core.truth_(inst_31923)){
var statearr_32031_32093 = state_31954__$1;
(statearr_32031_32093[(1)] = (39));

} else {
var statearr_32032_32094 = state_31954__$1;
(statearr_32032_32094[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31955 === (8))){
var inst_31838 = (state_31954[(13)]);
var inst_31837 = (state_31954[(16)]);
var inst_31840 = (inst_31838 < inst_31837);
var inst_31841 = inst_31840;
var state_31954__$1 = state_31954;
if(cljs.core.truth_(inst_31841)){
var statearr_32033_32095 = state_31954__$1;
(statearr_32033_32095[(1)] = (10));

} else {
var statearr_32034_32096 = state_31954__$1;
(statearr_32034_32096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___32042,cs,m,dchan,dctr,done))
;
return ((function (switch__20663__auto__,c__20719__auto___32042,cs,m,dchan,dctr,done){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_32038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32038[(0)] = state_machine__20664__auto__);

(statearr_32038[(1)] = (1));

return statearr_32038;
});
var state_machine__20664__auto____1 = (function (state_31954){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_31954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e32039){if((e32039 instanceof Object)){
var ex__20667__auto__ = e32039;
var statearr_32040_32097 = state_31954;
(statearr_32040_32097[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32098 = state_31954;
state_31954 = G__32098;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_31954){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_31954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___32042,cs,m,dchan,dctr,done))
})();
var state__20721__auto__ = (function (){var statearr_32041 = f__20720__auto__.call(null);
(statearr_32041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___32042);

return statearr_32041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___32042,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj32100 = {};
return obj32100;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__17606__auto__ = m;
if(and__17606__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18262__auto__ = (((m == null))?null:m);
return (function (){var or__17618__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32101){
var map__32106 = p__32101;
var map__32106__$1 = ((cljs.core.seq_QMARK_.call(null,map__32106))?cljs.core.apply.call(null,cljs.core.hash_map,map__32106):map__32106);
var opts = map__32106__$1;
var statearr_32107_32110 = state;
(statearr_32107_32110[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32106,map__32106__$1,opts){
return (function (val){
var statearr_32108_32111 = state;
(statearr_32108_32111[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32106,map__32106__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32109_32112 = state;
(statearr_32109_32112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32101 = null;
if (arguments.length > 3) {
var G__32113__i = 0, G__32113__a = new Array(arguments.length -  3);
while (G__32113__i < G__32113__a.length) {G__32113__a[G__32113__i] = arguments[G__32113__i + 3]; ++G__32113__i;}
  p__32101 = new cljs.core.IndexedSeq(G__32113__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32101);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32114){
var state = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var cont_block = cljs.core.first(arglist__32114);
arglist__32114 = cljs.core.next(arglist__32114);
var ports = cljs.core.first(arglist__32114);
var p__32101 = cljs.core.rest(arglist__32114);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32101);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t32234 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32234 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32235){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32235 = meta32235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32234.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32234.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32236){
var self__ = this;
var _32236__$1 = this;
return self__.meta32235;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32236,meta32235__$1){
var self__ = this;
var _32236__$1 = this;
return (new cljs.core.async.t32234(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32235__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32234.cljs$lang$type = true;

cljs.core.async.t32234.cljs$lang$ctorStr = "cljs.core.async/t32234";

cljs.core.async.t32234.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t32234");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32234 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32234(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32235){
return (new cljs.core.async.t32234(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32235));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32234(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20719__auto___32353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32306){
var state_val_32307 = (state_32306[(1)]);
if((state_val_32307 === (7))){
var inst_32250 = (state_32306[(7)]);
var inst_32255 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32250);
var state_32306__$1 = state_32306;
var statearr_32308_32354 = state_32306__$1;
(statearr_32308_32354[(2)] = inst_32255);

(statearr_32308_32354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (20))){
var inst_32265 = (state_32306[(8)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32306__$1,(23),out,inst_32265);
} else {
if((state_val_32307 === (1))){
var inst_32240 = (state_32306[(9)]);
var inst_32240__$1 = calc_state.call(null);
var inst_32241 = cljs.core.seq_QMARK_.call(null,inst_32240__$1);
var state_32306__$1 = (function (){var statearr_32309 = state_32306;
(statearr_32309[(9)] = inst_32240__$1);

return statearr_32309;
})();
if(inst_32241){
var statearr_32310_32355 = state_32306__$1;
(statearr_32310_32355[(1)] = (2));

} else {
var statearr_32311_32356 = state_32306__$1;
(statearr_32311_32356[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (24))){
var inst_32258 = (state_32306[(10)]);
var inst_32250 = inst_32258;
var state_32306__$1 = (function (){var statearr_32312 = state_32306;
(statearr_32312[(7)] = inst_32250);

return statearr_32312;
})();
var statearr_32313_32357 = state_32306__$1;
(statearr_32313_32357[(2)] = null);

(statearr_32313_32357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (4))){
var inst_32240 = (state_32306[(9)]);
var inst_32246 = (state_32306[(2)]);
var inst_32247 = cljs.core.get.call(null,inst_32246,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32248 = cljs.core.get.call(null,inst_32246,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32249 = cljs.core.get.call(null,inst_32246,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32250 = inst_32240;
var state_32306__$1 = (function (){var statearr_32314 = state_32306;
(statearr_32314[(11)] = inst_32248);

(statearr_32314[(12)] = inst_32247);

(statearr_32314[(13)] = inst_32249);

(statearr_32314[(7)] = inst_32250);

return statearr_32314;
})();
var statearr_32315_32358 = state_32306__$1;
(statearr_32315_32358[(2)] = null);

(statearr_32315_32358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (15))){
var state_32306__$1 = state_32306;
var statearr_32316_32359 = state_32306__$1;
(statearr_32316_32359[(2)] = null);

(statearr_32316_32359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (21))){
var inst_32258 = (state_32306[(10)]);
var inst_32250 = inst_32258;
var state_32306__$1 = (function (){var statearr_32317 = state_32306;
(statearr_32317[(7)] = inst_32250);

return statearr_32317;
})();
var statearr_32318_32360 = state_32306__$1;
(statearr_32318_32360[(2)] = null);

(statearr_32318_32360[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (13))){
var inst_32302 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32319_32361 = state_32306__$1;
(statearr_32319_32361[(2)] = inst_32302);

(statearr_32319_32361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (22))){
var inst_32300 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32320_32362 = state_32306__$1;
(statearr_32320_32362[(2)] = inst_32300);

(statearr_32320_32362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (6))){
var inst_32304 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32306__$1,inst_32304);
} else {
if((state_val_32307 === (25))){
var state_32306__$1 = state_32306;
var statearr_32321_32363 = state_32306__$1;
(statearr_32321_32363[(2)] = null);

(statearr_32321_32363[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (17))){
var inst_32280 = (state_32306[(14)]);
var state_32306__$1 = state_32306;
var statearr_32322_32364 = state_32306__$1;
(statearr_32322_32364[(2)] = inst_32280);

(statearr_32322_32364[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (3))){
var inst_32240 = (state_32306[(9)]);
var state_32306__$1 = state_32306;
var statearr_32323_32365 = state_32306__$1;
(statearr_32323_32365[(2)] = inst_32240);

(statearr_32323_32365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (12))){
var inst_32266 = (state_32306[(15)]);
var inst_32280 = (state_32306[(14)]);
var inst_32261 = (state_32306[(16)]);
var inst_32280__$1 = inst_32261.call(null,inst_32266);
var state_32306__$1 = (function (){var statearr_32324 = state_32306;
(statearr_32324[(14)] = inst_32280__$1);

return statearr_32324;
})();
if(cljs.core.truth_(inst_32280__$1)){
var statearr_32325_32366 = state_32306__$1;
(statearr_32325_32366[(1)] = (17));

} else {
var statearr_32326_32367 = state_32306__$1;
(statearr_32326_32367[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (2))){
var inst_32240 = (state_32306[(9)]);
var inst_32243 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32240);
var state_32306__$1 = state_32306;
var statearr_32327_32368 = state_32306__$1;
(statearr_32327_32368[(2)] = inst_32243);

(statearr_32327_32368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (23))){
var inst_32291 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32291)){
var statearr_32328_32369 = state_32306__$1;
(statearr_32328_32369[(1)] = (24));

} else {
var statearr_32329_32370 = state_32306__$1;
(statearr_32329_32370[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (19))){
var inst_32288 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32288)){
var statearr_32330_32371 = state_32306__$1;
(statearr_32330_32371[(1)] = (20));

} else {
var statearr_32331_32372 = state_32306__$1;
(statearr_32331_32372[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (11))){
var inst_32265 = (state_32306[(8)]);
var inst_32271 = (inst_32265 == null);
var state_32306__$1 = state_32306;
if(cljs.core.truth_(inst_32271)){
var statearr_32332_32373 = state_32306__$1;
(statearr_32332_32373[(1)] = (14));

} else {
var statearr_32333_32374 = state_32306__$1;
(statearr_32333_32374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (9))){
var inst_32258 = (state_32306[(10)]);
var inst_32258__$1 = (state_32306[(2)]);
var inst_32259 = cljs.core.get.call(null,inst_32258__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32260 = cljs.core.get.call(null,inst_32258__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32261 = cljs.core.get.call(null,inst_32258__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32306__$1 = (function (){var statearr_32334 = state_32306;
(statearr_32334[(10)] = inst_32258__$1);

(statearr_32334[(17)] = inst_32260);

(statearr_32334[(16)] = inst_32261);

return statearr_32334;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32306__$1,(10),inst_32259);
} else {
if((state_val_32307 === (5))){
var inst_32250 = (state_32306[(7)]);
var inst_32253 = cljs.core.seq_QMARK_.call(null,inst_32250);
var state_32306__$1 = state_32306;
if(inst_32253){
var statearr_32335_32375 = state_32306__$1;
(statearr_32335_32375[(1)] = (7));

} else {
var statearr_32336_32376 = state_32306__$1;
(statearr_32336_32376[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (14))){
var inst_32266 = (state_32306[(15)]);
var inst_32273 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32266);
var state_32306__$1 = state_32306;
var statearr_32337_32377 = state_32306__$1;
(statearr_32337_32377[(2)] = inst_32273);

(statearr_32337_32377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (26))){
var inst_32296 = (state_32306[(2)]);
var state_32306__$1 = state_32306;
var statearr_32338_32378 = state_32306__$1;
(statearr_32338_32378[(2)] = inst_32296);

(statearr_32338_32378[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (16))){
var inst_32276 = (state_32306[(2)]);
var inst_32277 = calc_state.call(null);
var inst_32250 = inst_32277;
var state_32306__$1 = (function (){var statearr_32339 = state_32306;
(statearr_32339[(18)] = inst_32276);

(statearr_32339[(7)] = inst_32250);

return statearr_32339;
})();
var statearr_32340_32379 = state_32306__$1;
(statearr_32340_32379[(2)] = null);

(statearr_32340_32379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (10))){
var inst_32266 = (state_32306[(15)]);
var inst_32265 = (state_32306[(8)]);
var inst_32264 = (state_32306[(2)]);
var inst_32265__$1 = cljs.core.nth.call(null,inst_32264,(0),null);
var inst_32266__$1 = cljs.core.nth.call(null,inst_32264,(1),null);
var inst_32267 = (inst_32265__$1 == null);
var inst_32268 = cljs.core._EQ_.call(null,inst_32266__$1,change);
var inst_32269 = (inst_32267) || (inst_32268);
var state_32306__$1 = (function (){var statearr_32341 = state_32306;
(statearr_32341[(15)] = inst_32266__$1);

(statearr_32341[(8)] = inst_32265__$1);

return statearr_32341;
})();
if(cljs.core.truth_(inst_32269)){
var statearr_32342_32380 = state_32306__$1;
(statearr_32342_32380[(1)] = (11));

} else {
var statearr_32343_32381 = state_32306__$1;
(statearr_32343_32381[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (18))){
var inst_32266 = (state_32306[(15)]);
var inst_32260 = (state_32306[(17)]);
var inst_32261 = (state_32306[(16)]);
var inst_32283 = cljs.core.empty_QMARK_.call(null,inst_32261);
var inst_32284 = inst_32260.call(null,inst_32266);
var inst_32285 = cljs.core.not.call(null,inst_32284);
var inst_32286 = (inst_32283) && (inst_32285);
var state_32306__$1 = state_32306;
var statearr_32344_32382 = state_32306__$1;
(statearr_32344_32382[(2)] = inst_32286);

(statearr_32344_32382[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32307 === (8))){
var inst_32250 = (state_32306[(7)]);
var state_32306__$1 = state_32306;
var statearr_32345_32383 = state_32306__$1;
(statearr_32345_32383[(2)] = inst_32250);

(statearr_32345_32383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20663__auto__,c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_32349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32349[(0)] = state_machine__20664__auto__);

(statearr_32349[(1)] = (1));

return statearr_32349;
});
var state_machine__20664__auto____1 = (function (state_32306){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_32306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e32350){if((e32350 instanceof Object)){
var ex__20667__auto__ = e32350;
var statearr_32351_32384 = state_32306;
(statearr_32351_32384[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32385 = state_32306;
state_32306 = G__32385;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_32306){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_32306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20721__auto__ = (function (){var statearr_32352 = f__20720__auto__.call(null);
(statearr_32352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___32353);

return statearr_32352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___32353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj32387 = {};
return obj32387;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17606__auto__ = p;
if(and__17606__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17606__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18262__auto__ = (((p == null))?null:p);
return (function (){var or__17618__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__17606__auto__ = p;
if(and__17606__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17606__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18262__auto__ = (((p == null))?null:p);
return (function (){var or__17618__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__17606__auto__ = p;
if(and__17606__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17606__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18262__auto__ = (((p == null))?null:p);
return (function (){var or__17618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17606__auto__ = p;
if(and__17606__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17606__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18262__auto__ = (((p == null))?null:p);
return (function (){var or__17618__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18262__auto__)]);
if(or__17618__auto__){
return or__17618__auto__;
} else {
var or__17618__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17618__auto____$1){
return or__17618__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17618__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17618__auto__,mults){
return (function (p1__32388_SHARP_){
if(cljs.core.truth_(p1__32388_SHARP_.call(null,topic))){
return p1__32388_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32388_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17618__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32511 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32512){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32512 = meta32512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32511.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32511.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32513){
var self__ = this;
var _32513__$1 = this;
return self__.meta32512;
});})(mults,ensure_mult))
;

cljs.core.async.t32511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32513,meta32512__$1){
var self__ = this;
var _32513__$1 = this;
return (new cljs.core.async.t32511(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32512__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32511.cljs$lang$type = true;

cljs.core.async.t32511.cljs$lang$ctorStr = "cljs.core.async/t32511";

cljs.core.async.t32511.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t32511");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32511 = ((function (mults,ensure_mult){
return (function __GT_t32511(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32512){
return (new cljs.core.async.t32511(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32512));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32511(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20719__auto___32633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___32633,mults,ensure_mult,p){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___32633,mults,ensure_mult,p){
return (function (state_32585){
var state_val_32586 = (state_32585[(1)]);
if((state_val_32586 === (7))){
var inst_32581 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32587_32634 = state_32585__$1;
(statearr_32587_32634[(2)] = inst_32581);

(statearr_32587_32634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (20))){
var state_32585__$1 = state_32585;
var statearr_32588_32635 = state_32585__$1;
(statearr_32588_32635[(2)] = null);

(statearr_32588_32635[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (1))){
var state_32585__$1 = state_32585;
var statearr_32589_32636 = state_32585__$1;
(statearr_32589_32636[(2)] = null);

(statearr_32589_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (24))){
var inst_32564 = (state_32585[(7)]);
var inst_32573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32564);
var state_32585__$1 = state_32585;
var statearr_32590_32637 = state_32585__$1;
(statearr_32590_32637[(2)] = inst_32573);

(statearr_32590_32637[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (4))){
var inst_32516 = (state_32585[(8)]);
var inst_32516__$1 = (state_32585[(2)]);
var inst_32517 = (inst_32516__$1 == null);
var state_32585__$1 = (function (){var statearr_32591 = state_32585;
(statearr_32591[(8)] = inst_32516__$1);

return statearr_32591;
})();
if(cljs.core.truth_(inst_32517)){
var statearr_32592_32638 = state_32585__$1;
(statearr_32592_32638[(1)] = (5));

} else {
var statearr_32593_32639 = state_32585__$1;
(statearr_32593_32639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (15))){
var inst_32558 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32594_32640 = state_32585__$1;
(statearr_32594_32640[(2)] = inst_32558);

(statearr_32594_32640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (21))){
var inst_32578 = (state_32585[(2)]);
var state_32585__$1 = (function (){var statearr_32595 = state_32585;
(statearr_32595[(9)] = inst_32578);

return statearr_32595;
})();
var statearr_32596_32641 = state_32585__$1;
(statearr_32596_32641[(2)] = null);

(statearr_32596_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (13))){
var inst_32540 = (state_32585[(10)]);
var inst_32542 = cljs.core.chunked_seq_QMARK_.call(null,inst_32540);
var state_32585__$1 = state_32585;
if(inst_32542){
var statearr_32597_32642 = state_32585__$1;
(statearr_32597_32642[(1)] = (16));

} else {
var statearr_32598_32643 = state_32585__$1;
(statearr_32598_32643[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (22))){
var inst_32570 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
if(cljs.core.truth_(inst_32570)){
var statearr_32599_32644 = state_32585__$1;
(statearr_32599_32644[(1)] = (23));

} else {
var statearr_32600_32645 = state_32585__$1;
(statearr_32600_32645[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (6))){
var inst_32564 = (state_32585[(7)]);
var inst_32566 = (state_32585[(11)]);
var inst_32516 = (state_32585[(8)]);
var inst_32564__$1 = topic_fn.call(null,inst_32516);
var inst_32565 = cljs.core.deref.call(null,mults);
var inst_32566__$1 = cljs.core.get.call(null,inst_32565,inst_32564__$1);
var state_32585__$1 = (function (){var statearr_32601 = state_32585;
(statearr_32601[(7)] = inst_32564__$1);

(statearr_32601[(11)] = inst_32566__$1);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32566__$1)){
var statearr_32602_32646 = state_32585__$1;
(statearr_32602_32646[(1)] = (19));

} else {
var statearr_32603_32647 = state_32585__$1;
(statearr_32603_32647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (25))){
var inst_32575 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32604_32648 = state_32585__$1;
(statearr_32604_32648[(2)] = inst_32575);

(statearr_32604_32648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (17))){
var inst_32540 = (state_32585[(10)]);
var inst_32549 = cljs.core.first.call(null,inst_32540);
var inst_32550 = cljs.core.async.muxch_STAR_.call(null,inst_32549);
var inst_32551 = cljs.core.async.close_BANG_.call(null,inst_32550);
var inst_32552 = cljs.core.next.call(null,inst_32540);
var inst_32526 = inst_32552;
var inst_32527 = null;
var inst_32528 = (0);
var inst_32529 = (0);
var state_32585__$1 = (function (){var statearr_32605 = state_32585;
(statearr_32605[(12)] = inst_32526);

(statearr_32605[(13)] = inst_32527);

(statearr_32605[(14)] = inst_32528);

(statearr_32605[(15)] = inst_32551);

(statearr_32605[(16)] = inst_32529);

return statearr_32605;
})();
var statearr_32606_32649 = state_32585__$1;
(statearr_32606_32649[(2)] = null);

(statearr_32606_32649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (3))){
var inst_32583 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32585__$1,inst_32583);
} else {
if((state_val_32586 === (12))){
var inst_32560 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32607_32650 = state_32585__$1;
(statearr_32607_32650[(2)] = inst_32560);

(statearr_32607_32650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (2))){
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32585__$1,(4),ch);
} else {
if((state_val_32586 === (23))){
var state_32585__$1 = state_32585;
var statearr_32608_32651 = state_32585__$1;
(statearr_32608_32651[(2)] = null);

(statearr_32608_32651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (19))){
var inst_32566 = (state_32585[(11)]);
var inst_32516 = (state_32585[(8)]);
var inst_32568 = cljs.core.async.muxch_STAR_.call(null,inst_32566);
var state_32585__$1 = state_32585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32585__$1,(22),inst_32568,inst_32516);
} else {
if((state_val_32586 === (11))){
var inst_32526 = (state_32585[(12)]);
var inst_32540 = (state_32585[(10)]);
var inst_32540__$1 = cljs.core.seq.call(null,inst_32526);
var state_32585__$1 = (function (){var statearr_32609 = state_32585;
(statearr_32609[(10)] = inst_32540__$1);

return statearr_32609;
})();
if(inst_32540__$1){
var statearr_32610_32652 = state_32585__$1;
(statearr_32610_32652[(1)] = (13));

} else {
var statearr_32611_32653 = state_32585__$1;
(statearr_32611_32653[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (9))){
var inst_32562 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32612_32654 = state_32585__$1;
(statearr_32612_32654[(2)] = inst_32562);

(statearr_32612_32654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (5))){
var inst_32523 = cljs.core.deref.call(null,mults);
var inst_32524 = cljs.core.vals.call(null,inst_32523);
var inst_32525 = cljs.core.seq.call(null,inst_32524);
var inst_32526 = inst_32525;
var inst_32527 = null;
var inst_32528 = (0);
var inst_32529 = (0);
var state_32585__$1 = (function (){var statearr_32613 = state_32585;
(statearr_32613[(12)] = inst_32526);

(statearr_32613[(13)] = inst_32527);

(statearr_32613[(14)] = inst_32528);

(statearr_32613[(16)] = inst_32529);

return statearr_32613;
})();
var statearr_32614_32655 = state_32585__$1;
(statearr_32614_32655[(2)] = null);

(statearr_32614_32655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (14))){
var state_32585__$1 = state_32585;
var statearr_32618_32656 = state_32585__$1;
(statearr_32618_32656[(2)] = null);

(statearr_32618_32656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (16))){
var inst_32540 = (state_32585[(10)]);
var inst_32544 = cljs.core.chunk_first.call(null,inst_32540);
var inst_32545 = cljs.core.chunk_rest.call(null,inst_32540);
var inst_32546 = cljs.core.count.call(null,inst_32544);
var inst_32526 = inst_32545;
var inst_32527 = inst_32544;
var inst_32528 = inst_32546;
var inst_32529 = (0);
var state_32585__$1 = (function (){var statearr_32619 = state_32585;
(statearr_32619[(12)] = inst_32526);

(statearr_32619[(13)] = inst_32527);

(statearr_32619[(14)] = inst_32528);

(statearr_32619[(16)] = inst_32529);

return statearr_32619;
})();
var statearr_32620_32657 = state_32585__$1;
(statearr_32620_32657[(2)] = null);

(statearr_32620_32657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (10))){
var inst_32526 = (state_32585[(12)]);
var inst_32527 = (state_32585[(13)]);
var inst_32528 = (state_32585[(14)]);
var inst_32529 = (state_32585[(16)]);
var inst_32534 = cljs.core._nth.call(null,inst_32527,inst_32529);
var inst_32535 = cljs.core.async.muxch_STAR_.call(null,inst_32534);
var inst_32536 = cljs.core.async.close_BANG_.call(null,inst_32535);
var inst_32537 = (inst_32529 + (1));
var tmp32615 = inst_32526;
var tmp32616 = inst_32527;
var tmp32617 = inst_32528;
var inst_32526__$1 = tmp32615;
var inst_32527__$1 = tmp32616;
var inst_32528__$1 = tmp32617;
var inst_32529__$1 = inst_32537;
var state_32585__$1 = (function (){var statearr_32621 = state_32585;
(statearr_32621[(12)] = inst_32526__$1);

(statearr_32621[(13)] = inst_32527__$1);

(statearr_32621[(14)] = inst_32528__$1);

(statearr_32621[(16)] = inst_32529__$1);

(statearr_32621[(17)] = inst_32536);

return statearr_32621;
})();
var statearr_32622_32658 = state_32585__$1;
(statearr_32622_32658[(2)] = null);

(statearr_32622_32658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (18))){
var inst_32555 = (state_32585[(2)]);
var state_32585__$1 = state_32585;
var statearr_32623_32659 = state_32585__$1;
(statearr_32623_32659[(2)] = inst_32555);

(statearr_32623_32659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32586 === (8))){
var inst_32528 = (state_32585[(14)]);
var inst_32529 = (state_32585[(16)]);
var inst_32531 = (inst_32529 < inst_32528);
var inst_32532 = inst_32531;
var state_32585__$1 = state_32585;
if(cljs.core.truth_(inst_32532)){
var statearr_32624_32660 = state_32585__$1;
(statearr_32624_32660[(1)] = (10));

} else {
var statearr_32625_32661 = state_32585__$1;
(statearr_32625_32661[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___32633,mults,ensure_mult,p))
;
return ((function (switch__20663__auto__,c__20719__auto___32633,mults,ensure_mult,p){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_32629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32629[(0)] = state_machine__20664__auto__);

(statearr_32629[(1)] = (1));

return statearr_32629;
});
var state_machine__20664__auto____1 = (function (state_32585){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_32585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e32630){if((e32630 instanceof Object)){
var ex__20667__auto__ = e32630;
var statearr_32631_32662 = state_32585;
(statearr_32631_32662[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32663 = state_32585;
state_32585 = G__32663;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_32585){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_32585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___32633,mults,ensure_mult,p))
})();
var state__20721__auto__ = (function (){var statearr_32632 = f__20720__auto__.call(null);
(statearr_32632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___32633);

return statearr_32632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___32633,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20719__auto___32800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32770){
var state_val_32771 = (state_32770[(1)]);
if((state_val_32771 === (7))){
var state_32770__$1 = state_32770;
var statearr_32772_32801 = state_32770__$1;
(statearr_32772_32801[(2)] = null);

(statearr_32772_32801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (1))){
var state_32770__$1 = state_32770;
var statearr_32773_32802 = state_32770__$1;
(statearr_32773_32802[(2)] = null);

(statearr_32773_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (4))){
var inst_32734 = (state_32770[(7)]);
var inst_32736 = (inst_32734 < cnt);
var state_32770__$1 = state_32770;
if(cljs.core.truth_(inst_32736)){
var statearr_32774_32803 = state_32770__$1;
(statearr_32774_32803[(1)] = (6));

} else {
var statearr_32775_32804 = state_32770__$1;
(statearr_32775_32804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (15))){
var inst_32766 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32776_32805 = state_32770__$1;
(statearr_32776_32805[(2)] = inst_32766);

(statearr_32776_32805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (13))){
var inst_32759 = cljs.core.async.close_BANG_.call(null,out);
var state_32770__$1 = state_32770;
var statearr_32777_32806 = state_32770__$1;
(statearr_32777_32806[(2)] = inst_32759);

(statearr_32777_32806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (6))){
var state_32770__$1 = state_32770;
var statearr_32778_32807 = state_32770__$1;
(statearr_32778_32807[(2)] = null);

(statearr_32778_32807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (3))){
var inst_32768 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32770__$1,inst_32768);
} else {
if((state_val_32771 === (12))){
var inst_32756 = (state_32770[(8)]);
var inst_32756__$1 = (state_32770[(2)]);
var inst_32757 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32756__$1);
var state_32770__$1 = (function (){var statearr_32779 = state_32770;
(statearr_32779[(8)] = inst_32756__$1);

return statearr_32779;
})();
if(cljs.core.truth_(inst_32757)){
var statearr_32780_32808 = state_32770__$1;
(statearr_32780_32808[(1)] = (13));

} else {
var statearr_32781_32809 = state_32770__$1;
(statearr_32781_32809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (2))){
var inst_32733 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32734 = (0);
var state_32770__$1 = (function (){var statearr_32782 = state_32770;
(statearr_32782[(7)] = inst_32734);

(statearr_32782[(9)] = inst_32733);

return statearr_32782;
})();
var statearr_32783_32810 = state_32770__$1;
(statearr_32783_32810[(2)] = null);

(statearr_32783_32810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (11))){
var inst_32734 = (state_32770[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32770,(10),Object,null,(9));
var inst_32743 = chs__$1.call(null,inst_32734);
var inst_32744 = done.call(null,inst_32734);
var inst_32745 = cljs.core.async.take_BANG_.call(null,inst_32743,inst_32744);
var state_32770__$1 = state_32770;
var statearr_32784_32811 = state_32770__$1;
(statearr_32784_32811[(2)] = inst_32745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32770__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (9))){
var inst_32734 = (state_32770[(7)]);
var inst_32747 = (state_32770[(2)]);
var inst_32748 = (inst_32734 + (1));
var inst_32734__$1 = inst_32748;
var state_32770__$1 = (function (){var statearr_32785 = state_32770;
(statearr_32785[(10)] = inst_32747);

(statearr_32785[(7)] = inst_32734__$1);

return statearr_32785;
})();
var statearr_32786_32812 = state_32770__$1;
(statearr_32786_32812[(2)] = null);

(statearr_32786_32812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (5))){
var inst_32754 = (state_32770[(2)]);
var state_32770__$1 = (function (){var statearr_32787 = state_32770;
(statearr_32787[(11)] = inst_32754);

return statearr_32787;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32770__$1,(12),dchan);
} else {
if((state_val_32771 === (14))){
var inst_32756 = (state_32770[(8)]);
var inst_32761 = cljs.core.apply.call(null,f,inst_32756);
var state_32770__$1 = state_32770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32770__$1,(16),out,inst_32761);
} else {
if((state_val_32771 === (16))){
var inst_32763 = (state_32770[(2)]);
var state_32770__$1 = (function (){var statearr_32788 = state_32770;
(statearr_32788[(12)] = inst_32763);

return statearr_32788;
})();
var statearr_32789_32813 = state_32770__$1;
(statearr_32789_32813[(2)] = null);

(statearr_32789_32813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (10))){
var inst_32738 = (state_32770[(2)]);
var inst_32739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32770__$1 = (function (){var statearr_32790 = state_32770;
(statearr_32790[(13)] = inst_32738);

return statearr_32790;
})();
var statearr_32791_32814 = state_32770__$1;
(statearr_32791_32814[(2)] = inst_32739);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32770__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32771 === (8))){
var inst_32752 = (state_32770[(2)]);
var state_32770__$1 = state_32770;
var statearr_32792_32815 = state_32770__$1;
(statearr_32792_32815[(2)] = inst_32752);

(statearr_32792_32815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20663__auto__,c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_32796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32796[(0)] = state_machine__20664__auto__);

(statearr_32796[(1)] = (1));

return statearr_32796;
});
var state_machine__20664__auto____1 = (function (state_32770){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_32770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e32797){if((e32797 instanceof Object)){
var ex__20667__auto__ = e32797;
var statearr_32798_32816 = state_32770;
(statearr_32798_32816[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32817 = state_32770;
state_32770 = G__32817;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_32770){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_32770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20721__auto__ = (function (){var statearr_32799 = f__20720__auto__.call(null);
(statearr_32799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___32800);

return statearr_32799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___32800,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___32925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___32925,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___32925,out){
return (function (state_32901){
var state_val_32902 = (state_32901[(1)]);
if((state_val_32902 === (7))){
var inst_32881 = (state_32901[(7)]);
var inst_32880 = (state_32901[(8)]);
var inst_32880__$1 = (state_32901[(2)]);
var inst_32881__$1 = cljs.core.nth.call(null,inst_32880__$1,(0),null);
var inst_32882 = cljs.core.nth.call(null,inst_32880__$1,(1),null);
var inst_32883 = (inst_32881__$1 == null);
var state_32901__$1 = (function (){var statearr_32903 = state_32901;
(statearr_32903[(9)] = inst_32882);

(statearr_32903[(7)] = inst_32881__$1);

(statearr_32903[(8)] = inst_32880__$1);

return statearr_32903;
})();
if(cljs.core.truth_(inst_32883)){
var statearr_32904_32926 = state_32901__$1;
(statearr_32904_32926[(1)] = (8));

} else {
var statearr_32905_32927 = state_32901__$1;
(statearr_32905_32927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (1))){
var inst_32872 = cljs.core.vec.call(null,chs);
var inst_32873 = inst_32872;
var state_32901__$1 = (function (){var statearr_32906 = state_32901;
(statearr_32906[(10)] = inst_32873);

return statearr_32906;
})();
var statearr_32907_32928 = state_32901__$1;
(statearr_32907_32928[(2)] = null);

(statearr_32907_32928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (4))){
var inst_32873 = (state_32901[(10)]);
var state_32901__$1 = state_32901;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32901__$1,(7),inst_32873);
} else {
if((state_val_32902 === (6))){
var inst_32897 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32908_32929 = state_32901__$1;
(statearr_32908_32929[(2)] = inst_32897);

(statearr_32908_32929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (3))){
var inst_32899 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32901__$1,inst_32899);
} else {
if((state_val_32902 === (2))){
var inst_32873 = (state_32901[(10)]);
var inst_32875 = cljs.core.count.call(null,inst_32873);
var inst_32876 = (inst_32875 > (0));
var state_32901__$1 = state_32901;
if(cljs.core.truth_(inst_32876)){
var statearr_32910_32930 = state_32901__$1;
(statearr_32910_32930[(1)] = (4));

} else {
var statearr_32911_32931 = state_32901__$1;
(statearr_32911_32931[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (11))){
var inst_32873 = (state_32901[(10)]);
var inst_32890 = (state_32901[(2)]);
var tmp32909 = inst_32873;
var inst_32873__$1 = tmp32909;
var state_32901__$1 = (function (){var statearr_32912 = state_32901;
(statearr_32912[(11)] = inst_32890);

(statearr_32912[(10)] = inst_32873__$1);

return statearr_32912;
})();
var statearr_32913_32932 = state_32901__$1;
(statearr_32913_32932[(2)] = null);

(statearr_32913_32932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (9))){
var inst_32881 = (state_32901[(7)]);
var state_32901__$1 = state_32901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32901__$1,(11),out,inst_32881);
} else {
if((state_val_32902 === (5))){
var inst_32895 = cljs.core.async.close_BANG_.call(null,out);
var state_32901__$1 = state_32901;
var statearr_32914_32933 = state_32901__$1;
(statearr_32914_32933[(2)] = inst_32895);

(statearr_32914_32933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (10))){
var inst_32893 = (state_32901[(2)]);
var state_32901__$1 = state_32901;
var statearr_32915_32934 = state_32901__$1;
(statearr_32915_32934[(2)] = inst_32893);

(statearr_32915_32934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32902 === (8))){
var inst_32882 = (state_32901[(9)]);
var inst_32881 = (state_32901[(7)]);
var inst_32873 = (state_32901[(10)]);
var inst_32880 = (state_32901[(8)]);
var inst_32885 = (function (){var c = inst_32882;
var v = inst_32881;
var vec__32878 = inst_32880;
var cs = inst_32873;
return ((function (c,v,vec__32878,cs,inst_32882,inst_32881,inst_32873,inst_32880,state_val_32902,c__20719__auto___32925,out){
return (function (p1__32818_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32818_SHARP_);
});
;})(c,v,vec__32878,cs,inst_32882,inst_32881,inst_32873,inst_32880,state_val_32902,c__20719__auto___32925,out))
})();
var inst_32886 = cljs.core.filterv.call(null,inst_32885,inst_32873);
var inst_32873__$1 = inst_32886;
var state_32901__$1 = (function (){var statearr_32916 = state_32901;
(statearr_32916[(10)] = inst_32873__$1);

return statearr_32916;
})();
var statearr_32917_32935 = state_32901__$1;
(statearr_32917_32935[(2)] = null);

(statearr_32917_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___32925,out))
;
return ((function (switch__20663__auto__,c__20719__auto___32925,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_32921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32921[(0)] = state_machine__20664__auto__);

(statearr_32921[(1)] = (1));

return statearr_32921;
});
var state_machine__20664__auto____1 = (function (state_32901){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_32901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e32922){if((e32922 instanceof Object)){
var ex__20667__auto__ = e32922;
var statearr_32923_32936 = state_32901;
(statearr_32923_32936[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32937 = state_32901;
state_32901 = G__32937;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_32901){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_32901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___32925,out))
})();
var state__20721__auto__ = (function (){var statearr_32924 = f__20720__auto__.call(null);
(statearr_32924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___32925);

return statearr_32924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___32925,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___33030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___33030,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___33030,out){
return (function (state_33007){
var state_val_33008 = (state_33007[(1)]);
if((state_val_33008 === (7))){
var inst_32989 = (state_33007[(7)]);
var inst_32989__$1 = (state_33007[(2)]);
var inst_32990 = (inst_32989__$1 == null);
var inst_32991 = cljs.core.not.call(null,inst_32990);
var state_33007__$1 = (function (){var statearr_33009 = state_33007;
(statearr_33009[(7)] = inst_32989__$1);

return statearr_33009;
})();
if(inst_32991){
var statearr_33010_33031 = state_33007__$1;
(statearr_33010_33031[(1)] = (8));

} else {
var statearr_33011_33032 = state_33007__$1;
(statearr_33011_33032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (1))){
var inst_32984 = (0);
var state_33007__$1 = (function (){var statearr_33012 = state_33007;
(statearr_33012[(8)] = inst_32984);

return statearr_33012;
})();
var statearr_33013_33033 = state_33007__$1;
(statearr_33013_33033[(2)] = null);

(statearr_33013_33033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (4))){
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33007__$1,(7),ch);
} else {
if((state_val_33008 === (6))){
var inst_33002 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33014_33034 = state_33007__$1;
(statearr_33014_33034[(2)] = inst_33002);

(statearr_33014_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (3))){
var inst_33004 = (state_33007[(2)]);
var inst_33005 = cljs.core.async.close_BANG_.call(null,out);
var state_33007__$1 = (function (){var statearr_33015 = state_33007;
(statearr_33015[(9)] = inst_33004);

return statearr_33015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33007__$1,inst_33005);
} else {
if((state_val_33008 === (2))){
var inst_32984 = (state_33007[(8)]);
var inst_32986 = (inst_32984 < n);
var state_33007__$1 = state_33007;
if(cljs.core.truth_(inst_32986)){
var statearr_33016_33035 = state_33007__$1;
(statearr_33016_33035[(1)] = (4));

} else {
var statearr_33017_33036 = state_33007__$1;
(statearr_33017_33036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (11))){
var inst_32984 = (state_33007[(8)]);
var inst_32994 = (state_33007[(2)]);
var inst_32995 = (inst_32984 + (1));
var inst_32984__$1 = inst_32995;
var state_33007__$1 = (function (){var statearr_33018 = state_33007;
(statearr_33018[(8)] = inst_32984__$1);

(statearr_33018[(10)] = inst_32994);

return statearr_33018;
})();
var statearr_33019_33037 = state_33007__$1;
(statearr_33019_33037[(2)] = null);

(statearr_33019_33037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (9))){
var state_33007__$1 = state_33007;
var statearr_33020_33038 = state_33007__$1;
(statearr_33020_33038[(2)] = null);

(statearr_33020_33038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (5))){
var state_33007__$1 = state_33007;
var statearr_33021_33039 = state_33007__$1;
(statearr_33021_33039[(2)] = null);

(statearr_33021_33039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (10))){
var inst_32999 = (state_33007[(2)]);
var state_33007__$1 = state_33007;
var statearr_33022_33040 = state_33007__$1;
(statearr_33022_33040[(2)] = inst_32999);

(statearr_33022_33040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33008 === (8))){
var inst_32989 = (state_33007[(7)]);
var state_33007__$1 = state_33007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33007__$1,(11),out,inst_32989);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___33030,out))
;
return ((function (switch__20663__auto__,c__20719__auto___33030,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33026[(0)] = state_machine__20664__auto__);

(statearr_33026[(1)] = (1));

return statearr_33026;
});
var state_machine__20664__auto____1 = (function (state_33007){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33027){if((e33027 instanceof Object)){
var ex__20667__auto__ = e33027;
var statearr_33028_33041 = state_33007;
(statearr_33028_33041[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33042 = state_33007;
state_33007 = G__33042;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33007){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___33030,out))
})();
var state__20721__auto__ = (function (){var statearr_33029 = f__20720__auto__.call(null);
(statearr_33029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___33030);

return statearr_33029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___33030,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t33050 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33050 = (function (ch,f,map_LT_,meta33051){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33051 = meta33051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33053 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33053 = (function (fn1,_,meta33051,map_LT_,f,ch,meta33054){
this.fn1 = fn1;
this._ = _;
this.meta33051 = meta33051;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33054 = meta33054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33053.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33043_SHARP_){
return f1.call(null,(((p1__33043_SHARP_ == null))?null:self__.f.call(null,p1__33043_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33053.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33055){
var self__ = this;
var _33055__$1 = this;
return self__.meta33054;
});})(___$1))
;

cljs.core.async.t33053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33055,meta33054__$1){
var self__ = this;
var _33055__$1 = this;
return (new cljs.core.async.t33053(self__.fn1,self__._,self__.meta33051,self__.map_LT_,self__.f,self__.ch,meta33054__$1));
});})(___$1))
;

cljs.core.async.t33053.cljs$lang$type = true;

cljs.core.async.t33053.cljs$lang$ctorStr = "cljs.core.async/t33053";

cljs.core.async.t33053.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t33053");
});})(___$1))
;

cljs.core.async.__GT_t33053 = ((function (___$1){
return (function __GT_t33053(fn1__$1,___$2,meta33051__$1,map_LT___$1,f__$1,ch__$1,meta33054){
return (new cljs.core.async.t33053(fn1__$1,___$2,meta33051__$1,map_LT___$1,f__$1,ch__$1,meta33054));
});})(___$1))
;

}

return (new cljs.core.async.t33053(fn1,___$1,self__.meta33051,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17606__auto__ = ret;
if(cljs.core.truth_(and__17606__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17606__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33050.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33052){
var self__ = this;
var _33052__$1 = this;
return self__.meta33051;
});

cljs.core.async.t33050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33052,meta33051__$1){
var self__ = this;
var _33052__$1 = this;
return (new cljs.core.async.t33050(self__.ch,self__.f,self__.map_LT_,meta33051__$1));
});

cljs.core.async.t33050.cljs$lang$type = true;

cljs.core.async.t33050.cljs$lang$ctorStr = "cljs.core.async/t33050";

cljs.core.async.t33050.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t33050");
});

cljs.core.async.__GT_t33050 = (function __GT_t33050(ch__$1,f__$1,map_LT___$1,meta33051){
return (new cljs.core.async.t33050(ch__$1,f__$1,map_LT___$1,meta33051));
});

}

return (new cljs.core.async.t33050(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33059 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33059 = (function (ch,f,map_GT_,meta33060){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33060 = meta33060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33059.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33061){
var self__ = this;
var _33061__$1 = this;
return self__.meta33060;
});

cljs.core.async.t33059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33061,meta33060__$1){
var self__ = this;
var _33061__$1 = this;
return (new cljs.core.async.t33059(self__.ch,self__.f,self__.map_GT_,meta33060__$1));
});

cljs.core.async.t33059.cljs$lang$type = true;

cljs.core.async.t33059.cljs$lang$ctorStr = "cljs.core.async/t33059";

cljs.core.async.t33059.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t33059");
});

cljs.core.async.__GT_t33059 = (function __GT_t33059(ch__$1,f__$1,map_GT___$1,meta33060){
return (new cljs.core.async.t33059(ch__$1,f__$1,map_GT___$1,meta33060));
});

}

return (new cljs.core.async.t33059(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33065 = (function (ch,p,filter_GT_,meta33066){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33066 = meta33066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33065.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33067){
var self__ = this;
var _33067__$1 = this;
return self__.meta33066;
});

cljs.core.async.t33065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33067,meta33066__$1){
var self__ = this;
var _33067__$1 = this;
return (new cljs.core.async.t33065(self__.ch,self__.p,self__.filter_GT_,meta33066__$1));
});

cljs.core.async.t33065.cljs$lang$type = true;

cljs.core.async.t33065.cljs$lang$ctorStr = "cljs.core.async/t33065";

cljs.core.async.t33065.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"cljs.core.async/t33065");
});

cljs.core.async.__GT_t33065 = (function __GT_t33065(ch__$1,p__$1,filter_GT___$1,meta33066){
return (new cljs.core.async.t33065(ch__$1,p__$1,filter_GT___$1,meta33066));
});

}

return (new cljs.core.async.t33065(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___33150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___33150,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___33150,out){
return (function (state_33129){
var state_val_33130 = (state_33129[(1)]);
if((state_val_33130 === (7))){
var inst_33125 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33131_33151 = state_33129__$1;
(statearr_33131_33151[(2)] = inst_33125);

(statearr_33131_33151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (1))){
var state_33129__$1 = state_33129;
var statearr_33132_33152 = state_33129__$1;
(statearr_33132_33152[(2)] = null);

(statearr_33132_33152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (4))){
var inst_33111 = (state_33129[(7)]);
var inst_33111__$1 = (state_33129[(2)]);
var inst_33112 = (inst_33111__$1 == null);
var state_33129__$1 = (function (){var statearr_33133 = state_33129;
(statearr_33133[(7)] = inst_33111__$1);

return statearr_33133;
})();
if(cljs.core.truth_(inst_33112)){
var statearr_33134_33153 = state_33129__$1;
(statearr_33134_33153[(1)] = (5));

} else {
var statearr_33135_33154 = state_33129__$1;
(statearr_33135_33154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (6))){
var inst_33111 = (state_33129[(7)]);
var inst_33116 = p.call(null,inst_33111);
var state_33129__$1 = state_33129;
if(cljs.core.truth_(inst_33116)){
var statearr_33136_33155 = state_33129__$1;
(statearr_33136_33155[(1)] = (8));

} else {
var statearr_33137_33156 = state_33129__$1;
(statearr_33137_33156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (3))){
var inst_33127 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33129__$1,inst_33127);
} else {
if((state_val_33130 === (2))){
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33129__$1,(4),ch);
} else {
if((state_val_33130 === (11))){
var inst_33119 = (state_33129[(2)]);
var state_33129__$1 = state_33129;
var statearr_33138_33157 = state_33129__$1;
(statearr_33138_33157[(2)] = inst_33119);

(statearr_33138_33157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (9))){
var state_33129__$1 = state_33129;
var statearr_33139_33158 = state_33129__$1;
(statearr_33139_33158[(2)] = null);

(statearr_33139_33158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (5))){
var inst_33114 = cljs.core.async.close_BANG_.call(null,out);
var state_33129__$1 = state_33129;
var statearr_33140_33159 = state_33129__$1;
(statearr_33140_33159[(2)] = inst_33114);

(statearr_33140_33159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (10))){
var inst_33122 = (state_33129[(2)]);
var state_33129__$1 = (function (){var statearr_33141 = state_33129;
(statearr_33141[(8)] = inst_33122);

return statearr_33141;
})();
var statearr_33142_33160 = state_33129__$1;
(statearr_33142_33160[(2)] = null);

(statearr_33142_33160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33130 === (8))){
var inst_33111 = (state_33129[(7)]);
var state_33129__$1 = state_33129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33129__$1,(11),out,inst_33111);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___33150,out))
;
return ((function (switch__20663__auto__,c__20719__auto___33150,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33146 = [null,null,null,null,null,null,null,null,null];
(statearr_33146[(0)] = state_machine__20664__auto__);

(statearr_33146[(1)] = (1));

return statearr_33146;
});
var state_machine__20664__auto____1 = (function (state_33129){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33147){if((e33147 instanceof Object)){
var ex__20667__auto__ = e33147;
var statearr_33148_33161 = state_33129;
(statearr_33148_33161[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33162 = state_33129;
state_33129 = G__33162;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33129){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___33150,out))
})();
var state__20721__auto__ = (function (){var statearr_33149 = f__20720__auto__.call(null);
(statearr_33149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___33150);

return statearr_33149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___33150,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__){
return (function (state_33328){
var state_val_33329 = (state_33328[(1)]);
if((state_val_33329 === (7))){
var inst_33324 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33330_33371 = state_33328__$1;
(statearr_33330_33371[(2)] = inst_33324);

(statearr_33330_33371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (20))){
var inst_33294 = (state_33328[(7)]);
var inst_33305 = (state_33328[(2)]);
var inst_33306 = cljs.core.next.call(null,inst_33294);
var inst_33280 = inst_33306;
var inst_33281 = null;
var inst_33282 = (0);
var inst_33283 = (0);
var state_33328__$1 = (function (){var statearr_33331 = state_33328;
(statearr_33331[(8)] = inst_33282);

(statearr_33331[(9)] = inst_33280);

(statearr_33331[(10)] = inst_33283);

(statearr_33331[(11)] = inst_33281);

(statearr_33331[(12)] = inst_33305);

return statearr_33331;
})();
var statearr_33332_33372 = state_33328__$1;
(statearr_33332_33372[(2)] = null);

(statearr_33332_33372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (1))){
var state_33328__$1 = state_33328;
var statearr_33333_33373 = state_33328__$1;
(statearr_33333_33373[(2)] = null);

(statearr_33333_33373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (4))){
var inst_33269 = (state_33328[(13)]);
var inst_33269__$1 = (state_33328[(2)]);
var inst_33270 = (inst_33269__$1 == null);
var state_33328__$1 = (function (){var statearr_33334 = state_33328;
(statearr_33334[(13)] = inst_33269__$1);

return statearr_33334;
})();
if(cljs.core.truth_(inst_33270)){
var statearr_33335_33374 = state_33328__$1;
(statearr_33335_33374[(1)] = (5));

} else {
var statearr_33336_33375 = state_33328__$1;
(statearr_33336_33375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (15))){
var state_33328__$1 = state_33328;
var statearr_33340_33376 = state_33328__$1;
(statearr_33340_33376[(2)] = null);

(statearr_33340_33376[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (21))){
var state_33328__$1 = state_33328;
var statearr_33341_33377 = state_33328__$1;
(statearr_33341_33377[(2)] = null);

(statearr_33341_33377[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (13))){
var inst_33282 = (state_33328[(8)]);
var inst_33280 = (state_33328[(9)]);
var inst_33283 = (state_33328[(10)]);
var inst_33281 = (state_33328[(11)]);
var inst_33290 = (state_33328[(2)]);
var inst_33291 = (inst_33283 + (1));
var tmp33337 = inst_33282;
var tmp33338 = inst_33280;
var tmp33339 = inst_33281;
var inst_33280__$1 = tmp33338;
var inst_33281__$1 = tmp33339;
var inst_33282__$1 = tmp33337;
var inst_33283__$1 = inst_33291;
var state_33328__$1 = (function (){var statearr_33342 = state_33328;
(statearr_33342[(8)] = inst_33282__$1);

(statearr_33342[(9)] = inst_33280__$1);

(statearr_33342[(14)] = inst_33290);

(statearr_33342[(10)] = inst_33283__$1);

(statearr_33342[(11)] = inst_33281__$1);

return statearr_33342;
})();
var statearr_33343_33378 = state_33328__$1;
(statearr_33343_33378[(2)] = null);

(statearr_33343_33378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (22))){
var state_33328__$1 = state_33328;
var statearr_33344_33379 = state_33328__$1;
(statearr_33344_33379[(2)] = null);

(statearr_33344_33379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (6))){
var inst_33269 = (state_33328[(13)]);
var inst_33278 = f.call(null,inst_33269);
var inst_33279 = cljs.core.seq.call(null,inst_33278);
var inst_33280 = inst_33279;
var inst_33281 = null;
var inst_33282 = (0);
var inst_33283 = (0);
var state_33328__$1 = (function (){var statearr_33345 = state_33328;
(statearr_33345[(8)] = inst_33282);

(statearr_33345[(9)] = inst_33280);

(statearr_33345[(10)] = inst_33283);

(statearr_33345[(11)] = inst_33281);

return statearr_33345;
})();
var statearr_33346_33380 = state_33328__$1;
(statearr_33346_33380[(2)] = null);

(statearr_33346_33380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (17))){
var inst_33294 = (state_33328[(7)]);
var inst_33298 = cljs.core.chunk_first.call(null,inst_33294);
var inst_33299 = cljs.core.chunk_rest.call(null,inst_33294);
var inst_33300 = cljs.core.count.call(null,inst_33298);
var inst_33280 = inst_33299;
var inst_33281 = inst_33298;
var inst_33282 = inst_33300;
var inst_33283 = (0);
var state_33328__$1 = (function (){var statearr_33347 = state_33328;
(statearr_33347[(8)] = inst_33282);

(statearr_33347[(9)] = inst_33280);

(statearr_33347[(10)] = inst_33283);

(statearr_33347[(11)] = inst_33281);

return statearr_33347;
})();
var statearr_33348_33381 = state_33328__$1;
(statearr_33348_33381[(2)] = null);

(statearr_33348_33381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (3))){
var inst_33326 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33328__$1,inst_33326);
} else {
if((state_val_33329 === (12))){
var inst_33314 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33349_33382 = state_33328__$1;
(statearr_33349_33382[(2)] = inst_33314);

(statearr_33349_33382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (2))){
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33328__$1,(4),in$);
} else {
if((state_val_33329 === (23))){
var inst_33322 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33350_33383 = state_33328__$1;
(statearr_33350_33383[(2)] = inst_33322);

(statearr_33350_33383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (19))){
var inst_33309 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33351_33384 = state_33328__$1;
(statearr_33351_33384[(2)] = inst_33309);

(statearr_33351_33384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (11))){
var inst_33280 = (state_33328[(9)]);
var inst_33294 = (state_33328[(7)]);
var inst_33294__$1 = cljs.core.seq.call(null,inst_33280);
var state_33328__$1 = (function (){var statearr_33352 = state_33328;
(statearr_33352[(7)] = inst_33294__$1);

return statearr_33352;
})();
if(inst_33294__$1){
var statearr_33353_33385 = state_33328__$1;
(statearr_33353_33385[(1)] = (14));

} else {
var statearr_33354_33386 = state_33328__$1;
(statearr_33354_33386[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (9))){
var inst_33316 = (state_33328[(2)]);
var inst_33317 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33328__$1 = (function (){var statearr_33355 = state_33328;
(statearr_33355[(15)] = inst_33316);

return statearr_33355;
})();
if(cljs.core.truth_(inst_33317)){
var statearr_33356_33387 = state_33328__$1;
(statearr_33356_33387[(1)] = (21));

} else {
var statearr_33357_33388 = state_33328__$1;
(statearr_33357_33388[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (5))){
var inst_33272 = cljs.core.async.close_BANG_.call(null,out);
var state_33328__$1 = state_33328;
var statearr_33358_33389 = state_33328__$1;
(statearr_33358_33389[(2)] = inst_33272);

(statearr_33358_33389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (14))){
var inst_33294 = (state_33328[(7)]);
var inst_33296 = cljs.core.chunked_seq_QMARK_.call(null,inst_33294);
var state_33328__$1 = state_33328;
if(inst_33296){
var statearr_33359_33390 = state_33328__$1;
(statearr_33359_33390[(1)] = (17));

} else {
var statearr_33360_33391 = state_33328__$1;
(statearr_33360_33391[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (16))){
var inst_33312 = (state_33328[(2)]);
var state_33328__$1 = state_33328;
var statearr_33361_33392 = state_33328__$1;
(statearr_33361_33392[(2)] = inst_33312);

(statearr_33361_33392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33329 === (10))){
var inst_33283 = (state_33328[(10)]);
var inst_33281 = (state_33328[(11)]);
var inst_33288 = cljs.core._nth.call(null,inst_33281,inst_33283);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33328__$1,(13),out,inst_33288);
} else {
if((state_val_33329 === (18))){
var inst_33294 = (state_33328[(7)]);
var inst_33303 = cljs.core.first.call(null,inst_33294);
var state_33328__$1 = state_33328;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33328__$1,(20),out,inst_33303);
} else {
if((state_val_33329 === (8))){
var inst_33282 = (state_33328[(8)]);
var inst_33283 = (state_33328[(10)]);
var inst_33285 = (inst_33283 < inst_33282);
var inst_33286 = inst_33285;
var state_33328__$1 = state_33328;
if(cljs.core.truth_(inst_33286)){
var statearr_33362_33393 = state_33328__$1;
(statearr_33362_33393[(1)] = (10));

} else {
var statearr_33363_33394 = state_33328__$1;
(statearr_33363_33394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto__))
;
return ((function (switch__20663__auto__,c__20719__auto__){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33367 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33367[(0)] = state_machine__20664__auto__);

(statearr_33367[(1)] = (1));

return statearr_33367;
});
var state_machine__20664__auto____1 = (function (state_33328){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33368){if((e33368 instanceof Object)){
var ex__20667__auto__ = e33368;
var statearr_33369_33395 = state_33328;
(statearr_33369_33395[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33396 = state_33328;
state_33328 = G__33396;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33328){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__))
})();
var state__20721__auto__ = (function (){var statearr_33370 = f__20720__auto__.call(null);
(statearr_33370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_33370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__))
);

return c__20719__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___33493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___33493,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___33493,out){
return (function (state_33468){
var state_val_33469 = (state_33468[(1)]);
if((state_val_33469 === (7))){
var inst_33463 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33470_33494 = state_33468__$1;
(statearr_33470_33494[(2)] = inst_33463);

(statearr_33470_33494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (1))){
var inst_33445 = null;
var state_33468__$1 = (function (){var statearr_33471 = state_33468;
(statearr_33471[(7)] = inst_33445);

return statearr_33471;
})();
var statearr_33472_33495 = state_33468__$1;
(statearr_33472_33495[(2)] = null);

(statearr_33472_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (4))){
var inst_33448 = (state_33468[(8)]);
var inst_33448__$1 = (state_33468[(2)]);
var inst_33449 = (inst_33448__$1 == null);
var inst_33450 = cljs.core.not.call(null,inst_33449);
var state_33468__$1 = (function (){var statearr_33473 = state_33468;
(statearr_33473[(8)] = inst_33448__$1);

return statearr_33473;
})();
if(inst_33450){
var statearr_33474_33496 = state_33468__$1;
(statearr_33474_33496[(1)] = (5));

} else {
var statearr_33475_33497 = state_33468__$1;
(statearr_33475_33497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (6))){
var state_33468__$1 = state_33468;
var statearr_33476_33498 = state_33468__$1;
(statearr_33476_33498[(2)] = null);

(statearr_33476_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (3))){
var inst_33465 = (state_33468[(2)]);
var inst_33466 = cljs.core.async.close_BANG_.call(null,out);
var state_33468__$1 = (function (){var statearr_33477 = state_33468;
(statearr_33477[(9)] = inst_33465);

return statearr_33477;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33468__$1,inst_33466);
} else {
if((state_val_33469 === (2))){
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33468__$1,(4),ch);
} else {
if((state_val_33469 === (11))){
var inst_33448 = (state_33468[(8)]);
var inst_33457 = (state_33468[(2)]);
var inst_33445 = inst_33448;
var state_33468__$1 = (function (){var statearr_33478 = state_33468;
(statearr_33478[(7)] = inst_33445);

(statearr_33478[(10)] = inst_33457);

return statearr_33478;
})();
var statearr_33479_33499 = state_33468__$1;
(statearr_33479_33499[(2)] = null);

(statearr_33479_33499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (9))){
var inst_33448 = (state_33468[(8)]);
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33468__$1,(11),out,inst_33448);
} else {
if((state_val_33469 === (5))){
var inst_33448 = (state_33468[(8)]);
var inst_33445 = (state_33468[(7)]);
var inst_33452 = cljs.core._EQ_.call(null,inst_33448,inst_33445);
var state_33468__$1 = state_33468;
if(inst_33452){
var statearr_33481_33500 = state_33468__$1;
(statearr_33481_33500[(1)] = (8));

} else {
var statearr_33482_33501 = state_33468__$1;
(statearr_33482_33501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (10))){
var inst_33460 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33483_33502 = state_33468__$1;
(statearr_33483_33502[(2)] = inst_33460);

(statearr_33483_33502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (8))){
var inst_33445 = (state_33468[(7)]);
var tmp33480 = inst_33445;
var inst_33445__$1 = tmp33480;
var state_33468__$1 = (function (){var statearr_33484 = state_33468;
(statearr_33484[(7)] = inst_33445__$1);

return statearr_33484;
})();
var statearr_33485_33503 = state_33468__$1;
(statearr_33485_33503[(2)] = null);

(statearr_33485_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___33493,out))
;
return ((function (switch__20663__auto__,c__20719__auto___33493,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33489 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33489[(0)] = state_machine__20664__auto__);

(statearr_33489[(1)] = (1));

return statearr_33489;
});
var state_machine__20664__auto____1 = (function (state_33468){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33490){if((e33490 instanceof Object)){
var ex__20667__auto__ = e33490;
var statearr_33491_33504 = state_33468;
(statearr_33491_33504[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33505 = state_33468;
state_33468 = G__33505;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33468){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___33493,out))
})();
var state__20721__auto__ = (function (){var statearr_33492 = f__20720__auto__.call(null);
(statearr_33492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___33493);

return statearr_33492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___33493,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___33640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___33640,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___33640,out){
return (function (state_33610){
var state_val_33611 = (state_33610[(1)]);
if((state_val_33611 === (7))){
var inst_33606 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33612_33641 = state_33610__$1;
(statearr_33612_33641[(2)] = inst_33606);

(statearr_33612_33641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (1))){
var inst_33573 = (new Array(n));
var inst_33574 = inst_33573;
var inst_33575 = (0);
var state_33610__$1 = (function (){var statearr_33613 = state_33610;
(statearr_33613[(7)] = inst_33574);

(statearr_33613[(8)] = inst_33575);

return statearr_33613;
})();
var statearr_33614_33642 = state_33610__$1;
(statearr_33614_33642[(2)] = null);

(statearr_33614_33642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (4))){
var inst_33578 = (state_33610[(9)]);
var inst_33578__$1 = (state_33610[(2)]);
var inst_33579 = (inst_33578__$1 == null);
var inst_33580 = cljs.core.not.call(null,inst_33579);
var state_33610__$1 = (function (){var statearr_33615 = state_33610;
(statearr_33615[(9)] = inst_33578__$1);

return statearr_33615;
})();
if(inst_33580){
var statearr_33616_33643 = state_33610__$1;
(statearr_33616_33643[(1)] = (5));

} else {
var statearr_33617_33644 = state_33610__$1;
(statearr_33617_33644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (15))){
var inst_33600 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33618_33645 = state_33610__$1;
(statearr_33618_33645[(2)] = inst_33600);

(statearr_33618_33645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (13))){
var state_33610__$1 = state_33610;
var statearr_33619_33646 = state_33610__$1;
(statearr_33619_33646[(2)] = null);

(statearr_33619_33646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (6))){
var inst_33575 = (state_33610[(8)]);
var inst_33596 = (inst_33575 > (0));
var state_33610__$1 = state_33610;
if(cljs.core.truth_(inst_33596)){
var statearr_33620_33647 = state_33610__$1;
(statearr_33620_33647[(1)] = (12));

} else {
var statearr_33621_33648 = state_33610__$1;
(statearr_33621_33648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (3))){
var inst_33608 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33610__$1,inst_33608);
} else {
if((state_val_33611 === (12))){
var inst_33574 = (state_33610[(7)]);
var inst_33598 = cljs.core.vec.call(null,inst_33574);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33610__$1,(15),out,inst_33598);
} else {
if((state_val_33611 === (2))){
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33610__$1,(4),ch);
} else {
if((state_val_33611 === (11))){
var inst_33590 = (state_33610[(2)]);
var inst_33591 = (new Array(n));
var inst_33574 = inst_33591;
var inst_33575 = (0);
var state_33610__$1 = (function (){var statearr_33622 = state_33610;
(statearr_33622[(7)] = inst_33574);

(statearr_33622[(8)] = inst_33575);

(statearr_33622[(10)] = inst_33590);

return statearr_33622;
})();
var statearr_33623_33649 = state_33610__$1;
(statearr_33623_33649[(2)] = null);

(statearr_33623_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (9))){
var inst_33574 = (state_33610[(7)]);
var inst_33588 = cljs.core.vec.call(null,inst_33574);
var state_33610__$1 = state_33610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33610__$1,(11),out,inst_33588);
} else {
if((state_val_33611 === (5))){
var inst_33583 = (state_33610[(11)]);
var inst_33578 = (state_33610[(9)]);
var inst_33574 = (state_33610[(7)]);
var inst_33575 = (state_33610[(8)]);
var inst_33582 = (inst_33574[inst_33575] = inst_33578);
var inst_33583__$1 = (inst_33575 + (1));
var inst_33584 = (inst_33583__$1 < n);
var state_33610__$1 = (function (){var statearr_33624 = state_33610;
(statearr_33624[(11)] = inst_33583__$1);

(statearr_33624[(12)] = inst_33582);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33584)){
var statearr_33625_33650 = state_33610__$1;
(statearr_33625_33650[(1)] = (8));

} else {
var statearr_33626_33651 = state_33610__$1;
(statearr_33626_33651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (14))){
var inst_33603 = (state_33610[(2)]);
var inst_33604 = cljs.core.async.close_BANG_.call(null,out);
var state_33610__$1 = (function (){var statearr_33628 = state_33610;
(statearr_33628[(13)] = inst_33603);

return statearr_33628;
})();
var statearr_33629_33652 = state_33610__$1;
(statearr_33629_33652[(2)] = inst_33604);

(statearr_33629_33652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (10))){
var inst_33594 = (state_33610[(2)]);
var state_33610__$1 = state_33610;
var statearr_33630_33653 = state_33610__$1;
(statearr_33630_33653[(2)] = inst_33594);

(statearr_33630_33653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33611 === (8))){
var inst_33583 = (state_33610[(11)]);
var inst_33574 = (state_33610[(7)]);
var tmp33627 = inst_33574;
var inst_33574__$1 = tmp33627;
var inst_33575 = inst_33583;
var state_33610__$1 = (function (){var statearr_33631 = state_33610;
(statearr_33631[(7)] = inst_33574__$1);

(statearr_33631[(8)] = inst_33575);

return statearr_33631;
})();
var statearr_33632_33654 = state_33610__$1;
(statearr_33632_33654[(2)] = null);

(statearr_33632_33654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___33640,out))
;
return ((function (switch__20663__auto__,c__20719__auto___33640,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33636[(0)] = state_machine__20664__auto__);

(statearr_33636[(1)] = (1));

return statearr_33636;
});
var state_machine__20664__auto____1 = (function (state_33610){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33637){if((e33637 instanceof Object)){
var ex__20667__auto__ = e33637;
var statearr_33638_33655 = state_33610;
(statearr_33638_33655[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33656 = state_33610;
state_33610 = G__33656;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33610){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___33640,out))
})();
var state__20721__auto__ = (function (){var statearr_33639 = f__20720__auto__.call(null);
(statearr_33639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___33640);

return statearr_33639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___33640,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20719__auto___33799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto___33799,out){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto___33799,out){
return (function (state_33769){
var state_val_33770 = (state_33769[(1)]);
if((state_val_33770 === (7))){
var inst_33765 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33771_33800 = state_33769__$1;
(statearr_33771_33800[(2)] = inst_33765);

(statearr_33771_33800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (1))){
var inst_33728 = [];
var inst_33729 = inst_33728;
var inst_33730 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33769__$1 = (function (){var statearr_33772 = state_33769;
(statearr_33772[(7)] = inst_33730);

(statearr_33772[(8)] = inst_33729);

return statearr_33772;
})();
var statearr_33773_33801 = state_33769__$1;
(statearr_33773_33801[(2)] = null);

(statearr_33773_33801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (4))){
var inst_33733 = (state_33769[(9)]);
var inst_33733__$1 = (state_33769[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var inst_33735 = cljs.core.not.call(null,inst_33734);
var state_33769__$1 = (function (){var statearr_33774 = state_33769;
(statearr_33774[(9)] = inst_33733__$1);

return statearr_33774;
})();
if(inst_33735){
var statearr_33775_33802 = state_33769__$1;
(statearr_33775_33802[(1)] = (5));

} else {
var statearr_33776_33803 = state_33769__$1;
(statearr_33776_33803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (15))){
var inst_33759 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33777_33804 = state_33769__$1;
(statearr_33777_33804[(2)] = inst_33759);

(statearr_33777_33804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (13))){
var state_33769__$1 = state_33769;
var statearr_33778_33805 = state_33769__$1;
(statearr_33778_33805[(2)] = null);

(statearr_33778_33805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (6))){
var inst_33729 = (state_33769[(8)]);
var inst_33754 = inst_33729.length;
var inst_33755 = (inst_33754 > (0));
var state_33769__$1 = state_33769;
if(cljs.core.truth_(inst_33755)){
var statearr_33779_33806 = state_33769__$1;
(statearr_33779_33806[(1)] = (12));

} else {
var statearr_33780_33807 = state_33769__$1;
(statearr_33780_33807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (3))){
var inst_33767 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33769__$1,inst_33767);
} else {
if((state_val_33770 === (12))){
var inst_33729 = (state_33769[(8)]);
var inst_33757 = cljs.core.vec.call(null,inst_33729);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33769__$1,(15),out,inst_33757);
} else {
if((state_val_33770 === (2))){
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33769__$1,(4),ch);
} else {
if((state_val_33770 === (11))){
var inst_33733 = (state_33769[(9)]);
var inst_33737 = (state_33769[(10)]);
var inst_33747 = (state_33769[(2)]);
var inst_33748 = [];
var inst_33749 = inst_33748.push(inst_33733);
var inst_33729 = inst_33748;
var inst_33730 = inst_33737;
var state_33769__$1 = (function (){var statearr_33781 = state_33769;
(statearr_33781[(11)] = inst_33749);

(statearr_33781[(7)] = inst_33730);

(statearr_33781[(8)] = inst_33729);

(statearr_33781[(12)] = inst_33747);

return statearr_33781;
})();
var statearr_33782_33808 = state_33769__$1;
(statearr_33782_33808[(2)] = null);

(statearr_33782_33808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (9))){
var inst_33729 = (state_33769[(8)]);
var inst_33745 = cljs.core.vec.call(null,inst_33729);
var state_33769__$1 = state_33769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33769__$1,(11),out,inst_33745);
} else {
if((state_val_33770 === (5))){
var inst_33733 = (state_33769[(9)]);
var inst_33730 = (state_33769[(7)]);
var inst_33737 = (state_33769[(10)]);
var inst_33737__$1 = f.call(null,inst_33733);
var inst_33738 = cljs.core._EQ_.call(null,inst_33737__$1,inst_33730);
var inst_33739 = cljs.core.keyword_identical_QMARK_.call(null,inst_33730,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33740 = (inst_33738) || (inst_33739);
var state_33769__$1 = (function (){var statearr_33783 = state_33769;
(statearr_33783[(10)] = inst_33737__$1);

return statearr_33783;
})();
if(cljs.core.truth_(inst_33740)){
var statearr_33784_33809 = state_33769__$1;
(statearr_33784_33809[(1)] = (8));

} else {
var statearr_33785_33810 = state_33769__$1;
(statearr_33785_33810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (14))){
var inst_33762 = (state_33769[(2)]);
var inst_33763 = cljs.core.async.close_BANG_.call(null,out);
var state_33769__$1 = (function (){var statearr_33787 = state_33769;
(statearr_33787[(13)] = inst_33762);

return statearr_33787;
})();
var statearr_33788_33811 = state_33769__$1;
(statearr_33788_33811[(2)] = inst_33763);

(statearr_33788_33811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (10))){
var inst_33752 = (state_33769[(2)]);
var state_33769__$1 = state_33769;
var statearr_33789_33812 = state_33769__$1;
(statearr_33789_33812[(2)] = inst_33752);

(statearr_33789_33812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33770 === (8))){
var inst_33733 = (state_33769[(9)]);
var inst_33729 = (state_33769[(8)]);
var inst_33737 = (state_33769[(10)]);
var inst_33742 = inst_33729.push(inst_33733);
var tmp33786 = inst_33729;
var inst_33729__$1 = tmp33786;
var inst_33730 = inst_33737;
var state_33769__$1 = (function (){var statearr_33790 = state_33769;
(statearr_33790[(7)] = inst_33730);

(statearr_33790[(14)] = inst_33742);

(statearr_33790[(8)] = inst_33729__$1);

return statearr_33790;
})();
var statearr_33791_33813 = state_33769__$1;
(statearr_33791_33813[(2)] = null);

(statearr_33791_33813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20719__auto___33799,out))
;
return ((function (switch__20663__auto__,c__20719__auto___33799,out){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33795[(0)] = state_machine__20664__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var state_machine__20664__auto____1 = (function (state_33769){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_33769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e33796){if((e33796 instanceof Object)){
var ex__20667__auto__ = e33796;
var statearr_33797_33814 = state_33769;
(statearr_33797_33814[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33815 = state_33769;
state_33769 = G__33815;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_33769){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_33769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto___33799,out))
})();
var state__20721__auto__ = (function (){var statearr_33798 = f__20720__auto__.call(null);
(statearr_33798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto___33799);

return statearr_33798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto___33799,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map