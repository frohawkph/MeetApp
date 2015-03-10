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
if(typeof cljs.core.async.t31322 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31322 = (function (f,fn_handler,meta31323){
this.f = f;
this.fn_handler = fn_handler;
this.meta31323 = meta31323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31322.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31324){
var self__ = this;
var _31324__$1 = this;
return self__.meta31323;
});

cljs.core.async.t31322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31324,meta31323__$1){
var self__ = this;
var _31324__$1 = this;
return (new cljs.core.async.t31322(self__.f,self__.fn_handler,meta31323__$1));
});

cljs.core.async.t31322.cljs$lang$type = true;

cljs.core.async.t31322.cljs$lang$ctorStr = "cljs.core.async/t31322";

cljs.core.async.t31322.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31322");
});

cljs.core.async.__GT_t31322 = (function __GT_t31322(f__$1,fn_handler__$1,meta31323){
return (new cljs.core.async.t31322(f__$1,fn_handler__$1,meta31323));
});

}

return (new cljs.core.async.t31322(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31326 = buff;
if(G__31326){
var bit__16339__auto__ = null;
if(cljs.core.truth_((function (){var or__15658__auto__ = bit__16339__auto__;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return G__31326.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31326.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31326);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31326);
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
var val_31327 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31327);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31327,ret){
return (function (){
return fn1.call(null,val_31327);
});})(val_31327,ret))
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
var n__16545__auto___31328 = n;
var x_31329 = (0);
while(true){
if((x_31329 < n__16545__auto___31328)){
(a[x_31329] = (0));

var G__31330 = (x_31329 + (1));
x_31329 = G__31330;
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

var G__31331 = (i + (1));
i = G__31331;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31335 = (function (flag,alt_flag,meta31336){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31336 = meta31336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31335.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31337){
var self__ = this;
var _31337__$1 = this;
return self__.meta31336;
});})(flag))
;

cljs.core.async.t31335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31337,meta31336__$1){
var self__ = this;
var _31337__$1 = this;
return (new cljs.core.async.t31335(self__.flag,self__.alt_flag,meta31336__$1));
});})(flag))
;

cljs.core.async.t31335.cljs$lang$type = true;

cljs.core.async.t31335.cljs$lang$ctorStr = "cljs.core.async/t31335";

cljs.core.async.t31335.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31335");
});})(flag))
;

cljs.core.async.__GT_t31335 = ((function (flag){
return (function __GT_t31335(flag__$1,alt_flag__$1,meta31336){
return (new cljs.core.async.t31335(flag__$1,alt_flag__$1,meta31336));
});})(flag))
;

}

return (new cljs.core.async.t31335(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31341 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31341 = (function (cb,flag,alt_handler,meta31342){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31342 = meta31342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31343){
var self__ = this;
var _31343__$1 = this;
return self__.meta31342;
});

cljs.core.async.t31341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31343,meta31342__$1){
var self__ = this;
var _31343__$1 = this;
return (new cljs.core.async.t31341(self__.cb,self__.flag,self__.alt_handler,meta31342__$1));
});

cljs.core.async.t31341.cljs$lang$type = true;

cljs.core.async.t31341.cljs$lang$ctorStr = "cljs.core.async/t31341";

cljs.core.async.t31341.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31341");
});

cljs.core.async.__GT_t31341 = (function __GT_t31341(cb__$1,flag__$1,alt_handler__$1,meta31342){
return (new cljs.core.async.t31341(cb__$1,flag__$1,alt_handler__$1,meta31342));
});

}

