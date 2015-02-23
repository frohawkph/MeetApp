// Compiled by ClojureScript 0.0-2760 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t16340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16340 = (function (f,fn_handler,meta16341){
this.f = f;
this.fn_handler = fn_handler;
this.meta16341 = meta16341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16342){
var self__ = this;
var _16342__$1 = this;
return self__.meta16341;
});

cljs.core.async.t16340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16342,meta16341__$1){
var self__ = this;
var _16342__$1 = this;
return (new cljs.core.async.t16340(self__.f,self__.fn_handler,meta16341__$1));
});

cljs.core.async.t16340.cljs$lang$type = true;

cljs.core.async.t16340.cljs$lang$ctorStr = "cljs.core.async/t16340";

cljs.core.async.t16340.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t16340");
});

cljs.core.async.__GT_t16340 = (function __GT_t16340(f__$1,fn_handler__$1,meta16341){
return (new cljs.core.async.t16340(f__$1,fn_handler__$1,meta16341));
});

}

return (new cljs.core.async.t16340(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__16344 = buff;
if(G__16344){
var bit__3933__auto__ = null;
if(cljs.core.truth_((function (){var or__3252__auto__ = bit__3933__auto__;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return G__16344.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16344.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16344);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16344);
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
var val_16345 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16345);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16345,ret){
return (function (){
return fn1.call(null,val_16345);
});})(val_16345,ret))
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
var n__4139__auto___16346 = n;
var x_16347 = (0);
while(true){
if((x_16347 < n__4139__auto___16346)){
(a[x_16347] = (0));

var G__16348 = (x_16347 + (1));
x_16347 = G__16348;
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

var G__16349 = (i + (1));
i = G__16349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16353 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16353 = (function (flag,alt_flag,meta16354){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16354 = meta16354;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16353.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16355){
var self__ = this;
var _16355__$1 = this;
return self__.meta16354;
});})(flag))
;

cljs.core.async.t16353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16355,meta16354__$1){
var self__ = this;
var _16355__$1 = this;
return (new cljs.core.async.t16353(self__.flag,self__.alt_flag,meta16354__$1));
});})(flag))
;

cljs.core.async.t16353.cljs$lang$type = true;

cljs.core.async.t16353.cljs$lang$ctorStr = "cljs.core.async/t16353";

cljs.core.async.t16353.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t16353");
});})(flag))
;

cljs.core.async.__GT_t16353 = ((function (flag){
return (function __GT_t16353(flag__$1,alt_flag__$1,meta16354){
return (new cljs.core.async.t16353(flag__$1,alt_flag__$1,meta16354));
});})(flag))
;

}

return (new cljs.core.async.t16353(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16359 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16359 = (function (cb,flag,alt_handler,meta16360){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16360 = meta16360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16359.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16361){
var self__ = this;
var _16361__$1 = this;
return self__.meta16360;
});

cljs.core.async.t16359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16361,meta16360__$1){
var self__ = this;
var _16361__$1 = this;
return (new cljs.core.async.t16359(self__.cb,self__.flag,self__.alt_handler,meta16360__$1));
});

cljs.core.async.t16359.cljs$lang$type = true;

cljs.core.async.t16359.cljs$lang$ctorStr = "cljs.core.async/t16359";

cljs.core.async.t16359.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t16359");
});

cljs.core.async.__GT_t16359 = (function __GT_t16359(cb__$1,flag__$1,alt_handler__$1,meta16360){
return (new cljs.core.async.t16359(cb__$1,flag__$1,alt_handler__$1,meta16360));
});

}