return (new cljs.core.async.t31341(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31344_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31345_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31345_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15658__auto__ = wport;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31346 = (i + (1));
i = G__31346;
continue;
}
} else {
return null;
}
break;
}
})();
var or__15658__auto__ = ret;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__15646__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__15646__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__15646__auto__;
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
var alts_BANG___delegate = function (ports,p__31347){
var map__31349 = p__31347;
var map__31349__$1 = ((cljs.core.seq_QMARK_.call(null,map__31349))?cljs.core.apply.call(null,cljs.core.hash_map,map__31349):map__31349);
var opts = map__31349__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31347 = null;
if (arguments.length > 1) {
var G__31350__i = 0, G__31350__a = new Array(arguments.length -  1);
while (G__31350__i < G__31350__a.length) {G__31350__a[G__31350__i] = arguments[G__31350__i + 1]; ++G__31350__i;}
  p__31347 = new cljs.core.IndexedSeq(G__31350__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31347);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31351){
var ports = cljs.core.first(arglist__31351);
var p__31347 = cljs.core.rest(arglist__31351);
return alts_BANG___delegate(ports,p__31347);
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
var c__18806__auto___31446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___31446){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___31446){
return (function (state_31422){
var state_val_31423 = (state_31422[(1)]);
if((state_val_31423 === (7))){
var inst_31418 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31424_31447 = state_31422__$1;
(statearr_31424_31447[(2)] = inst_31418);

(statearr_31424_31447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (1))){
var state_31422__$1 = state_31422;
var statearr_31425_31448 = state_31422__$1;
(statearr_31425_31448[(2)] = null);

(statearr_31425_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (4))){
var inst_31401 = (state_31422[(7)]);
var inst_31401__$1 = (state_31422[(2)]);
var inst_31402 = (inst_31401__$1 == null);
var state_31422__$1 = (function (){var statearr_31426 = state_31422;
(statearr_31426[(7)] = inst_31401__$1);

return statearr_31426;
})();
if(cljs.core.truth_(inst_31402)){
var statearr_31427_31449 = state_31422__$1;
(statearr_31427_31449[(1)] = (5));

} else {
var statearr_31428_31450 = state_31422__$1;
(statearr_31428_31450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (13))){
var state_31422__$1 = state_31422;
var statearr_31429_31451 = state_31422__$1;
(statearr_31429_31451[(2)] = null);

(statearr_31429_31451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (6))){
var inst_31401 = (state_31422[(7)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31422__$1,(11),to,inst_31401);
} else {
if((state_val_31423 === (3))){
var inst_31420 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31422__$1,inst_31420);
} else {
if((state_val_31423 === (12))){
var state_31422__$1 = state_31422;
var statearr_31430_31452 = state_31422__$1;
(statearr_31430_31452[(2)] = null);

(statearr_31430_31452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (2))){
var state_31422__$1 = state_31422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31422__$1,(4),from);
} else {
if((state_val_31423 === (11))){
var inst_31411 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
if(cljs.core.truth_(inst_31411)){
var statearr_31431_31453 = state_31422__$1;
(statearr_31431_31453[(1)] = (12));

} else {
var statearr_31432_31454 = state_31422__$1;
(statearr_31432_31454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (9))){
var state_31422__$1 = state_31422;
var statearr_31433_31455 = state_31422__$1;
(statearr_31433_31455[(2)] = null);

(statearr_31433_31455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (5))){
var state_31422__$1 = state_31422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31434_31456 = state_31422__$1;
(statearr_31434_31456[(1)] = (8));

} else {
var statearr_31435_31457 = state_31422__$1;
(statearr_31435_31457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (14))){
var inst_31416 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31436_31458 = state_31422__$1;
(statearr_31436_31458[(2)] = inst_31416);

(statearr_31436_31458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (10))){
var inst_31408 = (state_31422[(2)]);
var state_31422__$1 = state_31422;
var statearr_31437_31459 = state_31422__$1;
(statearr_31437_31459[(2)] = inst_31408);

(statearr_31437_31459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31423 === (8))){
var inst_31405 = cljs.core.async.close_BANG_.call(null,to);
var state_31422__$1 = state_31422;
var statearr_31438_31460 = state_31422__$1;
(statearr_31438_31460[(2)] = inst_31405);

(statearr_31438_31460[(1)] = (10));


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
});})(c__18806__auto___31446))
;
return ((function (switch__18750__auto__,c__18806__auto___31446){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31442 = [null,null,null,null,null,null,null,null];
(statearr_31442[(0)] = state_machine__18751__auto__);

(statearr_31442[(1)] = (1));

return statearr_31442;
});
var state_machine__18751__auto____1 = (function (state_31422){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31443){if((e31443 instanceof Object)){
var ex__18754__auto__ = e31443;
var statearr_31444_31461 = state_31422;
(statearr_31444_31461[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31462 = state_31422;
state_31422 = G__31462;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31422){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___31446))
})();
var state__18808__auto__ = (function (){var statearr_31445 = f__18807__auto__.call(null);
(statearr_31445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31446);

return statearr_31445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___31446))
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
return (function (p__31646){
var vec__31647 = p__31646;
var v = cljs.core.nth.call(null,vec__31647,(0),null);
var p = cljs.core.nth.call(null,vec__31647,(1),null);
var job = vec__31647;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18806__auto___31829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results){
return (function (state_31652){
var state_val_31653 = (state_31652[(1)]);
if((state_val_31653 === (2))){
var inst_31649 = (state_31652[(2)]);
var inst_31650 = cljs.core.async.close_BANG_.call(null,res);
var state_31652__$1 = (function (){var statearr_31654 = state_31652;
(statearr_31654[(7)] = inst_31649);

return statearr_31654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31652__$1,inst_31650);
} else {
if((state_val_31653 === (1))){
var state_31652__$1 = state_31652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31652__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results))
;
return ((function (switch__18750__auto__,c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31658 = [null,null,null,null,null,null,null,null];
(statearr_31658[(0)] = state_machine__18751__auto__);

(statearr_31658[(1)] = (1));

return statearr_31658;
});
var state_machine__18751__auto____1 = (function (state_31652){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31659){if((e31659 instanceof Object)){
var ex__18754__auto__ = e31659;
var statearr_31660_31830 = state_31652;
(statearr_31660_31830[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31831 = state_31652;
state_31652 = G__31831;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31652){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results))
})();
var state__18808__auto__ = (function (){var statearr_31661 = f__18807__auto__.call(null);
(statearr_31661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31829);

return statearr_31661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___31829,res,vec__31647,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31662){
var vec__31663 = p__31662;
var v = cljs.core.nth.call(null,vec__31663,(0),null);
var p = cljs.core.nth.call(null,vec__31663,(1),null);
var job = vec__31663;
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
var n__16545__auto___31832 = n;
var __31833 = (0);
while(true){
if((__31833 < n__16545__auto___31832)){
var G__31664_31834 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31664_31834) {
case "async":
var c__18806__auto___31836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31833,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (__31833,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function (state_31677){
var state_val_31678 = (state_31677[(1)]);
if((state_val_31678 === (7))){
var inst_31673 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
var statearr_31679_31837 = state_31677__$1;
(statearr_31679_31837[(2)] = inst_31673);

(statearr_31679_31837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (6))){
var state_31677__$1 = state_31677;
var statearr_31680_31838 = state_31677__$1;
(statearr_31680_31838[(2)] = null);

(statearr_31680_31838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (5))){
var state_31677__$1 = state_31677;
var statearr_31681_31839 = state_31677__$1;
(statearr_31681_31839[(2)] = null);

(statearr_31681_31839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (4))){
var inst_31667 = (state_31677[(2)]);
var inst_31668 = async.call(null,inst_31667);
var state_31677__$1 = state_31677;
if(cljs.core.truth_(inst_31668)){
var statearr_31682_31840 = state_31677__$1;
(statearr_31682_31840[(1)] = (5));

} else {
var statearr_31683_31841 = state_31677__$1;
(statearr_31683_31841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31678 === (3))){
var inst_31675 = (state_31677[(2)]);
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31677__$1,inst_31675);
} else {
if((state_val_31678 === (2))){
var state_31677__$1 = state_31677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31677__$1,(4),jobs);
} else {
if((state_val_31678 === (1))){
var state_31677__$1 = state_31677;
var statearr_31684_31842 = state_31677__$1;
(statearr_31684_31842[(2)] = null);

(statearr_31684_31842[(1)] = (2));


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
});})(__31833,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
;
return ((function (__31833,switch__18750__auto__,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null];
(statearr_31688[(0)] = state_machine__18751__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var state_machine__18751__auto____1 = (function (state_31677){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__18754__auto__ = e31689;
var statearr_31690_31843 = state_31677;
(statearr_31690_31843[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31844 = state_31677;
state_31677 = G__31844;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31677){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(__31833,switch__18750__auto__,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
})();
var state__18808__auto__ = (function (){var statearr_31691 = f__18807__auto__.call(null);
(statearr_31691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31836);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(__31833,c__18806__auto___31836,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
);


break;
case "compute":
var c__18806__auto___31845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31833,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (__31833,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function (state_31704){
var state_val_31705 = (state_31704[(1)]);
if((state_val_31705 === (7))){
var inst_31700 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
var statearr_31706_31846 = state_31704__$1;
(statearr_31706_31846[(2)] = inst_31700);

(statearr_31706_31846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (6))){
var state_31704__$1 = state_31704;
var statearr_31707_31847 = state_31704__$1;
(statearr_31707_31847[(2)] = null);

(statearr_31707_31847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (5))){
var state_31704__$1 = state_31704;
var statearr_31708_31848 = state_31704__$1;
(statearr_31708_31848[(2)] = null);

(statearr_31708_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (4))){
var inst_31694 = (state_31704[(2)]);
var inst_31695 = process.call(null,inst_31694);
var state_31704__$1 = state_31704;
if(cljs.core.truth_(inst_31695)){
var statearr_31709_31849 = state_31704__$1;
(statearr_31709_31849[(1)] = (5));

} else {
var statearr_31710_31850 = state_31704__$1;
(statearr_31710_31850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31705 === (3))){
var inst_31702 = (state_31704[(2)]);
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31704__$1,inst_31702);
} else {
if((state_val_31705 === (2))){
var state_31704__$1 = state_31704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31704__$1,(4),jobs);
} else {
if((state_val_31705 === (1))){
var state_31704__$1 = state_31704;
var statearr_31711_31851 = state_31704__$1;
(statearr_31711_31851[(2)] = null);

(statearr_31711_31851[(1)] = (2));


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
});})(__31833,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
;
return ((function (__31833,switch__18750__auto__,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31715 = [null,null,null,null,null,null,null];
(statearr_31715[(0)] = state_machine__18751__auto__);

(statearr_31715[(1)] = (1));

return statearr_31715;
});
var state_machine__18751__auto____1 = (function (state_31704){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31716){if((e31716 instanceof Object)){
var ex__18754__auto__ = e31716;
var statearr_31717_31852 = state_31704;
(statearr_31717_31852[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31853 = state_31704;
state_31704 = G__31853;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31704){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(__31833,switch__18750__auto__,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
})();
var state__18808__auto__ = (function (){var statearr_31718 = f__18807__auto__.call(null);
(statearr_31718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31845);

return statearr_31718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(__31833,c__18806__auto___31845,G__31664_31834,n__16545__auto___31832,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31854 = (__31833 + (1));
__31833 = G__31854;
continue;
} else {
}
break;
}

var c__18806__auto___31855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___31855,jobs,results,process,async){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___31855,jobs,results,process,async){
return (function (state_31740){
var state_val_31741 = (state_31740[(1)]);
if((state_val_31741 === (9))){
var inst_31733 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31742 = state_31740;
(statearr_31742[(7)] = inst_31733);

return statearr_31742;
})();
var statearr_31743_31856 = state_31740__$1;
(statearr_31743_31856[(2)] = null);

(statearr_31743_31856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (8))){
var inst_31726 = (state_31740[(8)]);
var inst_31731 = (state_31740[(2)]);
var state_31740__$1 = (function (){var statearr_31744 = state_31740;
(statearr_31744[(9)] = inst_31731);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31740__$1,(9),results,inst_31726);
} else {
if((state_val_31741 === (7))){
var inst_31736 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
var statearr_31745_31857 = state_31740__$1;
(statearr_31745_31857[(2)] = inst_31736);

(statearr_31745_31857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (6))){
var inst_31721 = (state_31740[(10)]);
var inst_31726 = (state_31740[(8)]);
var inst_31726__$1 = cljs.core.async.chan.call(null,(1));
var inst_31727 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31728 = [inst_31721,inst_31726__$1];
var inst_31729 = (new cljs.core.PersistentVector(null,2,(5),inst_31727,inst_31728,null));
var state_31740__$1 = (function (){var statearr_31746 = state_31740;
(statearr_31746[(8)] = inst_31726__$1);

return statearr_31746;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31740__$1,(8),jobs,inst_31729);
} else {
if((state_val_31741 === (5))){
var inst_31724 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31740__$1 = state_31740;
var statearr_31747_31858 = state_31740__$1;
(statearr_31747_31858[(2)] = inst_31724);

(statearr_31747_31858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (4))){
var inst_31721 = (state_31740[(10)]);
var inst_31721__$1 = (state_31740[(2)]);
var inst_31722 = (inst_31721__$1 == null);
var state_31740__$1 = (function (){var statearr_31748 = state_31740;
(statearr_31748[(10)] = inst_31721__$1);

return statearr_31748;
})();
if(cljs.core.truth_(inst_31722)){
var statearr_31749_31859 = state_31740__$1;
(statearr_31749_31859[(1)] = (5));

} else {
var statearr_31750_31860 = state_31740__$1;
(statearr_31750_31860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31741 === (3))){
var inst_31738 = (state_31740[(2)]);
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31740__$1,inst_31738);
} else {
if((state_val_31741 === (2))){
var state_31740__$1 = state_31740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31740__$1,(4),from);
} else {
if((state_val_31741 === (1))){
var state_31740__$1 = state_31740;
var statearr_31751_31861 = state_31740__$1;
(statearr_31751_31861[(2)] = null);

(statearr_31751_31861[(1)] = (2));


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
});})(c__18806__auto___31855,jobs,results,process,async))
;
return ((function (switch__18750__auto__,c__18806__auto___31855,jobs,results,process,async){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31755 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31755[(0)] = state_machine__18751__auto__);

(statearr_31755[(1)] = (1));

return statearr_31755;
});
var state_machine__18751__auto____1 = (function (state_31740){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31756){if((e31756 instanceof Object)){
var ex__18754__auto__ = e31756;
var statearr_31757_31862 = state_31740;
(statearr_31757_31862[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31863 = state_31740;
state_31740 = G__31863;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31740){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___31855,jobs,results,process,async))
})();
var state__18808__auto__ = (function (){var statearr_31758 = f__18807__auto__.call(null);
(statearr_31758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31855);

return statearr_31758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___31855,jobs,results,process,async))
);


var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__,jobs,results,process,async){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__,jobs,results,process,async){
return (function (state_31796){
var state_val_31797 = (state_31796[(1)]);
if((state_val_31797 === (7))){
var inst_31792 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31798_31864 = state_31796__$1;
(statearr_31798_31864[(2)] = inst_31792);

(statearr_31798_31864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (20))){
var state_31796__$1 = state_31796;
var statearr_31799_31865 = state_31796__$1;
(statearr_31799_31865[(2)] = null);

(statearr_31799_31865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (1))){
var state_31796__$1 = state_31796;
var statearr_31800_31866 = state_31796__$1;
(statearr_31800_31866[(2)] = null);

(statearr_31800_31866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (4))){
var inst_31761 = (state_31796[(7)]);
var inst_31761__$1 = (state_31796[(2)]);
var inst_31762 = (inst_31761__$1 == null);
var state_31796__$1 = (function (){var statearr_31801 = state_31796;
(statearr_31801[(7)] = inst_31761__$1);

return statearr_31801;
})();
if(cljs.core.truth_(inst_31762)){
var statearr_31802_31867 = state_31796__$1;
(statearr_31802_31867[(1)] = (5));

} else {
var statearr_31803_31868 = state_31796__$1;
(statearr_31803_31868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (15))){
var inst_31774 = (state_31796[(8)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31796__$1,(18),to,inst_31774);
} else {
if((state_val_31797 === (21))){
var inst_31787 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31804_31869 = state_31796__$1;
(statearr_31804_31869[(2)] = inst_31787);

(statearr_31804_31869[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (13))){
var inst_31789 = (state_31796[(2)]);
var state_31796__$1 = (function (){var statearr_31805 = state_31796;
(statearr_31805[(9)] = inst_31789);

return statearr_31805;
})();
var statearr_31806_31870 = state_31796__$1;
(statearr_31806_31870[(2)] = null);

(statearr_31806_31870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (6))){
var inst_31761 = (state_31796[(7)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31796__$1,(11),inst_31761);
} else {
if((state_val_31797 === (17))){
var inst_31782 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
if(cljs.core.truth_(inst_31782)){
var statearr_31807_31871 = state_31796__$1;
(statearr_31807_31871[(1)] = (19));

} else {
var statearr_31808_31872 = state_31796__$1;
(statearr_31808_31872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (3))){
var inst_31794 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31796__$1,inst_31794);
} else {
if((state_val_31797 === (12))){
var inst_31771 = (state_31796[(10)]);
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31796__$1,(14),inst_31771);
} else {
if((state_val_31797 === (2))){
var state_31796__$1 = state_31796;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31796__$1,(4),results);
} else {
if((state_val_31797 === (19))){
var state_31796__$1 = state_31796;
var statearr_31809_31873 = state_31796__$1;
(statearr_31809_31873[(2)] = null);

(statearr_31809_31873[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (11))){
var inst_31771 = (state_31796[(2)]);
var state_31796__$1 = (function (){var statearr_31810 = state_31796;
(statearr_31810[(10)] = inst_31771);

return statearr_31810;
})();
var statearr_31811_31874 = state_31796__$1;
(statearr_31811_31874[(2)] = null);

(statearr_31811_31874[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (9))){
var state_31796__$1 = state_31796;
var statearr_31812_31875 = state_31796__$1;
(statearr_31812_31875[(2)] = null);

(statearr_31812_31875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (5))){
var state_31796__$1 = state_31796;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31813_31876 = state_31796__$1;
(statearr_31813_31876[(1)] = (8));

} else {
var statearr_31814_31877 = state_31796__$1;
(statearr_31814_31877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (14))){
var inst_31774 = (state_31796[(8)]);
var inst_31776 = (state_31796[(11)]);
var inst_31774__$1 = (state_31796[(2)]);
var inst_31775 = (inst_31774__$1 == null);
var inst_31776__$1 = cljs.core.not.call(null,inst_31775);
var state_31796__$1 = (function (){var statearr_31815 = state_31796;
(statearr_31815[(8)] = inst_31774__$1);

(statearr_31815[(11)] = inst_31776__$1);

return statearr_31815;
})();
if(inst_31776__$1){
var statearr_31816_31878 = state_31796__$1;
(statearr_31816_31878[(1)] = (15));

} else {
var statearr_31817_31879 = state_31796__$1;
(statearr_31817_31879[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (16))){
var inst_31776 = (state_31796[(11)]);
var state_31796__$1 = state_31796;
var statearr_31818_31880 = state_31796__$1;
(statearr_31818_31880[(2)] = inst_31776);

(statearr_31818_31880[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (10))){
var inst_31768 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31819_31881 = state_31796__$1;
(statearr_31819_31881[(2)] = inst_31768);

(statearr_31819_31881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (18))){
var inst_31779 = (state_31796[(2)]);
var state_31796__$1 = state_31796;
var statearr_31820_31882 = state_31796__$1;
(statearr_31820_31882[(2)] = inst_31779);

(statearr_31820_31882[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31797 === (8))){
var inst_31765 = cljs.core.async.close_BANG_.call(null,to);
var state_31796__$1 = state_31796;
var statearr_31821_31883 = state_31796__$1;
(statearr_31821_31883[(2)] = inst_31765);

(statearr_31821_31883[(1)] = (10));


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
});})(c__18806__auto__,jobs,results,process,async))
;
return ((function (switch__18750__auto__,c__18806__auto__,jobs,results,process,async){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = state_machine__18751__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var state_machine__18751__auto____1 = (function (state_31796){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31796);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__18754__auto__ = e31826;
var statearr_31827_31884 = state_31796;
(statearr_31827_31884[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31885 = state_31796;
state_31796 = G__31885;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31796){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__,jobs,results,process,async))
})();
var state__18808__auto__ = (function (){var statearr_31828 = f__18807__auto__.call(null);
(statearr_31828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__,jobs,results,process,async))
);

return c__18806__auto__;
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
var c__18806__auto___31986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___31986,tc,fc){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___31986,tc,fc){
return (function (state_31961){
var state_val_31962 = (state_31961[(1)]);
if((state_val_31962 === (7))){
var inst_31957 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31963_31987 = state_31961__$1;
(statearr_31963_31987[(2)] = inst_31957);

(statearr_31963_31987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (1))){
var state_31961__$1 = state_31961;
var statearr_31964_31988 = state_31961__$1;
(statearr_31964_31988[(2)] = null);

(statearr_31964_31988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (4))){
var inst_31938 = (state_31961[(7)]);
var inst_31938__$1 = (state_31961[(2)]);
var inst_31939 = (inst_31938__$1 == null);
var state_31961__$1 = (function (){var statearr_31965 = state_31961;
(statearr_31965[(7)] = inst_31938__$1);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31939)){
var statearr_31966_31989 = state_31961__$1;
(statearr_31966_31989[(1)] = (5));

} else {
var statearr_31967_31990 = state_31961__$1;
(statearr_31967_31990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (13))){
var state_31961__$1 = state_31961;
var statearr_31968_31991 = state_31961__$1;
(statearr_31968_31991[(2)] = null);

(statearr_31968_31991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (6))){
var inst_31938 = (state_31961[(7)]);
var inst_31944 = p.call(null,inst_31938);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31944)){
var statearr_31969_31992 = state_31961__$1;
(statearr_31969_31992[(1)] = (9));

} else {
var statearr_31970_31993 = state_31961__$1;
(statearr_31970_31993[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (3))){
var inst_31959 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31961__$1,inst_31959);
} else {
if((state_val_31962 === (12))){
var state_31961__$1 = state_31961;
var statearr_31971_31994 = state_31961__$1;
(statearr_31971_31994[(2)] = null);

(statearr_31971_31994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (2))){
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31961__$1,(4),ch);
} else {
if((state_val_31962 === (11))){
var inst_31938 = (state_31961[(7)]);
var inst_31948 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31961__$1,(8),inst_31948,inst_31938);
} else {
if((state_val_31962 === (9))){
var state_31961__$1 = state_31961;
var statearr_31972_31995 = state_31961__$1;
(statearr_31972_31995[(2)] = tc);

(statearr_31972_31995[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (5))){
var inst_31941 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31942 = cljs.core.async.close_BANG_.call(null,fc);
var state_31961__$1 = (function (){var statearr_31973 = state_31961;
(statearr_31973[(8)] = inst_31941);

return statearr_31973;
})();
var statearr_31974_31996 = state_31961__$1;
(statearr_31974_31996[(2)] = inst_31942);

(statearr_31974_31996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (14))){
var inst_31955 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
var statearr_31975_31997 = state_31961__$1;
(statearr_31975_31997[(2)] = inst_31955);

(statearr_31975_31997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (10))){
var state_31961__$1 = state_31961;
var statearr_31976_31998 = state_31961__$1;
(statearr_31976_31998[(2)] = fc);

(statearr_31976_31998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31962 === (8))){
var inst_31950 = (state_31961[(2)]);
var state_31961__$1 = state_31961;
if(cljs.core.truth_(inst_31950)){
var statearr_31977_31999 = state_31961__$1;
(statearr_31977_31999[(1)] = (12));

} else {
var statearr_31978_32000 = state_31961__$1;
(statearr_31978_32000[(1)] = (13));

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
});})(c__18806__auto___31986,tc,fc))
;
return ((function (switch__18750__auto__,c__18806__auto___31986,tc,fc){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31982 = [null,null,null,null,null,null,null,null,null];
(statearr_31982[(0)] = state_machine__18751__auto__);

(statearr_31982[(1)] = (1));

return statearr_31982;
});
var state_machine__18751__auto____1 = (function (state_31961){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31983){if((e31983 instanceof Object)){
var ex__18754__auto__ = e31983;
var statearr_31984_32001 = state_31961;
(statearr_31984_32001[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32002 = state_31961;
state_31961 = G__32002;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31961){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___31986,tc,fc))
})();
var state__18808__auto__ = (function (){var statearr_31985 = f__18807__auto__.call(null);
(statearr_31985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___31986);

return statearr_31985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___31986,tc,fc))
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
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_32049){
var state_val_32050 = (state_32049[(1)]);
if((state_val_32050 === (7))){
var inst_32045 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32051_32067 = state_32049__$1;
(statearr_32051_32067[(2)] = inst_32045);

(statearr_32051_32067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (6))){
var inst_32035 = (state_32049[(7)]);
var inst_32038 = (state_32049[(8)]);
var inst_32042 = f.call(null,inst_32035,inst_32038);
var inst_32035__$1 = inst_32042;
var state_32049__$1 = (function (){var statearr_32052 = state_32049;
(statearr_32052[(7)] = inst_32035__$1);

return statearr_32052;
})();
var statearr_32053_32068 = state_32049__$1;
(statearr_32053_32068[(2)] = null);

(statearr_32053_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (5))){
var inst_32035 = (state_32049[(7)]);
var state_32049__$1 = state_32049;
var statearr_32054_32069 = state_32049__$1;
(statearr_32054_32069[(2)] = inst_32035);

(statearr_32054_32069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (4))){
var inst_32038 = (state_32049[(8)]);
var inst_32038__$1 = (state_32049[(2)]);
var inst_32039 = (inst_32038__$1 == null);
var state_32049__$1 = (function (){var statearr_32055 = state_32049;
(statearr_32055[(8)] = inst_32038__$1);

return statearr_32055;
})();
if(cljs.core.truth_(inst_32039)){
var statearr_32056_32070 = state_32049__$1;
(statearr_32056_32070[(1)] = (5));

} else {
var statearr_32057_32071 = state_32049__$1;
(statearr_32057_32071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (3))){
var inst_32047 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32049__$1,inst_32047);
} else {
if((state_val_32050 === (2))){
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32049__$1,(4),ch);
} else {
if((state_val_32050 === (1))){
var inst_32035 = init;
var state_32049__$1 = (function (){var statearr_32058 = state_32049;
(statearr_32058[(7)] = inst_32035);

return statearr_32058;
})();
var statearr_32059_32072 = state_32049__$1;
(statearr_32059_32072[(2)] = null);

(statearr_32059_32072[(1)] = (2));


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
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = state_machine__18751__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var state_machine__18751__auto____1 = (function (state_32049){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_32049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e32064){if((e32064 instanceof Object)){
var ex__18754__auto__ = e32064;
var statearr_32065_32073 = state_32049;
(statearr_32065_32073[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32074 = state_32049;
state_32049 = G__32074;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_32049){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_32049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_32066 = f__18807__auto__.call(null);
(statearr_32066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
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
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_32148){
var state_val_32149 = (state_32148[(1)]);
if((state_val_32149 === (7))){
var inst_32130 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32150_32173 = state_32148__$1;
(statearr_32150_32173[(2)] = inst_32130);

(statearr_32150_32173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (1))){
var inst_32124 = cljs.core.seq.call(null,coll);
var inst_32125 = inst_32124;
var state_32148__$1 = (function (){var statearr_32151 = state_32148;
(statearr_32151[(7)] = inst_32125);

return statearr_32151;
})();
var statearr_32152_32174 = state_32148__$1;
(statearr_32152_32174[(2)] = null);

(statearr_32152_32174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (4))){
var inst_32125 = (state_32148[(7)]);
var inst_32128 = cljs.core.first.call(null,inst_32125);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32148__$1,(7),ch,inst_32128);
} else {
if((state_val_32149 === (13))){
var inst_32142 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32153_32175 = state_32148__$1;
(statearr_32153_32175[(2)] = inst_32142);

(statearr_32153_32175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (6))){
var inst_32133 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32133)){
var statearr_32154_32176 = state_32148__$1;
(statearr_32154_32176[(1)] = (8));

} else {
var statearr_32155_32177 = state_32148__$1;
(statearr_32155_32177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (3))){
var inst_32146 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32148__$1,inst_32146);
} else {
if((state_val_32149 === (12))){
var state_32148__$1 = state_32148;
var statearr_32156_32178 = state_32148__$1;
(statearr_32156_32178[(2)] = null);

(statearr_32156_32178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (2))){
var inst_32125 = (state_32148[(7)]);
var state_32148__$1 = state_32148;
if(cljs.core.truth_(inst_32125)){
var statearr_32157_32179 = state_32148__$1;
(statearr_32157_32179[(1)] = (4));

} else {
var statearr_32158_32180 = state_32148__$1;
(statearr_32158_32180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (11))){
var inst_32139 = cljs.core.async.close_BANG_.call(null,ch);
var state_32148__$1 = state_32148;
var statearr_32159_32181 = state_32148__$1;
(statearr_32159_32181[(2)] = inst_32139);

(statearr_32159_32181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (9))){
var state_32148__$1 = state_32148;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32160_32182 = state_32148__$1;
(statearr_32160_32182[(1)] = (11));

} else {
var statearr_32161_32183 = state_32148__$1;
(statearr_32161_32183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (5))){
var inst_32125 = (state_32148[(7)]);
var state_32148__$1 = state_32148;
var statearr_32162_32184 = state_32148__$1;
(statearr_32162_32184[(2)] = inst_32125);

(statearr_32162_32184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (10))){
var inst_32144 = (state_32148[(2)]);
var state_32148__$1 = state_32148;
var statearr_32163_32185 = state_32148__$1;
(statearr_32163_32185[(2)] = inst_32144);

(statearr_32163_32185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32149 === (8))){
var inst_32125 = (state_32148[(7)]);
var inst_32135 = cljs.core.next.call(null,inst_32125);
var inst_32125__$1 = inst_32135;
var state_32148__$1 = (function (){var statearr_32164 = state_32148;
(statearr_32164[(7)] = inst_32125__$1);

return statearr_32164;
})();
var statearr_32165_32186 = state_32148__$1;
(statearr_32165_32186[(2)] = null);

(statearr_32165_32186[(1)] = (2));


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
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_32169 = [null,null,null,null,null,null,null,null];
(statearr_32169[(0)] = state_machine__18751__auto__);

(statearr_32169[(1)] = (1));

return statearr_32169;
});
var state_machine__18751__auto____1 = (function (state_32148){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_32148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e32170){if((e32170 instanceof Object)){
var ex__18754__auto__ = e32170;
var statearr_32171_32187 = state_32148;
(statearr_32171_32187[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32188 = state_32148;
state_32148 = G__32188;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_32148){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_32148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_32172 = f__18807__auto__.call(null);
(statearr_32172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_32172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
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

cljs.core.async.Mux = (function (){var obj32190 = {};
return obj32190;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__15646__auto__ = _;
if(and__15646__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16302__auto__ = (((_ == null))?null:_);
return (function (){var or__15658__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32192 = {};
return obj32192;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
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
if(typeof cljs.core.async.t32414 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32414 = (function (cs,ch,mult,meta32415){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32415 = meta32415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32414.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32414.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32414.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32414.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32414.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32414.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32416){
var self__ = this;
var _32416__$1 = this;
return self__.meta32415;
});})(cs))
;

cljs.core.async.t32414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32416,meta32415__$1){
var self__ = this;
var _32416__$1 = this;
return (new cljs.core.async.t32414(self__.cs,self__.ch,self__.mult,meta32415__$1));
});})(cs))
;

cljs.core.async.t32414.cljs$lang$type = true;

cljs.core.async.t32414.cljs$lang$ctorStr = "cljs.core.async/t32414";

cljs.core.async.t32414.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32414");
});})(cs))
;

cljs.core.async.__GT_t32414 = ((function (cs){
return (function __GT_t32414(cs__$1,ch__$1,mult__$1,meta32415){
return (new cljs.core.async.t32414(cs__$1,ch__$1,mult__$1,meta32415));
});})(cs))
;

}

return (new cljs.core.async.t32414(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18806__auto___32635 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___32635,cs,m,dchan,dctr,done){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___32635,cs,m,dchan,dctr,done){
return (function (state_32547){
var state_val_32548 = (state_32547[(1)]);
if((state_val_32548 === (7))){
var inst_32543 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32549_32636 = state_32547__$1;
(statearr_32549_32636[(2)] = inst_32543);

(statearr_32549_32636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (20))){
var inst_32448 = (state_32547[(7)]);
var inst_32458 = cljs.core.first.call(null,inst_32448);
var inst_32459 = cljs.core.nth.call(null,inst_32458,(0),null);
var inst_32460 = cljs.core.nth.call(null,inst_32458,(1),null);
var state_32547__$1 = (function (){var statearr_32550 = state_32547;
(statearr_32550[(8)] = inst_32459);

return statearr_32550;
})();
if(cljs.core.truth_(inst_32460)){
var statearr_32551_32637 = state_32547__$1;
(statearr_32551_32637[(1)] = (22));

} else {
var statearr_32552_32638 = state_32547__$1;
(statearr_32552_32638[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (27))){
var inst_32488 = (state_32547[(9)]);
var inst_32419 = (state_32547[(10)]);
var inst_32495 = (state_32547[(11)]);
var inst_32490 = (state_32547[(12)]);
var inst_32495__$1 = cljs.core._nth.call(null,inst_32488,inst_32490);
var inst_32496 = cljs.core.async.put_BANG_.call(null,inst_32495__$1,inst_32419,done);
var state_32547__$1 = (function (){var statearr_32553 = state_32547;
(statearr_32553[(11)] = inst_32495__$1);

return statearr_32553;
})();
if(cljs.core.truth_(inst_32496)){
var statearr_32554_32639 = state_32547__$1;
(statearr_32554_32639[(1)] = (30));

} else {
var statearr_32555_32640 = state_32547__$1;
(statearr_32555_32640[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (1))){
var state_32547__$1 = state_32547;
var statearr_32556_32641 = state_32547__$1;
(statearr_32556_32641[(2)] = null);

(statearr_32556_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (24))){
var inst_32448 = (state_32547[(7)]);
var inst_32465 = (state_32547[(2)]);
var inst_32466 = cljs.core.next.call(null,inst_32448);
var inst_32428 = inst_32466;
var inst_32429 = null;
var inst_32430 = (0);
var inst_32431 = (0);
var state_32547__$1 = (function (){var statearr_32557 = state_32547;
(statearr_32557[(13)] = inst_32465);

(statearr_32557[(14)] = inst_32428);

(statearr_32557[(15)] = inst_32430);

(statearr_32557[(16)] = inst_32431);

(statearr_32557[(17)] = inst_32429);

return statearr_32557;
})();
var statearr_32558_32642 = state_32547__$1;
(statearr_32558_32642[(2)] = null);

(statearr_32558_32642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (39))){
var state_32547__$1 = state_32547;
var statearr_32562_32643 = state_32547__$1;
(statearr_32562_32643[(2)] = null);

(statearr_32562_32643[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (4))){
var inst_32419 = (state_32547[(10)]);
var inst_32419__$1 = (state_32547[(2)]);
var inst_32420 = (inst_32419__$1 == null);
var state_32547__$1 = (function (){var statearr_32563 = state_32547;
(statearr_32563[(10)] = inst_32419__$1);

return statearr_32563;
})();
if(cljs.core.truth_(inst_32420)){
var statearr_32564_32644 = state_32547__$1;
(statearr_32564_32644[(1)] = (5));

} else {
var statearr_32565_32645 = state_32547__$1;
(statearr_32565_32645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (15))){
var inst_32428 = (state_32547[(14)]);
var inst_32430 = (state_32547[(15)]);
var inst_32431 = (state_32547[(16)]);
var inst_32429 = (state_32547[(17)]);
var inst_32444 = (state_32547[(2)]);
var inst_32445 = (inst_32431 + (1));
var tmp32559 = inst_32428;
var tmp32560 = inst_32430;
var tmp32561 = inst_32429;
var inst_32428__$1 = tmp32559;
var inst_32429__$1 = tmp32561;
var inst_32430__$1 = tmp32560;
var inst_32431__$1 = inst_32445;
var state_32547__$1 = (function (){var statearr_32566 = state_32547;
(statearr_32566[(18)] = inst_32444);

(statearr_32566[(14)] = inst_32428__$1);

(statearr_32566[(15)] = inst_32430__$1);

(statearr_32566[(16)] = inst_32431__$1);

(statearr_32566[(17)] = inst_32429__$1);

return statearr_32566;
})();
var statearr_32567_32646 = state_32547__$1;
(statearr_32567_32646[(2)] = null);

(statearr_32567_32646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (21))){
var inst_32469 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32571_32647 = state_32547__$1;
(statearr_32571_32647[(2)] = inst_32469);

(statearr_32571_32647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (31))){
var inst_32495 = (state_32547[(11)]);
var inst_32499 = done.call(null,null);
var inst_32500 = cljs.core.async.untap_STAR_.call(null,m,inst_32495);
var state_32547__$1 = (function (){var statearr_32572 = state_32547;
(statearr_32572[(19)] = inst_32499);

return statearr_32572;
})();
var statearr_32573_32648 = state_32547__$1;
(statearr_32573_32648[(2)] = inst_32500);

(statearr_32573_32648[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (32))){
var inst_32488 = (state_32547[(9)]);
var inst_32487 = (state_32547[(20)]);
var inst_32489 = (state_32547[(21)]);
var inst_32490 = (state_32547[(12)]);
var inst_32502 = (state_32547[(2)]);
var inst_32503 = (inst_32490 + (1));
var tmp32568 = inst_32488;
var tmp32569 = inst_32487;
var tmp32570 = inst_32489;
var inst_32487__$1 = tmp32569;
var inst_32488__$1 = tmp32568;
var inst_32489__$1 = tmp32570;
var inst_32490__$1 = inst_32503;
var state_32547__$1 = (function (){var statearr_32574 = state_32547;
(statearr_32574[(9)] = inst_32488__$1);

(statearr_32574[(20)] = inst_32487__$1);

(statearr_32574[(22)] = inst_32502);

(statearr_32574[(21)] = inst_32489__$1);

(statearr_32574[(12)] = inst_32490__$1);

return statearr_32574;
})();
var statearr_32575_32649 = state_32547__$1;
(statearr_32575_32649[(2)] = null);

(statearr_32575_32649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (40))){
var inst_32515 = (state_32547[(23)]);
var inst_32519 = done.call(null,null);
var inst_32520 = cljs.core.async.untap_STAR_.call(null,m,inst_32515);
var state_32547__$1 = (function (){var statearr_32576 = state_32547;
(statearr_32576[(24)] = inst_32519);

return statearr_32576;
})();
var statearr_32577_32650 = state_32547__$1;
(statearr_32577_32650[(2)] = inst_32520);

(statearr_32577_32650[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (33))){
var inst_32506 = (state_32547[(25)]);
var inst_32508 = cljs.core.chunked_seq_QMARK_.call(null,inst_32506);
var state_32547__$1 = state_32547;
if(inst_32508){
var statearr_32578_32651 = state_32547__$1;
(statearr_32578_32651[(1)] = (36));

} else {
var statearr_32579_32652 = state_32547__$1;
(statearr_32579_32652[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (13))){
var inst_32438 = (state_32547[(26)]);
var inst_32441 = cljs.core.async.close_BANG_.call(null,inst_32438);
var state_32547__$1 = state_32547;
var statearr_32580_32653 = state_32547__$1;
(statearr_32580_32653[(2)] = inst_32441);

(statearr_32580_32653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (22))){
var inst_32459 = (state_32547[(8)]);
var inst_32462 = cljs.core.async.close_BANG_.call(null,inst_32459);
var state_32547__$1 = state_32547;
var statearr_32581_32654 = state_32547__$1;
(statearr_32581_32654[(2)] = inst_32462);

(statearr_32581_32654[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (36))){
var inst_32506 = (state_32547[(25)]);
var inst_32510 = cljs.core.chunk_first.call(null,inst_32506);
var inst_32511 = cljs.core.chunk_rest.call(null,inst_32506);
var inst_32512 = cljs.core.count.call(null,inst_32510);
var inst_32487 = inst_32511;
var inst_32488 = inst_32510;
var inst_32489 = inst_32512;
var inst_32490 = (0);
var state_32547__$1 = (function (){var statearr_32582 = state_32547;
(statearr_32582[(9)] = inst_32488);

(statearr_32582[(20)] = inst_32487);

(statearr_32582[(21)] = inst_32489);

(statearr_32582[(12)] = inst_32490);

return statearr_32582;
})();
var statearr_32583_32655 = state_32547__$1;
(statearr_32583_32655[(2)] = null);

(statearr_32583_32655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (41))){
var inst_32506 = (state_32547[(25)]);
var inst_32522 = (state_32547[(2)]);
var inst_32523 = cljs.core.next.call(null,inst_32506);
var inst_32487 = inst_32523;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32547__$1 = (function (){var statearr_32584 = state_32547;
(statearr_32584[(9)] = inst_32488);

(statearr_32584[(27)] = inst_32522);

(statearr_32584[(20)] = inst_32487);

(statearr_32584[(21)] = inst_32489);

(statearr_32584[(12)] = inst_32490);

return statearr_32584;
})();
var statearr_32585_32656 = state_32547__$1;
(statearr_32585_32656[(2)] = null);

(statearr_32585_32656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (43))){
var state_32547__$1 = state_32547;
var statearr_32586_32657 = state_32547__$1;
(statearr_32586_32657[(2)] = null);

(statearr_32586_32657[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (29))){
var inst_32531 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32587_32658 = state_32547__$1;
(statearr_32587_32658[(2)] = inst_32531);

(statearr_32587_32658[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (44))){
var inst_32540 = (state_32547[(2)]);
var state_32547__$1 = (function (){var statearr_32588 = state_32547;
(statearr_32588[(28)] = inst_32540);

return statearr_32588;
})();
var statearr_32589_32659 = state_32547__$1;
(statearr_32589_32659[(2)] = null);

(statearr_32589_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (6))){
var inst_32479 = (state_32547[(29)]);
var inst_32478 = cljs.core.deref.call(null,cs);
var inst_32479__$1 = cljs.core.keys.call(null,inst_32478);
var inst_32480 = cljs.core.count.call(null,inst_32479__$1);
var inst_32481 = cljs.core.reset_BANG_.call(null,dctr,inst_32480);
var inst_32486 = cljs.core.seq.call(null,inst_32479__$1);
var inst_32487 = inst_32486;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32547__$1 = (function (){var statearr_32590 = state_32547;
(statearr_32590[(9)] = inst_32488);

(statearr_32590[(20)] = inst_32487);

(statearr_32590[(29)] = inst_32479__$1);

(statearr_32590[(21)] = inst_32489);

(statearr_32590[(30)] = inst_32481);

(statearr_32590[(12)] = inst_32490);

return statearr_32590;
})();
var statearr_32591_32660 = state_32547__$1;
(statearr_32591_32660[(2)] = null);

(statearr_32591_32660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (28))){
var inst_32487 = (state_32547[(20)]);
var inst_32506 = (state_32547[(25)]);
var inst_32506__$1 = cljs.core.seq.call(null,inst_32487);
var state_32547__$1 = (function (){var statearr_32592 = state_32547;
(statearr_32592[(25)] = inst_32506__$1);

return statearr_32592;
})();
if(inst_32506__$1){
var statearr_32593_32661 = state_32547__$1;
(statearr_32593_32661[(1)] = (33));

} else {
var statearr_32594_32662 = state_32547__$1;
(statearr_32594_32662[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (25))){
var inst_32489 = (state_32547[(21)]);
var inst_32490 = (state_32547[(12)]);
var inst_32492 = (inst_32490 < inst_32489);
var inst_32493 = inst_32492;
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32493)){
var statearr_32595_32663 = state_32547__$1;
(statearr_32595_32663[(1)] = (27));

} else {
var statearr_32596_32664 = state_32547__$1;
(statearr_32596_32664[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (34))){
var state_32547__$1 = state_32547;
var statearr_32597_32665 = state_32547__$1;
(statearr_32597_32665[(2)] = null);

(statearr_32597_32665[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (17))){
var state_32547__$1 = state_32547;
var statearr_32598_32666 = state_32547__$1;
(statearr_32598_32666[(2)] = null);

(statearr_32598_32666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (3))){
var inst_32545 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32547__$1,inst_32545);
} else {
if((state_val_32548 === (12))){
var inst_32474 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32599_32667 = state_32547__$1;
(statearr_32599_32667[(2)] = inst_32474);

(statearr_32599_32667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (2))){
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(4),ch);
} else {
if((state_val_32548 === (23))){
var state_32547__$1 = state_32547;
var statearr_32600_32668 = state_32547__$1;
(statearr_32600_32668[(2)] = null);

(statearr_32600_32668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (35))){
var inst_32529 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32601_32669 = state_32547__$1;
(statearr_32601_32669[(2)] = inst_32529);

(statearr_32601_32669[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (19))){
var inst_32448 = (state_32547[(7)]);
var inst_32452 = cljs.core.chunk_first.call(null,inst_32448);
var inst_32453 = cljs.core.chunk_rest.call(null,inst_32448);
var inst_32454 = cljs.core.count.call(null,inst_32452);
var inst_32428 = inst_32453;
var inst_32429 = inst_32452;
var inst_32430 = inst_32454;
var inst_32431 = (0);
var state_32547__$1 = (function (){var statearr_32602 = state_32547;
(statearr_32602[(14)] = inst_32428);

(statearr_32602[(15)] = inst_32430);

(statearr_32602[(16)] = inst_32431);

(statearr_32602[(17)] = inst_32429);

return statearr_32602;
})();
var statearr_32603_32670 = state_32547__$1;
(statearr_32603_32670[(2)] = null);

(statearr_32603_32670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (11))){
var inst_32428 = (state_32547[(14)]);
var inst_32448 = (state_32547[(7)]);
var inst_32448__$1 = cljs.core.seq.call(null,inst_32428);
var state_32547__$1 = (function (){var statearr_32604 = state_32547;
(statearr_32604[(7)] = inst_32448__$1);

return statearr_32604;
})();
if(inst_32448__$1){
var statearr_32605_32671 = state_32547__$1;
(statearr_32605_32671[(1)] = (16));

} else {
var statearr_32606_32672 = state_32547__$1;
(statearr_32606_32672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (9))){
var inst_32476 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32607_32673 = state_32547__$1;
(statearr_32607_32673[(2)] = inst_32476);

(statearr_32607_32673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (5))){
var inst_32426 = cljs.core.deref.call(null,cs);
var inst_32427 = cljs.core.seq.call(null,inst_32426);
var inst_32428 = inst_32427;
var inst_32429 = null;
var inst_32430 = (0);
var inst_32431 = (0);
var state_32547__$1 = (function (){var statearr_32608 = state_32547;
(statearr_32608[(14)] = inst_32428);

(statearr_32608[(15)] = inst_32430);

(statearr_32608[(16)] = inst_32431);

(statearr_32608[(17)] = inst_32429);

return statearr_32608;
})();
var statearr_32609_32674 = state_32547__$1;
(statearr_32609_32674[(2)] = null);

(statearr_32609_32674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (14))){
var state_32547__$1 = state_32547;
var statearr_32610_32675 = state_32547__$1;
(statearr_32610_32675[(2)] = null);

(statearr_32610_32675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (45))){
var inst_32537 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32611_32676 = state_32547__$1;
(statearr_32611_32676[(2)] = inst_32537);

(statearr_32611_32676[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (26))){
var inst_32479 = (state_32547[(29)]);
var inst_32533 = (state_32547[(2)]);
var inst_32534 = cljs.core.seq.call(null,inst_32479);
var state_32547__$1 = (function (){var statearr_32612 = state_32547;
(statearr_32612[(31)] = inst_32533);

return statearr_32612;
})();
if(inst_32534){
var statearr_32613_32677 = state_32547__$1;
(statearr_32613_32677[(1)] = (42));

} else {
var statearr_32614_32678 = state_32547__$1;
(statearr_32614_32678[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (16))){
var inst_32448 = (state_32547[(7)]);
var inst_32450 = cljs.core.chunked_seq_QMARK_.call(null,inst_32448);
var state_32547__$1 = state_32547;
if(inst_32450){
var statearr_32615_32679 = state_32547__$1;
(statearr_32615_32679[(1)] = (19));

} else {
var statearr_32616_32680 = state_32547__$1;
(statearr_32616_32680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (38))){
var inst_32526 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32617_32681 = state_32547__$1;
(statearr_32617_32681[(2)] = inst_32526);

(statearr_32617_32681[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (30))){
var state_32547__$1 = state_32547;
var statearr_32618_32682 = state_32547__$1;
(statearr_32618_32682[(2)] = null);

(statearr_32618_32682[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (10))){
var inst_32431 = (state_32547[(16)]);
var inst_32429 = (state_32547[(17)]);
var inst_32437 = cljs.core._nth.call(null,inst_32429,inst_32431);
var inst_32438 = cljs.core.nth.call(null,inst_32437,(0),null);
var inst_32439 = cljs.core.nth.call(null,inst_32437,(1),null);
var state_32547__$1 = (function (){var statearr_32619 = state_32547;
(statearr_32619[(26)] = inst_32438);

return statearr_32619;
})();
if(cljs.core.truth_(inst_32439)){
var statearr_32620_32683 = state_32547__$1;
(statearr_32620_32683[(1)] = (13));

} else {
var statearr_32621_32684 = state_32547__$1;
(statearr_32621_32684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (18))){
var inst_32472 = (state_32547[(2)]);
var state_32547__$1 = state_32547;
var statearr_32622_32685 = state_32547__$1;
(statearr_32622_32685[(2)] = inst_32472);

(statearr_32622_32685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (42))){
var state_32547__$1 = state_32547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32547__$1,(45),dchan);
} else {
if((state_val_32548 === (37))){
var inst_32515 = (state_32547[(23)]);
var inst_32506 = (state_32547[(25)]);
var inst_32419 = (state_32547[(10)]);
var inst_32515__$1 = cljs.core.first.call(null,inst_32506);
var inst_32516 = cljs.core.async.put_BANG_.call(null,inst_32515__$1,inst_32419,done);
var state_32547__$1 = (function (){var statearr_32623 = state_32547;
(statearr_32623[(23)] = inst_32515__$1);

return statearr_32623;
})();
if(cljs.core.truth_(inst_32516)){
var statearr_32624_32686 = state_32547__$1;
(statearr_32624_32686[(1)] = (39));

} else {
var statearr_32625_32687 = state_32547__$1;
(statearr_32625_32687[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32548 === (8))){
var inst_32430 = (state_32547[(15)]);
var inst_32431 = (state_32547[(16)]);
var inst_32433 = (inst_32431 < inst_32430);
var inst_32434 = inst_32433;
var state_32547__$1 = state_32547;
if(cljs.core.truth_(inst_32434)){
var statearr_32626_32688 = state_32547__$1;
(statearr_32626_32688[(1)] = (10));

} else {
var statearr_32627_32689 = state_32547__$1;
(statearr_32627_32689[(1)] = (11));

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
});})(c__18806__auto___32635,cs,m,dchan,dctr,done))
;
return ((function (switch__18750__auto__,c__18806__auto___32635,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_32631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32631[(0)] = state_machine__18751__auto__);

(statearr_32631[(1)] = (1));

return statearr_32631;
});
var state_machine__18751__auto____1 = (function (state_32547){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_32547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e32632){if((e32632 instanceof Object)){
var ex__18754__auto__ = e32632;
var statearr_32633_32690 = state_32547;
(statearr_32633_32690[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32691 = state_32547;
state_32547 = G__32691;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_32547){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_32547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___32635,cs,m,dchan,dctr,done))
})();
var state__18808__auto__ = (function (){var statearr_32634 = f__18807__auto__.call(null);
(statearr_32634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___32635);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___32635,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32693 = {};
return obj32693;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__15646__auto__ = m;
if(and__15646__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16302__auto__ = (((m == null))?null:m);
return (function (){var or__15658__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32694){
var map__32699 = p__32694;
var map__32699__$1 = ((cljs.core.seq_QMARK_.call(null,map__32699))?cljs.core.apply.call(null,cljs.core.hash_map,map__32699):map__32699);
var opts = map__32699__$1;
var statearr_32700_32703 = state;
(statearr_32700_32703[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32699,map__32699__$1,opts){
return (function (val){
var statearr_32701_32704 = state;
(statearr_32701_32704[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32699,map__32699__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32702_32705 = state;
(statearr_32702_32705[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32694 = null;
if (arguments.length > 3) {
var G__32706__i = 0, G__32706__a = new Array(arguments.length -  3);
while (G__32706__i < G__32706__a.length) {G__32706__a[G__32706__i] = arguments[G__32706__i + 3]; ++G__32706__i;}
  p__32694 = new cljs.core.IndexedSeq(G__32706__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32694);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32707){
var state = cljs.core.first(arglist__32707);
arglist__32707 = cljs.core.next(arglist__32707);
var cont_block = cljs.core.first(arglist__32707);
arglist__32707 = cljs.core.next(arglist__32707);
var ports = cljs.core.first(arglist__32707);
var p__32694 = cljs.core.rest(arglist__32707);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32694);
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
if(typeof cljs.core.async.t32827 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32827 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32828){
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
this.meta32828 = meta32828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32827.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32827.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32827.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32827.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32829){
var self__ = this;
var _32829__$1 = this;
return self__.meta32828;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32829,meta32828__$1){
var self__ = this;
var _32829__$1 = this;
return (new cljs.core.async.t32827(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32828__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32827.cljs$lang$type = true;

cljs.core.async.t32827.cljs$lang$ctorStr = "cljs.core.async/t32827";

cljs.core.async.t32827.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32827");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32827 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32828){
return (new cljs.core.async.t32827(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32828));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32827(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18806__auto___32946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32899){
var state_val_32900 = (state_32899[(1)]);
if((state_val_32900 === (7))){
var inst_32843 = (state_32899[(7)]);
var inst_32848 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32843);
var state_32899__$1 = state_32899;
var statearr_32901_32947 = state_32899__$1;
(statearr_32901_32947[(2)] = inst_32848);

(statearr_32901_32947[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (20))){
var inst_32858 = (state_32899[(8)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32899__$1,(23),out,inst_32858);
} else {
if((state_val_32900 === (1))){
var inst_32833 = (state_32899[(9)]);
var inst_32833__$1 = calc_state.call(null);
var inst_32834 = cljs.core.seq_QMARK_.call(null,inst_32833__$1);
var state_32899__$1 = (function (){var statearr_32902 = state_32899;
(statearr_32902[(9)] = inst_32833__$1);

return statearr_32902;
})();
if(inst_32834){
var statearr_32903_32948 = state_32899__$1;
(statearr_32903_32948[(1)] = (2));

} else {
var statearr_32904_32949 = state_32899__$1;
(statearr_32904_32949[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (24))){
var inst_32851 = (state_32899[(10)]);
var inst_32843 = inst_32851;
var state_32899__$1 = (function (){var statearr_32905 = state_32899;
(statearr_32905[(7)] = inst_32843);

return statearr_32905;
})();
var statearr_32906_32950 = state_32899__$1;
(statearr_32906_32950[(2)] = null);

(statearr_32906_32950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (4))){
var inst_32833 = (state_32899[(9)]);
var inst_32839 = (state_32899[(2)]);
var inst_32840 = cljs.core.get.call(null,inst_32839,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32841 = cljs.core.get.call(null,inst_32839,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32842 = cljs.core.get.call(null,inst_32839,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32843 = inst_32833;
var state_32899__$1 = (function (){var statearr_32907 = state_32899;
(statearr_32907[(7)] = inst_32843);

(statearr_32907[(11)] = inst_32842);

(statearr_32907[(12)] = inst_32840);

(statearr_32907[(13)] = inst_32841);

return statearr_32907;
})();
var statearr_32908_32951 = state_32899__$1;
(statearr_32908_32951[(2)] = null);

(statearr_32908_32951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (15))){
var state_32899__$1 = state_32899;
var statearr_32909_32952 = state_32899__$1;
(statearr_32909_32952[(2)] = null);

(statearr_32909_32952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (21))){
var inst_32851 = (state_32899[(10)]);
var inst_32843 = inst_32851;
var state_32899__$1 = (function (){var statearr_32910 = state_32899;
(statearr_32910[(7)] = inst_32843);

return statearr_32910;
})();
var statearr_32911_32953 = state_32899__$1;
(statearr_32911_32953[(2)] = null);

(statearr_32911_32953[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (13))){
var inst_32895 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32912_32954 = state_32899__$1;
(statearr_32912_32954[(2)] = inst_32895);

(statearr_32912_32954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (22))){
var inst_32893 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32913_32955 = state_32899__$1;
(statearr_32913_32955[(2)] = inst_32893);

(statearr_32913_32955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (6))){
var inst_32897 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32899__$1,inst_32897);
} else {
if((state_val_32900 === (25))){
var state_32899__$1 = state_32899;
var statearr_32914_32956 = state_32899__$1;
(statearr_32914_32956[(2)] = null);

(statearr_32914_32956[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (17))){
var inst_32873 = (state_32899[(14)]);
var state_32899__$1 = state_32899;
var statearr_32915_32957 = state_32899__$1;
(statearr_32915_32957[(2)] = inst_32873);

(statearr_32915_32957[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (3))){
var inst_32833 = (state_32899[(9)]);
var state_32899__$1 = state_32899;
var statearr_32916_32958 = state_32899__$1;
(statearr_32916_32958[(2)] = inst_32833);

(statearr_32916_32958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (12))){
var inst_32859 = (state_32899[(15)]);
var inst_32854 = (state_32899[(16)]);
var inst_32873 = (state_32899[(14)]);
var inst_32873__$1 = inst_32854.call(null,inst_32859);
var state_32899__$1 = (function (){var statearr_32917 = state_32899;
(statearr_32917[(14)] = inst_32873__$1);

return statearr_32917;
})();
if(cljs.core.truth_(inst_32873__$1)){
var statearr_32918_32959 = state_32899__$1;
(statearr_32918_32959[(1)] = (17));

} else {
var statearr_32919_32960 = state_32899__$1;
(statearr_32919_32960[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (2))){
var inst_32833 = (state_32899[(9)]);
var inst_32836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32833);
var state_32899__$1 = state_32899;
var statearr_32920_32961 = state_32899__$1;
(statearr_32920_32961[(2)] = inst_32836);

(statearr_32920_32961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (23))){
var inst_32884 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32884)){
var statearr_32921_32962 = state_32899__$1;
(statearr_32921_32962[(1)] = (24));

} else {
var statearr_32922_32963 = state_32899__$1;
(statearr_32922_32963[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (19))){
var inst_32881 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32881)){
var statearr_32923_32964 = state_32899__$1;
(statearr_32923_32964[(1)] = (20));

} else {
var statearr_32924_32965 = state_32899__$1;
(statearr_32924_32965[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (11))){
var inst_32858 = (state_32899[(8)]);
var inst_32864 = (inst_32858 == null);
var state_32899__$1 = state_32899;
if(cljs.core.truth_(inst_32864)){
var statearr_32925_32966 = state_32899__$1;
(statearr_32925_32966[(1)] = (14));

} else {
var statearr_32926_32967 = state_32899__$1;
(statearr_32926_32967[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (9))){
var inst_32851 = (state_32899[(10)]);
var inst_32851__$1 = (state_32899[(2)]);
var inst_32852 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32853 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32854 = cljs.core.get.call(null,inst_32851__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32899__$1 = (function (){var statearr_32927 = state_32899;
(statearr_32927[(16)] = inst_32854);

(statearr_32927[(10)] = inst_32851__$1);

(statearr_32927[(17)] = inst_32853);

return statearr_32927;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32899__$1,(10),inst_32852);
} else {
if((state_val_32900 === (5))){
var inst_32843 = (state_32899[(7)]);
var inst_32846 = cljs.core.seq_QMARK_.call(null,inst_32843);
var state_32899__$1 = state_32899;
if(inst_32846){
var statearr_32928_32968 = state_32899__$1;
(statearr_32928_32968[(1)] = (7));

} else {
var statearr_32929_32969 = state_32899__$1;
(statearr_32929_32969[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (14))){
var inst_32859 = (state_32899[(15)]);
var inst_32866 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32859);
var state_32899__$1 = state_32899;
var statearr_32930_32970 = state_32899__$1;
(statearr_32930_32970[(2)] = inst_32866);

(statearr_32930_32970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (26))){
var inst_32889 = (state_32899[(2)]);
var state_32899__$1 = state_32899;
var statearr_32931_32971 = state_32899__$1;
(statearr_32931_32971[(2)] = inst_32889);

(statearr_32931_32971[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (16))){
var inst_32869 = (state_32899[(2)]);
var inst_32870 = calc_state.call(null);
var inst_32843 = inst_32870;
var state_32899__$1 = (function (){var statearr_32932 = state_32899;
(statearr_32932[(7)] = inst_32843);

(statearr_32932[(18)] = inst_32869);

return statearr_32932;
})();
var statearr_32933_32972 = state_32899__$1;
(statearr_32933_32972[(2)] = null);

(statearr_32933_32972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (10))){
var inst_32859 = (state_32899[(15)]);
var inst_32858 = (state_32899[(8)]);
var inst_32857 = (state_32899[(2)]);
var inst_32858__$1 = cljs.core.nth.call(null,inst_32857,(0),null);
var inst_32859__$1 = cljs.core.nth.call(null,inst_32857,(1),null);
var inst_32860 = (inst_32858__$1 == null);
var inst_32861 = cljs.core._EQ_.call(null,inst_32859__$1,change);
var inst_32862 = (inst_32860) || (inst_32861);
var state_32899__$1 = (function (){var statearr_32934 = state_32899;
(statearr_32934[(15)] = inst_32859__$1);

(statearr_32934[(8)] = inst_32858__$1);

return statearr_32934;
})();
if(cljs.core.truth_(inst_32862)){
var statearr_32935_32973 = state_32899__$1;
(statearr_32935_32973[(1)] = (11));

} else {
var statearr_32936_32974 = state_32899__$1;
(statearr_32936_32974[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (18))){
var inst_32859 = (state_32899[(15)]);
var inst_32854 = (state_32899[(16)]);
var inst_32853 = (state_32899[(17)]);
var inst_32876 = cljs.core.empty_QMARK_.call(null,inst_32854);
var inst_32877 = inst_32853.call(null,inst_32859);
var inst_32878 = cljs.core.not.call(null,inst_32877);
var inst_32879 = (inst_32876) && (inst_32878);
var state_32899__$1 = state_32899;
var statearr_32937_32975 = state_32899__$1;
(statearr_32937_32975[(2)] = inst_32879);

(statearr_32937_32975[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32900 === (8))){
var inst_32843 = (state_32899[(7)]);
var state_32899__$1 = state_32899;
var statearr_32938_32976 = state_32899__$1;
(statearr_32938_32976[(2)] = inst_32843);

(statearr_32938_32976[(1)] = (9));


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
});})(c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18750__auto__,c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_32942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32942[(0)] = state_machine__18751__auto__);

(statearr_32942[(1)] = (1));

return statearr_32942;
});
var state_machine__18751__auto____1 = (function (state_32899){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_32899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e32943){if((e32943 instanceof Object)){
var ex__18754__auto__ = e32943;
var statearr_32944_32977 = state_32899;
(statearr_32944_32977[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32978 = state_32899;
state_32899 = G__32978;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_32899){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_32899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18808__auto__ = (function (){var statearr_32945 = f__18807__auto__.call(null);
(statearr_32945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___32946);

return statearr_32945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___32946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32980 = {};
return obj32980;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
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
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__15646__auto__ = p;
if(and__15646__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__15646__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16302__auto__ = (((p == null))?null:p);
return (function (){var or__15658__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16302__auto__)]);
if(or__15658__auto__){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__15658__auto____$1){
return or__15658__auto____$1;
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
var or__15658__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15658__auto__,mults){
return (function (p1__32981_SHARP_){
if(cljs.core.truth_(p1__32981_SHARP_.call(null,topic))){
return p1__32981_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32981_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15658__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33104 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33104 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33105){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33105 = meta33105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33104.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33104.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33104.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t33104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33104.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33104.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33104.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33106){
var self__ = this;
var _33106__$1 = this;
return self__.meta33105;
});})(mults,ensure_mult))
;

cljs.core.async.t33104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33106,meta33105__$1){
var self__ = this;
var _33106__$1 = this;
return (new cljs.core.async.t33104(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33105__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33104.cljs$lang$type = true;

cljs.core.async.t33104.cljs$lang$ctorStr = "cljs.core.async/t33104";

cljs.core.async.t33104.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33104");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33104 = ((function (mults,ensure_mult){
return (function __GT_t33104(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33105){
return (new cljs.core.async.t33104(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33105));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33104(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18806__auto___33226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___33226,mults,ensure_mult,p){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___33226,mults,ensure_mult,p){
return (function (state_33178){
var state_val_33179 = (state_33178[(1)]);
if((state_val_33179 === (7))){
var inst_33174 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33180_33227 = state_33178__$1;
(statearr_33180_33227[(2)] = inst_33174);

(statearr_33180_33227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (20))){
var state_33178__$1 = state_33178;
var statearr_33181_33228 = state_33178__$1;
(statearr_33181_33228[(2)] = null);

(statearr_33181_33228[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (1))){
var state_33178__$1 = state_33178;
var statearr_33182_33229 = state_33178__$1;
(statearr_33182_33229[(2)] = null);

(statearr_33182_33229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (24))){
var inst_33157 = (state_33178[(7)]);
var inst_33166 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33157);
var state_33178__$1 = state_33178;
var statearr_33183_33230 = state_33178__$1;
(statearr_33183_33230[(2)] = inst_33166);

(statearr_33183_33230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (4))){
var inst_33109 = (state_33178[(8)]);
var inst_33109__$1 = (state_33178[(2)]);
var inst_33110 = (inst_33109__$1 == null);
var state_33178__$1 = (function (){var statearr_33184 = state_33178;
(statearr_33184[(8)] = inst_33109__$1);

return statearr_33184;
})();
if(cljs.core.truth_(inst_33110)){
var statearr_33185_33231 = state_33178__$1;
(statearr_33185_33231[(1)] = (5));

} else {
var statearr_33186_33232 = state_33178__$1;
(statearr_33186_33232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (15))){
var inst_33151 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33187_33233 = state_33178__$1;
(statearr_33187_33233[(2)] = inst_33151);

(statearr_33187_33233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (21))){
var inst_33171 = (state_33178[(2)]);
var state_33178__$1 = (function (){var statearr_33188 = state_33178;
(statearr_33188[(9)] = inst_33171);

return statearr_33188;
})();
var statearr_33189_33234 = state_33178__$1;
(statearr_33189_33234[(2)] = null);

(statearr_33189_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (13))){
var inst_33133 = (state_33178[(10)]);
var inst_33135 = cljs.core.chunked_seq_QMARK_.call(null,inst_33133);
var state_33178__$1 = state_33178;
if(inst_33135){
var statearr_33190_33235 = state_33178__$1;
(statearr_33190_33235[(1)] = (16));

} else {
var statearr_33191_33236 = state_33178__$1;
(statearr_33191_33236[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (22))){
var inst_33163 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
if(cljs.core.truth_(inst_33163)){
var statearr_33192_33237 = state_33178__$1;
(statearr_33192_33237[(1)] = (23));

} else {
var statearr_33193_33238 = state_33178__$1;
(statearr_33193_33238[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (6))){
var inst_33157 = (state_33178[(7)]);
var inst_33109 = (state_33178[(8)]);
var inst_33159 = (state_33178[(11)]);
var inst_33157__$1 = topic_fn.call(null,inst_33109);
var inst_33158 = cljs.core.deref.call(null,mults);
var inst_33159__$1 = cljs.core.get.call(null,inst_33158,inst_33157__$1);
var state_33178__$1 = (function (){var statearr_33194 = state_33178;
(statearr_33194[(7)] = inst_33157__$1);

(statearr_33194[(11)] = inst_33159__$1);

return statearr_33194;
})();
if(cljs.core.truth_(inst_33159__$1)){
var statearr_33195_33239 = state_33178__$1;
(statearr_33195_33239[(1)] = (19));

} else {
var statearr_33196_33240 = state_33178__$1;
(statearr_33196_33240[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (25))){
var inst_33168 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33197_33241 = state_33178__$1;
(statearr_33197_33241[(2)] = inst_33168);

(statearr_33197_33241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (17))){
var inst_33133 = (state_33178[(10)]);
var inst_33142 = cljs.core.first.call(null,inst_33133);
var inst_33143 = cljs.core.async.muxch_STAR_.call(null,inst_33142);
var inst_33144 = cljs.core.async.close_BANG_.call(null,inst_33143);
var inst_33145 = cljs.core.next.call(null,inst_33133);
var inst_33119 = inst_33145;
var inst_33120 = null;
var inst_33121 = (0);
var inst_33122 = (0);
var state_33178__$1 = (function (){var statearr_33198 = state_33178;
(statearr_33198[(12)] = inst_33144);

(statearr_33198[(13)] = inst_33119);

(statearr_33198[(14)] = inst_33120);

(statearr_33198[(15)] = inst_33121);

(statearr_33198[(16)] = inst_33122);

return statearr_33198;
})();
var statearr_33199_33242 = state_33178__$1;
(statearr_33199_33242[(2)] = null);

(statearr_33199_33242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (3))){
var inst_33176 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33178__$1,inst_33176);
} else {
if((state_val_33179 === (12))){
var inst_33153 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33200_33243 = state_33178__$1;
(statearr_33200_33243[(2)] = inst_33153);

(statearr_33200_33243[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (2))){
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33178__$1,(4),ch);
} else {
if((state_val_33179 === (23))){
var state_33178__$1 = state_33178;
var statearr_33201_33244 = state_33178__$1;
(statearr_33201_33244[(2)] = null);

(statearr_33201_33244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (19))){
var inst_33109 = (state_33178[(8)]);
var inst_33159 = (state_33178[(11)]);
var inst_33161 = cljs.core.async.muxch_STAR_.call(null,inst_33159);
var state_33178__$1 = state_33178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33178__$1,(22),inst_33161,inst_33109);
} else {
if((state_val_33179 === (11))){
var inst_33119 = (state_33178[(13)]);
var inst_33133 = (state_33178[(10)]);
var inst_33133__$1 = cljs.core.seq.call(null,inst_33119);
var state_33178__$1 = (function (){var statearr_33202 = state_33178;
(statearr_33202[(10)] = inst_33133__$1);

return statearr_33202;
})();
if(inst_33133__$1){
var statearr_33203_33245 = state_33178__$1;
(statearr_33203_33245[(1)] = (13));

} else {
var statearr_33204_33246 = state_33178__$1;
(statearr_33204_33246[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (9))){
var inst_33155 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33205_33247 = state_33178__$1;
(statearr_33205_33247[(2)] = inst_33155);

(statearr_33205_33247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (5))){
var inst_33116 = cljs.core.deref.call(null,mults);
var inst_33117 = cljs.core.vals.call(null,inst_33116);
var inst_33118 = cljs.core.seq.call(null,inst_33117);
var inst_33119 = inst_33118;
var inst_33120 = null;
var inst_33121 = (0);
var inst_33122 = (0);
var state_33178__$1 = (function (){var statearr_33206 = state_33178;
(statearr_33206[(13)] = inst_33119);

(statearr_33206[(14)] = inst_33120);

(statearr_33206[(15)] = inst_33121);

(statearr_33206[(16)] = inst_33122);

return statearr_33206;
})();
var statearr_33207_33248 = state_33178__$1;
(statearr_33207_33248[(2)] = null);

(statearr_33207_33248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (14))){
var state_33178__$1 = state_33178;
var statearr_33211_33249 = state_33178__$1;
(statearr_33211_33249[(2)] = null);

(statearr_33211_33249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (16))){
var inst_33133 = (state_33178[(10)]);
var inst_33137 = cljs.core.chunk_first.call(null,inst_33133);
var inst_33138 = cljs.core.chunk_rest.call(null,inst_33133);
var inst_33139 = cljs.core.count.call(null,inst_33137);
var inst_33119 = inst_33138;
var inst_33120 = inst_33137;
var inst_33121 = inst_33139;
var inst_33122 = (0);
var state_33178__$1 = (function (){var statearr_33212 = state_33178;
(statearr_33212[(13)] = inst_33119);

(statearr_33212[(14)] = inst_33120);

(statearr_33212[(15)] = inst_33121);

(statearr_33212[(16)] = inst_33122);

return statearr_33212;
})();
var statearr_33213_33250 = state_33178__$1;
(statearr_33213_33250[(2)] = null);

(statearr_33213_33250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (10))){
var inst_33119 = (state_33178[(13)]);
var inst_33120 = (state_33178[(14)]);
var inst_33121 = (state_33178[(15)]);
var inst_33122 = (state_33178[(16)]);
var inst_33127 = cljs.core._nth.call(null,inst_33120,inst_33122);
var inst_33128 = cljs.core.async.muxch_STAR_.call(null,inst_33127);
var inst_33129 = cljs.core.async.close_BANG_.call(null,inst_33128);
var inst_33130 = (inst_33122 + (1));
var tmp33208 = inst_33119;
var tmp33209 = inst_33120;
var tmp33210 = inst_33121;
var inst_33119__$1 = tmp33208;
var inst_33120__$1 = tmp33209;
var inst_33121__$1 = tmp33210;
var inst_33122__$1 = inst_33130;
var state_33178__$1 = (function (){var statearr_33214 = state_33178;
(statearr_33214[(13)] = inst_33119__$1);

(statearr_33214[(14)] = inst_33120__$1);

(statearr_33214[(15)] = inst_33121__$1);

(statearr_33214[(17)] = inst_33129);

(statearr_33214[(16)] = inst_33122__$1);

return statearr_33214;
})();
var statearr_33215_33251 = state_33178__$1;
(statearr_33215_33251[(2)] = null);

(statearr_33215_33251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (18))){
var inst_33148 = (state_33178[(2)]);
var state_33178__$1 = state_33178;
var statearr_33216_33252 = state_33178__$1;
(statearr_33216_33252[(2)] = inst_33148);

(statearr_33216_33252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33179 === (8))){
var inst_33121 = (state_33178[(15)]);
var inst_33122 = (state_33178[(16)]);
var inst_33124 = (inst_33122 < inst_33121);
var inst_33125 = inst_33124;
var state_33178__$1 = state_33178;
if(cljs.core.truth_(inst_33125)){
var statearr_33217_33253 = state_33178__$1;
(statearr_33217_33253[(1)] = (10));

} else {
var statearr_33218_33254 = state_33178__$1;
(statearr_33218_33254[(1)] = (11));

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
});})(c__18806__auto___33226,mults,ensure_mult,p))
;
return ((function (switch__18750__auto__,c__18806__auto___33226,mults,ensure_mult,p){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33222[(0)] = state_machine__18751__auto__);

(statearr_33222[(1)] = (1));

return statearr_33222;
});
var state_machine__18751__auto____1 = (function (state_33178){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33223){if((e33223 instanceof Object)){
var ex__18754__auto__ = e33223;
var statearr_33224_33255 = state_33178;
(statearr_33224_33255[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33256 = state_33178;
state_33178 = G__33256;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33178){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___33226,mults,ensure_mult,p))
})();
var state__18808__auto__ = (function (){var statearr_33225 = f__18807__auto__.call(null);
(statearr_33225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___33226);

return statearr_33225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___33226,mults,ensure_mult,p))
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
var c__18806__auto___33393 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33363){
var state_val_33364 = (state_33363[(1)]);
if((state_val_33364 === (7))){
var state_33363__$1 = state_33363;
var statearr_33365_33394 = state_33363__$1;
(statearr_33365_33394[(2)] = null);

(statearr_33365_33394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (1))){
var state_33363__$1 = state_33363;
var statearr_33366_33395 = state_33363__$1;
(statearr_33366_33395[(2)] = null);

(statearr_33366_33395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (4))){
var inst_33327 = (state_33363[(7)]);
var inst_33329 = (inst_33327 < cnt);
var state_33363__$1 = state_33363;
if(cljs.core.truth_(inst_33329)){
var statearr_33367_33396 = state_33363__$1;
(statearr_33367_33396[(1)] = (6));

} else {
var statearr_33368_33397 = state_33363__$1;
(statearr_33368_33397[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (15))){
var inst_33359 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33369_33398 = state_33363__$1;
(statearr_33369_33398[(2)] = inst_33359);

(statearr_33369_33398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (13))){
var inst_33352 = cljs.core.async.close_BANG_.call(null,out);
var state_33363__$1 = state_33363;
var statearr_33370_33399 = state_33363__$1;
(statearr_33370_33399[(2)] = inst_33352);

(statearr_33370_33399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (6))){
var state_33363__$1 = state_33363;
var statearr_33371_33400 = state_33363__$1;
(statearr_33371_33400[(2)] = null);

(statearr_33371_33400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (3))){
var inst_33361 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else {
if((state_val_33364 === (12))){
var inst_33349 = (state_33363[(8)]);
var inst_33349__$1 = (state_33363[(2)]);
var inst_33350 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33349__$1);
var state_33363__$1 = (function (){var statearr_33372 = state_33363;
(statearr_33372[(8)] = inst_33349__$1);

return statearr_33372;
})();
if(cljs.core.truth_(inst_33350)){
var statearr_33373_33401 = state_33363__$1;
(statearr_33373_33401[(1)] = (13));

} else {
var statearr_33374_33402 = state_33363__$1;
(statearr_33374_33402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (2))){
var inst_33326 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33327 = (0);
var state_33363__$1 = (function (){var statearr_33375 = state_33363;
(statearr_33375[(7)] = inst_33327);

(statearr_33375[(9)] = inst_33326);

return statearr_33375;
})();
var statearr_33376_33403 = state_33363__$1;
(statearr_33376_33403[(2)] = null);

(statearr_33376_33403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (11))){
var inst_33327 = (state_33363[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33363,(10),Object,null,(9));
var inst_33336 = chs__$1.call(null,inst_33327);
var inst_33337 = done.call(null,inst_33327);
var inst_33338 = cljs.core.async.take_BANG_.call(null,inst_33336,inst_33337);
var state_33363__$1 = state_33363;
var statearr_33377_33404 = state_33363__$1;
(statearr_33377_33404[(2)] = inst_33338);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (9))){
var inst_33327 = (state_33363[(7)]);
var inst_33340 = (state_33363[(2)]);
var inst_33341 = (inst_33327 + (1));
var inst_33327__$1 = inst_33341;
var state_33363__$1 = (function (){var statearr_33378 = state_33363;
(statearr_33378[(7)] = inst_33327__$1);

(statearr_33378[(10)] = inst_33340);

return statearr_33378;
})();
var statearr_33379_33405 = state_33363__$1;
(statearr_33379_33405[(2)] = null);

(statearr_33379_33405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (5))){
var inst_33347 = (state_33363[(2)]);
var state_33363__$1 = (function (){var statearr_33380 = state_33363;
(statearr_33380[(11)] = inst_33347);

return statearr_33380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33363__$1,(12),dchan);
} else {
if((state_val_33364 === (14))){
var inst_33349 = (state_33363[(8)]);
var inst_33354 = cljs.core.apply.call(null,f,inst_33349);
var state_33363__$1 = state_33363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,(16),out,inst_33354);
} else {
if((state_val_33364 === (16))){
var inst_33356 = (state_33363[(2)]);
var state_33363__$1 = (function (){var statearr_33381 = state_33363;
(statearr_33381[(12)] = inst_33356);

return statearr_33381;
})();
var statearr_33382_33406 = state_33363__$1;
(statearr_33382_33406[(2)] = null);

(statearr_33382_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (10))){
var inst_33331 = (state_33363[(2)]);
var inst_33332 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33363__$1 = (function (){var statearr_33383 = state_33363;
(statearr_33383[(13)] = inst_33331);

return statearr_33383;
})();
var statearr_33384_33407 = state_33363__$1;
(statearr_33384_33407[(2)] = inst_33332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33364 === (8))){
var inst_33345 = (state_33363[(2)]);
var state_33363__$1 = state_33363;
var statearr_33385_33408 = state_33363__$1;
(statearr_33385_33408[(2)] = inst_33345);

(statearr_33385_33408[(1)] = (5));


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
});})(c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18750__auto__,c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33389[(0)] = state_machine__18751__auto__);

(statearr_33389[(1)] = (1));

return statearr_33389;
});
var state_machine__18751__auto____1 = (function (state_33363){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33390){if((e33390 instanceof Object)){
var ex__18754__auto__ = e33390;
var statearr_33391_33409 = state_33363;
(statearr_33391_33409[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33410 = state_33363;
state_33363 = G__33410;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18808__auto__ = (function (){var statearr_33392 = f__18807__auto__.call(null);
(statearr_33392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___33393);

return statearr_33392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___33393,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__18806__auto___33518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___33518,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___33518,out){
return (function (state_33494){
var state_val_33495 = (state_33494[(1)]);
if((state_val_33495 === (7))){
var inst_33474 = (state_33494[(7)]);
var inst_33473 = (state_33494[(8)]);
var inst_33473__$1 = (state_33494[(2)]);
var inst_33474__$1 = cljs.core.nth.call(null,inst_33473__$1,(0),null);
var inst_33475 = cljs.core.nth.call(null,inst_33473__$1,(1),null);
var inst_33476 = (inst_33474__$1 == null);
var state_33494__$1 = (function (){var statearr_33496 = state_33494;
(statearr_33496[(7)] = inst_33474__$1);

(statearr_33496[(9)] = inst_33475);

(statearr_33496[(8)] = inst_33473__$1);

return statearr_33496;
})();
if(cljs.core.truth_(inst_33476)){
var statearr_33497_33519 = state_33494__$1;
(statearr_33497_33519[(1)] = (8));

} else {
var statearr_33498_33520 = state_33494__$1;
(statearr_33498_33520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (1))){
var inst_33465 = cljs.core.vec.call(null,chs);
var inst_33466 = inst_33465;
var state_33494__$1 = (function (){var statearr_33499 = state_33494;
(statearr_33499[(10)] = inst_33466);

return statearr_33499;
})();
var statearr_33500_33521 = state_33494__$1;
(statearr_33500_33521[(2)] = null);

(statearr_33500_33521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (4))){
var inst_33466 = (state_33494[(10)]);
var state_33494__$1 = state_33494;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33494__$1,(7),inst_33466);
} else {
if((state_val_33495 === (6))){
var inst_33490 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33501_33522 = state_33494__$1;
(statearr_33501_33522[(2)] = inst_33490);

(statearr_33501_33522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (3))){
var inst_33492 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else {
if((state_val_33495 === (2))){
var inst_33466 = (state_33494[(10)]);
var inst_33468 = cljs.core.count.call(null,inst_33466);
var inst_33469 = (inst_33468 > (0));
var state_33494__$1 = state_33494;
if(cljs.core.truth_(inst_33469)){
var statearr_33503_33523 = state_33494__$1;
(statearr_33503_33523[(1)] = (4));

} else {
var statearr_33504_33524 = state_33494__$1;
(statearr_33504_33524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (11))){
var inst_33466 = (state_33494[(10)]);
var inst_33483 = (state_33494[(2)]);
var tmp33502 = inst_33466;
var inst_33466__$1 = tmp33502;
var state_33494__$1 = (function (){var statearr_33505 = state_33494;
(statearr_33505[(10)] = inst_33466__$1);

(statearr_33505[(11)] = inst_33483);

return statearr_33505;
})();
var statearr_33506_33525 = state_33494__$1;
(statearr_33506_33525[(2)] = null);

(statearr_33506_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (9))){
var inst_33474 = (state_33494[(7)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33494__$1,(11),out,inst_33474);
} else {
if((state_val_33495 === (5))){
var inst_33488 = cljs.core.async.close_BANG_.call(null,out);
var state_33494__$1 = state_33494;
var statearr_33507_33526 = state_33494__$1;
(statearr_33507_33526[(2)] = inst_33488);

(statearr_33507_33526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (10))){
var inst_33486 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33508_33527 = state_33494__$1;
(statearr_33508_33527[(2)] = inst_33486);

(statearr_33508_33527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (8))){
var inst_33466 = (state_33494[(10)]);
var inst_33474 = (state_33494[(7)]);
var inst_33475 = (state_33494[(9)]);
var inst_33473 = (state_33494[(8)]);
var inst_33478 = (function (){var c = inst_33475;
var v = inst_33474;
var vec__33471 = inst_33473;
var cs = inst_33466;
return ((function (c,v,vec__33471,cs,inst_33466,inst_33474,inst_33475,inst_33473,state_val_33495,c__18806__auto___33518,out){
return (function (p1__33411_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33411_SHARP_);
});
;})(c,v,vec__33471,cs,inst_33466,inst_33474,inst_33475,inst_33473,state_val_33495,c__18806__auto___33518,out))
})();
var inst_33479 = cljs.core.filterv.call(null,inst_33478,inst_33466);
var inst_33466__$1 = inst_33479;
var state_33494__$1 = (function (){var statearr_33509 = state_33494;
(statearr_33509[(10)] = inst_33466__$1);

return statearr_33509;
})();
var statearr_33510_33528 = state_33494__$1;
(statearr_33510_33528[(2)] = null);

(statearr_33510_33528[(1)] = (2));


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
});})(c__18806__auto___33518,out))
;
return ((function (switch__18750__auto__,c__18806__auto___33518,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33514[(0)] = state_machine__18751__auto__);

(statearr_33514[(1)] = (1));

return statearr_33514;
});
var state_machine__18751__auto____1 = (function (state_33494){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33515){if((e33515 instanceof Object)){
var ex__18754__auto__ = e33515;
var statearr_33516_33529 = state_33494;
(statearr_33516_33529[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33530 = state_33494;
state_33494 = G__33530;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___33518,out))
})();
var state__18808__auto__ = (function (){var statearr_33517 = f__18807__auto__.call(null);
(statearr_33517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___33518);

return statearr_33517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___33518,out))
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
var c__18806__auto___33623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___33623,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___33623,out){
return (function (state_33600){
var state_val_33601 = (state_33600[(1)]);
if((state_val_33601 === (7))){
var inst_33582 = (state_33600[(7)]);
var inst_33582__$1 = (state_33600[(2)]);
var inst_33583 = (inst_33582__$1 == null);
var inst_33584 = cljs.core.not.call(null,inst_33583);
var state_33600__$1 = (function (){var statearr_33602 = state_33600;
(statearr_33602[(7)] = inst_33582__$1);

return statearr_33602;
})();
if(inst_33584){
var statearr_33603_33624 = state_33600__$1;
(statearr_33603_33624[(1)] = (8));

} else {
var statearr_33604_33625 = state_33600__$1;
(statearr_33604_33625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (1))){
var inst_33577 = (0);
var state_33600__$1 = (function (){var statearr_33605 = state_33600;
(statearr_33605[(8)] = inst_33577);

return statearr_33605;
})();
var statearr_33606_33626 = state_33600__$1;
(statearr_33606_33626[(2)] = null);

(statearr_33606_33626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (4))){
var state_33600__$1 = state_33600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33600__$1,(7),ch);
} else {
if((state_val_33601 === (6))){
var inst_33595 = (state_33600[(2)]);
var state_33600__$1 = state_33600;
var statearr_33607_33627 = state_33600__$1;
(statearr_33607_33627[(2)] = inst_33595);

(statearr_33607_33627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (3))){
var inst_33597 = (state_33600[(2)]);
var inst_33598 = cljs.core.async.close_BANG_.call(null,out);
var state_33600__$1 = (function (){var statearr_33608 = state_33600;
(statearr_33608[(9)] = inst_33597);

return statearr_33608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33600__$1,inst_33598);
} else {
if((state_val_33601 === (2))){
var inst_33577 = (state_33600[(8)]);
var inst_33579 = (inst_33577 < n);
var state_33600__$1 = state_33600;
if(cljs.core.truth_(inst_33579)){
var statearr_33609_33628 = state_33600__$1;
(statearr_33609_33628[(1)] = (4));

} else {
var statearr_33610_33629 = state_33600__$1;
(statearr_33610_33629[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (11))){
var inst_33577 = (state_33600[(8)]);
var inst_33587 = (state_33600[(2)]);
var inst_33588 = (inst_33577 + (1));
var inst_33577__$1 = inst_33588;
var state_33600__$1 = (function (){var statearr_33611 = state_33600;
(statearr_33611[(10)] = inst_33587);

(statearr_33611[(8)] = inst_33577__$1);

return statearr_33611;
})();
var statearr_33612_33630 = state_33600__$1;
(statearr_33612_33630[(2)] = null);

(statearr_33612_33630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (9))){
var state_33600__$1 = state_33600;
var statearr_33613_33631 = state_33600__$1;
(statearr_33613_33631[(2)] = null);

(statearr_33613_33631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (5))){
var state_33600__$1 = state_33600;
var statearr_33614_33632 = state_33600__$1;
(statearr_33614_33632[(2)] = null);

(statearr_33614_33632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (10))){
var inst_33592 = (state_33600[(2)]);
var state_33600__$1 = state_33600;
var statearr_33615_33633 = state_33600__$1;
(statearr_33615_33633[(2)] = inst_33592);

(statearr_33615_33633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33601 === (8))){
var inst_33582 = (state_33600[(7)]);
var state_33600__$1 = state_33600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33600__$1,(11),out,inst_33582);
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
});})(c__18806__auto___33623,out))
;
return ((function (switch__18750__auto__,c__18806__auto___33623,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33619[(0)] = state_machine__18751__auto__);

(statearr_33619[(1)] = (1));

return statearr_33619;
});
var state_machine__18751__auto____1 = (function (state_33600){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33620){if((e33620 instanceof Object)){
var ex__18754__auto__ = e33620;
var statearr_33621_33634 = state_33600;
(statearr_33621_33634[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33635 = state_33600;
state_33600 = G__33635;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33600){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___33623,out))
})();
var state__18808__auto__ = (function (){var statearr_33622 = f__18807__auto__.call(null);
(statearr_33622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___33623);

return statearr_33622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___33623,out))
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
if(typeof cljs.core.async.t33643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33643 = (function (ch,f,map_LT_,meta33644){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33644 = meta33644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33646 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33646 = (function (fn1,_,meta33644,map_LT_,f,ch,meta33647){
this.fn1 = fn1;
this._ = _;
this.meta33644 = meta33644;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33647 = meta33647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33636_SHARP_){
return f1.call(null,(((p1__33636_SHARP_ == null))?null:self__.f.call(null,p1__33636_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33646.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33648){
var self__ = this;
var _33648__$1 = this;
return self__.meta33647;
});})(___$1))
;

cljs.core.async.t33646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33648,meta33647__$1){
var self__ = this;
var _33648__$1 = this;
return (new cljs.core.async.t33646(self__.fn1,self__._,self__.meta33644,self__.map_LT_,self__.f,self__.ch,meta33647__$1));
});})(___$1))
;

cljs.core.async.t33646.cljs$lang$type = true;

cljs.core.async.t33646.cljs$lang$ctorStr = "cljs.core.async/t33646";

cljs.core.async.t33646.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33646");
});})(___$1))
;

cljs.core.async.__GT_t33646 = ((function (___$1){
return (function __GT_t33646(fn1__$1,___$2,meta33644__$1,map_LT___$1,f__$1,ch__$1,meta33647){
return (new cljs.core.async.t33646(fn1__$1,___$2,meta33644__$1,map_LT___$1,f__$1,ch__$1,meta33647));
});})(___$1))
;

}

return (new cljs.core.async.t33646(fn1,___$1,self__.meta33644,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__15646__auto__ = ret;
if(cljs.core.truth_(and__15646__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__15646__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33643.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33645){
var self__ = this;
var _33645__$1 = this;
return self__.meta33644;
});

cljs.core.async.t33643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33645,meta33644__$1){
var self__ = this;
var _33645__$1 = this;
return (new cljs.core.async.t33643(self__.ch,self__.f,self__.map_LT_,meta33644__$1));
});

cljs.core.async.t33643.cljs$lang$type = true;

cljs.core.async.t33643.cljs$lang$ctorStr = "cljs.core.async/t33643";

cljs.core.async.t33643.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33643");
});

cljs.core.async.__GT_t33643 = (function __GT_t33643(ch__$1,f__$1,map_LT___$1,meta33644){
return (new cljs.core.async.t33643(ch__$1,f__$1,map_LT___$1,meta33644));
});

}

return (new cljs.core.async.t33643(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33652 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33652 = (function (ch,f,map_GT_,meta33653){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33653 = meta33653;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33652.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33652.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33654){
var self__ = this;
var _33654__$1 = this;
return self__.meta33653;
});

cljs.core.async.t33652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33654,meta33653__$1){
var self__ = this;
var _33654__$1 = this;
return (new cljs.core.async.t33652(self__.ch,self__.f,self__.map_GT_,meta33653__$1));
});

cljs.core.async.t33652.cljs$lang$type = true;

cljs.core.async.t33652.cljs$lang$ctorStr = "cljs.core.async/t33652";

cljs.core.async.t33652.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33652");
});

cljs.core.async.__GT_t33652 = (function __GT_t33652(ch__$1,f__$1,map_GT___$1,meta33653){
return (new cljs.core.async.t33652(ch__$1,f__$1,map_GT___$1,meta33653));
});

}

return (new cljs.core.async.t33652(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33658 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33658 = (function (ch,p,filter_GT_,meta33659){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33659 = meta33659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33658.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33660){
var self__ = this;
var _33660__$1 = this;
return self__.meta33659;
});

cljs.core.async.t33658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33660,meta33659__$1){
var self__ = this;
var _33660__$1 = this;
return (new cljs.core.async.t33658(self__.ch,self__.p,self__.filter_GT_,meta33659__$1));
});

cljs.core.async.t33658.cljs$lang$type = true;

cljs.core.async.t33658.cljs$lang$ctorStr = "cljs.core.async/t33658";

cljs.core.async.t33658.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33658");
});

cljs.core.async.__GT_t33658 = (function __GT_t33658(ch__$1,p__$1,filter_GT___$1,meta33659){
return (new cljs.core.async.t33658(ch__$1,p__$1,filter_GT___$1,meta33659));
});

}

return (new cljs.core.async.t33658(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18806__auto___33743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___33743,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___33743,out){
return (function (state_33722){
var state_val_33723 = (state_33722[(1)]);
if((state_val_33723 === (7))){
var inst_33718 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33724_33744 = state_33722__$1;
(statearr_33724_33744[(2)] = inst_33718);

(statearr_33724_33744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (1))){
var state_33722__$1 = state_33722;
var statearr_33725_33745 = state_33722__$1;
(statearr_33725_33745[(2)] = null);

(statearr_33725_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (4))){
var inst_33704 = (state_33722[(7)]);
var inst_33704__$1 = (state_33722[(2)]);
var inst_33705 = (inst_33704__$1 == null);
var state_33722__$1 = (function (){var statearr_33726 = state_33722;
(statearr_33726[(7)] = inst_33704__$1);

return statearr_33726;
})();
if(cljs.core.truth_(inst_33705)){
var statearr_33727_33746 = state_33722__$1;
(statearr_33727_33746[(1)] = (5));

} else {
var statearr_33728_33747 = state_33722__$1;
(statearr_33728_33747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (6))){
var inst_33704 = (state_33722[(7)]);
var inst_33709 = p.call(null,inst_33704);
var state_33722__$1 = state_33722;
if(cljs.core.truth_(inst_33709)){
var statearr_33729_33748 = state_33722__$1;
(statearr_33729_33748[(1)] = (8));

} else {
var statearr_33730_33749 = state_33722__$1;
(statearr_33730_33749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (3))){
var inst_33720 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33722__$1,inst_33720);
} else {
if((state_val_33723 === (2))){
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33722__$1,(4),ch);
} else {
if((state_val_33723 === (11))){
var inst_33712 = (state_33722[(2)]);
var state_33722__$1 = state_33722;
var statearr_33731_33750 = state_33722__$1;
(statearr_33731_33750[(2)] = inst_33712);

(statearr_33731_33750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (9))){
var state_33722__$1 = state_33722;
var statearr_33732_33751 = state_33722__$1;
(statearr_33732_33751[(2)] = null);

(statearr_33732_33751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (5))){
var inst_33707 = cljs.core.async.close_BANG_.call(null,out);
var state_33722__$1 = state_33722;
var statearr_33733_33752 = state_33722__$1;
(statearr_33733_33752[(2)] = inst_33707);

(statearr_33733_33752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (10))){
var inst_33715 = (state_33722[(2)]);
var state_33722__$1 = (function (){var statearr_33734 = state_33722;
(statearr_33734[(8)] = inst_33715);

return statearr_33734;
})();
var statearr_33735_33753 = state_33722__$1;
(statearr_33735_33753[(2)] = null);

(statearr_33735_33753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33723 === (8))){
var inst_33704 = (state_33722[(7)]);
var state_33722__$1 = state_33722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33722__$1,(11),out,inst_33704);
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
});})(c__18806__auto___33743,out))
;
return ((function (switch__18750__auto__,c__18806__auto___33743,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33739 = [null,null,null,null,null,null,null,null,null];
(statearr_33739[(0)] = state_machine__18751__auto__);

(statearr_33739[(1)] = (1));

return statearr_33739;
});
var state_machine__18751__auto____1 = (function (state_33722){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33740){if((e33740 instanceof Object)){
var ex__18754__auto__ = e33740;
var statearr_33741_33754 = state_33722;
(statearr_33741_33754[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33755 = state_33722;
state_33722 = G__33755;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33722){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___33743,out))
})();
var state__18808__auto__ = (function (){var statearr_33742 = f__18807__auto__.call(null);
(statearr_33742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___33743);

return statearr_33742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___33743,out))
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
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_33921){
var state_val_33922 = (state_33921[(1)]);
if((state_val_33922 === (7))){
var inst_33917 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33923_33964 = state_33921__$1;
(statearr_33923_33964[(2)] = inst_33917);

(statearr_33923_33964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (20))){
var inst_33887 = (state_33921[(7)]);
var inst_33898 = (state_33921[(2)]);
var inst_33899 = cljs.core.next.call(null,inst_33887);
var inst_33873 = inst_33899;
var inst_33874 = null;
var inst_33875 = (0);
var inst_33876 = (0);
var state_33921__$1 = (function (){var statearr_33924 = state_33921;
(statearr_33924[(8)] = inst_33898);

(statearr_33924[(9)] = inst_33873);

(statearr_33924[(10)] = inst_33874);

(statearr_33924[(11)] = inst_33875);

(statearr_33924[(12)] = inst_33876);

return statearr_33924;
})();
var statearr_33925_33965 = state_33921__$1;
(statearr_33925_33965[(2)] = null);

(statearr_33925_33965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (1))){
var state_33921__$1 = state_33921;
var statearr_33926_33966 = state_33921__$1;
(statearr_33926_33966[(2)] = null);

(statearr_33926_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (4))){
var inst_33862 = (state_33921[(13)]);
var inst_33862__$1 = (state_33921[(2)]);
var inst_33863 = (inst_33862__$1 == null);
var state_33921__$1 = (function (){var statearr_33927 = state_33921;
(statearr_33927[(13)] = inst_33862__$1);

return statearr_33927;
})();
if(cljs.core.truth_(inst_33863)){
var statearr_33928_33967 = state_33921__$1;
(statearr_33928_33967[(1)] = (5));

} else {
var statearr_33929_33968 = state_33921__$1;
(statearr_33929_33968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (15))){
var state_33921__$1 = state_33921;
var statearr_33933_33969 = state_33921__$1;
(statearr_33933_33969[(2)] = null);

(statearr_33933_33969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (21))){
var state_33921__$1 = state_33921;
var statearr_33934_33970 = state_33921__$1;
(statearr_33934_33970[(2)] = null);

(statearr_33934_33970[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (13))){
var inst_33873 = (state_33921[(9)]);
var inst_33874 = (state_33921[(10)]);
var inst_33875 = (state_33921[(11)]);
var inst_33876 = (state_33921[(12)]);
var inst_33883 = (state_33921[(2)]);
var inst_33884 = (inst_33876 + (1));
var tmp33930 = inst_33873;
var tmp33931 = inst_33874;
var tmp33932 = inst_33875;
var inst_33873__$1 = tmp33930;
var inst_33874__$1 = tmp33931;
var inst_33875__$1 = tmp33932;
var inst_33876__$1 = inst_33884;
var state_33921__$1 = (function (){var statearr_33935 = state_33921;
(statearr_33935[(14)] = inst_33883);

(statearr_33935[(9)] = inst_33873__$1);

(statearr_33935[(10)] = inst_33874__$1);

(statearr_33935[(11)] = inst_33875__$1);

(statearr_33935[(12)] = inst_33876__$1);

return statearr_33935;
})();
var statearr_33936_33971 = state_33921__$1;
(statearr_33936_33971[(2)] = null);

(statearr_33936_33971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (22))){
var state_33921__$1 = state_33921;
var statearr_33937_33972 = state_33921__$1;
(statearr_33937_33972[(2)] = null);

(statearr_33937_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (6))){
var inst_33862 = (state_33921[(13)]);
var inst_33871 = f.call(null,inst_33862);
var inst_33872 = cljs.core.seq.call(null,inst_33871);
var inst_33873 = inst_33872;
var inst_33874 = null;
var inst_33875 = (0);
var inst_33876 = (0);
var state_33921__$1 = (function (){var statearr_33938 = state_33921;
(statearr_33938[(9)] = inst_33873);

(statearr_33938[(10)] = inst_33874);

(statearr_33938[(11)] = inst_33875);

(statearr_33938[(12)] = inst_33876);

return statearr_33938;
})();
var statearr_33939_33973 = state_33921__$1;
(statearr_33939_33973[(2)] = null);

(statearr_33939_33973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (17))){
var inst_33887 = (state_33921[(7)]);
var inst_33891 = cljs.core.chunk_first.call(null,inst_33887);
var inst_33892 = cljs.core.chunk_rest.call(null,inst_33887);
var inst_33893 = cljs.core.count.call(null,inst_33891);
var inst_33873 = inst_33892;
var inst_33874 = inst_33891;
var inst_33875 = inst_33893;
var inst_33876 = (0);
var state_33921__$1 = (function (){var statearr_33940 = state_33921;
(statearr_33940[(9)] = inst_33873);

(statearr_33940[(10)] = inst_33874);

(statearr_33940[(11)] = inst_33875);

(statearr_33940[(12)] = inst_33876);

return statearr_33940;
})();
var statearr_33941_33974 = state_33921__$1;
(statearr_33941_33974[(2)] = null);

(statearr_33941_33974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (3))){
var inst_33919 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33921__$1,inst_33919);
} else {
if((state_val_33922 === (12))){
var inst_33907 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33942_33975 = state_33921__$1;
(statearr_33942_33975[(2)] = inst_33907);

(statearr_33942_33975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (2))){
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33921__$1,(4),in$);
} else {
if((state_val_33922 === (23))){
var inst_33915 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33943_33976 = state_33921__$1;
(statearr_33943_33976[(2)] = inst_33915);

(statearr_33943_33976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (19))){
var inst_33902 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33944_33977 = state_33921__$1;
(statearr_33944_33977[(2)] = inst_33902);

(statearr_33944_33977[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (11))){
var inst_33887 = (state_33921[(7)]);
var inst_33873 = (state_33921[(9)]);
var inst_33887__$1 = cljs.core.seq.call(null,inst_33873);
var state_33921__$1 = (function (){var statearr_33945 = state_33921;
(statearr_33945[(7)] = inst_33887__$1);

return statearr_33945;
})();
if(inst_33887__$1){
var statearr_33946_33978 = state_33921__$1;
(statearr_33946_33978[(1)] = (14));

} else {
var statearr_33947_33979 = state_33921__$1;
(statearr_33947_33979[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (9))){
var inst_33909 = (state_33921[(2)]);
var inst_33910 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33921__$1 = (function (){var statearr_33948 = state_33921;
(statearr_33948[(15)] = inst_33909);

return statearr_33948;
})();
if(cljs.core.truth_(inst_33910)){
var statearr_33949_33980 = state_33921__$1;
(statearr_33949_33980[(1)] = (21));

} else {
var statearr_33950_33981 = state_33921__$1;
(statearr_33950_33981[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (5))){
var inst_33865 = cljs.core.async.close_BANG_.call(null,out);
var state_33921__$1 = state_33921;
var statearr_33951_33982 = state_33921__$1;
(statearr_33951_33982[(2)] = inst_33865);

(statearr_33951_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (14))){
var inst_33887 = (state_33921[(7)]);
var inst_33889 = cljs.core.chunked_seq_QMARK_.call(null,inst_33887);
var state_33921__$1 = state_33921;
if(inst_33889){
var statearr_33952_33983 = state_33921__$1;
(statearr_33952_33983[(1)] = (17));

} else {
var statearr_33953_33984 = state_33921__$1;
(statearr_33953_33984[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (16))){
var inst_33905 = (state_33921[(2)]);
var state_33921__$1 = state_33921;
var statearr_33954_33985 = state_33921__$1;
(statearr_33954_33985[(2)] = inst_33905);

(statearr_33954_33985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33922 === (10))){
var inst_33874 = (state_33921[(10)]);
var inst_33876 = (state_33921[(12)]);
var inst_33881 = cljs.core._nth.call(null,inst_33874,inst_33876);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33921__$1,(13),out,inst_33881);
} else {
if((state_val_33922 === (18))){
var inst_33887 = (state_33921[(7)]);
var inst_33896 = cljs.core.first.call(null,inst_33887);
var state_33921__$1 = state_33921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33921__$1,(20),out,inst_33896);
} else {
if((state_val_33922 === (8))){
var inst_33875 = (state_33921[(11)]);
var inst_33876 = (state_33921[(12)]);
var inst_33878 = (inst_33876 < inst_33875);
var inst_33879 = inst_33878;
var state_33921__$1 = state_33921;
if(cljs.core.truth_(inst_33879)){
var statearr_33955_33986 = state_33921__$1;
(statearr_33955_33986[(1)] = (10));

} else {
var statearr_33956_33987 = state_33921__$1;
(statearr_33956_33987[(1)] = (11));

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
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_33960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33960[(0)] = state_machine__18751__auto__);

(statearr_33960[(1)] = (1));

return statearr_33960;
});
var state_machine__18751__auto____1 = (function (state_33921){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_33921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e33961){if((e33961 instanceof Object)){
var ex__18754__auto__ = e33961;
var statearr_33962_33988 = state_33921;
(statearr_33962_33988[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33989 = state_33921;
state_33921 = G__33989;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_33921){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_33921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_33963 = f__18807__auto__.call(null);
(statearr_33963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_33963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
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
var c__18806__auto___34086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___34086,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___34086,out){
return (function (state_34061){
var state_val_34062 = (state_34061[(1)]);
if((state_val_34062 === (7))){
var inst_34056 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34063_34087 = state_34061__$1;
(statearr_34063_34087[(2)] = inst_34056);

(statearr_34063_34087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (1))){
var inst_34038 = null;
var state_34061__$1 = (function (){var statearr_34064 = state_34061;
(statearr_34064[(7)] = inst_34038);

return statearr_34064;
})();
var statearr_34065_34088 = state_34061__$1;
(statearr_34065_34088[(2)] = null);

(statearr_34065_34088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (4))){
var inst_34041 = (state_34061[(8)]);
var inst_34041__$1 = (state_34061[(2)]);
var inst_34042 = (inst_34041__$1 == null);
var inst_34043 = cljs.core.not.call(null,inst_34042);
var state_34061__$1 = (function (){var statearr_34066 = state_34061;
(statearr_34066[(8)] = inst_34041__$1);

return statearr_34066;
})();
if(inst_34043){
var statearr_34067_34089 = state_34061__$1;
(statearr_34067_34089[(1)] = (5));

} else {
var statearr_34068_34090 = state_34061__$1;
(statearr_34068_34090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (6))){
var state_34061__$1 = state_34061;
var statearr_34069_34091 = state_34061__$1;
(statearr_34069_34091[(2)] = null);

(statearr_34069_34091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (3))){
var inst_34058 = (state_34061[(2)]);
var inst_34059 = cljs.core.async.close_BANG_.call(null,out);
var state_34061__$1 = (function (){var statearr_34070 = state_34061;
(statearr_34070[(9)] = inst_34058);

return statearr_34070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34061__$1,inst_34059);
} else {
if((state_val_34062 === (2))){
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34061__$1,(4),ch);
} else {
if((state_val_34062 === (11))){
var inst_34041 = (state_34061[(8)]);
var inst_34050 = (state_34061[(2)]);
var inst_34038 = inst_34041;
var state_34061__$1 = (function (){var statearr_34071 = state_34061;
(statearr_34071[(10)] = inst_34050);

(statearr_34071[(7)] = inst_34038);

return statearr_34071;
})();
var statearr_34072_34092 = state_34061__$1;
(statearr_34072_34092[(2)] = null);

(statearr_34072_34092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (9))){
var inst_34041 = (state_34061[(8)]);
var state_34061__$1 = state_34061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34061__$1,(11),out,inst_34041);
} else {
if((state_val_34062 === (5))){
var inst_34041 = (state_34061[(8)]);
var inst_34038 = (state_34061[(7)]);
var inst_34045 = cljs.core._EQ_.call(null,inst_34041,inst_34038);
var state_34061__$1 = state_34061;
if(inst_34045){
var statearr_34074_34093 = state_34061__$1;
(statearr_34074_34093[(1)] = (8));

} else {
var statearr_34075_34094 = state_34061__$1;
(statearr_34075_34094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (10))){
var inst_34053 = (state_34061[(2)]);
var state_34061__$1 = state_34061;
var statearr_34076_34095 = state_34061__$1;
(statearr_34076_34095[(2)] = inst_34053);

(statearr_34076_34095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34062 === (8))){
var inst_34038 = (state_34061[(7)]);
var tmp34073 = inst_34038;
var inst_34038__$1 = tmp34073;
var state_34061__$1 = (function (){var statearr_34077 = state_34061;
(statearr_34077[(7)] = inst_34038__$1);

return statearr_34077;
})();
var statearr_34078_34096 = state_34061__$1;
(statearr_34078_34096[(2)] = null);

(statearr_34078_34096[(1)] = (2));


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
});})(c__18806__auto___34086,out))
;
return ((function (switch__18750__auto__,c__18806__auto___34086,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_34082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34082[(0)] = state_machine__18751__auto__);

(statearr_34082[(1)] = (1));

return statearr_34082;
});
var state_machine__18751__auto____1 = (function (state_34061){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_34061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e34083){if((e34083 instanceof Object)){
var ex__18754__auto__ = e34083;
var statearr_34084_34097 = state_34061;
(statearr_34084_34097[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34098 = state_34061;
state_34061 = G__34098;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_34061){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_34061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___34086,out))
})();
var state__18808__auto__ = (function (){var statearr_34085 = f__18807__auto__.call(null);
(statearr_34085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___34086);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___34086,out))
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
var c__18806__auto___34233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___34233,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___34233,out){
return (function (state_34203){
var state_val_34204 = (state_34203[(1)]);
if((state_val_34204 === (7))){
var inst_34199 = (state_34203[(2)]);
var state_34203__$1 = state_34203;
var statearr_34205_34234 = state_34203__$1;
(statearr_34205_34234[(2)] = inst_34199);

(statearr_34205_34234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (1))){
var inst_34166 = (new Array(n));
var inst_34167 = inst_34166;
var inst_34168 = (0);
var state_34203__$1 = (function (){var statearr_34206 = state_34203;
(statearr_34206[(7)] = inst_34167);

(statearr_34206[(8)] = inst_34168);

return statearr_34206;
})();
var statearr_34207_34235 = state_34203__$1;
(statearr_34207_34235[(2)] = null);

(statearr_34207_34235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (4))){
var inst_34171 = (state_34203[(9)]);
var inst_34171__$1 = (state_34203[(2)]);
var inst_34172 = (inst_34171__$1 == null);
var inst_34173 = cljs.core.not.call(null,inst_34172);
var state_34203__$1 = (function (){var statearr_34208 = state_34203;
(statearr_34208[(9)] = inst_34171__$1);

return statearr_34208;
})();
if(inst_34173){
var statearr_34209_34236 = state_34203__$1;
(statearr_34209_34236[(1)] = (5));

} else {
var statearr_34210_34237 = state_34203__$1;
(statearr_34210_34237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (15))){
var inst_34193 = (state_34203[(2)]);
var state_34203__$1 = state_34203;
var statearr_34211_34238 = state_34203__$1;
(statearr_34211_34238[(2)] = inst_34193);

(statearr_34211_34238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (13))){
var state_34203__$1 = state_34203;
var statearr_34212_34239 = state_34203__$1;
(statearr_34212_34239[(2)] = null);

(statearr_34212_34239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (6))){
var inst_34168 = (state_34203[(8)]);
var inst_34189 = (inst_34168 > (0));
var state_34203__$1 = state_34203;
if(cljs.core.truth_(inst_34189)){
var statearr_34213_34240 = state_34203__$1;
(statearr_34213_34240[(1)] = (12));

} else {
var statearr_34214_34241 = state_34203__$1;
(statearr_34214_34241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (3))){
var inst_34201 = (state_34203[(2)]);
var state_34203__$1 = state_34203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34203__$1,inst_34201);
} else {
if((state_val_34204 === (12))){
var inst_34167 = (state_34203[(7)]);
var inst_34191 = cljs.core.vec.call(null,inst_34167);
var state_34203__$1 = state_34203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34203__$1,(15),out,inst_34191);
} else {
if((state_val_34204 === (2))){
var state_34203__$1 = state_34203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34203__$1,(4),ch);
} else {
if((state_val_34204 === (11))){
var inst_34183 = (state_34203[(2)]);
var inst_34184 = (new Array(n));
var inst_34167 = inst_34184;
var inst_34168 = (0);
var state_34203__$1 = (function (){var statearr_34215 = state_34203;
(statearr_34215[(10)] = inst_34183);

(statearr_34215[(7)] = inst_34167);

(statearr_34215[(8)] = inst_34168);

return statearr_34215;
})();
var statearr_34216_34242 = state_34203__$1;
(statearr_34216_34242[(2)] = null);

(statearr_34216_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (9))){
var inst_34167 = (state_34203[(7)]);
var inst_34181 = cljs.core.vec.call(null,inst_34167);
var state_34203__$1 = state_34203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34203__$1,(11),out,inst_34181);
} else {
if((state_val_34204 === (5))){
var inst_34171 = (state_34203[(9)]);
var inst_34167 = (state_34203[(7)]);
var inst_34168 = (state_34203[(8)]);
var inst_34176 = (state_34203[(11)]);
var inst_34175 = (inst_34167[inst_34168] = inst_34171);
var inst_34176__$1 = (inst_34168 + (1));
var inst_34177 = (inst_34176__$1 < n);
var state_34203__$1 = (function (){var statearr_34217 = state_34203;
(statearr_34217[(12)] = inst_34175);

(statearr_34217[(11)] = inst_34176__$1);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34177)){
var statearr_34218_34243 = state_34203__$1;
(statearr_34218_34243[(1)] = (8));

} else {
var statearr_34219_34244 = state_34203__$1;
(statearr_34219_34244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (14))){
var inst_34196 = (state_34203[(2)]);
var inst_34197 = cljs.core.async.close_BANG_.call(null,out);
var state_34203__$1 = (function (){var statearr_34221 = state_34203;
(statearr_34221[(13)] = inst_34196);

return statearr_34221;
})();
var statearr_34222_34245 = state_34203__$1;
(statearr_34222_34245[(2)] = inst_34197);

(statearr_34222_34245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (10))){
var inst_34187 = (state_34203[(2)]);
var state_34203__$1 = state_34203;
var statearr_34223_34246 = state_34203__$1;
(statearr_34223_34246[(2)] = inst_34187);

(statearr_34223_34246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34204 === (8))){
var inst_34167 = (state_34203[(7)]);
var inst_34176 = (state_34203[(11)]);
var tmp34220 = inst_34167;
var inst_34167__$1 = tmp34220;
var inst_34168 = inst_34176;
var state_34203__$1 = (function (){var statearr_34224 = state_34203;
(statearr_34224[(7)] = inst_34167__$1);

(statearr_34224[(8)] = inst_34168);

return statearr_34224;
})();
var statearr_34225_34247 = state_34203__$1;
(statearr_34225_34247[(2)] = null);

(statearr_34225_34247[(1)] = (2));


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
});})(c__18806__auto___34233,out))
;
return ((function (switch__18750__auto__,c__18806__auto___34233,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_34229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34229[(0)] = state_machine__18751__auto__);

(statearr_34229[(1)] = (1));

return statearr_34229;
});
var state_machine__18751__auto____1 = (function (state_34203){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_34203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e34230){if((e34230 instanceof Object)){
var ex__18754__auto__ = e34230;
var statearr_34231_34248 = state_34203;
(statearr_34231_34248[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_34203;
state_34203 = G__34249;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_34203){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_34203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___34233,out))
})();
var state__18808__auto__ = (function (){var statearr_34232 = f__18807__auto__.call(null);
(statearr_34232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___34233);

return statearr_34232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___34233,out))
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
var c__18806__auto___34392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___34392,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___34392,out){
return (function (state_34362){
var state_val_34363 = (state_34362[(1)]);
if((state_val_34363 === (7))){
var inst_34358 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34364_34393 = state_34362__$1;
(statearr_34364_34393[(2)] = inst_34358);

(statearr_34364_34393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (1))){
var inst_34321 = [];
var inst_34322 = inst_34321;
var inst_34323 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34362__$1 = (function (){var statearr_34365 = state_34362;
(statearr_34365[(7)] = inst_34323);

(statearr_34365[(8)] = inst_34322);

return statearr_34365;
})();
var statearr_34366_34394 = state_34362__$1;
(statearr_34366_34394[(2)] = null);

(statearr_34366_34394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (4))){
var inst_34326 = (state_34362[(9)]);
var inst_34326__$1 = (state_34362[(2)]);
var inst_34327 = (inst_34326__$1 == null);
var inst_34328 = cljs.core.not.call(null,inst_34327);
var state_34362__$1 = (function (){var statearr_34367 = state_34362;
(statearr_34367[(9)] = inst_34326__$1);

return statearr_34367;
})();
if(inst_34328){
var statearr_34368_34395 = state_34362__$1;
(statearr_34368_34395[(1)] = (5));

} else {
var statearr_34369_34396 = state_34362__$1;
(statearr_34369_34396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (15))){
var inst_34352 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34370_34397 = state_34362__$1;
(statearr_34370_34397[(2)] = inst_34352);

(statearr_34370_34397[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (13))){
var state_34362__$1 = state_34362;
var statearr_34371_34398 = state_34362__$1;
(statearr_34371_34398[(2)] = null);

(statearr_34371_34398[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (6))){
var inst_34322 = (state_34362[(8)]);
var inst_34347 = inst_34322.length;
var inst_34348 = (inst_34347 > (0));
var state_34362__$1 = state_34362;
if(cljs.core.truth_(inst_34348)){
var statearr_34372_34399 = state_34362__$1;
(statearr_34372_34399[(1)] = (12));

} else {
var statearr_34373_34400 = state_34362__$1;
(statearr_34373_34400[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (3))){
var inst_34360 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34362__$1,inst_34360);
} else {
if((state_val_34363 === (12))){
var inst_34322 = (state_34362[(8)]);
var inst_34350 = cljs.core.vec.call(null,inst_34322);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34362__$1,(15),out,inst_34350);
} else {
if((state_val_34363 === (2))){
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34362__$1,(4),ch);
} else {
if((state_val_34363 === (11))){
var inst_34326 = (state_34362[(9)]);
var inst_34330 = (state_34362[(10)]);
var inst_34340 = (state_34362[(2)]);
var inst_34341 = [];
var inst_34342 = inst_34341.push(inst_34326);
var inst_34322 = inst_34341;
var inst_34323 = inst_34330;
var state_34362__$1 = (function (){var statearr_34374 = state_34362;
(statearr_34374[(11)] = inst_34340);

(statearr_34374[(7)] = inst_34323);

(statearr_34374[(12)] = inst_34342);

(statearr_34374[(8)] = inst_34322);

return statearr_34374;
})();
var statearr_34375_34401 = state_34362__$1;
(statearr_34375_34401[(2)] = null);

(statearr_34375_34401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (9))){
var inst_34322 = (state_34362[(8)]);
var inst_34338 = cljs.core.vec.call(null,inst_34322);
var state_34362__$1 = state_34362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34362__$1,(11),out,inst_34338);
} else {
if((state_val_34363 === (5))){
var inst_34326 = (state_34362[(9)]);
var inst_34323 = (state_34362[(7)]);
var inst_34330 = (state_34362[(10)]);
var inst_34330__$1 = f.call(null,inst_34326);
var inst_34331 = cljs.core._EQ_.call(null,inst_34330__$1,inst_34323);
var inst_34332 = cljs.core.keyword_identical_QMARK_.call(null,inst_34323,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34333 = (inst_34331) || (inst_34332);
var state_34362__$1 = (function (){var statearr_34376 = state_34362;
(statearr_34376[(10)] = inst_34330__$1);

return statearr_34376;
})();
if(cljs.core.truth_(inst_34333)){
var statearr_34377_34402 = state_34362__$1;
(statearr_34377_34402[(1)] = (8));

} else {
var statearr_34378_34403 = state_34362__$1;
(statearr_34378_34403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (14))){
var inst_34355 = (state_34362[(2)]);
var inst_34356 = cljs.core.async.close_BANG_.call(null,out);
var state_34362__$1 = (function (){var statearr_34380 = state_34362;
(statearr_34380[(13)] = inst_34355);

return statearr_34380;
})();
var statearr_34381_34404 = state_34362__$1;
(statearr_34381_34404[(2)] = inst_34356);

(statearr_34381_34404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (10))){
var inst_34345 = (state_34362[(2)]);
var state_34362__$1 = state_34362;
var statearr_34382_34405 = state_34362__$1;
(statearr_34382_34405[(2)] = inst_34345);

(statearr_34382_34405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34363 === (8))){
var inst_34326 = (state_34362[(9)]);
var inst_34330 = (state_34362[(10)]);
var inst_34322 = (state_34362[(8)]);
var inst_34335 = inst_34322.push(inst_34326);
var tmp34379 = inst_34322;
var inst_34322__$1 = tmp34379;
var inst_34323 = inst_34330;
var state_34362__$1 = (function (){var statearr_34383 = state_34362;
(statearr_34383[(14)] = inst_34335);

(statearr_34383[(7)] = inst_34323);

(statearr_34383[(8)] = inst_34322__$1);

return statearr_34383;
})();
var statearr_34384_34406 = state_34362__$1;
(statearr_34384_34406[(2)] = null);

(statearr_34384_34406[(1)] = (2));


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
});})(c__18806__auto___34392,out))
;
return ((function (switch__18750__auto__,c__18806__auto___34392,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_34388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34388[(0)] = state_machine__18751__auto__);

(statearr_34388[(1)] = (1));

return statearr_34388;
});
var state_machine__18751__auto____1 = (function (state_34362){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_34362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e34389){if((e34389 instanceof Object)){
var ex__18754__auto__ = e34389;
var statearr_34390_34407 = state_34362;
(statearr_34390_34407[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34408 = state_34362;
state_34362 = G__34408;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_34362){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_34362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___34392,out))
})();
var state__18808__auto__ = (function (){var statearr_34391 = f__18807__auto__.call(null);
(statearr_34391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___34392);

return statearr_34391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___34392,out))
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