return (new cljs.core.async.t16359(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__16362_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16362_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16363_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16363_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3252__auto__ = wport;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16364 = (i + (1));
i = G__16364;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3252__auto__ = ret;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3240__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3240__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3240__auto__;
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
var alts_BANG___delegate = function (ports,p__16365){
var map__16367 = p__16365;
var map__16367__$1 = ((cljs.core.seq_QMARK_.call(null,map__16367))?cljs.core.apply.call(null,cljs.core.hash_map,map__16367):map__16367);
var opts = map__16367__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16365 = null;
if (arguments.length > 1) {
var G__16368__i = 0, G__16368__a = new Array(arguments.length -  1);
while (G__16368__i < G__16368__a.length) {G__16368__a[G__16368__i] = arguments[G__16368__i + 1]; ++G__16368__i;}
  p__16365 = new cljs.core.IndexedSeq(G__16368__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16365);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16369){
var ports = cljs.core.first(arglist__16369);
var p__16365 = cljs.core.rest(arglist__16369);
return alts_BANG___delegate(ports,p__16365);
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
var c__6413__auto___16464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___16464){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___16464){
return (function (state_16440){
var state_val_16441 = (state_16440[(1)]);
if((state_val_16441 === (7))){
var inst_16436 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16442_16465 = state_16440__$1;
(statearr_16442_16465[(2)] = inst_16436);

(statearr_16442_16465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (1))){
var state_16440__$1 = state_16440;
var statearr_16443_16466 = state_16440__$1;
(statearr_16443_16466[(2)] = null);

(statearr_16443_16466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (4))){
var inst_16419 = (state_16440[(7)]);
var inst_16419__$1 = (state_16440[(2)]);
var inst_16420 = (inst_16419__$1 == null);
var state_16440__$1 = (function (){var statearr_16444 = state_16440;
(statearr_16444[(7)] = inst_16419__$1);

return statearr_16444;
})();
if(cljs.core.truth_(inst_16420)){
var statearr_16445_16467 = state_16440__$1;
(statearr_16445_16467[(1)] = (5));

} else {
var statearr_16446_16468 = state_16440__$1;
(statearr_16446_16468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (13))){
var state_16440__$1 = state_16440;
var statearr_16447_16469 = state_16440__$1;
(statearr_16447_16469[(2)] = null);

(statearr_16447_16469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (6))){
var inst_16419 = (state_16440[(7)]);
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16440__$1,(11),to,inst_16419);
} else {
if((state_val_16441 === (3))){
var inst_16438 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16440__$1,inst_16438);
} else {
if((state_val_16441 === (12))){
var state_16440__$1 = state_16440;
var statearr_16448_16470 = state_16440__$1;
(statearr_16448_16470[(2)] = null);

(statearr_16448_16470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (2))){
var state_16440__$1 = state_16440;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16440__$1,(4),from);
} else {
if((state_val_16441 === (11))){
var inst_16429 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
if(cljs.core.truth_(inst_16429)){
var statearr_16449_16471 = state_16440__$1;
(statearr_16449_16471[(1)] = (12));

} else {
var statearr_16450_16472 = state_16440__$1;
(statearr_16450_16472[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (9))){
var state_16440__$1 = state_16440;
var statearr_16451_16473 = state_16440__$1;
(statearr_16451_16473[(2)] = null);

(statearr_16451_16473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (5))){
var state_16440__$1 = state_16440;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16452_16474 = state_16440__$1;
(statearr_16452_16474[(1)] = (8));

} else {
var statearr_16453_16475 = state_16440__$1;
(statearr_16453_16475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (14))){
var inst_16434 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16454_16476 = state_16440__$1;
(statearr_16454_16476[(2)] = inst_16434);

(statearr_16454_16476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (10))){
var inst_16426 = (state_16440[(2)]);
var state_16440__$1 = state_16440;
var statearr_16455_16477 = state_16440__$1;
(statearr_16455_16477[(2)] = inst_16426);

(statearr_16455_16477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16441 === (8))){
var inst_16423 = cljs.core.async.close_BANG_.call(null,to);
var state_16440__$1 = state_16440;
var statearr_16456_16478 = state_16440__$1;
(statearr_16456_16478[(2)] = inst_16423);

(statearr_16456_16478[(1)] = (10));


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
});})(c__6413__auto___16464))
;
return ((function (switch__6357__auto__,c__6413__auto___16464){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16460 = [null,null,null,null,null,null,null,null];
(statearr_16460[(0)] = state_machine__6358__auto__);

(statearr_16460[(1)] = (1));

return statearr_16460;
});
var state_machine__6358__auto____1 = (function (state_16440){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16461){if((e16461 instanceof Object)){
var ex__6361__auto__ = e16461;
var statearr_16462_16479 = state_16440;
(statearr_16462_16479[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16480 = state_16440;
state_16440 = G__16480;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16440){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___16464))
})();
var state__6415__auto__ = (function (){var statearr_16463 = f__6414__auto__.call(null);
(statearr_16463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___16464);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___16464))
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
return (function (p__16664){
var vec__16665 = p__16664;
var v = cljs.core.nth.call(null,vec__16665,(0),null);
var p = cljs.core.nth.call(null,vec__16665,(1),null);
var job = vec__16665;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6413__auto___16847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results){
return (function (state_16670){
var state_val_16671 = (state_16670[(1)]);
if((state_val_16671 === (2))){
var inst_16667 = (state_16670[(2)]);
var inst_16668 = cljs.core.async.close_BANG_.call(null,res);
var state_16670__$1 = (function (){var statearr_16672 = state_16670;
(statearr_16672[(7)] = inst_16667);

return statearr_16672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16670__$1,inst_16668);
} else {
if((state_val_16671 === (1))){
var state_16670__$1 = state_16670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16670__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results))
;
return ((function (switch__6357__auto__,c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16676 = [null,null,null,null,null,null,null,null];
(statearr_16676[(0)] = state_machine__6358__auto__);

(statearr_16676[(1)] = (1));

return statearr_16676;
});
var state_machine__6358__auto____1 = (function (state_16670){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16677){if((e16677 instanceof Object)){
var ex__6361__auto__ = e16677;
var statearr_16678_16848 = state_16670;
(statearr_16678_16848[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16849 = state_16670;
state_16670 = G__16849;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16670){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results))
})();
var state__6415__auto__ = (function (){var statearr_16679 = f__6414__auto__.call(null);
(statearr_16679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___16847);

return statearr_16679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___16847,res,vec__16665,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16680){
var vec__16681 = p__16680;
var v = cljs.core.nth.call(null,vec__16681,(0),null);
var p = cljs.core.nth.call(null,vec__16681,(1),null);
var job = vec__16681;
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
var n__4139__auto___16850 = n;
var __16851 = (0);
while(true){
if((__16851 < n__4139__auto___16850)){
var G__16682_16852 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16682_16852) {
case "async":
var c__6413__auto___16854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16851,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (__16851,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function (state_16695){
var state_val_16696 = (state_16695[(1)]);
if((state_val_16696 === (7))){
var inst_16691 = (state_16695[(2)]);
var state_16695__$1 = state_16695;
var statearr_16697_16855 = state_16695__$1;
(statearr_16697_16855[(2)] = inst_16691);

(statearr_16697_16855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16696 === (6))){
var state_16695__$1 = state_16695;
var statearr_16698_16856 = state_16695__$1;
(statearr_16698_16856[(2)] = null);

(statearr_16698_16856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16696 === (5))){
var state_16695__$1 = state_16695;
var statearr_16699_16857 = state_16695__$1;
(statearr_16699_16857[(2)] = null);

(statearr_16699_16857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16696 === (4))){
var inst_16685 = (state_16695[(2)]);
var inst_16686 = async.call(null,inst_16685);
var state_16695__$1 = state_16695;
if(cljs.core.truth_(inst_16686)){
var statearr_16700_16858 = state_16695__$1;
(statearr_16700_16858[(1)] = (5));

} else {
var statearr_16701_16859 = state_16695__$1;
(statearr_16701_16859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16696 === (3))){
var inst_16693 = (state_16695[(2)]);
var state_16695__$1 = state_16695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16695__$1,inst_16693);
} else {
if((state_val_16696 === (2))){
var state_16695__$1 = state_16695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16695__$1,(4),jobs);
} else {
if((state_val_16696 === (1))){
var state_16695__$1 = state_16695;
var statearr_16702_16860 = state_16695__$1;
(statearr_16702_16860[(2)] = null);

(statearr_16702_16860[(1)] = (2));


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
});})(__16851,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
;
return ((function (__16851,switch__6357__auto__,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16706 = [null,null,null,null,null,null,null];
(statearr_16706[(0)] = state_machine__6358__auto__);

(statearr_16706[(1)] = (1));

return statearr_16706;
});
var state_machine__6358__auto____1 = (function (state_16695){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16707){if((e16707 instanceof Object)){
var ex__6361__auto__ = e16707;
var statearr_16708_16861 = state_16695;
(statearr_16708_16861[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16862 = state_16695;
state_16695 = G__16862;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16695){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(__16851,switch__6357__auto__,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
})();
var state__6415__auto__ = (function (){var statearr_16709 = f__6414__auto__.call(null);
(statearr_16709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___16854);

return statearr_16709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(__16851,c__6413__auto___16854,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
);


break;
case "compute":
var c__6413__auto___16863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16851,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (__16851,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function (state_16722){
var state_val_16723 = (state_16722[(1)]);
if((state_val_16723 === (7))){
var inst_16718 = (state_16722[(2)]);
var state_16722__$1 = state_16722;
var statearr_16724_16864 = state_16722__$1;
(statearr_16724_16864[(2)] = inst_16718);

(statearr_16724_16864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16723 === (6))){
var state_16722__$1 = state_16722;
var statearr_16725_16865 = state_16722__$1;
(statearr_16725_16865[(2)] = null);

(statearr_16725_16865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16723 === (5))){
var state_16722__$1 = state_16722;
var statearr_16726_16866 = state_16722__$1;
(statearr_16726_16866[(2)] = null);

(statearr_16726_16866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16723 === (4))){
var inst_16712 = (state_16722[(2)]);
var inst_16713 = process.call(null,inst_16712);
var state_16722__$1 = state_16722;
if(cljs.core.truth_(inst_16713)){
var statearr_16727_16867 = state_16722__$1;
(statearr_16727_16867[(1)] = (5));

} else {
var statearr_16728_16868 = state_16722__$1;
(statearr_16728_16868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16723 === (3))){
var inst_16720 = (state_16722[(2)]);
var state_16722__$1 = state_16722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16722__$1,inst_16720);
} else {
if((state_val_16723 === (2))){
var state_16722__$1 = state_16722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16722__$1,(4),jobs);
} else {
if((state_val_16723 === (1))){
var state_16722__$1 = state_16722;
var statearr_16729_16869 = state_16722__$1;
(statearr_16729_16869[(2)] = null);

(statearr_16729_16869[(1)] = (2));


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
});})(__16851,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
;
return ((function (__16851,switch__6357__auto__,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16733 = [null,null,null,null,null,null,null];
(statearr_16733[(0)] = state_machine__6358__auto__);

(statearr_16733[(1)] = (1));

return statearr_16733;
});
var state_machine__6358__auto____1 = (function (state_16722){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16734){if((e16734 instanceof Object)){
var ex__6361__auto__ = e16734;
var statearr_16735_16870 = state_16722;
(statearr_16735_16870[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16871 = state_16722;
state_16722 = G__16871;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16722){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(__16851,switch__6357__auto__,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
})();
var state__6415__auto__ = (function (){var statearr_16736 = f__6414__auto__.call(null);
(statearr_16736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___16863);

return statearr_16736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(__16851,c__6413__auto___16863,G__16682_16852,n__4139__auto___16850,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16872 = (__16851 + (1));
__16851 = G__16872;
continue;
} else {
}
break;
}

var c__6413__auto___16873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___16873,jobs,results,process,async){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___16873,jobs,results,process,async){
return (function (state_16758){
var state_val_16759 = (state_16758[(1)]);
if((state_val_16759 === (9))){
var inst_16751 = (state_16758[(2)]);
var state_16758__$1 = (function (){var statearr_16760 = state_16758;
(statearr_16760[(7)] = inst_16751);

return statearr_16760;
})();
var statearr_16761_16874 = state_16758__$1;
(statearr_16761_16874[(2)] = null);

(statearr_16761_16874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (8))){
var inst_16744 = (state_16758[(8)]);
var inst_16749 = (state_16758[(2)]);
var state_16758__$1 = (function (){var statearr_16762 = state_16758;
(statearr_16762[(9)] = inst_16749);

return statearr_16762;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16758__$1,(9),results,inst_16744);
} else {
if((state_val_16759 === (7))){
var inst_16754 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16763_16875 = state_16758__$1;
(statearr_16763_16875[(2)] = inst_16754);

(statearr_16763_16875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (6))){
var inst_16744 = (state_16758[(8)]);
var inst_16739 = (state_16758[(10)]);
var inst_16744__$1 = cljs.core.async.chan.call(null,(1));
var inst_16745 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16746 = [inst_16739,inst_16744__$1];
var inst_16747 = (new cljs.core.PersistentVector(null,2,(5),inst_16745,inst_16746,null));
var state_16758__$1 = (function (){var statearr_16764 = state_16758;
(statearr_16764[(8)] = inst_16744__$1);

return statearr_16764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16758__$1,(8),jobs,inst_16747);
} else {
if((state_val_16759 === (5))){
var inst_16742 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16758__$1 = state_16758;
var statearr_16765_16876 = state_16758__$1;
(statearr_16765_16876[(2)] = inst_16742);

(statearr_16765_16876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (4))){
var inst_16739 = (state_16758[(10)]);
var inst_16739__$1 = (state_16758[(2)]);
var inst_16740 = (inst_16739__$1 == null);
var state_16758__$1 = (function (){var statearr_16766 = state_16758;
(statearr_16766[(10)] = inst_16739__$1);

return statearr_16766;
})();
if(cljs.core.truth_(inst_16740)){
var statearr_16767_16877 = state_16758__$1;
(statearr_16767_16877[(1)] = (5));

} else {
var statearr_16768_16878 = state_16758__$1;
(statearr_16768_16878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (3))){
var inst_16756 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16758__$1,inst_16756);
} else {
if((state_val_16759 === (2))){
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16758__$1,(4),from);
} else {
if((state_val_16759 === (1))){
var state_16758__$1 = state_16758;
var statearr_16769_16879 = state_16758__$1;
(statearr_16769_16879[(2)] = null);

(statearr_16769_16879[(1)] = (2));


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
});})(c__6413__auto___16873,jobs,results,process,async))
;
return ((function (switch__6357__auto__,c__6413__auto___16873,jobs,results,process,async){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16773[(0)] = state_machine__6358__auto__);

(statearr_16773[(1)] = (1));

return statearr_16773;
});
var state_machine__6358__auto____1 = (function (state_16758){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16774){if((e16774 instanceof Object)){
var ex__6361__auto__ = e16774;
var statearr_16775_16880 = state_16758;
(statearr_16775_16880[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16881 = state_16758;
state_16758 = G__16881;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16758){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___16873,jobs,results,process,async))
})();
var state__6415__auto__ = (function (){var statearr_16776 = f__6414__auto__.call(null);
(statearr_16776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___16873);

return statearr_16776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___16873,jobs,results,process,async))
);


var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__,jobs,results,process,async){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__,jobs,results,process,async){
return (function (state_16814){
var state_val_16815 = (state_16814[(1)]);
if((state_val_16815 === (7))){
var inst_16810 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16816_16882 = state_16814__$1;
(statearr_16816_16882[(2)] = inst_16810);

(statearr_16816_16882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (20))){
var state_16814__$1 = state_16814;
var statearr_16817_16883 = state_16814__$1;
(statearr_16817_16883[(2)] = null);

(statearr_16817_16883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (1))){
var state_16814__$1 = state_16814;
var statearr_16818_16884 = state_16814__$1;
(statearr_16818_16884[(2)] = null);

(statearr_16818_16884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (4))){
var inst_16779 = (state_16814[(7)]);
var inst_16779__$1 = (state_16814[(2)]);
var inst_16780 = (inst_16779__$1 == null);
var state_16814__$1 = (function (){var statearr_16819 = state_16814;
(statearr_16819[(7)] = inst_16779__$1);

return statearr_16819;
})();
if(cljs.core.truth_(inst_16780)){
var statearr_16820_16885 = state_16814__$1;
(statearr_16820_16885[(1)] = (5));

} else {
var statearr_16821_16886 = state_16814__$1;
(statearr_16821_16886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (15))){
var inst_16792 = (state_16814[(8)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16814__$1,(18),to,inst_16792);
} else {
if((state_val_16815 === (21))){
var inst_16805 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16822_16887 = state_16814__$1;
(statearr_16822_16887[(2)] = inst_16805);

(statearr_16822_16887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (13))){
var inst_16807 = (state_16814[(2)]);
var state_16814__$1 = (function (){var statearr_16823 = state_16814;
(statearr_16823[(9)] = inst_16807);

return statearr_16823;
})();
var statearr_16824_16888 = state_16814__$1;
(statearr_16824_16888[(2)] = null);

(statearr_16824_16888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (6))){
var inst_16779 = (state_16814[(7)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16814__$1,(11),inst_16779);
} else {
if((state_val_16815 === (17))){
var inst_16800 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
if(cljs.core.truth_(inst_16800)){
var statearr_16825_16889 = state_16814__$1;
(statearr_16825_16889[(1)] = (19));

} else {
var statearr_16826_16890 = state_16814__$1;
(statearr_16826_16890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (3))){
var inst_16812 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16814__$1,inst_16812);
} else {
if((state_val_16815 === (12))){
var inst_16789 = (state_16814[(10)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16814__$1,(14),inst_16789);
} else {
if((state_val_16815 === (2))){
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16814__$1,(4),results);
} else {
if((state_val_16815 === (19))){
var state_16814__$1 = state_16814;
var statearr_16827_16891 = state_16814__$1;
(statearr_16827_16891[(2)] = null);

(statearr_16827_16891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (11))){
var inst_16789 = (state_16814[(2)]);
var state_16814__$1 = (function (){var statearr_16828 = state_16814;
(statearr_16828[(10)] = inst_16789);

return statearr_16828;
})();
var statearr_16829_16892 = state_16814__$1;
(statearr_16829_16892[(2)] = null);

(statearr_16829_16892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (9))){
var state_16814__$1 = state_16814;
var statearr_16830_16893 = state_16814__$1;
(statearr_16830_16893[(2)] = null);

(statearr_16830_16893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (5))){
var state_16814__$1 = state_16814;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16831_16894 = state_16814__$1;
(statearr_16831_16894[(1)] = (8));

} else {
var statearr_16832_16895 = state_16814__$1;
(statearr_16832_16895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (14))){
var inst_16792 = (state_16814[(8)]);
var inst_16794 = (state_16814[(11)]);
var inst_16792__$1 = (state_16814[(2)]);
var inst_16793 = (inst_16792__$1 == null);
var inst_16794__$1 = cljs.core.not.call(null,inst_16793);
var state_16814__$1 = (function (){var statearr_16833 = state_16814;
(statearr_16833[(8)] = inst_16792__$1);

(statearr_16833[(11)] = inst_16794__$1);

return statearr_16833;
})();
if(inst_16794__$1){
var statearr_16834_16896 = state_16814__$1;
(statearr_16834_16896[(1)] = (15));

} else {
var statearr_16835_16897 = state_16814__$1;
(statearr_16835_16897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (16))){
var inst_16794 = (state_16814[(11)]);
var state_16814__$1 = state_16814;
var statearr_16836_16898 = state_16814__$1;
(statearr_16836_16898[(2)] = inst_16794);

(statearr_16836_16898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (10))){
var inst_16786 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16837_16899 = state_16814__$1;
(statearr_16837_16899[(2)] = inst_16786);

(statearr_16837_16899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (18))){
var inst_16797 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16838_16900 = state_16814__$1;
(statearr_16838_16900[(2)] = inst_16797);

(statearr_16838_16900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16815 === (8))){
var inst_16783 = cljs.core.async.close_BANG_.call(null,to);
var state_16814__$1 = state_16814;
var statearr_16839_16901 = state_16814__$1;
(statearr_16839_16901[(2)] = inst_16783);

(statearr_16839_16901[(1)] = (10));


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
});})(c__6413__auto__,jobs,results,process,async))
;
return ((function (switch__6357__auto__,c__6413__auto__,jobs,results,process,async){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16843 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16843[(0)] = state_machine__6358__auto__);

(statearr_16843[(1)] = (1));

return statearr_16843;
});
var state_machine__6358__auto____1 = (function (state_16814){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16844){if((e16844 instanceof Object)){
var ex__6361__auto__ = e16844;
var statearr_16845_16902 = state_16814;
(statearr_16845_16902[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16903 = state_16814;
state_16814 = G__16903;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16814){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__,jobs,results,process,async))
})();
var state__6415__auto__ = (function (){var statearr_16846 = f__6414__auto__.call(null);
(statearr_16846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_16846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__,jobs,results,process,async))
);

return c__6413__auto__;
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
var c__6413__auto___17004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___17004,tc,fc){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___17004,tc,fc){
return (function (state_16979){
var state_val_16980 = (state_16979[(1)]);
if((state_val_16980 === (7))){
var inst_16975 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_16981_17005 = state_16979__$1;
(statearr_16981_17005[(2)] = inst_16975);

(statearr_16981_17005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (1))){
var state_16979__$1 = state_16979;
var statearr_16982_17006 = state_16979__$1;
(statearr_16982_17006[(2)] = null);

(statearr_16982_17006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (4))){
var inst_16956 = (state_16979[(7)]);
var inst_16956__$1 = (state_16979[(2)]);
var inst_16957 = (inst_16956__$1 == null);
var state_16979__$1 = (function (){var statearr_16983 = state_16979;
(statearr_16983[(7)] = inst_16956__$1);

return statearr_16983;
})();
if(cljs.core.truth_(inst_16957)){
var statearr_16984_17007 = state_16979__$1;
(statearr_16984_17007[(1)] = (5));

} else {
var statearr_16985_17008 = state_16979__$1;
(statearr_16985_17008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (13))){
var state_16979__$1 = state_16979;
var statearr_16986_17009 = state_16979__$1;
(statearr_16986_17009[(2)] = null);

(statearr_16986_17009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (6))){
var inst_16956 = (state_16979[(7)]);
var inst_16962 = p.call(null,inst_16956);
var state_16979__$1 = state_16979;
if(cljs.core.truth_(inst_16962)){
var statearr_16987_17010 = state_16979__$1;
(statearr_16987_17010[(1)] = (9));

} else {
var statearr_16988_17011 = state_16979__$1;
(statearr_16988_17011[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (3))){
var inst_16977 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16979__$1,inst_16977);
} else {
if((state_val_16980 === (12))){
var state_16979__$1 = state_16979;
var statearr_16989_17012 = state_16979__$1;
(statearr_16989_17012[(2)] = null);

(statearr_16989_17012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (2))){
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16979__$1,(4),ch);
} else {
if((state_val_16980 === (11))){
var inst_16956 = (state_16979[(7)]);
var inst_16966 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16979__$1,(8),inst_16966,inst_16956);
} else {
if((state_val_16980 === (9))){
var state_16979__$1 = state_16979;
var statearr_16990_17013 = state_16979__$1;
(statearr_16990_17013[(2)] = tc);

(statearr_16990_17013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (5))){
var inst_16959 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16960 = cljs.core.async.close_BANG_.call(null,fc);
var state_16979__$1 = (function (){var statearr_16991 = state_16979;
(statearr_16991[(8)] = inst_16959);

return statearr_16991;
})();
var statearr_16992_17014 = state_16979__$1;
(statearr_16992_17014[(2)] = inst_16960);

(statearr_16992_17014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (14))){
var inst_16973 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
var statearr_16993_17015 = state_16979__$1;
(statearr_16993_17015[(2)] = inst_16973);

(statearr_16993_17015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (10))){
var state_16979__$1 = state_16979;
var statearr_16994_17016 = state_16979__$1;
(statearr_16994_17016[(2)] = fc);

(statearr_16994_17016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16980 === (8))){
var inst_16968 = (state_16979[(2)]);
var state_16979__$1 = state_16979;
if(cljs.core.truth_(inst_16968)){
var statearr_16995_17017 = state_16979__$1;
(statearr_16995_17017[(1)] = (12));

} else {
var statearr_16996_17018 = state_16979__$1;
(statearr_16996_17018[(1)] = (13));

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
});})(c__6413__auto___17004,tc,fc))
;
return ((function (switch__6357__auto__,c__6413__auto___17004,tc,fc){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_17000 = [null,null,null,null,null,null,null,null,null];
(statearr_17000[(0)] = state_machine__6358__auto__);

(statearr_17000[(1)] = (1));

return statearr_17000;
});
var state_machine__6358__auto____1 = (function (state_16979){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e17001){if((e17001 instanceof Object)){
var ex__6361__auto__ = e17001;
var statearr_17002_17019 = state_16979;
(statearr_17002_17019[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17020 = state_16979;
state_16979 = G__17020;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16979){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___17004,tc,fc))
})();
var state__6415__auto__ = (function (){var statearr_17003 = f__6414__auto__.call(null);
(statearr_17003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___17004);

return statearr_17003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___17004,tc,fc))
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
var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__){
return (function (state_17067){
var state_val_17068 = (state_17067[(1)]);
if((state_val_17068 === (7))){
var inst_17063 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
var statearr_17069_17085 = state_17067__$1;
(statearr_17069_17085[(2)] = inst_17063);

(statearr_17069_17085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (6))){
var inst_17053 = (state_17067[(7)]);
var inst_17056 = (state_17067[(8)]);
var inst_17060 = f.call(null,inst_17053,inst_17056);
var inst_17053__$1 = inst_17060;
var state_17067__$1 = (function (){var statearr_17070 = state_17067;
(statearr_17070[(7)] = inst_17053__$1);

return statearr_17070;
})();
var statearr_17071_17086 = state_17067__$1;
(statearr_17071_17086[(2)] = null);

(statearr_17071_17086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (5))){
var inst_17053 = (state_17067[(7)]);
var state_17067__$1 = state_17067;
var statearr_17072_17087 = state_17067__$1;
(statearr_17072_17087[(2)] = inst_17053);

(statearr_17072_17087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (4))){
var inst_17056 = (state_17067[(8)]);
var inst_17056__$1 = (state_17067[(2)]);
var inst_17057 = (inst_17056__$1 == null);
var state_17067__$1 = (function (){var statearr_17073 = state_17067;
(statearr_17073[(8)] = inst_17056__$1);

return statearr_17073;
})();
if(cljs.core.truth_(inst_17057)){
var statearr_17074_17088 = state_17067__$1;
(statearr_17074_17088[(1)] = (5));

} else {
var statearr_17075_17089 = state_17067__$1;
(statearr_17075_17089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17068 === (3))){
var inst_17065 = (state_17067[(2)]);
var state_17067__$1 = state_17067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17067__$1,inst_17065);
} else {
if((state_val_17068 === (2))){
var state_17067__$1 = state_17067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17067__$1,(4),ch);
} else {
if((state_val_17068 === (1))){
var inst_17053 = init;
var state_17067__$1 = (function (){var statearr_17076 = state_17067;
(statearr_17076[(7)] = inst_17053);

return statearr_17076;
})();
var statearr_17077_17090 = state_17067__$1;
(statearr_17077_17090[(2)] = null);

(statearr_17077_17090[(1)] = (2));


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
});})(c__6413__auto__))
;
return ((function (switch__6357__auto__,c__6413__auto__){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_17081 = [null,null,null,null,null,null,null,null,null];
(statearr_17081[(0)] = state_machine__6358__auto__);

(statearr_17081[(1)] = (1));

return statearr_17081;
});
var state_machine__6358__auto____1 = (function (state_17067){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_17067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e17082){if((e17082 instanceof Object)){
var ex__6361__auto__ = e17082;
var statearr_17083_17091 = state_17067;
(statearr_17083_17091[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17092 = state_17067;
state_17067 = G__17092;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_17067){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_17067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__))
})();
var state__6415__auto__ = (function (){var statearr_17084 = f__6414__auto__.call(null);
(statearr_17084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_17084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__))
);

return c__6413__auto__;
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
var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__){
return (function (state_17166){
var state_val_17167 = (state_17166[(1)]);
if((state_val_17167 === (7))){
var inst_17148 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17168_17191 = state_17166__$1;
(statearr_17168_17191[(2)] = inst_17148);

(statearr_17168_17191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (1))){
var inst_17142 = cljs.core.seq.call(null,coll);
var inst_17143 = inst_17142;
var state_17166__$1 = (function (){var statearr_17169 = state_17166;
(statearr_17169[(7)] = inst_17143);

return statearr_17169;
})();
var statearr_17170_17192 = state_17166__$1;
(statearr_17170_17192[(2)] = null);

(statearr_17170_17192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (4))){
var inst_17143 = (state_17166[(7)]);
var inst_17146 = cljs.core.first.call(null,inst_17143);
var state_17166__$1 = state_17166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17166__$1,(7),ch,inst_17146);
} else {
if((state_val_17167 === (13))){
var inst_17160 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17171_17193 = state_17166__$1;
(statearr_17171_17193[(2)] = inst_17160);

(statearr_17171_17193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (6))){
var inst_17151 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
if(cljs.core.truth_(inst_17151)){
var statearr_17172_17194 = state_17166__$1;
(statearr_17172_17194[(1)] = (8));

} else {
var statearr_17173_17195 = state_17166__$1;
(statearr_17173_17195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (3))){
var inst_17164 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17166__$1,inst_17164);
} else {
if((state_val_17167 === (12))){
var state_17166__$1 = state_17166;
var statearr_17174_17196 = state_17166__$1;
(statearr_17174_17196[(2)] = null);

(statearr_17174_17196[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (2))){
var inst_17143 = (state_17166[(7)]);
var state_17166__$1 = state_17166;
if(cljs.core.truth_(inst_17143)){
var statearr_17175_17197 = state_17166__$1;
(statearr_17175_17197[(1)] = (4));

} else {
var statearr_17176_17198 = state_17166__$1;
(statearr_17176_17198[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (11))){
var inst_17157 = cljs.core.async.close_BANG_.call(null,ch);
var state_17166__$1 = state_17166;
var statearr_17177_17199 = state_17166__$1;
(statearr_17177_17199[(2)] = inst_17157);

(statearr_17177_17199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (9))){
var state_17166__$1 = state_17166;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17178_17200 = state_17166__$1;
(statearr_17178_17200[(1)] = (11));

} else {
var statearr_17179_17201 = state_17166__$1;
(statearr_17179_17201[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (5))){
var inst_17143 = (state_17166[(7)]);
var state_17166__$1 = state_17166;
var statearr_17180_17202 = state_17166__$1;
(statearr_17180_17202[(2)] = inst_17143);

(statearr_17180_17202[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (10))){
var inst_17162 = (state_17166[(2)]);
var state_17166__$1 = state_17166;
var statearr_17181_17203 = state_17166__$1;
(statearr_17181_17203[(2)] = inst_17162);

(statearr_17181_17203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17167 === (8))){
var inst_17143 = (state_17166[(7)]);
var inst_17153 = cljs.core.next.call(null,inst_17143);
var inst_17143__$1 = inst_17153;
var state_17166__$1 = (function (){var statearr_17182 = state_17166;
(statearr_17182[(7)] = inst_17143__$1);

return statearr_17182;
})();
var statearr_17183_17204 = state_17166__$1;
(statearr_17183_17204[(2)] = null);

(statearr_17183_17204[(1)] = (2));


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
});})(c__6413__auto__))
;
return ((function (switch__6357__auto__,c__6413__auto__){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_17187 = [null,null,null,null,null,null,null,null];
(statearr_17187[(0)] = state_machine__6358__auto__);

(statearr_17187[(1)] = (1));

return statearr_17187;
});
var state_machine__6358__auto____1 = (function (state_17166){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_17166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e17188){if((e17188 instanceof Object)){
var ex__6361__auto__ = e17188;
var statearr_17189_17205 = state_17166;
(statearr_17189_17205[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17206 = state_17166;
state_17166 = G__17206;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_17166){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_17166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__))
})();
var state__6415__auto__ = (function (){var statearr_17190 = f__6414__auto__.call(null);
(statearr_17190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_17190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__))
);

return c__6413__auto__;
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

cljs.core.async.Mux = (function (){var obj17208 = {};
return obj17208;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3240__auto__ = _;
if(and__3240__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__3896__auto__ = (((_ == null))?null:_);
return (function (){var or__3252__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17210 = {};
return obj17210;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
if(typeof cljs.core.async.t17432 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17432 = (function (cs,ch,mult,meta17433){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17433 = meta17433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17432.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17432.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17432.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17432.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17432.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17434){
var self__ = this;
var _17434__$1 = this;
return self__.meta17433;
});})(cs))
;

cljs.core.async.t17432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17434,meta17433__$1){
var self__ = this;
var _17434__$1 = this;
return (new cljs.core.async.t17432(self__.cs,self__.ch,self__.mult,meta17433__$1));
});})(cs))
;

cljs.core.async.t17432.cljs$lang$type = true;

cljs.core.async.t17432.cljs$lang$ctorStr = "cljs.core.async/t17432";

cljs.core.async.t17432.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17432");
});})(cs))
;

cljs.core.async.__GT_t17432 = ((function (cs){
return (function __GT_t17432(cs__$1,ch__$1,mult__$1,meta17433){
return (new cljs.core.async.t17432(cs__$1,ch__$1,mult__$1,meta17433));
});})(cs))
;

}

return (new cljs.core.async.t17432(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6413__auto___17653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___17653,cs,m,dchan,dctr,done){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___17653,cs,m,dchan,dctr,done){
return (function (state_17565){
var state_val_17566 = (state_17565[(1)]);
if((state_val_17566 === (7))){
var inst_17561 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17567_17654 = state_17565__$1;
(statearr_17567_17654[(2)] = inst_17561);

(statearr_17567_17654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (20))){
var inst_17466 = (state_17565[(7)]);
var inst_17476 = cljs.core.first.call(null,inst_17466);
var inst_17477 = cljs.core.nth.call(null,inst_17476,(0),null);
var inst_17478 = cljs.core.nth.call(null,inst_17476,(1),null);
var state_17565__$1 = (function (){var statearr_17568 = state_17565;
(statearr_17568[(8)] = inst_17477);

return statearr_17568;
})();
if(cljs.core.truth_(inst_17478)){
var statearr_17569_17655 = state_17565__$1;
(statearr_17569_17655[(1)] = (22));

} else {
var statearr_17570_17656 = state_17565__$1;
(statearr_17570_17656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (27))){
var inst_17508 = (state_17565[(9)]);
var inst_17506 = (state_17565[(10)]);
var inst_17513 = (state_17565[(11)]);
var inst_17437 = (state_17565[(12)]);
var inst_17513__$1 = cljs.core._nth.call(null,inst_17506,inst_17508);
var inst_17514 = cljs.core.async.put_BANG_.call(null,inst_17513__$1,inst_17437,done);
var state_17565__$1 = (function (){var statearr_17571 = state_17565;
(statearr_17571[(11)] = inst_17513__$1);

return statearr_17571;
})();
if(cljs.core.truth_(inst_17514)){
var statearr_17572_17657 = state_17565__$1;
(statearr_17572_17657[(1)] = (30));

} else {
var statearr_17573_17658 = state_17565__$1;
(statearr_17573_17658[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (1))){
var state_17565__$1 = state_17565;
var statearr_17574_17659 = state_17565__$1;
(statearr_17574_17659[(2)] = null);

(statearr_17574_17659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (24))){
var inst_17466 = (state_17565[(7)]);
var inst_17483 = (state_17565[(2)]);
var inst_17484 = cljs.core.next.call(null,inst_17466);
var inst_17446 = inst_17484;
var inst_17447 = null;
var inst_17448 = (0);
var inst_17449 = (0);
var state_17565__$1 = (function (){var statearr_17575 = state_17565;
(statearr_17575[(13)] = inst_17447);

(statearr_17575[(14)] = inst_17448);

(statearr_17575[(15)] = inst_17446);

(statearr_17575[(16)] = inst_17483);

(statearr_17575[(17)] = inst_17449);

return statearr_17575;
})();
var statearr_17576_17660 = state_17565__$1;
(statearr_17576_17660[(2)] = null);

(statearr_17576_17660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (39))){
var state_17565__$1 = state_17565;
var statearr_17580_17661 = state_17565__$1;
(statearr_17580_17661[(2)] = null);

(statearr_17580_17661[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (4))){
var inst_17437 = (state_17565[(12)]);
var inst_17437__$1 = (state_17565[(2)]);
var inst_17438 = (inst_17437__$1 == null);
var state_17565__$1 = (function (){var statearr_17581 = state_17565;
(statearr_17581[(12)] = inst_17437__$1);

return statearr_17581;
})();
if(cljs.core.truth_(inst_17438)){
var statearr_17582_17662 = state_17565__$1;
(statearr_17582_17662[(1)] = (5));

} else {
var statearr_17583_17663 = state_17565__$1;
(statearr_17583_17663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (15))){
var inst_17447 = (state_17565[(13)]);
var inst_17448 = (state_17565[(14)]);
var inst_17446 = (state_17565[(15)]);
var inst_17449 = (state_17565[(17)]);
var inst_17462 = (state_17565[(2)]);
var inst_17463 = (inst_17449 + (1));
var tmp17577 = inst_17447;
var tmp17578 = inst_17448;
var tmp17579 = inst_17446;
var inst_17446__$1 = tmp17579;
var inst_17447__$1 = tmp17577;
var inst_17448__$1 = tmp17578;
var inst_17449__$1 = inst_17463;
var state_17565__$1 = (function (){var statearr_17584 = state_17565;
(statearr_17584[(13)] = inst_17447__$1);

(statearr_17584[(14)] = inst_17448__$1);

(statearr_17584[(18)] = inst_17462);

(statearr_17584[(15)] = inst_17446__$1);

(statearr_17584[(17)] = inst_17449__$1);

return statearr_17584;
})();
var statearr_17585_17664 = state_17565__$1;
(statearr_17585_17664[(2)] = null);

(statearr_17585_17664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (21))){
var inst_17487 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17589_17665 = state_17565__$1;
(statearr_17589_17665[(2)] = inst_17487);

(statearr_17589_17665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (31))){
var inst_17513 = (state_17565[(11)]);
var inst_17517 = done.call(null,null);
var inst_17518 = cljs.core.async.untap_STAR_.call(null,m,inst_17513);
var state_17565__$1 = (function (){var statearr_17590 = state_17565;
(statearr_17590[(19)] = inst_17517);

return statearr_17590;
})();
var statearr_17591_17666 = state_17565__$1;
(statearr_17591_17666[(2)] = inst_17518);

(statearr_17591_17666[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (32))){
var inst_17505 = (state_17565[(20)]);
var inst_17507 = (state_17565[(21)]);
var inst_17508 = (state_17565[(9)]);
var inst_17506 = (state_17565[(10)]);
var inst_17520 = (state_17565[(2)]);
var inst_17521 = (inst_17508 + (1));
var tmp17586 = inst_17505;
var tmp17587 = inst_17507;
var tmp17588 = inst_17506;
var inst_17505__$1 = tmp17586;
var inst_17506__$1 = tmp17588;
var inst_17507__$1 = tmp17587;
var inst_17508__$1 = inst_17521;
var state_17565__$1 = (function (){var statearr_17592 = state_17565;
(statearr_17592[(20)] = inst_17505__$1);

(statearr_17592[(22)] = inst_17520);

(statearr_17592[(21)] = inst_17507__$1);

(statearr_17592[(9)] = inst_17508__$1);

(statearr_17592[(10)] = inst_17506__$1);

return statearr_17592;
})();
var statearr_17593_17667 = state_17565__$1;
(statearr_17593_17667[(2)] = null);

(statearr_17593_17667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (40))){
var inst_17533 = (state_17565[(23)]);
var inst_17537 = done.call(null,null);
var inst_17538 = cljs.core.async.untap_STAR_.call(null,m,inst_17533);
var state_17565__$1 = (function (){var statearr_17594 = state_17565;
(statearr_17594[(24)] = inst_17537);

return statearr_17594;
})();
var statearr_17595_17668 = state_17565__$1;
(statearr_17595_17668[(2)] = inst_17538);

(statearr_17595_17668[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (33))){
var inst_17524 = (state_17565[(25)]);
var inst_17526 = cljs.core.chunked_seq_QMARK_.call(null,inst_17524);
var state_17565__$1 = state_17565;
if(inst_17526){
var statearr_17596_17669 = state_17565__$1;
(statearr_17596_17669[(1)] = (36));

} else {
var statearr_17597_17670 = state_17565__$1;
(statearr_17597_17670[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (13))){
var inst_17456 = (state_17565[(26)]);
var inst_17459 = cljs.core.async.close_BANG_.call(null,inst_17456);
var state_17565__$1 = state_17565;
var statearr_17598_17671 = state_17565__$1;
(statearr_17598_17671[(2)] = inst_17459);

(statearr_17598_17671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (22))){
var inst_17477 = (state_17565[(8)]);
var inst_17480 = cljs.core.async.close_BANG_.call(null,inst_17477);
var state_17565__$1 = state_17565;
var statearr_17599_17672 = state_17565__$1;
(statearr_17599_17672[(2)] = inst_17480);

(statearr_17599_17672[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (36))){
var inst_17524 = (state_17565[(25)]);
var inst_17528 = cljs.core.chunk_first.call(null,inst_17524);
var inst_17529 = cljs.core.chunk_rest.call(null,inst_17524);
var inst_17530 = cljs.core.count.call(null,inst_17528);
var inst_17505 = inst_17529;
var inst_17506 = inst_17528;
var inst_17507 = inst_17530;
var inst_17508 = (0);
var state_17565__$1 = (function (){var statearr_17600 = state_17565;
(statearr_17600[(20)] = inst_17505);

(statearr_17600[(21)] = inst_17507);

(statearr_17600[(9)] = inst_17508);

(statearr_17600[(10)] = inst_17506);

return statearr_17600;
})();
var statearr_17601_17673 = state_17565__$1;
(statearr_17601_17673[(2)] = null);

(statearr_17601_17673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (41))){
var inst_17524 = (state_17565[(25)]);
var inst_17540 = (state_17565[(2)]);
var inst_17541 = cljs.core.next.call(null,inst_17524);
var inst_17505 = inst_17541;
var inst_17506 = null;
var inst_17507 = (0);
var inst_17508 = (0);
var state_17565__$1 = (function (){var statearr_17602 = state_17565;
(statearr_17602[(27)] = inst_17540);

(statearr_17602[(20)] = inst_17505);

(statearr_17602[(21)] = inst_17507);

(statearr_17602[(9)] = inst_17508);

(statearr_17602[(10)] = inst_17506);

return statearr_17602;
})();
var statearr_17603_17674 = state_17565__$1;
(statearr_17603_17674[(2)] = null);

(statearr_17603_17674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (43))){
var state_17565__$1 = state_17565;
var statearr_17604_17675 = state_17565__$1;
(statearr_17604_17675[(2)] = null);

(statearr_17604_17675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (29))){
var inst_17549 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17605_17676 = state_17565__$1;
(statearr_17605_17676[(2)] = inst_17549);

(statearr_17605_17676[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (44))){
var inst_17558 = (state_17565[(2)]);
var state_17565__$1 = (function (){var statearr_17606 = state_17565;
(statearr_17606[(28)] = inst_17558);

return statearr_17606;
})();
var statearr_17607_17677 = state_17565__$1;
(statearr_17607_17677[(2)] = null);

(statearr_17607_17677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (6))){
var inst_17497 = (state_17565[(29)]);
var inst_17496 = cljs.core.deref.call(null,cs);
var inst_17497__$1 = cljs.core.keys.call(null,inst_17496);
var inst_17498 = cljs.core.count.call(null,inst_17497__$1);
var inst_17499 = cljs.core.reset_BANG_.call(null,dctr,inst_17498);
var inst_17504 = cljs.core.seq.call(null,inst_17497__$1);
var inst_17505 = inst_17504;
var inst_17506 = null;
var inst_17507 = (0);
var inst_17508 = (0);
var state_17565__$1 = (function (){var statearr_17608 = state_17565;
(statearr_17608[(30)] = inst_17499);

(statearr_17608[(20)] = inst_17505);

(statearr_17608[(21)] = inst_17507);

(statearr_17608[(9)] = inst_17508);

(statearr_17608[(29)] = inst_17497__$1);

(statearr_17608[(10)] = inst_17506);

return statearr_17608;
})();
var statearr_17609_17678 = state_17565__$1;
(statearr_17609_17678[(2)] = null);

(statearr_17609_17678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (28))){
var inst_17505 = (state_17565[(20)]);
var inst_17524 = (state_17565[(25)]);
var inst_17524__$1 = cljs.core.seq.call(null,inst_17505);
var state_17565__$1 = (function (){var statearr_17610 = state_17565;
(statearr_17610[(25)] = inst_17524__$1);

return statearr_17610;
})();
if(inst_17524__$1){
var statearr_17611_17679 = state_17565__$1;
(statearr_17611_17679[(1)] = (33));

} else {
var statearr_17612_17680 = state_17565__$1;
(statearr_17612_17680[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (25))){
var inst_17507 = (state_17565[(21)]);
var inst_17508 = (state_17565[(9)]);
var inst_17510 = (inst_17508 < inst_17507);
var inst_17511 = inst_17510;
var state_17565__$1 = state_17565;
if(cljs.core.truth_(inst_17511)){
var statearr_17613_17681 = state_17565__$1;
(statearr_17613_17681[(1)] = (27));

} else {
var statearr_17614_17682 = state_17565__$1;
(statearr_17614_17682[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (34))){
var state_17565__$1 = state_17565;
var statearr_17615_17683 = state_17565__$1;
(statearr_17615_17683[(2)] = null);

(statearr_17615_17683[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (17))){
var state_17565__$1 = state_17565;
var statearr_17616_17684 = state_17565__$1;
(statearr_17616_17684[(2)] = null);

(statearr_17616_17684[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (3))){
var inst_17563 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17565__$1,inst_17563);
} else {
if((state_val_17566 === (12))){
var inst_17492 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17617_17685 = state_17565__$1;
(statearr_17617_17685[(2)] = inst_17492);

(statearr_17617_17685[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (2))){
var state_17565__$1 = state_17565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17565__$1,(4),ch);
} else {
if((state_val_17566 === (23))){
var state_17565__$1 = state_17565;
var statearr_17618_17686 = state_17565__$1;
(statearr_17618_17686[(2)] = null);

(statearr_17618_17686[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (35))){
var inst_17547 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17619_17687 = state_17565__$1;
(statearr_17619_17687[(2)] = inst_17547);

(statearr_17619_17687[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (19))){
var inst_17466 = (state_17565[(7)]);
var inst_17470 = cljs.core.chunk_first.call(null,inst_17466);
var inst_17471 = cljs.core.chunk_rest.call(null,inst_17466);
var inst_17472 = cljs.core.count.call(null,inst_17470);
var inst_17446 = inst_17471;
var inst_17447 = inst_17470;
var inst_17448 = inst_17472;
var inst_17449 = (0);
var state_17565__$1 = (function (){var statearr_17620 = state_17565;
(statearr_17620[(13)] = inst_17447);

(statearr_17620[(14)] = inst_17448);

(statearr_17620[(15)] = inst_17446);

(statearr_17620[(17)] = inst_17449);

return statearr_17620;
})();
var statearr_17621_17688 = state_17565__$1;
(statearr_17621_17688[(2)] = null);

(statearr_17621_17688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (11))){
var inst_17466 = (state_17565[(7)]);
var inst_17446 = (state_17565[(15)]);
var inst_17466__$1 = cljs.core.seq.call(null,inst_17446);
var state_17565__$1 = (function (){var statearr_17622 = state_17565;
(statearr_17622[(7)] = inst_17466__$1);

return statearr_17622;
})();
if(inst_17466__$1){
var statearr_17623_17689 = state_17565__$1;
(statearr_17623_17689[(1)] = (16));

} else {
var statearr_17624_17690 = state_17565__$1;
(statearr_17624_17690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (9))){
var inst_17494 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17625_17691 = state_17565__$1;
(statearr_17625_17691[(2)] = inst_17494);

(statearr_17625_17691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (5))){
var inst_17444 = cljs.core.deref.call(null,cs);
var inst_17445 = cljs.core.seq.call(null,inst_17444);
var inst_17446 = inst_17445;
var inst_17447 = null;
var inst_17448 = (0);
var inst_17449 = (0);
var state_17565__$1 = (function (){var statearr_17626 = state_17565;
(statearr_17626[(13)] = inst_17447);

(statearr_17626[(14)] = inst_17448);

(statearr_17626[(15)] = inst_17446);

(statearr_17626[(17)] = inst_17449);

return statearr_17626;
})();
var statearr_17627_17692 = state_17565__$1;
(statearr_17627_17692[(2)] = null);

(statearr_17627_17692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (14))){
var state_17565__$1 = state_17565;
var statearr_17628_17693 = state_17565__$1;
(statearr_17628_17693[(2)] = null);

(statearr_17628_17693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (45))){
var inst_17555 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17629_17694 = state_17565__$1;
(statearr_17629_17694[(2)] = inst_17555);

(statearr_17629_17694[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (26))){
var inst_17497 = (state_17565[(29)]);
var inst_17551 = (state_17565[(2)]);
var inst_17552 = cljs.core.seq.call(null,inst_17497);
var state_17565__$1 = (function (){var statearr_17630 = state_17565;
(statearr_17630[(31)] = inst_17551);

return statearr_17630;
})();
if(inst_17552){
var statearr_17631_17695 = state_17565__$1;
(statearr_17631_17695[(1)] = (42));

} else {
var statearr_17632_17696 = state_17565__$1;
(statearr_17632_17696[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (16))){
var inst_17466 = (state_17565[(7)]);
var inst_17468 = cljs.core.chunked_seq_QMARK_.call(null,inst_17466);
var state_17565__$1 = state_17565;
if(inst_17468){
var statearr_17633_17697 = state_17565__$1;
(statearr_17633_17697[(1)] = (19));

} else {
var statearr_17634_17698 = state_17565__$1;
(statearr_17634_17698[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (38))){
var inst_17544 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17635_17699 = state_17565__$1;
(statearr_17635_17699[(2)] = inst_17544);

(statearr_17635_17699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (30))){
var state_17565__$1 = state_17565;
var statearr_17636_17700 = state_17565__$1;
(statearr_17636_17700[(2)] = null);

(statearr_17636_17700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (10))){
var inst_17447 = (state_17565[(13)]);
var inst_17449 = (state_17565[(17)]);
var inst_17455 = cljs.core._nth.call(null,inst_17447,inst_17449);
var inst_17456 = cljs.core.nth.call(null,inst_17455,(0),null);
var inst_17457 = cljs.core.nth.call(null,inst_17455,(1),null);
var state_17565__$1 = (function (){var statearr_17637 = state_17565;
(statearr_17637[(26)] = inst_17456);

return statearr_17637;
})();
if(cljs.core.truth_(inst_17457)){
var statearr_17638_17701 = state_17565__$1;
(statearr_17638_17701[(1)] = (13));

} else {
var statearr_17639_17702 = state_17565__$1;
(statearr_17639_17702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (18))){
var inst_17490 = (state_17565[(2)]);
var state_17565__$1 = state_17565;
var statearr_17640_17703 = state_17565__$1;
(statearr_17640_17703[(2)] = inst_17490);

(statearr_17640_17703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (42))){
var state_17565__$1 = state_17565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17565__$1,(45),dchan);
} else {
if((state_val_17566 === (37))){
var inst_17524 = (state_17565[(25)]);
var inst_17533 = (state_17565[(23)]);
var inst_17437 = (state_17565[(12)]);
var inst_17533__$1 = cljs.core.first.call(null,inst_17524);
var inst_17534 = cljs.core.async.put_BANG_.call(null,inst_17533__$1,inst_17437,done);
var state_17565__$1 = (function (){var statearr_17641 = state_17565;
(statearr_17641[(23)] = inst_17533__$1);

return statearr_17641;
})();
if(cljs.core.truth_(inst_17534)){
var statearr_17642_17704 = state_17565__$1;
(statearr_17642_17704[(1)] = (39));

} else {
var statearr_17643_17705 = state_17565__$1;
(statearr_17643_17705[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17566 === (8))){
var inst_17448 = (state_17565[(14)]);
var inst_17449 = (state_17565[(17)]);
var inst_17451 = (inst_17449 < inst_17448);
var inst_17452 = inst_17451;
var state_17565__$1 = state_17565;
if(cljs.core.truth_(inst_17452)){
var statearr_17644_17706 = state_17565__$1;
(statearr_17644_17706[(1)] = (10));

} else {
var statearr_17645_17707 = state_17565__$1;
(statearr_17645_17707[(1)] = (11));

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
});})(c__6413__auto___17653,cs,m,dchan,dctr,done))
;
return ((function (switch__6357__auto__,c__6413__auto___17653,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_17649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17649[(0)] = state_machine__6358__auto__);

(statearr_17649[(1)] = (1));

return statearr_17649;
});
var state_machine__6358__auto____1 = (function (state_17565){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_17565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e17650){if((e17650 instanceof Object)){
var ex__6361__auto__ = e17650;
var statearr_17651_17708 = state_17565;
(statearr_17651_17708[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17709 = state_17565;
state_17565 = G__17709;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_17565){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_17565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___17653,cs,m,dchan,dctr,done))
})();
var state__6415__auto__ = (function (){var statearr_17652 = f__6414__auto__.call(null);
(statearr_17652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___17653);

return statearr_17652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___17653,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17711 = {};
return obj17711;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3240__auto__ = m;
if(and__3240__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__3896__auto__ = (((m == null))?null:m);
return (function (){var or__3252__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17712){
var map__17717 = p__17712;
var map__17717__$1 = ((cljs.core.seq_QMARK_.call(null,map__17717))?cljs.core.apply.call(null,cljs.core.hash_map,map__17717):map__17717);
var opts = map__17717__$1;
var statearr_17718_17721 = state;
(statearr_17718_17721[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17717,map__17717__$1,opts){
return (function (val){
var statearr_17719_17722 = state;
(statearr_17719_17722[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17717,map__17717__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17720_17723 = state;
(statearr_17720_17723[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17712 = null;
if (arguments.length > 3) {
var G__17724__i = 0, G__17724__a = new Array(arguments.length -  3);
while (G__17724__i < G__17724__a.length) {G__17724__a[G__17724__i] = arguments[G__17724__i + 3]; ++G__17724__i;}
  p__17712 = new cljs.core.IndexedSeq(G__17724__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17712);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17725){
var state = cljs.core.first(arglist__17725);
arglist__17725 = cljs.core.next(arglist__17725);
var cont_block = cljs.core.first(arglist__17725);
arglist__17725 = cljs.core.next(arglist__17725);
var ports = cljs.core.first(arglist__17725);
var p__17712 = cljs.core.rest(arglist__17725);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17712);
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
if(typeof cljs.core.async.t17845 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17845 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17846){
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
this.meta17846 = meta17846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17845.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17845.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17845.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17847){
var self__ = this;
var _17847__$1 = this;
return self__.meta17846;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17847,meta17846__$1){
var self__ = this;
var _17847__$1 = this;
return (new cljs.core.async.t17845(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17846__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17845.cljs$lang$type = true;

cljs.core.async.t17845.cljs$lang$ctorStr = "cljs.core.async/t17845";

cljs.core.async.t17845.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t17845");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17845 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17845(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17846){
return (new cljs.core.async.t17845(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17846));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17845(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6413__auto___17964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17917){
var state_val_17918 = (state_17917[(1)]);
if((state_val_17918 === (7))){
var inst_17861 = (state_17917[(7)]);
var inst_17866 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17861);
var state_17917__$1 = state_17917;
var statearr_17919_17965 = state_17917__$1;
(statearr_17919_17965[(2)] = inst_17866);

(statearr_17919_17965[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (20))){
var inst_17876 = (state_17917[(8)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17917__$1,(23),out,inst_17876);
} else {
if((state_val_17918 === (1))){
var inst_17851 = (state_17917[(9)]);
var inst_17851__$1 = calc_state.call(null);
var inst_17852 = cljs.core.seq_QMARK_.call(null,inst_17851__$1);
var state_17917__$1 = (function (){var statearr_17920 = state_17917;
(statearr_17920[(9)] = inst_17851__$1);

return statearr_17920;
})();
if(inst_17852){
var statearr_17921_17966 = state_17917__$1;
(statearr_17921_17966[(1)] = (2));

} else {
var statearr_17922_17967 = state_17917__$1;
(statearr_17922_17967[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (24))){
var inst_17869 = (state_17917[(10)]);
var inst_17861 = inst_17869;
var state_17917__$1 = (function (){var statearr_17923 = state_17917;
(statearr_17923[(7)] = inst_17861);

return statearr_17923;
})();
var statearr_17924_17968 = state_17917__$1;
(statearr_17924_17968[(2)] = null);

(statearr_17924_17968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (4))){
var inst_17851 = (state_17917[(9)]);
var inst_17857 = (state_17917[(2)]);
var inst_17858 = cljs.core.get.call(null,inst_17857,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17859 = cljs.core.get.call(null,inst_17857,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17860 = cljs.core.get.call(null,inst_17857,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17861 = inst_17851;
var state_17917__$1 = (function (){var statearr_17925 = state_17917;
(statearr_17925[(11)] = inst_17858);

(statearr_17925[(7)] = inst_17861);

(statearr_17925[(12)] = inst_17859);

(statearr_17925[(13)] = inst_17860);

return statearr_17925;
})();
var statearr_17926_17969 = state_17917__$1;
(statearr_17926_17969[(2)] = null);

(statearr_17926_17969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (15))){
var state_17917__$1 = state_17917;
var statearr_17927_17970 = state_17917__$1;
(statearr_17927_17970[(2)] = null);

(statearr_17927_17970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (21))){
var inst_17869 = (state_17917[(10)]);
var inst_17861 = inst_17869;
var state_17917__$1 = (function (){var statearr_17928 = state_17917;
(statearr_17928[(7)] = inst_17861);

return statearr_17928;
})();
var statearr_17929_17971 = state_17917__$1;
(statearr_17929_17971[(2)] = null);

(statearr_17929_17971[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (13))){
var inst_17913 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17930_17972 = state_17917__$1;
(statearr_17930_17972[(2)] = inst_17913);

(statearr_17930_17972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (22))){
var inst_17911 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17931_17973 = state_17917__$1;
(statearr_17931_17973[(2)] = inst_17911);

(statearr_17931_17973[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (6))){
var inst_17915 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17917__$1,inst_17915);
} else {
if((state_val_17918 === (25))){
var state_17917__$1 = state_17917;
var statearr_17932_17974 = state_17917__$1;
(statearr_17932_17974[(2)] = null);

(statearr_17932_17974[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (17))){
var inst_17891 = (state_17917[(14)]);
var state_17917__$1 = state_17917;
var statearr_17933_17975 = state_17917__$1;
(statearr_17933_17975[(2)] = inst_17891);

(statearr_17933_17975[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (3))){
var inst_17851 = (state_17917[(9)]);
var state_17917__$1 = state_17917;
var statearr_17934_17976 = state_17917__$1;
(statearr_17934_17976[(2)] = inst_17851);

(statearr_17934_17976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (12))){
var inst_17877 = (state_17917[(15)]);
var inst_17872 = (state_17917[(16)]);
var inst_17891 = (state_17917[(14)]);
var inst_17891__$1 = inst_17872.call(null,inst_17877);
var state_17917__$1 = (function (){var statearr_17935 = state_17917;
(statearr_17935[(14)] = inst_17891__$1);

return statearr_17935;
})();
if(cljs.core.truth_(inst_17891__$1)){
var statearr_17936_17977 = state_17917__$1;
(statearr_17936_17977[(1)] = (17));

} else {
var statearr_17937_17978 = state_17917__$1;
(statearr_17937_17978[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (2))){
var inst_17851 = (state_17917[(9)]);
var inst_17854 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17851);
var state_17917__$1 = state_17917;
var statearr_17938_17979 = state_17917__$1;
(statearr_17938_17979[(2)] = inst_17854);

(statearr_17938_17979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (23))){
var inst_17902 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17902)){
var statearr_17939_17980 = state_17917__$1;
(statearr_17939_17980[(1)] = (24));

} else {
var statearr_17940_17981 = state_17917__$1;
(statearr_17940_17981[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (19))){
var inst_17899 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17899)){
var statearr_17941_17982 = state_17917__$1;
(statearr_17941_17982[(1)] = (20));

} else {
var statearr_17942_17983 = state_17917__$1;
(statearr_17942_17983[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (11))){
var inst_17876 = (state_17917[(8)]);
var inst_17882 = (inst_17876 == null);
var state_17917__$1 = state_17917;
if(cljs.core.truth_(inst_17882)){
var statearr_17943_17984 = state_17917__$1;
(statearr_17943_17984[(1)] = (14));

} else {
var statearr_17944_17985 = state_17917__$1;
(statearr_17944_17985[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (9))){
var inst_17869 = (state_17917[(10)]);
var inst_17869__$1 = (state_17917[(2)]);
var inst_17870 = cljs.core.get.call(null,inst_17869__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17871 = cljs.core.get.call(null,inst_17869__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17872 = cljs.core.get.call(null,inst_17869__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17917__$1 = (function (){var statearr_17945 = state_17917;
(statearr_17945[(16)] = inst_17872);

(statearr_17945[(10)] = inst_17869__$1);

(statearr_17945[(17)] = inst_17871);

return statearr_17945;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17917__$1,(10),inst_17870);
} else {
if((state_val_17918 === (5))){
var inst_17861 = (state_17917[(7)]);
var inst_17864 = cljs.core.seq_QMARK_.call(null,inst_17861);
var state_17917__$1 = state_17917;
if(inst_17864){
var statearr_17946_17986 = state_17917__$1;
(statearr_17946_17986[(1)] = (7));

} else {
var statearr_17947_17987 = state_17917__$1;
(statearr_17947_17987[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (14))){
var inst_17877 = (state_17917[(15)]);
var inst_17884 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17877);
var state_17917__$1 = state_17917;
var statearr_17948_17988 = state_17917__$1;
(statearr_17948_17988[(2)] = inst_17884);

(statearr_17948_17988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (26))){
var inst_17907 = (state_17917[(2)]);
var state_17917__$1 = state_17917;
var statearr_17949_17989 = state_17917__$1;
(statearr_17949_17989[(2)] = inst_17907);

(statearr_17949_17989[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (16))){
var inst_17887 = (state_17917[(2)]);
var inst_17888 = calc_state.call(null);
var inst_17861 = inst_17888;
var state_17917__$1 = (function (){var statearr_17950 = state_17917;
(statearr_17950[(7)] = inst_17861);

(statearr_17950[(18)] = inst_17887);

return statearr_17950;
})();
var statearr_17951_17990 = state_17917__$1;
(statearr_17951_17990[(2)] = null);

(statearr_17951_17990[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (10))){
var inst_17876 = (state_17917[(8)]);
var inst_17877 = (state_17917[(15)]);
var inst_17875 = (state_17917[(2)]);
var inst_17876__$1 = cljs.core.nth.call(null,inst_17875,(0),null);
var inst_17877__$1 = cljs.core.nth.call(null,inst_17875,(1),null);
var inst_17878 = (inst_17876__$1 == null);
var inst_17879 = cljs.core._EQ_.call(null,inst_17877__$1,change);
var inst_17880 = (inst_17878) || (inst_17879);
var state_17917__$1 = (function (){var statearr_17952 = state_17917;
(statearr_17952[(8)] = inst_17876__$1);

(statearr_17952[(15)] = inst_17877__$1);

return statearr_17952;
})();
if(cljs.core.truth_(inst_17880)){
var statearr_17953_17991 = state_17917__$1;
(statearr_17953_17991[(1)] = (11));

} else {
var statearr_17954_17992 = state_17917__$1;
(statearr_17954_17992[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (18))){
var inst_17877 = (state_17917[(15)]);
var inst_17872 = (state_17917[(16)]);
var inst_17871 = (state_17917[(17)]);
var inst_17894 = cljs.core.empty_QMARK_.call(null,inst_17872);
var inst_17895 = inst_17871.call(null,inst_17877);
var inst_17896 = cljs.core.not.call(null,inst_17895);
var inst_17897 = (inst_17894) && (inst_17896);
var state_17917__$1 = state_17917;
var statearr_17955_17993 = state_17917__$1;
(statearr_17955_17993[(2)] = inst_17897);

(statearr_17955_17993[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17918 === (8))){
var inst_17861 = (state_17917[(7)]);
var state_17917__$1 = state_17917;
var statearr_17956_17994 = state_17917__$1;
(statearr_17956_17994[(2)] = inst_17861);

(statearr_17956_17994[(1)] = (9));


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
});})(c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6357__auto__,c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_17960 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17960[(0)] = state_machine__6358__auto__);

(statearr_17960[(1)] = (1));

return statearr_17960;
});
var state_machine__6358__auto____1 = (function (state_17917){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_17917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e17961){if((e17961 instanceof Object)){
var ex__6361__auto__ = e17961;
var statearr_17962_17995 = state_17917;
(statearr_17962_17995[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17996 = state_17917;
state_17917 = G__17996;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_17917){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_17917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6415__auto__ = (function (){var statearr_17963 = f__6414__auto__.call(null);
(statearr_17963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___17964);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___17964,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj17998 = {};
return obj17998;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3240__auto__ = p;
if(and__3240__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3240__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__3896__auto__ = (((p == null))?null:p);
return (function (){var or__3252__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3896__auto__)]);
if(or__3252__auto__){
return or__3252__auto__;
} else {
var or__3252__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3252__auto____$1){
return or__3252__auto____$1;
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
var or__3252__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3252__auto__,mults){
return (function (p1__17999_SHARP_){
if(cljs.core.truth_(p1__17999_SHARP_.call(null,topic))){
return p1__17999_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__17999_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3252__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18122 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18122 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18123){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18123 = meta18123;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18122.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18122.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18122.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18122.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18122.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18122.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18124){
var self__ = this;
var _18124__$1 = this;
return self__.meta18123;
});})(mults,ensure_mult))
;

cljs.core.async.t18122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18124,meta18123__$1){
var self__ = this;
var _18124__$1 = this;
return (new cljs.core.async.t18122(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18123__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18122.cljs$lang$type = true;

cljs.core.async.t18122.cljs$lang$ctorStr = "cljs.core.async/t18122";

cljs.core.async.t18122.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18122");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18122 = ((function (mults,ensure_mult){
return (function __GT_t18122(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18123){
return (new cljs.core.async.t18122(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18123));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18122(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6413__auto___18244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___18244,mults,ensure_mult,p){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___18244,mults,ensure_mult,p){
return (function (state_18196){
var state_val_18197 = (state_18196[(1)]);
if((state_val_18197 === (7))){
var inst_18192 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18198_18245 = state_18196__$1;
(statearr_18198_18245[(2)] = inst_18192);

(statearr_18198_18245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (20))){
var state_18196__$1 = state_18196;
var statearr_18199_18246 = state_18196__$1;
(statearr_18199_18246[(2)] = null);

(statearr_18199_18246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (1))){
var state_18196__$1 = state_18196;
var statearr_18200_18247 = state_18196__$1;
(statearr_18200_18247[(2)] = null);

(statearr_18200_18247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (24))){
var inst_18175 = (state_18196[(7)]);
var inst_18184 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18175);
var state_18196__$1 = state_18196;
var statearr_18201_18248 = state_18196__$1;
(statearr_18201_18248[(2)] = inst_18184);

(statearr_18201_18248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (4))){
var inst_18127 = (state_18196[(8)]);
var inst_18127__$1 = (state_18196[(2)]);
var inst_18128 = (inst_18127__$1 == null);
var state_18196__$1 = (function (){var statearr_18202 = state_18196;
(statearr_18202[(8)] = inst_18127__$1);

return statearr_18202;
})();
if(cljs.core.truth_(inst_18128)){
var statearr_18203_18249 = state_18196__$1;
(statearr_18203_18249[(1)] = (5));

} else {
var statearr_18204_18250 = state_18196__$1;
(statearr_18204_18250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (15))){
var inst_18169 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18205_18251 = state_18196__$1;
(statearr_18205_18251[(2)] = inst_18169);

(statearr_18205_18251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (21))){
var inst_18189 = (state_18196[(2)]);
var state_18196__$1 = (function (){var statearr_18206 = state_18196;
(statearr_18206[(9)] = inst_18189);

return statearr_18206;
})();
var statearr_18207_18252 = state_18196__$1;
(statearr_18207_18252[(2)] = null);

(statearr_18207_18252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (13))){
var inst_18151 = (state_18196[(10)]);
var inst_18153 = cljs.core.chunked_seq_QMARK_.call(null,inst_18151);
var state_18196__$1 = state_18196;
if(inst_18153){
var statearr_18208_18253 = state_18196__$1;
(statearr_18208_18253[(1)] = (16));

} else {
var statearr_18209_18254 = state_18196__$1;
(statearr_18209_18254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (22))){
var inst_18181 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
if(cljs.core.truth_(inst_18181)){
var statearr_18210_18255 = state_18196__$1;
(statearr_18210_18255[(1)] = (23));

} else {
var statearr_18211_18256 = state_18196__$1;
(statearr_18211_18256[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (6))){
var inst_18175 = (state_18196[(7)]);
var inst_18127 = (state_18196[(8)]);
var inst_18177 = (state_18196[(11)]);
var inst_18175__$1 = topic_fn.call(null,inst_18127);
var inst_18176 = cljs.core.deref.call(null,mults);
var inst_18177__$1 = cljs.core.get.call(null,inst_18176,inst_18175__$1);
var state_18196__$1 = (function (){var statearr_18212 = state_18196;
(statearr_18212[(7)] = inst_18175__$1);

(statearr_18212[(11)] = inst_18177__$1);

return statearr_18212;
})();
if(cljs.core.truth_(inst_18177__$1)){
var statearr_18213_18257 = state_18196__$1;
(statearr_18213_18257[(1)] = (19));

} else {
var statearr_18214_18258 = state_18196__$1;
(statearr_18214_18258[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (25))){
var inst_18186 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18215_18259 = state_18196__$1;
(statearr_18215_18259[(2)] = inst_18186);

(statearr_18215_18259[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (17))){
var inst_18151 = (state_18196[(10)]);
var inst_18160 = cljs.core.first.call(null,inst_18151);
var inst_18161 = cljs.core.async.muxch_STAR_.call(null,inst_18160);
var inst_18162 = cljs.core.async.close_BANG_.call(null,inst_18161);
var inst_18163 = cljs.core.next.call(null,inst_18151);
var inst_18137 = inst_18163;
var inst_18138 = null;
var inst_18139 = (0);
var inst_18140 = (0);
var state_18196__$1 = (function (){var statearr_18216 = state_18196;
(statearr_18216[(12)] = inst_18139);

(statearr_18216[(13)] = inst_18137);

(statearr_18216[(14)] = inst_18138);

(statearr_18216[(15)] = inst_18140);

(statearr_18216[(16)] = inst_18162);

return statearr_18216;
})();
var statearr_18217_18260 = state_18196__$1;
(statearr_18217_18260[(2)] = null);

(statearr_18217_18260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (3))){
var inst_18194 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18196__$1,inst_18194);
} else {
if((state_val_18197 === (12))){
var inst_18171 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18218_18261 = state_18196__$1;
(statearr_18218_18261[(2)] = inst_18171);

(statearr_18218_18261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (2))){
var state_18196__$1 = state_18196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18196__$1,(4),ch);
} else {
if((state_val_18197 === (23))){
var state_18196__$1 = state_18196;
var statearr_18219_18262 = state_18196__$1;
(statearr_18219_18262[(2)] = null);

(statearr_18219_18262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (19))){
var inst_18127 = (state_18196[(8)]);
var inst_18177 = (state_18196[(11)]);
var inst_18179 = cljs.core.async.muxch_STAR_.call(null,inst_18177);
var state_18196__$1 = state_18196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18196__$1,(22),inst_18179,inst_18127);
} else {
if((state_val_18197 === (11))){
var inst_18151 = (state_18196[(10)]);
var inst_18137 = (state_18196[(13)]);
var inst_18151__$1 = cljs.core.seq.call(null,inst_18137);
var state_18196__$1 = (function (){var statearr_18220 = state_18196;
(statearr_18220[(10)] = inst_18151__$1);

return statearr_18220;
})();
if(inst_18151__$1){
var statearr_18221_18263 = state_18196__$1;
(statearr_18221_18263[(1)] = (13));

} else {
var statearr_18222_18264 = state_18196__$1;
(statearr_18222_18264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (9))){
var inst_18173 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18223_18265 = state_18196__$1;
(statearr_18223_18265[(2)] = inst_18173);

(statearr_18223_18265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (5))){
var inst_18134 = cljs.core.deref.call(null,mults);
var inst_18135 = cljs.core.vals.call(null,inst_18134);
var inst_18136 = cljs.core.seq.call(null,inst_18135);
var inst_18137 = inst_18136;
var inst_18138 = null;
var inst_18139 = (0);
var inst_18140 = (0);
var state_18196__$1 = (function (){var statearr_18224 = state_18196;
(statearr_18224[(12)] = inst_18139);

(statearr_18224[(13)] = inst_18137);

(statearr_18224[(14)] = inst_18138);

(statearr_18224[(15)] = inst_18140);

return statearr_18224;
})();
var statearr_18225_18266 = state_18196__$1;
(statearr_18225_18266[(2)] = null);

(statearr_18225_18266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (14))){
var state_18196__$1 = state_18196;
var statearr_18229_18267 = state_18196__$1;
(statearr_18229_18267[(2)] = null);

(statearr_18229_18267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (16))){
var inst_18151 = (state_18196[(10)]);
var inst_18155 = cljs.core.chunk_first.call(null,inst_18151);
var inst_18156 = cljs.core.chunk_rest.call(null,inst_18151);
var inst_18157 = cljs.core.count.call(null,inst_18155);
var inst_18137 = inst_18156;
var inst_18138 = inst_18155;
var inst_18139 = inst_18157;
var inst_18140 = (0);
var state_18196__$1 = (function (){var statearr_18230 = state_18196;
(statearr_18230[(12)] = inst_18139);

(statearr_18230[(13)] = inst_18137);

(statearr_18230[(14)] = inst_18138);

(statearr_18230[(15)] = inst_18140);

return statearr_18230;
})();
var statearr_18231_18268 = state_18196__$1;
(statearr_18231_18268[(2)] = null);

(statearr_18231_18268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (10))){
var inst_18139 = (state_18196[(12)]);
var inst_18137 = (state_18196[(13)]);
var inst_18138 = (state_18196[(14)]);
var inst_18140 = (state_18196[(15)]);
var inst_18145 = cljs.core._nth.call(null,inst_18138,inst_18140);
var inst_18146 = cljs.core.async.muxch_STAR_.call(null,inst_18145);
var inst_18147 = cljs.core.async.close_BANG_.call(null,inst_18146);
var inst_18148 = (inst_18140 + (1));
var tmp18226 = inst_18139;
var tmp18227 = inst_18137;
var tmp18228 = inst_18138;
var inst_18137__$1 = tmp18227;
var inst_18138__$1 = tmp18228;
var inst_18139__$1 = tmp18226;
var inst_18140__$1 = inst_18148;
var state_18196__$1 = (function (){var statearr_18232 = state_18196;
(statearr_18232[(12)] = inst_18139__$1);

(statearr_18232[(13)] = inst_18137__$1);

(statearr_18232[(14)] = inst_18138__$1);

(statearr_18232[(15)] = inst_18140__$1);

(statearr_18232[(17)] = inst_18147);

return statearr_18232;
})();
var statearr_18233_18269 = state_18196__$1;
(statearr_18233_18269[(2)] = null);

(statearr_18233_18269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (18))){
var inst_18166 = (state_18196[(2)]);
var state_18196__$1 = state_18196;
var statearr_18234_18270 = state_18196__$1;
(statearr_18234_18270[(2)] = inst_18166);

(statearr_18234_18270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18197 === (8))){
var inst_18139 = (state_18196[(12)]);
var inst_18140 = (state_18196[(15)]);
var inst_18142 = (inst_18140 < inst_18139);
var inst_18143 = inst_18142;
var state_18196__$1 = state_18196;
if(cljs.core.truth_(inst_18143)){
var statearr_18235_18271 = state_18196__$1;
(statearr_18235_18271[(1)] = (10));

} else {
var statearr_18236_18272 = state_18196__$1;
(statearr_18236_18272[(1)] = (11));

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
});})(c__6413__auto___18244,mults,ensure_mult,p))
;
return ((function (switch__6357__auto__,c__6413__auto___18244,mults,ensure_mult,p){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18240[(0)] = state_machine__6358__auto__);

(statearr_18240[(1)] = (1));

return statearr_18240;
});
var state_machine__6358__auto____1 = (function (state_18196){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18241){if((e18241 instanceof Object)){
var ex__6361__auto__ = e18241;
var statearr_18242_18273 = state_18196;
(statearr_18242_18273[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18274 = state_18196;
state_18196 = G__18274;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18196){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___18244,mults,ensure_mult,p))
})();
var state__6415__auto__ = (function (){var statearr_18243 = f__6414__auto__.call(null);
(statearr_18243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___18244);

return statearr_18243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___18244,mults,ensure_mult,p))
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
var c__6413__auto___18411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (7))){
var state_18381__$1 = state_18381;
var statearr_18383_18412 = state_18381__$1;
(statearr_18383_18412[(2)] = null);

(statearr_18383_18412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (1))){
var state_18381__$1 = state_18381;
var statearr_18384_18413 = state_18381__$1;
(statearr_18384_18413[(2)] = null);

(statearr_18384_18413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (4))){
var inst_18345 = (state_18381[(7)]);
var inst_18347 = (inst_18345 < cnt);
var state_18381__$1 = state_18381;
if(cljs.core.truth_(inst_18347)){
var statearr_18385_18414 = state_18381__$1;
(statearr_18385_18414[(1)] = (6));

} else {
var statearr_18386_18415 = state_18381__$1;
(statearr_18386_18415[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (15))){
var inst_18377 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18387_18416 = state_18381__$1;
(statearr_18387_18416[(2)] = inst_18377);

(statearr_18387_18416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (13))){
var inst_18370 = cljs.core.async.close_BANG_.call(null,out);
var state_18381__$1 = state_18381;
var statearr_18388_18417 = state_18381__$1;
(statearr_18388_18417[(2)] = inst_18370);

(statearr_18388_18417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (6))){
var state_18381__$1 = state_18381;
var statearr_18389_18418 = state_18381__$1;
(statearr_18389_18418[(2)] = null);

(statearr_18389_18418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (3))){
var inst_18379 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18381__$1,inst_18379);
} else {
if((state_val_18382 === (12))){
var inst_18367 = (state_18381[(8)]);
var inst_18367__$1 = (state_18381[(2)]);
var inst_18368 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18367__$1);
var state_18381__$1 = (function (){var statearr_18390 = state_18381;
(statearr_18390[(8)] = inst_18367__$1);

return statearr_18390;
})();
if(cljs.core.truth_(inst_18368)){
var statearr_18391_18419 = state_18381__$1;
(statearr_18391_18419[(1)] = (13));

} else {
var statearr_18392_18420 = state_18381__$1;
(statearr_18392_18420[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (2))){
var inst_18344 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18345 = (0);
var state_18381__$1 = (function (){var statearr_18393 = state_18381;
(statearr_18393[(9)] = inst_18344);

(statearr_18393[(7)] = inst_18345);

return statearr_18393;
})();
var statearr_18394_18421 = state_18381__$1;
(statearr_18394_18421[(2)] = null);

(statearr_18394_18421[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (11))){
var inst_18345 = (state_18381[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18381,(10),Object,null,(9));
var inst_18354 = chs__$1.call(null,inst_18345);
var inst_18355 = done.call(null,inst_18345);
var inst_18356 = cljs.core.async.take_BANG_.call(null,inst_18354,inst_18355);
var state_18381__$1 = state_18381;
var statearr_18395_18422 = state_18381__$1;
(statearr_18395_18422[(2)] = inst_18356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (9))){
var inst_18345 = (state_18381[(7)]);
var inst_18358 = (state_18381[(2)]);
var inst_18359 = (inst_18345 + (1));
var inst_18345__$1 = inst_18359;
var state_18381__$1 = (function (){var statearr_18396 = state_18381;
(statearr_18396[(10)] = inst_18358);

(statearr_18396[(7)] = inst_18345__$1);

return statearr_18396;
})();
var statearr_18397_18423 = state_18381__$1;
(statearr_18397_18423[(2)] = null);

(statearr_18397_18423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (5))){
var inst_18365 = (state_18381[(2)]);
var state_18381__$1 = (function (){var statearr_18398 = state_18381;
(statearr_18398[(11)] = inst_18365);

return statearr_18398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18381__$1,(12),dchan);
} else {
if((state_val_18382 === (14))){
var inst_18367 = (state_18381[(8)]);
var inst_18372 = cljs.core.apply.call(null,f,inst_18367);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18381__$1,(16),out,inst_18372);
} else {
if((state_val_18382 === (16))){
var inst_18374 = (state_18381[(2)]);
var state_18381__$1 = (function (){var statearr_18399 = state_18381;
(statearr_18399[(12)] = inst_18374);

return statearr_18399;
})();
var statearr_18400_18424 = state_18381__$1;
(statearr_18400_18424[(2)] = null);

(statearr_18400_18424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (10))){
var inst_18349 = (state_18381[(2)]);
var inst_18350 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18381__$1 = (function (){var statearr_18401 = state_18381;
(statearr_18401[(13)] = inst_18349);

return statearr_18401;
})();
var statearr_18402_18425 = state_18381__$1;
(statearr_18402_18425[(2)] = inst_18350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18381__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (8))){
var inst_18363 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18403_18426 = state_18381__$1;
(statearr_18403_18426[(2)] = inst_18363);

(statearr_18403_18426[(1)] = (5));


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
});})(c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6357__auto__,c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18407[(0)] = state_machine__6358__auto__);

(statearr_18407[(1)] = (1));

return statearr_18407;
});
var state_machine__6358__auto____1 = (function (state_18381){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18408){if((e18408 instanceof Object)){
var ex__6361__auto__ = e18408;
var statearr_18409_18427 = state_18381;
(statearr_18409_18427[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18428 = state_18381;
state_18381 = G__18428;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6415__auto__ = (function (){var statearr_18410 = f__6414__auto__.call(null);
(statearr_18410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___18411);

return statearr_18410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___18411,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6413__auto___18536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___18536,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___18536,out){
return (function (state_18512){
var state_val_18513 = (state_18512[(1)]);
if((state_val_18513 === (7))){
var inst_18491 = (state_18512[(7)]);
var inst_18492 = (state_18512[(8)]);
var inst_18491__$1 = (state_18512[(2)]);
var inst_18492__$1 = cljs.core.nth.call(null,inst_18491__$1,(0),null);
var inst_18493 = cljs.core.nth.call(null,inst_18491__$1,(1),null);
var inst_18494 = (inst_18492__$1 == null);
var state_18512__$1 = (function (){var statearr_18514 = state_18512;
(statearr_18514[(7)] = inst_18491__$1);

(statearr_18514[(9)] = inst_18493);

(statearr_18514[(8)] = inst_18492__$1);

return statearr_18514;
})();
if(cljs.core.truth_(inst_18494)){
var statearr_18515_18537 = state_18512__$1;
(statearr_18515_18537[(1)] = (8));

} else {
var statearr_18516_18538 = state_18512__$1;
(statearr_18516_18538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (1))){
var inst_18483 = cljs.core.vec.call(null,chs);
var inst_18484 = inst_18483;
var state_18512__$1 = (function (){var statearr_18517 = state_18512;
(statearr_18517[(10)] = inst_18484);

return statearr_18517;
})();
var statearr_18518_18539 = state_18512__$1;
(statearr_18518_18539[(2)] = null);

(statearr_18518_18539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (4))){
var inst_18484 = (state_18512[(10)]);
var state_18512__$1 = state_18512;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18512__$1,(7),inst_18484);
} else {
if((state_val_18513 === (6))){
var inst_18508 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18519_18540 = state_18512__$1;
(statearr_18519_18540[(2)] = inst_18508);

(statearr_18519_18540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (3))){
var inst_18510 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18512__$1,inst_18510);
} else {
if((state_val_18513 === (2))){
var inst_18484 = (state_18512[(10)]);
var inst_18486 = cljs.core.count.call(null,inst_18484);
var inst_18487 = (inst_18486 > (0));
var state_18512__$1 = state_18512;
if(cljs.core.truth_(inst_18487)){
var statearr_18521_18541 = state_18512__$1;
(statearr_18521_18541[(1)] = (4));

} else {
var statearr_18522_18542 = state_18512__$1;
(statearr_18522_18542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (11))){
var inst_18484 = (state_18512[(10)]);
var inst_18501 = (state_18512[(2)]);
var tmp18520 = inst_18484;
var inst_18484__$1 = tmp18520;
var state_18512__$1 = (function (){var statearr_18523 = state_18512;
(statearr_18523[(10)] = inst_18484__$1);

(statearr_18523[(11)] = inst_18501);

return statearr_18523;
})();
var statearr_18524_18543 = state_18512__$1;
(statearr_18524_18543[(2)] = null);

(statearr_18524_18543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (9))){
var inst_18492 = (state_18512[(8)]);
var state_18512__$1 = state_18512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18512__$1,(11),out,inst_18492);
} else {
if((state_val_18513 === (5))){
var inst_18506 = cljs.core.async.close_BANG_.call(null,out);
var state_18512__$1 = state_18512;
var statearr_18525_18544 = state_18512__$1;
(statearr_18525_18544[(2)] = inst_18506);

(statearr_18525_18544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (10))){
var inst_18504 = (state_18512[(2)]);
var state_18512__$1 = state_18512;
var statearr_18526_18545 = state_18512__$1;
(statearr_18526_18545[(2)] = inst_18504);

(statearr_18526_18545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18513 === (8))){
var inst_18491 = (state_18512[(7)]);
var inst_18493 = (state_18512[(9)]);
var inst_18484 = (state_18512[(10)]);
var inst_18492 = (state_18512[(8)]);
var inst_18496 = (function (){var c = inst_18493;
var v = inst_18492;
var vec__18489 = inst_18491;
var cs = inst_18484;
return ((function (c,v,vec__18489,cs,inst_18491,inst_18493,inst_18484,inst_18492,state_val_18513,c__6413__auto___18536,out){
return (function (p1__18429_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18429_SHARP_);
});
;})(c,v,vec__18489,cs,inst_18491,inst_18493,inst_18484,inst_18492,state_val_18513,c__6413__auto___18536,out))
})();
var inst_18497 = cljs.core.filterv.call(null,inst_18496,inst_18484);
var inst_18484__$1 = inst_18497;
var state_18512__$1 = (function (){var statearr_18527 = state_18512;
(statearr_18527[(10)] = inst_18484__$1);

return statearr_18527;
})();
var statearr_18528_18546 = state_18512__$1;
(statearr_18528_18546[(2)] = null);

(statearr_18528_18546[(1)] = (2));


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
});})(c__6413__auto___18536,out))
;
return ((function (switch__6357__auto__,c__6413__auto___18536,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18532[(0)] = state_machine__6358__auto__);

(statearr_18532[(1)] = (1));

return statearr_18532;
});
var state_machine__6358__auto____1 = (function (state_18512){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18533){if((e18533 instanceof Object)){
var ex__6361__auto__ = e18533;
var statearr_18534_18547 = state_18512;
(statearr_18534_18547[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18548 = state_18512;
state_18512 = G__18548;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18512){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___18536,out))
})();
var state__6415__auto__ = (function (){var statearr_18535 = f__6414__auto__.call(null);
(statearr_18535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___18536);

return statearr_18535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___18536,out))
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
var c__6413__auto___18641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___18641,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___18641,out){
return (function (state_18618){
var state_val_18619 = (state_18618[(1)]);
if((state_val_18619 === (7))){
var inst_18600 = (state_18618[(7)]);
var inst_18600__$1 = (state_18618[(2)]);
var inst_18601 = (inst_18600__$1 == null);
var inst_18602 = cljs.core.not.call(null,inst_18601);
var state_18618__$1 = (function (){var statearr_18620 = state_18618;
(statearr_18620[(7)] = inst_18600__$1);

return statearr_18620;
})();
if(inst_18602){
var statearr_18621_18642 = state_18618__$1;
(statearr_18621_18642[(1)] = (8));

} else {
var statearr_18622_18643 = state_18618__$1;
(statearr_18622_18643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (1))){
var inst_18595 = (0);
var state_18618__$1 = (function (){var statearr_18623 = state_18618;
(statearr_18623[(8)] = inst_18595);

return statearr_18623;
})();
var statearr_18624_18644 = state_18618__$1;
(statearr_18624_18644[(2)] = null);

(statearr_18624_18644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (4))){
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18618__$1,(7),ch);
} else {
if((state_val_18619 === (6))){
var inst_18613 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18625_18645 = state_18618__$1;
(statearr_18625_18645[(2)] = inst_18613);

(statearr_18625_18645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (3))){
var inst_18615 = (state_18618[(2)]);
var inst_18616 = cljs.core.async.close_BANG_.call(null,out);
var state_18618__$1 = (function (){var statearr_18626 = state_18618;
(statearr_18626[(9)] = inst_18615);

return statearr_18626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18618__$1,inst_18616);
} else {
if((state_val_18619 === (2))){
var inst_18595 = (state_18618[(8)]);
var inst_18597 = (inst_18595 < n);
var state_18618__$1 = state_18618;
if(cljs.core.truth_(inst_18597)){
var statearr_18627_18646 = state_18618__$1;
(statearr_18627_18646[(1)] = (4));

} else {
var statearr_18628_18647 = state_18618__$1;
(statearr_18628_18647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (11))){
var inst_18595 = (state_18618[(8)]);
var inst_18605 = (state_18618[(2)]);
var inst_18606 = (inst_18595 + (1));
var inst_18595__$1 = inst_18606;
var state_18618__$1 = (function (){var statearr_18629 = state_18618;
(statearr_18629[(8)] = inst_18595__$1);

(statearr_18629[(10)] = inst_18605);

return statearr_18629;
})();
var statearr_18630_18648 = state_18618__$1;
(statearr_18630_18648[(2)] = null);

(statearr_18630_18648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (9))){
var state_18618__$1 = state_18618;
var statearr_18631_18649 = state_18618__$1;
(statearr_18631_18649[(2)] = null);

(statearr_18631_18649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (5))){
var state_18618__$1 = state_18618;
var statearr_18632_18650 = state_18618__$1;
(statearr_18632_18650[(2)] = null);

(statearr_18632_18650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (10))){
var inst_18610 = (state_18618[(2)]);
var state_18618__$1 = state_18618;
var statearr_18633_18651 = state_18618__$1;
(statearr_18633_18651[(2)] = inst_18610);

(statearr_18633_18651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18619 === (8))){
var inst_18600 = (state_18618[(7)]);
var state_18618__$1 = state_18618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18618__$1,(11),out,inst_18600);
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
});})(c__6413__auto___18641,out))
;
return ((function (switch__6357__auto__,c__6413__auto___18641,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18637[(0)] = state_machine__6358__auto__);

(statearr_18637[(1)] = (1));

return statearr_18637;
});
var state_machine__6358__auto____1 = (function (state_18618){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18638){if((e18638 instanceof Object)){
var ex__6361__auto__ = e18638;
var statearr_18639_18652 = state_18618;
(statearr_18639_18652[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18653 = state_18618;
state_18618 = G__18653;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18618){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___18641,out))
})();
var state__6415__auto__ = (function (){var statearr_18640 = f__6414__auto__.call(null);
(statearr_18640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___18641);

return statearr_18640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___18641,out))
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
if(typeof cljs.core.async.t18661 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18661 = (function (ch,f,map_LT_,meta18662){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18662 = meta18662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18664 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18664 = (function (fn1,_,meta18662,map_LT_,f,ch,meta18665){
this.fn1 = fn1;
this._ = _;
this.meta18662 = meta18662;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18665 = meta18665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18654_SHARP_){
return f1.call(null,(((p1__18654_SHARP_ == null))?null:self__.f.call(null,p1__18654_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18666){
var self__ = this;
var _18666__$1 = this;
return self__.meta18665;
});})(___$1))
;

cljs.core.async.t18664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18666,meta18665__$1){
var self__ = this;
var _18666__$1 = this;
return (new cljs.core.async.t18664(self__.fn1,self__._,self__.meta18662,self__.map_LT_,self__.f,self__.ch,meta18665__$1));
});})(___$1))
;

cljs.core.async.t18664.cljs$lang$type = true;

cljs.core.async.t18664.cljs$lang$ctorStr = "cljs.core.async/t18664";

cljs.core.async.t18664.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18664");
});})(___$1))
;

cljs.core.async.__GT_t18664 = ((function (___$1){
return (function __GT_t18664(fn1__$1,___$2,meta18662__$1,map_LT___$1,f__$1,ch__$1,meta18665){
return (new cljs.core.async.t18664(fn1__$1,___$2,meta18662__$1,map_LT___$1,f__$1,ch__$1,meta18665));
});})(___$1))
;

}

return (new cljs.core.async.t18664(fn1,___$1,self__.meta18662,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3240__auto__ = ret;
if(cljs.core.truth_(and__3240__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3240__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18661.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18663){
var self__ = this;
var _18663__$1 = this;
return self__.meta18662;
});

cljs.core.async.t18661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18663,meta18662__$1){
var self__ = this;
var _18663__$1 = this;
return (new cljs.core.async.t18661(self__.ch,self__.f,self__.map_LT_,meta18662__$1));
});

cljs.core.async.t18661.cljs$lang$type = true;

cljs.core.async.t18661.cljs$lang$ctorStr = "cljs.core.async/t18661";

cljs.core.async.t18661.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18661");
});

cljs.core.async.__GT_t18661 = (function __GT_t18661(ch__$1,f__$1,map_LT___$1,meta18662){
return (new cljs.core.async.t18661(ch__$1,f__$1,map_LT___$1,meta18662));
});

}

return (new cljs.core.async.t18661(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18670 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18670 = (function (ch,f,map_GT_,meta18671){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18671 = meta18671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18672){
var self__ = this;
var _18672__$1 = this;
return self__.meta18671;
});

cljs.core.async.t18670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18672,meta18671__$1){
var self__ = this;
var _18672__$1 = this;
return (new cljs.core.async.t18670(self__.ch,self__.f,self__.map_GT_,meta18671__$1));
});

cljs.core.async.t18670.cljs$lang$type = true;

cljs.core.async.t18670.cljs$lang$ctorStr = "cljs.core.async/t18670";

cljs.core.async.t18670.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18670");
});

cljs.core.async.__GT_t18670 = (function __GT_t18670(ch__$1,f__$1,map_GT___$1,meta18671){
return (new cljs.core.async.t18670(ch__$1,f__$1,map_GT___$1,meta18671));
});

}

return (new cljs.core.async.t18670(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18676 = (function (ch,p,filter_GT_,meta18677){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18677 = meta18677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18678){
var self__ = this;
var _18678__$1 = this;
return self__.meta18677;
});

cljs.core.async.t18676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18678,meta18677__$1){
var self__ = this;
var _18678__$1 = this;
return (new cljs.core.async.t18676(self__.ch,self__.p,self__.filter_GT_,meta18677__$1));
});

cljs.core.async.t18676.cljs$lang$type = true;

cljs.core.async.t18676.cljs$lang$ctorStr = "cljs.core.async/t18676";

cljs.core.async.t18676.cljs$lang$ctorPrWriter = (function (this__3839__auto__,writer__3840__auto__,opt__3841__auto__){
return cljs.core._write.call(null,writer__3840__auto__,"cljs.core.async/t18676");
});

cljs.core.async.__GT_t18676 = (function __GT_t18676(ch__$1,p__$1,filter_GT___$1,meta18677){
return (new cljs.core.async.t18676(ch__$1,p__$1,filter_GT___$1,meta18677));
});

}

return (new cljs.core.async.t18676(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levi/meetapp/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__6413__auto___18761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___18761,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___18761,out){
return (function (state_18740){
var state_val_18741 = (state_18740[(1)]);
if((state_val_18741 === (7))){
var inst_18736 = (state_18740[(2)]);
var state_18740__$1 = state_18740;
var statearr_18742_18762 = state_18740__$1;
(statearr_18742_18762[(2)] = inst_18736);

(statearr_18742_18762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (1))){
var state_18740__$1 = state_18740;
var statearr_18743_18763 = state_18740__$1;
(statearr_18743_18763[(2)] = null);

(statearr_18743_18763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (4))){
var inst_18722 = (state_18740[(7)]);
var inst_18722__$1 = (state_18740[(2)]);
var inst_18723 = (inst_18722__$1 == null);
var state_18740__$1 = (function (){var statearr_18744 = state_18740;
(statearr_18744[(7)] = inst_18722__$1);

return statearr_18744;
})();
if(cljs.core.truth_(inst_18723)){
var statearr_18745_18764 = state_18740__$1;
(statearr_18745_18764[(1)] = (5));

} else {
var statearr_18746_18765 = state_18740__$1;
(statearr_18746_18765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (6))){
var inst_18722 = (state_18740[(7)]);
var inst_18727 = p.call(null,inst_18722);
var state_18740__$1 = state_18740;
if(cljs.core.truth_(inst_18727)){
var statearr_18747_18766 = state_18740__$1;
(statearr_18747_18766[(1)] = (8));

} else {
var statearr_18748_18767 = state_18740__$1;
(statearr_18748_18767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (3))){
var inst_18738 = (state_18740[(2)]);
var state_18740__$1 = state_18740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18740__$1,inst_18738);
} else {
if((state_val_18741 === (2))){
var state_18740__$1 = state_18740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18740__$1,(4),ch);
} else {
if((state_val_18741 === (11))){
var inst_18730 = (state_18740[(2)]);
var state_18740__$1 = state_18740;
var statearr_18749_18768 = state_18740__$1;
(statearr_18749_18768[(2)] = inst_18730);

(statearr_18749_18768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (9))){
var state_18740__$1 = state_18740;
var statearr_18750_18769 = state_18740__$1;
(statearr_18750_18769[(2)] = null);

(statearr_18750_18769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (5))){
var inst_18725 = cljs.core.async.close_BANG_.call(null,out);
var state_18740__$1 = state_18740;
var statearr_18751_18770 = state_18740__$1;
(statearr_18751_18770[(2)] = inst_18725);

(statearr_18751_18770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (10))){
var inst_18733 = (state_18740[(2)]);
var state_18740__$1 = (function (){var statearr_18752 = state_18740;
(statearr_18752[(8)] = inst_18733);

return statearr_18752;
})();
var statearr_18753_18771 = state_18740__$1;
(statearr_18753_18771[(2)] = null);

(statearr_18753_18771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18741 === (8))){
var inst_18722 = (state_18740[(7)]);
var state_18740__$1 = state_18740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18740__$1,(11),out,inst_18722);
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
});})(c__6413__auto___18761,out))
;
return ((function (switch__6357__auto__,c__6413__auto___18761,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18757 = [null,null,null,null,null,null,null,null,null];
(statearr_18757[(0)] = state_machine__6358__auto__);

(statearr_18757[(1)] = (1));

return statearr_18757;
});
var state_machine__6358__auto____1 = (function (state_18740){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18758){if((e18758 instanceof Object)){
var ex__6361__auto__ = e18758;
var statearr_18759_18772 = state_18740;
(statearr_18759_18772[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18773 = state_18740;
state_18740 = G__18773;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18740){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___18761,out))
})();
var state__6415__auto__ = (function (){var statearr_18760 = f__6414__auto__.call(null);
(statearr_18760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___18761);

return statearr_18760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___18761,out))
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
var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__){
return (function (state_18939){
var state_val_18940 = (state_18939[(1)]);
if((state_val_18940 === (7))){
var inst_18935 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
var statearr_18941_18982 = state_18939__$1;
(statearr_18941_18982[(2)] = inst_18935);

(statearr_18941_18982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (20))){
var inst_18905 = (state_18939[(7)]);
var inst_18916 = (state_18939[(2)]);
var inst_18917 = cljs.core.next.call(null,inst_18905);
var inst_18891 = inst_18917;
var inst_18892 = null;
var inst_18893 = (0);
var inst_18894 = (0);
var state_18939__$1 = (function (){var statearr_18942 = state_18939;
(statearr_18942[(8)] = inst_18894);

(statearr_18942[(9)] = inst_18893);

(statearr_18942[(10)] = inst_18892);

(statearr_18942[(11)] = inst_18916);

(statearr_18942[(12)] = inst_18891);

return statearr_18942;
})();
var statearr_18943_18983 = state_18939__$1;
(statearr_18943_18983[(2)] = null);

(statearr_18943_18983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (1))){
var state_18939__$1 = state_18939;
var statearr_18944_18984 = state_18939__$1;
(statearr_18944_18984[(2)] = null);

(statearr_18944_18984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (4))){
var inst_18880 = (state_18939[(13)]);
var inst_18880__$1 = (state_18939[(2)]);
var inst_18881 = (inst_18880__$1 == null);
var state_18939__$1 = (function (){var statearr_18945 = state_18939;
(statearr_18945[(13)] = inst_18880__$1);

return statearr_18945;
})();
if(cljs.core.truth_(inst_18881)){
var statearr_18946_18985 = state_18939__$1;
(statearr_18946_18985[(1)] = (5));

} else {
var statearr_18947_18986 = state_18939__$1;
(statearr_18947_18986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (15))){
var state_18939__$1 = state_18939;
var statearr_18951_18987 = state_18939__$1;
(statearr_18951_18987[(2)] = null);

(statearr_18951_18987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (21))){
var state_18939__$1 = state_18939;
var statearr_18952_18988 = state_18939__$1;
(statearr_18952_18988[(2)] = null);

(statearr_18952_18988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (13))){
var inst_18894 = (state_18939[(8)]);
var inst_18893 = (state_18939[(9)]);
var inst_18892 = (state_18939[(10)]);
var inst_18891 = (state_18939[(12)]);
var inst_18901 = (state_18939[(2)]);
var inst_18902 = (inst_18894 + (1));
var tmp18948 = inst_18893;
var tmp18949 = inst_18892;
var tmp18950 = inst_18891;
var inst_18891__$1 = tmp18950;
var inst_18892__$1 = tmp18949;
var inst_18893__$1 = tmp18948;
var inst_18894__$1 = inst_18902;
var state_18939__$1 = (function (){var statearr_18953 = state_18939;
(statearr_18953[(8)] = inst_18894__$1);

(statearr_18953[(9)] = inst_18893__$1);

(statearr_18953[(10)] = inst_18892__$1);

(statearr_18953[(14)] = inst_18901);

(statearr_18953[(12)] = inst_18891__$1);

return statearr_18953;
})();
var statearr_18954_18989 = state_18939__$1;
(statearr_18954_18989[(2)] = null);

(statearr_18954_18989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (22))){
var state_18939__$1 = state_18939;
var statearr_18955_18990 = state_18939__$1;
(statearr_18955_18990[(2)] = null);

(statearr_18955_18990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (6))){
var inst_18880 = (state_18939[(13)]);
var inst_18889 = f.call(null,inst_18880);
var inst_18890 = cljs.core.seq.call(null,inst_18889);
var inst_18891 = inst_18890;
var inst_18892 = null;
var inst_18893 = (0);
var inst_18894 = (0);
var state_18939__$1 = (function (){var statearr_18956 = state_18939;
(statearr_18956[(8)] = inst_18894);

(statearr_18956[(9)] = inst_18893);

(statearr_18956[(10)] = inst_18892);

(statearr_18956[(12)] = inst_18891);

return statearr_18956;
})();
var statearr_18957_18991 = state_18939__$1;
(statearr_18957_18991[(2)] = null);

(statearr_18957_18991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (17))){
var inst_18905 = (state_18939[(7)]);
var inst_18909 = cljs.core.chunk_first.call(null,inst_18905);
var inst_18910 = cljs.core.chunk_rest.call(null,inst_18905);
var inst_18911 = cljs.core.count.call(null,inst_18909);
var inst_18891 = inst_18910;
var inst_18892 = inst_18909;
var inst_18893 = inst_18911;
var inst_18894 = (0);
var state_18939__$1 = (function (){var statearr_18958 = state_18939;
(statearr_18958[(8)] = inst_18894);

(statearr_18958[(9)] = inst_18893);

(statearr_18958[(10)] = inst_18892);

(statearr_18958[(12)] = inst_18891);

return statearr_18958;
})();
var statearr_18959_18992 = state_18939__$1;
(statearr_18959_18992[(2)] = null);

(statearr_18959_18992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (3))){
var inst_18937 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18939__$1,inst_18937);
} else {
if((state_val_18940 === (12))){
var inst_18925 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
var statearr_18960_18993 = state_18939__$1;
(statearr_18960_18993[(2)] = inst_18925);

(statearr_18960_18993[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (2))){
var state_18939__$1 = state_18939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18939__$1,(4),in$);
} else {
if((state_val_18940 === (23))){
var inst_18933 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
var statearr_18961_18994 = state_18939__$1;
(statearr_18961_18994[(2)] = inst_18933);

(statearr_18961_18994[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (19))){
var inst_18920 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
var statearr_18962_18995 = state_18939__$1;
(statearr_18962_18995[(2)] = inst_18920);

(statearr_18962_18995[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (11))){
var inst_18905 = (state_18939[(7)]);
var inst_18891 = (state_18939[(12)]);
var inst_18905__$1 = cljs.core.seq.call(null,inst_18891);
var state_18939__$1 = (function (){var statearr_18963 = state_18939;
(statearr_18963[(7)] = inst_18905__$1);

return statearr_18963;
})();
if(inst_18905__$1){
var statearr_18964_18996 = state_18939__$1;
(statearr_18964_18996[(1)] = (14));

} else {
var statearr_18965_18997 = state_18939__$1;
(statearr_18965_18997[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (9))){
var inst_18927 = (state_18939[(2)]);
var inst_18928 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18939__$1 = (function (){var statearr_18966 = state_18939;
(statearr_18966[(15)] = inst_18927);

return statearr_18966;
})();
if(cljs.core.truth_(inst_18928)){
var statearr_18967_18998 = state_18939__$1;
(statearr_18967_18998[(1)] = (21));

} else {
var statearr_18968_18999 = state_18939__$1;
(statearr_18968_18999[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (5))){
var inst_18883 = cljs.core.async.close_BANG_.call(null,out);
var state_18939__$1 = state_18939;
var statearr_18969_19000 = state_18939__$1;
(statearr_18969_19000[(2)] = inst_18883);

(statearr_18969_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (14))){
var inst_18905 = (state_18939[(7)]);
var inst_18907 = cljs.core.chunked_seq_QMARK_.call(null,inst_18905);
var state_18939__$1 = state_18939;
if(inst_18907){
var statearr_18970_19001 = state_18939__$1;
(statearr_18970_19001[(1)] = (17));

} else {
var statearr_18971_19002 = state_18939__$1;
(statearr_18971_19002[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (16))){
var inst_18923 = (state_18939[(2)]);
var state_18939__$1 = state_18939;
var statearr_18972_19003 = state_18939__$1;
(statearr_18972_19003[(2)] = inst_18923);

(statearr_18972_19003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18940 === (10))){
var inst_18894 = (state_18939[(8)]);
var inst_18892 = (state_18939[(10)]);
var inst_18899 = cljs.core._nth.call(null,inst_18892,inst_18894);
var state_18939__$1 = state_18939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18939__$1,(13),out,inst_18899);
} else {
if((state_val_18940 === (18))){
var inst_18905 = (state_18939[(7)]);
var inst_18914 = cljs.core.first.call(null,inst_18905);
var state_18939__$1 = state_18939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18939__$1,(20),out,inst_18914);
} else {
if((state_val_18940 === (8))){
var inst_18894 = (state_18939[(8)]);
var inst_18893 = (state_18939[(9)]);
var inst_18896 = (inst_18894 < inst_18893);
var inst_18897 = inst_18896;
var state_18939__$1 = state_18939;
if(cljs.core.truth_(inst_18897)){
var statearr_18973_19004 = state_18939__$1;
(statearr_18973_19004[(1)] = (10));

} else {
var statearr_18974_19005 = state_18939__$1;
(statearr_18974_19005[(1)] = (11));

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
});})(c__6413__auto__))
;
return ((function (switch__6357__auto__,c__6413__auto__){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_18978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18978[(0)] = state_machine__6358__auto__);

(statearr_18978[(1)] = (1));

return statearr_18978;
});
var state_machine__6358__auto____1 = (function (state_18939){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_18939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e18979){if((e18979 instanceof Object)){
var ex__6361__auto__ = e18979;
var statearr_18980_19006 = state_18939;
(statearr_18980_19006[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19007 = state_18939;
state_18939 = G__19007;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_18939){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_18939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__))
})();
var state__6415__auto__ = (function (){var statearr_18981 = f__6414__auto__.call(null);
(statearr_18981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_18981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__))
);

return c__6413__auto__;
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
var c__6413__auto___19104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___19104,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___19104,out){
return (function (state_19079){
var state_val_19080 = (state_19079[(1)]);
if((state_val_19080 === (7))){
var inst_19074 = (state_19079[(2)]);
var state_19079__$1 = state_19079;
var statearr_19081_19105 = state_19079__$1;
(statearr_19081_19105[(2)] = inst_19074);

(statearr_19081_19105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (1))){
var inst_19056 = null;
var state_19079__$1 = (function (){var statearr_19082 = state_19079;
(statearr_19082[(7)] = inst_19056);

return statearr_19082;
})();
var statearr_19083_19106 = state_19079__$1;
(statearr_19083_19106[(2)] = null);

(statearr_19083_19106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (4))){
var inst_19059 = (state_19079[(8)]);
var inst_19059__$1 = (state_19079[(2)]);
var inst_19060 = (inst_19059__$1 == null);
var inst_19061 = cljs.core.not.call(null,inst_19060);
var state_19079__$1 = (function (){var statearr_19084 = state_19079;
(statearr_19084[(8)] = inst_19059__$1);

return statearr_19084;
})();
if(inst_19061){
var statearr_19085_19107 = state_19079__$1;
(statearr_19085_19107[(1)] = (5));

} else {
var statearr_19086_19108 = state_19079__$1;
(statearr_19086_19108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (6))){
var state_19079__$1 = state_19079;
var statearr_19087_19109 = state_19079__$1;
(statearr_19087_19109[(2)] = null);

(statearr_19087_19109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (3))){
var inst_19076 = (state_19079[(2)]);
var inst_19077 = cljs.core.async.close_BANG_.call(null,out);
var state_19079__$1 = (function (){var statearr_19088 = state_19079;
(statearr_19088[(9)] = inst_19076);

return statearr_19088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19079__$1,inst_19077);
} else {
if((state_val_19080 === (2))){
var state_19079__$1 = state_19079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19079__$1,(4),ch);
} else {
if((state_val_19080 === (11))){
var inst_19059 = (state_19079[(8)]);
var inst_19068 = (state_19079[(2)]);
var inst_19056 = inst_19059;
var state_19079__$1 = (function (){var statearr_19089 = state_19079;
(statearr_19089[(7)] = inst_19056);

(statearr_19089[(10)] = inst_19068);

return statearr_19089;
})();
var statearr_19090_19110 = state_19079__$1;
(statearr_19090_19110[(2)] = null);

(statearr_19090_19110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (9))){
var inst_19059 = (state_19079[(8)]);
var state_19079__$1 = state_19079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19079__$1,(11),out,inst_19059);
} else {
if((state_val_19080 === (5))){
var inst_19056 = (state_19079[(7)]);
var inst_19059 = (state_19079[(8)]);
var inst_19063 = cljs.core._EQ_.call(null,inst_19059,inst_19056);
var state_19079__$1 = state_19079;
if(inst_19063){
var statearr_19092_19111 = state_19079__$1;
(statearr_19092_19111[(1)] = (8));

} else {
var statearr_19093_19112 = state_19079__$1;
(statearr_19093_19112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (10))){
var inst_19071 = (state_19079[(2)]);
var state_19079__$1 = state_19079;
var statearr_19094_19113 = state_19079__$1;
(statearr_19094_19113[(2)] = inst_19071);

(statearr_19094_19113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19080 === (8))){
var inst_19056 = (state_19079[(7)]);
var tmp19091 = inst_19056;
var inst_19056__$1 = tmp19091;
var state_19079__$1 = (function (){var statearr_19095 = state_19079;
(statearr_19095[(7)] = inst_19056__$1);

return statearr_19095;
})();
var statearr_19096_19114 = state_19079__$1;
(statearr_19096_19114[(2)] = null);

(statearr_19096_19114[(1)] = (2));


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
});})(c__6413__auto___19104,out))
;
return ((function (switch__6357__auto__,c__6413__auto___19104,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_19100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19100[(0)] = state_machine__6358__auto__);

(statearr_19100[(1)] = (1));

return statearr_19100;
});
var state_machine__6358__auto____1 = (function (state_19079){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_19079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e19101){if((e19101 instanceof Object)){
var ex__6361__auto__ = e19101;
var statearr_19102_19115 = state_19079;
(statearr_19102_19115[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19116 = state_19079;
state_19079 = G__19116;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_19079){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_19079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___19104,out))
})();
var state__6415__auto__ = (function (){var statearr_19103 = f__6414__auto__.call(null);
(statearr_19103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___19104);

return statearr_19103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___19104,out))
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
var c__6413__auto___19251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___19251,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___19251,out){
return (function (state_19221){
var state_val_19222 = (state_19221[(1)]);
if((state_val_19222 === (7))){
var inst_19217 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19223_19252 = state_19221__$1;
(statearr_19223_19252[(2)] = inst_19217);

(statearr_19223_19252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (1))){
var inst_19184 = (new Array(n));
var inst_19185 = inst_19184;
var inst_19186 = (0);
var state_19221__$1 = (function (){var statearr_19224 = state_19221;
(statearr_19224[(7)] = inst_19186);

(statearr_19224[(8)] = inst_19185);

return statearr_19224;
})();
var statearr_19225_19253 = state_19221__$1;
(statearr_19225_19253[(2)] = null);

(statearr_19225_19253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (4))){
var inst_19189 = (state_19221[(9)]);
var inst_19189__$1 = (state_19221[(2)]);
var inst_19190 = (inst_19189__$1 == null);
var inst_19191 = cljs.core.not.call(null,inst_19190);
var state_19221__$1 = (function (){var statearr_19226 = state_19221;
(statearr_19226[(9)] = inst_19189__$1);

return statearr_19226;
})();
if(inst_19191){
var statearr_19227_19254 = state_19221__$1;
(statearr_19227_19254[(1)] = (5));

} else {
var statearr_19228_19255 = state_19221__$1;
(statearr_19228_19255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (15))){
var inst_19211 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19229_19256 = state_19221__$1;
(statearr_19229_19256[(2)] = inst_19211);

(statearr_19229_19256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (13))){
var state_19221__$1 = state_19221;
var statearr_19230_19257 = state_19221__$1;
(statearr_19230_19257[(2)] = null);

(statearr_19230_19257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (6))){
var inst_19186 = (state_19221[(7)]);
var inst_19207 = (inst_19186 > (0));
var state_19221__$1 = state_19221;
if(cljs.core.truth_(inst_19207)){
var statearr_19231_19258 = state_19221__$1;
(statearr_19231_19258[(1)] = (12));

} else {
var statearr_19232_19259 = state_19221__$1;
(statearr_19232_19259[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (3))){
var inst_19219 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19221__$1,inst_19219);
} else {
if((state_val_19222 === (12))){
var inst_19185 = (state_19221[(8)]);
var inst_19209 = cljs.core.vec.call(null,inst_19185);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19221__$1,(15),out,inst_19209);
} else {
if((state_val_19222 === (2))){
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19221__$1,(4),ch);
} else {
if((state_val_19222 === (11))){
var inst_19201 = (state_19221[(2)]);
var inst_19202 = (new Array(n));
var inst_19185 = inst_19202;
var inst_19186 = (0);
var state_19221__$1 = (function (){var statearr_19233 = state_19221;
(statearr_19233[(10)] = inst_19201);

(statearr_19233[(7)] = inst_19186);

(statearr_19233[(8)] = inst_19185);

return statearr_19233;
})();
var statearr_19234_19260 = state_19221__$1;
(statearr_19234_19260[(2)] = null);

(statearr_19234_19260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (9))){
var inst_19185 = (state_19221[(8)]);
var inst_19199 = cljs.core.vec.call(null,inst_19185);
var state_19221__$1 = state_19221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19221__$1,(11),out,inst_19199);
} else {
if((state_val_19222 === (5))){
var inst_19186 = (state_19221[(7)]);
var inst_19185 = (state_19221[(8)]);
var inst_19189 = (state_19221[(9)]);
var inst_19194 = (state_19221[(11)]);
var inst_19193 = (inst_19185[inst_19186] = inst_19189);
var inst_19194__$1 = (inst_19186 + (1));
var inst_19195 = (inst_19194__$1 < n);
var state_19221__$1 = (function (){var statearr_19235 = state_19221;
(statearr_19235[(11)] = inst_19194__$1);

(statearr_19235[(12)] = inst_19193);

return statearr_19235;
})();
if(cljs.core.truth_(inst_19195)){
var statearr_19236_19261 = state_19221__$1;
(statearr_19236_19261[(1)] = (8));

} else {
var statearr_19237_19262 = state_19221__$1;
(statearr_19237_19262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (14))){
var inst_19214 = (state_19221[(2)]);
var inst_19215 = cljs.core.async.close_BANG_.call(null,out);
var state_19221__$1 = (function (){var statearr_19239 = state_19221;
(statearr_19239[(13)] = inst_19214);

return statearr_19239;
})();
var statearr_19240_19263 = state_19221__$1;
(statearr_19240_19263[(2)] = inst_19215);

(statearr_19240_19263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (10))){
var inst_19205 = (state_19221[(2)]);
var state_19221__$1 = state_19221;
var statearr_19241_19264 = state_19221__$1;
(statearr_19241_19264[(2)] = inst_19205);

(statearr_19241_19264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19222 === (8))){
var inst_19185 = (state_19221[(8)]);
var inst_19194 = (state_19221[(11)]);
var tmp19238 = inst_19185;
var inst_19185__$1 = tmp19238;
var inst_19186 = inst_19194;
var state_19221__$1 = (function (){var statearr_19242 = state_19221;
(statearr_19242[(7)] = inst_19186);

(statearr_19242[(8)] = inst_19185__$1);

return statearr_19242;
})();
var statearr_19243_19265 = state_19221__$1;
(statearr_19243_19265[(2)] = null);

(statearr_19243_19265[(1)] = (2));


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
});})(c__6413__auto___19251,out))
;
return ((function (switch__6357__auto__,c__6413__auto___19251,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_19247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19247[(0)] = state_machine__6358__auto__);

(statearr_19247[(1)] = (1));

return statearr_19247;
});
var state_machine__6358__auto____1 = (function (state_19221){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_19221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e19248){if((e19248 instanceof Object)){
var ex__6361__auto__ = e19248;
var statearr_19249_19266 = state_19221;
(statearr_19249_19266[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19267 = state_19221;
state_19221 = G__19267;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_19221){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_19221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___19251,out))
})();
var state__6415__auto__ = (function (){var statearr_19250 = f__6414__auto__.call(null);
(statearr_19250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___19251);

return statearr_19250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___19251,out))
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
var c__6413__auto___19410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto___19410,out){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto___19410,out){
return (function (state_19380){
var state_val_19381 = (state_19380[(1)]);
if((state_val_19381 === (7))){
var inst_19376 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19382_19411 = state_19380__$1;
(statearr_19382_19411[(2)] = inst_19376);

(statearr_19382_19411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (1))){
var inst_19339 = [];
var inst_19340 = inst_19339;
var inst_19341 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19380__$1 = (function (){var statearr_19383 = state_19380;
(statearr_19383[(7)] = inst_19340);

(statearr_19383[(8)] = inst_19341);

return statearr_19383;
})();
var statearr_19384_19412 = state_19380__$1;
(statearr_19384_19412[(2)] = null);

(statearr_19384_19412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (4))){
var inst_19344 = (state_19380[(9)]);
var inst_19344__$1 = (state_19380[(2)]);
var inst_19345 = (inst_19344__$1 == null);
var inst_19346 = cljs.core.not.call(null,inst_19345);
var state_19380__$1 = (function (){var statearr_19385 = state_19380;
(statearr_19385[(9)] = inst_19344__$1);

return statearr_19385;
})();
if(inst_19346){
var statearr_19386_19413 = state_19380__$1;
(statearr_19386_19413[(1)] = (5));

} else {
var statearr_19387_19414 = state_19380__$1;
(statearr_19387_19414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (15))){
var inst_19370 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19388_19415 = state_19380__$1;
(statearr_19388_19415[(2)] = inst_19370);

(statearr_19388_19415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (13))){
var state_19380__$1 = state_19380;
var statearr_19389_19416 = state_19380__$1;
(statearr_19389_19416[(2)] = null);

(statearr_19389_19416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (6))){
var inst_19340 = (state_19380[(7)]);
var inst_19365 = inst_19340.length;
var inst_19366 = (inst_19365 > (0));
var state_19380__$1 = state_19380;
if(cljs.core.truth_(inst_19366)){
var statearr_19390_19417 = state_19380__$1;
(statearr_19390_19417[(1)] = (12));

} else {
var statearr_19391_19418 = state_19380__$1;
(statearr_19391_19418[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (3))){
var inst_19378 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19380__$1,inst_19378);
} else {
if((state_val_19381 === (12))){
var inst_19340 = (state_19380[(7)]);
var inst_19368 = cljs.core.vec.call(null,inst_19340);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19380__$1,(15),out,inst_19368);
} else {
if((state_val_19381 === (2))){
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19380__$1,(4),ch);
} else {
if((state_val_19381 === (11))){
var inst_19348 = (state_19380[(10)]);
var inst_19344 = (state_19380[(9)]);
var inst_19358 = (state_19380[(2)]);
var inst_19359 = [];
var inst_19360 = inst_19359.push(inst_19344);
var inst_19340 = inst_19359;
var inst_19341 = inst_19348;
var state_19380__$1 = (function (){var statearr_19392 = state_19380;
(statearr_19392[(7)] = inst_19340);

(statearr_19392[(8)] = inst_19341);

(statearr_19392[(11)] = inst_19360);

(statearr_19392[(12)] = inst_19358);

return statearr_19392;
})();
var statearr_19393_19419 = state_19380__$1;
(statearr_19393_19419[(2)] = null);

(statearr_19393_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (9))){
var inst_19340 = (state_19380[(7)]);
var inst_19356 = cljs.core.vec.call(null,inst_19340);
var state_19380__$1 = state_19380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19380__$1,(11),out,inst_19356);
} else {
if((state_val_19381 === (5))){
var inst_19348 = (state_19380[(10)]);
var inst_19341 = (state_19380[(8)]);
var inst_19344 = (state_19380[(9)]);
var inst_19348__$1 = f.call(null,inst_19344);
var inst_19349 = cljs.core._EQ_.call(null,inst_19348__$1,inst_19341);
var inst_19350 = cljs.core.keyword_identical_QMARK_.call(null,inst_19341,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19351 = (inst_19349) || (inst_19350);
var state_19380__$1 = (function (){var statearr_19394 = state_19380;
(statearr_19394[(10)] = inst_19348__$1);

return statearr_19394;
})();
if(cljs.core.truth_(inst_19351)){
var statearr_19395_19420 = state_19380__$1;
(statearr_19395_19420[(1)] = (8));

} else {
var statearr_19396_19421 = state_19380__$1;
(statearr_19396_19421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (14))){
var inst_19373 = (state_19380[(2)]);
var inst_19374 = cljs.core.async.close_BANG_.call(null,out);
var state_19380__$1 = (function (){var statearr_19398 = state_19380;
(statearr_19398[(13)] = inst_19373);

return statearr_19398;
})();
var statearr_19399_19422 = state_19380__$1;
(statearr_19399_19422[(2)] = inst_19374);

(statearr_19399_19422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (10))){
var inst_19363 = (state_19380[(2)]);
var state_19380__$1 = state_19380;
var statearr_19400_19423 = state_19380__$1;
(statearr_19400_19423[(2)] = inst_19363);

(statearr_19400_19423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19381 === (8))){
var inst_19348 = (state_19380[(10)]);
var inst_19340 = (state_19380[(7)]);
var inst_19344 = (state_19380[(9)]);
var inst_19353 = inst_19340.push(inst_19344);
var tmp19397 = inst_19340;
var inst_19340__$1 = tmp19397;
var inst_19341 = inst_19348;
var state_19380__$1 = (function (){var statearr_19401 = state_19380;
(statearr_19401[(14)] = inst_19353);

(statearr_19401[(7)] = inst_19340__$1);

(statearr_19401[(8)] = inst_19341);

return statearr_19401;
})();
var statearr_19402_19424 = state_19380__$1;
(statearr_19402_19424[(2)] = null);

(statearr_19402_19424[(1)] = (2));


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
});})(c__6413__auto___19410,out))
;
return ((function (switch__6357__auto__,c__6413__auto___19410,out){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_19406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19406[(0)] = state_machine__6358__auto__);

(statearr_19406[(1)] = (1));

return statearr_19406;
});
var state_machine__6358__auto____1 = (function (state_19380){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_19380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e19407){if((e19407 instanceof Object)){
var ex__6361__auto__ = e19407;
var statearr_19408_19425 = state_19380;
(statearr_19408_19425[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19426 = state_19380;
state_19380 = G__19426;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_19380){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_19380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto___19410,out))
})();
var state__6415__auto__ = (function (){var statearr_19409 = f__6414__auto__.call(null);
(statearr_19409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto___19410);

return statearr_19409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto___19410,out))
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