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
if(typeof cljs.core.async.t31283 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31283 = (function (f,fn_handler,meta31284){
this.f = f;
this.fn_handler = fn_handler;
this.meta31284 = meta31284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31283.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31283.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31283.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31285){
var self__ = this;
var _31285__$1 = this;
return self__.meta31284;
});

cljs.core.async.t31283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31285,meta31284__$1){
var self__ = this;
var _31285__$1 = this;
return (new cljs.core.async.t31283(self__.f,self__.fn_handler,meta31284__$1));
});

cljs.core.async.t31283.cljs$lang$type = true;

cljs.core.async.t31283.cljs$lang$ctorStr = "cljs.core.async/t31283";

cljs.core.async.t31283.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31283");
});

cljs.core.async.__GT_t31283 = (function __GT_t31283(f__$1,fn_handler__$1,meta31284){
return (new cljs.core.async.t31283(f__$1,fn_handler__$1,meta31284));
});

}

return (new cljs.core.async.t31283(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31287 = buff;
if(G__31287){
var bit__16339__auto__ = null;
if(cljs.core.truth_((function (){var or__15658__auto__ = bit__16339__auto__;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return G__31287.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31287.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31287);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31287);
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
var val_31288 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31288);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31288,ret){
return (function (){
return fn1.call(null,val_31288);
});})(val_31288,ret))
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
var n__16545__auto___31289 = n;
var x_31290 = (0);
while(true){
if((x_31290 < n__16545__auto___31289)){
(a[x_31290] = (0));

var G__31291 = (x_31290 + (1));
x_31290 = G__31291;
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

var G__31292 = (i + (1));
i = G__31292;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31296 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31296 = (function (flag,alt_flag,meta31297){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31297 = meta31297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31296.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31298){
var self__ = this;
var _31298__$1 = this;
return self__.meta31297;
});})(flag))
;

cljs.core.async.t31296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31298,meta31297__$1){
var self__ = this;
var _31298__$1 = this;
return (new cljs.core.async.t31296(self__.flag,self__.alt_flag,meta31297__$1));
});})(flag))
;

cljs.core.async.t31296.cljs$lang$type = true;

cljs.core.async.t31296.cljs$lang$ctorStr = "cljs.core.async/t31296";

cljs.core.async.t31296.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31296");
});})(flag))
;

cljs.core.async.__GT_t31296 = ((function (flag){
return (function __GT_t31296(flag__$1,alt_flag__$1,meta31297){
return (new cljs.core.async.t31296(flag__$1,alt_flag__$1,meta31297));
});})(flag))
;

}

return (new cljs.core.async.t31296(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t31302 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31302 = (function (cb,flag,alt_handler,meta31303){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31303 = meta31303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31302.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31302.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31302.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31302.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31304){
var self__ = this;
var _31304__$1 = this;
return self__.meta31303;
});

cljs.core.async.t31302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31304,meta31303__$1){
var self__ = this;
var _31304__$1 = this;
return (new cljs.core.async.t31302(self__.cb,self__.flag,self__.alt_handler,meta31303__$1));
});

cljs.core.async.t31302.cljs$lang$type = true;

cljs.core.async.t31302.cljs$lang$ctorStr = "cljs.core.async/t31302";

cljs.core.async.t31302.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t31302");
});

cljs.core.async.__GT_t31302 = (function __GT_t31302(cb__$1,flag__$1,alt_handler__$1,meta31303){
return (new cljs.core.async.t31302(cb__$1,flag__$1,alt_handler__$1,meta31303));
});

}

return (new cljs.core.async.t31302(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31305_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31305_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31306_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31306_SHARP_,port], null));
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
var G__31307 = (i + (1));
i = G__31307;
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
var alts_BANG___delegate = function (ports,p__31308){
var map__31310 = p__31308;
var map__31310__$1 = ((cljs.core.seq_QMARK_.call(null,map__31310))?cljs.core.apply.call(null,cljs.core.hash_map,map__31310):map__31310);
var opts = map__31310__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31308 = null;
if (arguments.length > 1) {
var G__31311__i = 0, G__31311__a = new Array(arguments.length -  1);
while (G__31311__i < G__31311__a.length) {G__31311__a[G__31311__i] = arguments[G__31311__i + 1]; ++G__31311__i;}
  p__31308 = new cljs.core.IndexedSeq(G__31311__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__31308);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31312){
var ports = cljs.core.first(arglist__31312);
var p__31308 = cljs.core.rest(arglist__31312);
return alts_BANG___delegate(ports,p__31308);
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
var c__18767__auto___31407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___31407){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___31407){
return (function (state_31383){
var state_val_31384 = (state_31383[(1)]);
if((state_val_31384 === (7))){
var inst_31379 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31385_31408 = state_31383__$1;
(statearr_31385_31408[(2)] = inst_31379);

(statearr_31385_31408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (1))){
var state_31383__$1 = state_31383;
var statearr_31386_31409 = state_31383__$1;
(statearr_31386_31409[(2)] = null);

(statearr_31386_31409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (4))){
var inst_31362 = (state_31383[(7)]);
var inst_31362__$1 = (state_31383[(2)]);
var inst_31363 = (inst_31362__$1 == null);
var state_31383__$1 = (function (){var statearr_31387 = state_31383;
(statearr_31387[(7)] = inst_31362__$1);

return statearr_31387;
})();
if(cljs.core.truth_(inst_31363)){
var statearr_31388_31410 = state_31383__$1;
(statearr_31388_31410[(1)] = (5));

} else {
var statearr_31389_31411 = state_31383__$1;
(statearr_31389_31411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (13))){
var state_31383__$1 = state_31383;
var statearr_31390_31412 = state_31383__$1;
(statearr_31390_31412[(2)] = null);

(statearr_31390_31412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (6))){
var inst_31362 = (state_31383[(7)]);
var state_31383__$1 = state_31383;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31383__$1,(11),to,inst_31362);
} else {
if((state_val_31384 === (3))){
var inst_31381 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31383__$1,inst_31381);
} else {
if((state_val_31384 === (12))){
var state_31383__$1 = state_31383;
var statearr_31391_31413 = state_31383__$1;
(statearr_31391_31413[(2)] = null);

(statearr_31391_31413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (2))){
var state_31383__$1 = state_31383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31383__$1,(4),from);
} else {
if((state_val_31384 === (11))){
var inst_31372 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
if(cljs.core.truth_(inst_31372)){
var statearr_31392_31414 = state_31383__$1;
(statearr_31392_31414[(1)] = (12));

} else {
var statearr_31393_31415 = state_31383__$1;
(statearr_31393_31415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (9))){
var state_31383__$1 = state_31383;
var statearr_31394_31416 = state_31383__$1;
(statearr_31394_31416[(2)] = null);

(statearr_31394_31416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (5))){
var state_31383__$1 = state_31383;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31395_31417 = state_31383__$1;
(statearr_31395_31417[(1)] = (8));

} else {
var statearr_31396_31418 = state_31383__$1;
(statearr_31396_31418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (14))){
var inst_31377 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31397_31419 = state_31383__$1;
(statearr_31397_31419[(2)] = inst_31377);

(statearr_31397_31419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (10))){
var inst_31369 = (state_31383[(2)]);
var state_31383__$1 = state_31383;
var statearr_31398_31420 = state_31383__$1;
(statearr_31398_31420[(2)] = inst_31369);

(statearr_31398_31420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31384 === (8))){
var inst_31366 = cljs.core.async.close_BANG_.call(null,to);
var state_31383__$1 = state_31383;
var statearr_31399_31421 = state_31383__$1;
(statearr_31399_31421[(2)] = inst_31366);

(statearr_31399_31421[(1)] = (10));


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
});})(c__18767__auto___31407))
;
return ((function (switch__18711__auto__,c__18767__auto___31407){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31403 = [null,null,null,null,null,null,null,null];
(statearr_31403[(0)] = state_machine__18712__auto__);

(statearr_31403[(1)] = (1));

return statearr_31403;
});
var state_machine__18712__auto____1 = (function (state_31383){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31404){if((e31404 instanceof Object)){
var ex__18715__auto__ = e31404;
var statearr_31405_31422 = state_31383;
(statearr_31405_31422[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31423 = state_31383;
state_31383 = G__31423;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31383){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___31407))
})();
var state__18769__auto__ = (function (){var statearr_31406 = f__18768__auto__.call(null);
(statearr_31406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31407);

return statearr_31406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___31407))
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
return (function (p__31607){
var vec__31608 = p__31607;
var v = cljs.core.nth.call(null,vec__31608,(0),null);
var p = cljs.core.nth.call(null,vec__31608,(1),null);
var job = vec__31608;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18767__auto___31790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results){
return (function (state_31613){
var state_val_31614 = (state_31613[(1)]);
if((state_val_31614 === (2))){
var inst_31610 = (state_31613[(2)]);
var inst_31611 = cljs.core.async.close_BANG_.call(null,res);
var state_31613__$1 = (function (){var statearr_31615 = state_31613;
(statearr_31615[(7)] = inst_31610);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31613__$1,inst_31611);
} else {
if((state_val_31614 === (1))){
var state_31613__$1 = state_31613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31613__$1,(2),res,v);
} else {
return null;
}
}
});})(c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results))
;
return ((function (switch__18711__auto__,c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31619 = [null,null,null,null,null,null,null,null];
(statearr_31619[(0)] = state_machine__18712__auto__);

(statearr_31619[(1)] = (1));

return statearr_31619;
});
var state_machine__18712__auto____1 = (function (state_31613){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31620){if((e31620 instanceof Object)){
var ex__18715__auto__ = e31620;
var statearr_31621_31791 = state_31613;
(statearr_31621_31791[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31792 = state_31613;
state_31613 = G__31792;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31613){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results))
})();
var state__18769__auto__ = (function (){var statearr_31622 = f__18768__auto__.call(null);
(statearr_31622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31790);

return statearr_31622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___31790,res,vec__31608,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31623){
var vec__31624 = p__31623;
var v = cljs.core.nth.call(null,vec__31624,(0),null);
var p = cljs.core.nth.call(null,vec__31624,(1),null);
var job = vec__31624;
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
var n__16545__auto___31793 = n;
var __31794 = (0);
while(true){
if((__31794 < n__16545__auto___31793)){
var G__31625_31795 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31625_31795) {
case "async":
var c__18767__auto___31797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31794,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (__31794,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31640_31798 = state_31638__$1;
(statearr_31640_31798[(2)] = inst_31634);

(statearr_31640_31798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (6))){
var state_31638__$1 = state_31638;
var statearr_31641_31799 = state_31638__$1;
(statearr_31641_31799[(2)] = null);

(statearr_31641_31799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (5))){
var state_31638__$1 = state_31638;
var statearr_31642_31800 = state_31638__$1;
(statearr_31642_31800[(2)] = null);

(statearr_31642_31800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (4))){
var inst_31628 = (state_31638[(2)]);
var inst_31629 = async.call(null,inst_31628);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31629)){
var statearr_31643_31801 = state_31638__$1;
(statearr_31643_31801[(1)] = (5));

} else {
var statearr_31644_31802 = state_31638__$1;
(statearr_31644_31802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (3))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (2))){
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(4),jobs);
} else {
if((state_val_31639 === (1))){
var state_31638__$1 = state_31638;
var statearr_31645_31803 = state_31638__$1;
(statearr_31645_31803[(2)] = null);

(statearr_31645_31803[(1)] = (2));


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
});})(__31794,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
;
return ((function (__31794,switch__18711__auto__,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31649 = [null,null,null,null,null,null,null];
(statearr_31649[(0)] = state_machine__18712__auto__);

(statearr_31649[(1)] = (1));

return statearr_31649;
});
var state_machine__18712__auto____1 = (function (state_31638){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31650){if((e31650 instanceof Object)){
var ex__18715__auto__ = e31650;
var statearr_31651_31804 = state_31638;
(statearr_31651_31804[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31805 = state_31638;
state_31638 = G__31805;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(__31794,switch__18711__auto__,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
})();
var state__18769__auto__ = (function (){var statearr_31652 = f__18768__auto__.call(null);
(statearr_31652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31797);

return statearr_31652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(__31794,c__18767__auto___31797,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
);


break;
case "compute":
var c__18767__auto___31806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31794,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (__31794,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function (state_31665){
var state_val_31666 = (state_31665[(1)]);
if((state_val_31666 === (7))){
var inst_31661 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
var statearr_31667_31807 = state_31665__$1;
(statearr_31667_31807[(2)] = inst_31661);

(statearr_31667_31807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (6))){
var state_31665__$1 = state_31665;
var statearr_31668_31808 = state_31665__$1;
(statearr_31668_31808[(2)] = null);

(statearr_31668_31808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (5))){
var state_31665__$1 = state_31665;
var statearr_31669_31809 = state_31665__$1;
(statearr_31669_31809[(2)] = null);

(statearr_31669_31809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (4))){
var inst_31655 = (state_31665[(2)]);
var inst_31656 = process.call(null,inst_31655);
var state_31665__$1 = state_31665;
if(cljs.core.truth_(inst_31656)){
var statearr_31670_31810 = state_31665__$1;
(statearr_31670_31810[(1)] = (5));

} else {
var statearr_31671_31811 = state_31665__$1;
(statearr_31671_31811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31666 === (3))){
var inst_31663 = (state_31665[(2)]);
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31665__$1,inst_31663);
} else {
if((state_val_31666 === (2))){
var state_31665__$1 = state_31665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31665__$1,(4),jobs);
} else {
if((state_val_31666 === (1))){
var state_31665__$1 = state_31665;
var statearr_31672_31812 = state_31665__$1;
(statearr_31672_31812[(2)] = null);

(statearr_31672_31812[(1)] = (2));


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
});})(__31794,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
;
return ((function (__31794,switch__18711__auto__,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31676 = [null,null,null,null,null,null,null];
(statearr_31676[(0)] = state_machine__18712__auto__);

(statearr_31676[(1)] = (1));

return statearr_31676;
});
var state_machine__18712__auto____1 = (function (state_31665){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31677){if((e31677 instanceof Object)){
var ex__18715__auto__ = e31677;
var statearr_31678_31813 = state_31665;
(statearr_31678_31813[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31814 = state_31665;
state_31665 = G__31814;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31665){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(__31794,switch__18711__auto__,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
})();
var state__18769__auto__ = (function (){var statearr_31679 = f__18768__auto__.call(null);
(statearr_31679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31806);

return statearr_31679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(__31794,c__18767__auto___31806,G__31625_31795,n__16545__auto___31793,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31815 = (__31794 + (1));
__31794 = G__31815;
continue;
} else {
}
break;
}

var c__18767__auto___31816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___31816,jobs,results,process,async){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___31816,jobs,results,process,async){
return (function (state_31701){
var state_val_31702 = (state_31701[(1)]);
if((state_val_31702 === (9))){
var inst_31694 = (state_31701[(2)]);
var state_31701__$1 = (function (){var statearr_31703 = state_31701;
(statearr_31703[(7)] = inst_31694);

return statearr_31703;
})();
var statearr_31704_31817 = state_31701__$1;
(statearr_31704_31817[(2)] = null);

(statearr_31704_31817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31702 === (8))){
var inst_31687 = (state_31701[(8)]);
var inst_31692 = (state_31701[(2)]);
var state_31701__$1 = (function (){var statearr_31705 = state_31701;
(statearr_31705[(9)] = inst_31692);

return statearr_31705;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31701__$1,(9),results,inst_31687);
} else {
if((state_val_31702 === (7))){
var inst_31697 = (state_31701[(2)]);
var state_31701__$1 = state_31701;
var statearr_31706_31818 = state_31701__$1;
(statearr_31706_31818[(2)] = inst_31697);

(statearr_31706_31818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31702 === (6))){
var inst_31682 = (state_31701[(10)]);
var inst_31687 = (state_31701[(8)]);
var inst_31687__$1 = cljs.core.async.chan.call(null,(1));
var inst_31688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31689 = [inst_31682,inst_31687__$1];
var inst_31690 = (new cljs.core.PersistentVector(null,2,(5),inst_31688,inst_31689,null));
var state_31701__$1 = (function (){var statearr_31707 = state_31701;
(statearr_31707[(8)] = inst_31687__$1);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31701__$1,(8),jobs,inst_31690);
} else {
if((state_val_31702 === (5))){
var inst_31685 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31701__$1 = state_31701;
var statearr_31708_31819 = state_31701__$1;
(statearr_31708_31819[(2)] = inst_31685);

(statearr_31708_31819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31702 === (4))){
var inst_31682 = (state_31701[(10)]);
var inst_31682__$1 = (state_31701[(2)]);
var inst_31683 = (inst_31682__$1 == null);
var state_31701__$1 = (function (){var statearr_31709 = state_31701;
(statearr_31709[(10)] = inst_31682__$1);

return statearr_31709;
})();
if(cljs.core.truth_(inst_31683)){
var statearr_31710_31820 = state_31701__$1;
(statearr_31710_31820[(1)] = (5));

} else {
var statearr_31711_31821 = state_31701__$1;
(statearr_31711_31821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31702 === (3))){
var inst_31699 = (state_31701[(2)]);
var state_31701__$1 = state_31701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31701__$1,inst_31699);
} else {
if((state_val_31702 === (2))){
var state_31701__$1 = state_31701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31701__$1,(4),from);
} else {
if((state_val_31702 === (1))){
var state_31701__$1 = state_31701;
var statearr_31712_31822 = state_31701__$1;
(statearr_31712_31822[(2)] = null);

(statearr_31712_31822[(1)] = (2));


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
});})(c__18767__auto___31816,jobs,results,process,async))
;
return ((function (switch__18711__auto__,c__18767__auto___31816,jobs,results,process,async){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31716 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31716[(0)] = state_machine__18712__auto__);

(statearr_31716[(1)] = (1));

return statearr_31716;
});
var state_machine__18712__auto____1 = (function (state_31701){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31717){if((e31717 instanceof Object)){
var ex__18715__auto__ = e31717;
var statearr_31718_31823 = state_31701;
(statearr_31718_31823[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31824 = state_31701;
state_31701 = G__31824;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31701){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___31816,jobs,results,process,async))
})();
var state__18769__auto__ = (function (){var statearr_31719 = f__18768__auto__.call(null);
(statearr_31719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31816);

return statearr_31719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___31816,jobs,results,process,async))
);


var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__,jobs,results,process,async){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__,jobs,results,process,async){
return (function (state_31757){
var state_val_31758 = (state_31757[(1)]);
if((state_val_31758 === (7))){
var inst_31753 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31759_31825 = state_31757__$1;
(statearr_31759_31825[(2)] = inst_31753);

(statearr_31759_31825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (20))){
var state_31757__$1 = state_31757;
var statearr_31760_31826 = state_31757__$1;
(statearr_31760_31826[(2)] = null);

(statearr_31760_31826[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (1))){
var state_31757__$1 = state_31757;
var statearr_31761_31827 = state_31757__$1;
(statearr_31761_31827[(2)] = null);

(statearr_31761_31827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (4))){
var inst_31722 = (state_31757[(7)]);
var inst_31722__$1 = (state_31757[(2)]);
var inst_31723 = (inst_31722__$1 == null);
var state_31757__$1 = (function (){var statearr_31762 = state_31757;
(statearr_31762[(7)] = inst_31722__$1);

return statearr_31762;
})();
if(cljs.core.truth_(inst_31723)){
var statearr_31763_31828 = state_31757__$1;
(statearr_31763_31828[(1)] = (5));

} else {
var statearr_31764_31829 = state_31757__$1;
(statearr_31764_31829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (15))){
var inst_31735 = (state_31757[(8)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31757__$1,(18),to,inst_31735);
} else {
if((state_val_31758 === (21))){
var inst_31748 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31765_31830 = state_31757__$1;
(statearr_31765_31830[(2)] = inst_31748);

(statearr_31765_31830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (13))){
var inst_31750 = (state_31757[(2)]);
var state_31757__$1 = (function (){var statearr_31766 = state_31757;
(statearr_31766[(9)] = inst_31750);

return statearr_31766;
})();
var statearr_31767_31831 = state_31757__$1;
(statearr_31767_31831[(2)] = null);

(statearr_31767_31831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (6))){
var inst_31722 = (state_31757[(7)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(11),inst_31722);
} else {
if((state_val_31758 === (17))){
var inst_31743 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
if(cljs.core.truth_(inst_31743)){
var statearr_31768_31832 = state_31757__$1;
(statearr_31768_31832[(1)] = (19));

} else {
var statearr_31769_31833 = state_31757__$1;
(statearr_31769_31833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (3))){
var inst_31755 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31757__$1,inst_31755);
} else {
if((state_val_31758 === (12))){
var inst_31732 = (state_31757[(10)]);
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(14),inst_31732);
} else {
if((state_val_31758 === (2))){
var state_31757__$1 = state_31757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31757__$1,(4),results);
} else {
if((state_val_31758 === (19))){
var state_31757__$1 = state_31757;
var statearr_31770_31834 = state_31757__$1;
(statearr_31770_31834[(2)] = null);

(statearr_31770_31834[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (11))){
var inst_31732 = (state_31757[(2)]);
var state_31757__$1 = (function (){var statearr_31771 = state_31757;
(statearr_31771[(10)] = inst_31732);

return statearr_31771;
})();
var statearr_31772_31835 = state_31757__$1;
(statearr_31772_31835[(2)] = null);

(statearr_31772_31835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (9))){
var state_31757__$1 = state_31757;
var statearr_31773_31836 = state_31757__$1;
(statearr_31773_31836[(2)] = null);

(statearr_31773_31836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (5))){
var state_31757__$1 = state_31757;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31774_31837 = state_31757__$1;
(statearr_31774_31837[(1)] = (8));

} else {
var statearr_31775_31838 = state_31757__$1;
(statearr_31775_31838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (14))){
var inst_31735 = (state_31757[(8)]);
var inst_31737 = (state_31757[(11)]);
var inst_31735__$1 = (state_31757[(2)]);
var inst_31736 = (inst_31735__$1 == null);
var inst_31737__$1 = cljs.core.not.call(null,inst_31736);
var state_31757__$1 = (function (){var statearr_31776 = state_31757;
(statearr_31776[(8)] = inst_31735__$1);

(statearr_31776[(11)] = inst_31737__$1);

return statearr_31776;
})();
if(inst_31737__$1){
var statearr_31777_31839 = state_31757__$1;
(statearr_31777_31839[(1)] = (15));

} else {
var statearr_31778_31840 = state_31757__$1;
(statearr_31778_31840[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (16))){
var inst_31737 = (state_31757[(11)]);
var state_31757__$1 = state_31757;
var statearr_31779_31841 = state_31757__$1;
(statearr_31779_31841[(2)] = inst_31737);

(statearr_31779_31841[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (10))){
var inst_31729 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31780_31842 = state_31757__$1;
(statearr_31780_31842[(2)] = inst_31729);

(statearr_31780_31842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (18))){
var inst_31740 = (state_31757[(2)]);
var state_31757__$1 = state_31757;
var statearr_31781_31843 = state_31757__$1;
(statearr_31781_31843[(2)] = inst_31740);

(statearr_31781_31843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31758 === (8))){
var inst_31726 = cljs.core.async.close_BANG_.call(null,to);
var state_31757__$1 = state_31757;
var statearr_31782_31844 = state_31757__$1;
(statearr_31782_31844[(2)] = inst_31726);

(statearr_31782_31844[(1)] = (10));


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
});})(c__18767__auto__,jobs,results,process,async))
;
return ((function (switch__18711__auto__,c__18767__auto__,jobs,results,process,async){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31786 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31786[(0)] = state_machine__18712__auto__);

(statearr_31786[(1)] = (1));

return statearr_31786;
});
var state_machine__18712__auto____1 = (function (state_31757){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31787){if((e31787 instanceof Object)){
var ex__18715__auto__ = e31787;
var statearr_31788_31845 = state_31757;
(statearr_31788_31845[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31757;
state_31757 = G__31846;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31757){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__,jobs,results,process,async))
})();
var state__18769__auto__ = (function (){var statearr_31789 = f__18768__auto__.call(null);
(statearr_31789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_31789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__,jobs,results,process,async))
);

return c__18767__auto__;
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
var c__18767__auto___31947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___31947,tc,fc){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___31947,tc,fc){
return (function (state_31922){
var state_val_31923 = (state_31922[(1)]);
if((state_val_31923 === (7))){
var inst_31918 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31924_31948 = state_31922__$1;
(statearr_31924_31948[(2)] = inst_31918);

(statearr_31924_31948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (1))){
var state_31922__$1 = state_31922;
var statearr_31925_31949 = state_31922__$1;
(statearr_31925_31949[(2)] = null);

(statearr_31925_31949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (4))){
var inst_31899 = (state_31922[(7)]);
var inst_31899__$1 = (state_31922[(2)]);
var inst_31900 = (inst_31899__$1 == null);
var state_31922__$1 = (function (){var statearr_31926 = state_31922;
(statearr_31926[(7)] = inst_31899__$1);

return statearr_31926;
})();
if(cljs.core.truth_(inst_31900)){
var statearr_31927_31950 = state_31922__$1;
(statearr_31927_31950[(1)] = (5));

} else {
var statearr_31928_31951 = state_31922__$1;
(statearr_31928_31951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (13))){
var state_31922__$1 = state_31922;
var statearr_31929_31952 = state_31922__$1;
(statearr_31929_31952[(2)] = null);

(statearr_31929_31952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (6))){
var inst_31899 = (state_31922[(7)]);
var inst_31905 = p.call(null,inst_31899);
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31905)){
var statearr_31930_31953 = state_31922__$1;
(statearr_31930_31953[(1)] = (9));

} else {
var statearr_31931_31954 = state_31922__$1;
(statearr_31931_31954[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (3))){
var inst_31920 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31922__$1,inst_31920);
} else {
if((state_val_31923 === (12))){
var state_31922__$1 = state_31922;
var statearr_31932_31955 = state_31922__$1;
(statearr_31932_31955[(2)] = null);

(statearr_31932_31955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (2))){
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31922__$1,(4),ch);
} else {
if((state_val_31923 === (11))){
var inst_31899 = (state_31922[(7)]);
var inst_31909 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31922__$1,(8),inst_31909,inst_31899);
} else {
if((state_val_31923 === (9))){
var state_31922__$1 = state_31922;
var statearr_31933_31956 = state_31922__$1;
(statearr_31933_31956[(2)] = tc);

(statearr_31933_31956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (5))){
var inst_31902 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31903 = cljs.core.async.close_BANG_.call(null,fc);
var state_31922__$1 = (function (){var statearr_31934 = state_31922;
(statearr_31934[(8)] = inst_31902);

return statearr_31934;
})();
var statearr_31935_31957 = state_31922__$1;
(statearr_31935_31957[(2)] = inst_31903);

(statearr_31935_31957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (14))){
var inst_31916 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
var statearr_31936_31958 = state_31922__$1;
(statearr_31936_31958[(2)] = inst_31916);

(statearr_31936_31958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (10))){
var state_31922__$1 = state_31922;
var statearr_31937_31959 = state_31922__$1;
(statearr_31937_31959[(2)] = fc);

(statearr_31937_31959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31923 === (8))){
var inst_31911 = (state_31922[(2)]);
var state_31922__$1 = state_31922;
if(cljs.core.truth_(inst_31911)){
var statearr_31938_31960 = state_31922__$1;
(statearr_31938_31960[(1)] = (12));

} else {
var statearr_31939_31961 = state_31922__$1;
(statearr_31939_31961[(1)] = (13));

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
});})(c__18767__auto___31947,tc,fc))
;
return ((function (switch__18711__auto__,c__18767__auto___31947,tc,fc){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = state_machine__18712__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var state_machine__18712__auto____1 = (function (state_31922){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31944){if((e31944 instanceof Object)){
var ex__18715__auto__ = e31944;
var statearr_31945_31962 = state_31922;
(statearr_31945_31962[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31963 = state_31922;
state_31922 = G__31963;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31922){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___31947,tc,fc))
})();
var state__18769__auto__ = (function (){var statearr_31946 = f__18768__auto__.call(null);
(statearr_31946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___31947);

return statearr_31946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___31947,tc,fc))
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
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__){
return (function (state_32010){
var state_val_32011 = (state_32010[(1)]);
if((state_val_32011 === (7))){
var inst_32006 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
var statearr_32012_32028 = state_32010__$1;
(statearr_32012_32028[(2)] = inst_32006);

(statearr_32012_32028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (6))){
var inst_31999 = (state_32010[(7)]);
var inst_31996 = (state_32010[(8)]);
var inst_32003 = f.call(null,inst_31996,inst_31999);
var inst_31996__$1 = inst_32003;
var state_32010__$1 = (function (){var statearr_32013 = state_32010;
(statearr_32013[(8)] = inst_31996__$1);

return statearr_32013;
})();
var statearr_32014_32029 = state_32010__$1;
(statearr_32014_32029[(2)] = null);

(statearr_32014_32029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (5))){
var inst_31996 = (state_32010[(8)]);
var state_32010__$1 = state_32010;
var statearr_32015_32030 = state_32010__$1;
(statearr_32015_32030[(2)] = inst_31996);

(statearr_32015_32030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (4))){
var inst_31999 = (state_32010[(7)]);
var inst_31999__$1 = (state_32010[(2)]);
var inst_32000 = (inst_31999__$1 == null);
var state_32010__$1 = (function (){var statearr_32016 = state_32010;
(statearr_32016[(7)] = inst_31999__$1);

return statearr_32016;
})();
if(cljs.core.truth_(inst_32000)){
var statearr_32017_32031 = state_32010__$1;
(statearr_32017_32031[(1)] = (5));

} else {
var statearr_32018_32032 = state_32010__$1;
(statearr_32018_32032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32011 === (3))){
var inst_32008 = (state_32010[(2)]);
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32010__$1,inst_32008);
} else {
if((state_val_32011 === (2))){
var state_32010__$1 = state_32010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32010__$1,(4),ch);
} else {
if((state_val_32011 === (1))){
var inst_31996 = init;
var state_32010__$1 = (function (){var statearr_32019 = state_32010;
(statearr_32019[(8)] = inst_31996);

return statearr_32019;
})();
var statearr_32020_32033 = state_32010__$1;
(statearr_32020_32033[(2)] = null);

(statearr_32020_32033[(1)] = (2));


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
});})(c__18767__auto__))
;
return ((function (switch__18711__auto__,c__18767__auto__){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_32024 = [null,null,null,null,null,null,null,null,null];
(statearr_32024[(0)] = state_machine__18712__auto__);

(statearr_32024[(1)] = (1));

return statearr_32024;
});
var state_machine__18712__auto____1 = (function (state_32010){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_32010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e32025){if((e32025 instanceof Object)){
var ex__18715__auto__ = e32025;
var statearr_32026_32034 = state_32010;
(statearr_32026_32034[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32035 = state_32010;
state_32010 = G__32035;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_32010){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_32010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__))
})();
var state__18769__auto__ = (function (){var statearr_32027 = f__18768__auto__.call(null);
(statearr_32027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__))
);

return c__18767__auto__;
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
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__){
return (function (state_32109){
var state_val_32110 = (state_32109[(1)]);
if((state_val_32110 === (7))){
var inst_32091 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32111_32134 = state_32109__$1;
(statearr_32111_32134[(2)] = inst_32091);

(statearr_32111_32134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (1))){
var inst_32085 = cljs.core.seq.call(null,coll);
var inst_32086 = inst_32085;
var state_32109__$1 = (function (){var statearr_32112 = state_32109;
(statearr_32112[(7)] = inst_32086);

return statearr_32112;
})();
var statearr_32113_32135 = state_32109__$1;
(statearr_32113_32135[(2)] = null);

(statearr_32113_32135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (4))){
var inst_32086 = (state_32109[(7)]);
var inst_32089 = cljs.core.first.call(null,inst_32086);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32109__$1,(7),ch,inst_32089);
} else {
if((state_val_32110 === (13))){
var inst_32103 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32114_32136 = state_32109__$1;
(statearr_32114_32136[(2)] = inst_32103);

(statearr_32114_32136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (6))){
var inst_32094 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
if(cljs.core.truth_(inst_32094)){
var statearr_32115_32137 = state_32109__$1;
(statearr_32115_32137[(1)] = (8));

} else {
var statearr_32116_32138 = state_32109__$1;
(statearr_32116_32138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (3))){
var inst_32107 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32109__$1,inst_32107);
} else {
if((state_val_32110 === (12))){
var state_32109__$1 = state_32109;
var statearr_32117_32139 = state_32109__$1;
(statearr_32117_32139[(2)] = null);

(statearr_32117_32139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (2))){
var inst_32086 = (state_32109[(7)]);
var state_32109__$1 = state_32109;
if(cljs.core.truth_(inst_32086)){
var statearr_32118_32140 = state_32109__$1;
(statearr_32118_32140[(1)] = (4));

} else {
var statearr_32119_32141 = state_32109__$1;
(statearr_32119_32141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (11))){
var inst_32100 = cljs.core.async.close_BANG_.call(null,ch);
var state_32109__$1 = state_32109;
var statearr_32120_32142 = state_32109__$1;
(statearr_32120_32142[(2)] = inst_32100);

(statearr_32120_32142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (9))){
var state_32109__$1 = state_32109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32121_32143 = state_32109__$1;
(statearr_32121_32143[(1)] = (11));

} else {
var statearr_32122_32144 = state_32109__$1;
(statearr_32122_32144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (5))){
var inst_32086 = (state_32109[(7)]);
var state_32109__$1 = state_32109;
var statearr_32123_32145 = state_32109__$1;
(statearr_32123_32145[(2)] = inst_32086);

(statearr_32123_32145[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (10))){
var inst_32105 = (state_32109[(2)]);
var state_32109__$1 = state_32109;
var statearr_32124_32146 = state_32109__$1;
(statearr_32124_32146[(2)] = inst_32105);

(statearr_32124_32146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32110 === (8))){
var inst_32086 = (state_32109[(7)]);
var inst_32096 = cljs.core.next.call(null,inst_32086);
var inst_32086__$1 = inst_32096;
var state_32109__$1 = (function (){var statearr_32125 = state_32109;
(statearr_32125[(7)] = inst_32086__$1);

return statearr_32125;
})();
var statearr_32126_32147 = state_32109__$1;
(statearr_32126_32147[(2)] = null);

(statearr_32126_32147[(1)] = (2));


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
});})(c__18767__auto__))
;
return ((function (switch__18711__auto__,c__18767__auto__){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_32130 = [null,null,null,null,null,null,null,null];
(statearr_32130[(0)] = state_machine__18712__auto__);

(statearr_32130[(1)] = (1));

return statearr_32130;
});
var state_machine__18712__auto____1 = (function (state_32109){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_32109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e32131){if((e32131 instanceof Object)){
var ex__18715__auto__ = e32131;
var statearr_32132_32148 = state_32109;
(statearr_32132_32148[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32149 = state_32109;
state_32109 = G__32149;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_32109){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_32109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__))
})();
var state__18769__auto__ = (function (){var statearr_32133 = f__18768__auto__.call(null);
(statearr_32133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_32133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__))
);

return c__18767__auto__;
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

cljs.core.async.Mux = (function (){var obj32151 = {};
return obj32151;
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


cljs.core.async.Mult = (function (){var obj32153 = {};
return obj32153;
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
if(typeof cljs.core.async.t32375 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32375 = (function (cs,ch,mult,meta32376){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32376 = meta32376;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32375.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32375.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32377){
var self__ = this;
var _32377__$1 = this;
return self__.meta32376;
});})(cs))
;

cljs.core.async.t32375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32377,meta32376__$1){
var self__ = this;
var _32377__$1 = this;
return (new cljs.core.async.t32375(self__.cs,self__.ch,self__.mult,meta32376__$1));
});})(cs))
;

cljs.core.async.t32375.cljs$lang$type = true;

cljs.core.async.t32375.cljs$lang$ctorStr = "cljs.core.async/t32375";

cljs.core.async.t32375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32375");
});})(cs))
;

cljs.core.async.__GT_t32375 = ((function (cs){
return (function __GT_t32375(cs__$1,ch__$1,mult__$1,meta32376){
return (new cljs.core.async.t32375(cs__$1,ch__$1,mult__$1,meta32376));
});})(cs))
;

}

return (new cljs.core.async.t32375(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18767__auto___32596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___32596,cs,m,dchan,dctr,done){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___32596,cs,m,dchan,dctr,done){
return (function (state_32508){
var state_val_32509 = (state_32508[(1)]);
if((state_val_32509 === (7))){
var inst_32504 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32510_32597 = state_32508__$1;
(statearr_32510_32597[(2)] = inst_32504);

(statearr_32510_32597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (20))){
var inst_32409 = (state_32508[(7)]);
var inst_32419 = cljs.core.first.call(null,inst_32409);
var inst_32420 = cljs.core.nth.call(null,inst_32419,(0),null);
var inst_32421 = cljs.core.nth.call(null,inst_32419,(1),null);
var state_32508__$1 = (function (){var statearr_32511 = state_32508;
(statearr_32511[(8)] = inst_32420);

return statearr_32511;
})();
if(cljs.core.truth_(inst_32421)){
var statearr_32512_32598 = state_32508__$1;
(statearr_32512_32598[(1)] = (22));

} else {
var statearr_32513_32599 = state_32508__$1;
(statearr_32513_32599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (27))){
var inst_32380 = (state_32508[(9)]);
var inst_32449 = (state_32508[(10)]);
var inst_32451 = (state_32508[(11)]);
var inst_32456 = (state_32508[(12)]);
var inst_32456__$1 = cljs.core._nth.call(null,inst_32449,inst_32451);
var inst_32457 = cljs.core.async.put_BANG_.call(null,inst_32456__$1,inst_32380,done);
var state_32508__$1 = (function (){var statearr_32514 = state_32508;
(statearr_32514[(12)] = inst_32456__$1);

return statearr_32514;
})();
if(cljs.core.truth_(inst_32457)){
var statearr_32515_32600 = state_32508__$1;
(statearr_32515_32600[(1)] = (30));

} else {
var statearr_32516_32601 = state_32508__$1;
(statearr_32516_32601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (1))){
var state_32508__$1 = state_32508;
var statearr_32517_32602 = state_32508__$1;
(statearr_32517_32602[(2)] = null);

(statearr_32517_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (24))){
var inst_32409 = (state_32508[(7)]);
var inst_32426 = (state_32508[(2)]);
var inst_32427 = cljs.core.next.call(null,inst_32409);
var inst_32389 = inst_32427;
var inst_32390 = null;
var inst_32391 = (0);
var inst_32392 = (0);
var state_32508__$1 = (function (){var statearr_32518 = state_32508;
(statearr_32518[(13)] = inst_32426);

(statearr_32518[(14)] = inst_32391);

(statearr_32518[(15)] = inst_32390);

(statearr_32518[(16)] = inst_32392);

(statearr_32518[(17)] = inst_32389);

return statearr_32518;
})();
var statearr_32519_32603 = state_32508__$1;
(statearr_32519_32603[(2)] = null);

(statearr_32519_32603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (39))){
var state_32508__$1 = state_32508;
var statearr_32523_32604 = state_32508__$1;
(statearr_32523_32604[(2)] = null);

(statearr_32523_32604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (4))){
var inst_32380 = (state_32508[(9)]);
var inst_32380__$1 = (state_32508[(2)]);
var inst_32381 = (inst_32380__$1 == null);
var state_32508__$1 = (function (){var statearr_32524 = state_32508;
(statearr_32524[(9)] = inst_32380__$1);

return statearr_32524;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32525_32605 = state_32508__$1;
(statearr_32525_32605[(1)] = (5));

} else {
var statearr_32526_32606 = state_32508__$1;
(statearr_32526_32606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (15))){
var inst_32391 = (state_32508[(14)]);
var inst_32390 = (state_32508[(15)]);
var inst_32392 = (state_32508[(16)]);
var inst_32389 = (state_32508[(17)]);
var inst_32405 = (state_32508[(2)]);
var inst_32406 = (inst_32392 + (1));
var tmp32520 = inst_32391;
var tmp32521 = inst_32390;
var tmp32522 = inst_32389;
var inst_32389__$1 = tmp32522;
var inst_32390__$1 = tmp32521;
var inst_32391__$1 = tmp32520;
var inst_32392__$1 = inst_32406;
var state_32508__$1 = (function (){var statearr_32527 = state_32508;
(statearr_32527[(14)] = inst_32391__$1);

(statearr_32527[(15)] = inst_32390__$1);

(statearr_32527[(18)] = inst_32405);

(statearr_32527[(16)] = inst_32392__$1);

(statearr_32527[(17)] = inst_32389__$1);

return statearr_32527;
})();
var statearr_32528_32607 = state_32508__$1;
(statearr_32528_32607[(2)] = null);

(statearr_32528_32607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (21))){
var inst_32430 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32532_32608 = state_32508__$1;
(statearr_32532_32608[(2)] = inst_32430);

(statearr_32532_32608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (31))){
var inst_32456 = (state_32508[(12)]);
var inst_32460 = done.call(null,null);
var inst_32461 = cljs.core.async.untap_STAR_.call(null,m,inst_32456);
var state_32508__$1 = (function (){var statearr_32533 = state_32508;
(statearr_32533[(19)] = inst_32460);

return statearr_32533;
})();
var statearr_32534_32609 = state_32508__$1;
(statearr_32534_32609[(2)] = inst_32461);

(statearr_32534_32609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (32))){
var inst_32448 = (state_32508[(20)]);
var inst_32449 = (state_32508[(10)]);
var inst_32451 = (state_32508[(11)]);
var inst_32450 = (state_32508[(21)]);
var inst_32463 = (state_32508[(2)]);
var inst_32464 = (inst_32451 + (1));
var tmp32529 = inst_32448;
var tmp32530 = inst_32449;
var tmp32531 = inst_32450;
var inst_32448__$1 = tmp32529;
var inst_32449__$1 = tmp32530;
var inst_32450__$1 = tmp32531;
var inst_32451__$1 = inst_32464;
var state_32508__$1 = (function (){var statearr_32535 = state_32508;
(statearr_32535[(20)] = inst_32448__$1);

(statearr_32535[(10)] = inst_32449__$1);

(statearr_32535[(11)] = inst_32451__$1);

(statearr_32535[(22)] = inst_32463);

(statearr_32535[(21)] = inst_32450__$1);

return statearr_32535;
})();
var statearr_32536_32610 = state_32508__$1;
(statearr_32536_32610[(2)] = null);

(statearr_32536_32610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (40))){
var inst_32476 = (state_32508[(23)]);
var inst_32480 = done.call(null,null);
var inst_32481 = cljs.core.async.untap_STAR_.call(null,m,inst_32476);
var state_32508__$1 = (function (){var statearr_32537 = state_32508;
(statearr_32537[(24)] = inst_32480);

return statearr_32537;
})();
var statearr_32538_32611 = state_32508__$1;
(statearr_32538_32611[(2)] = inst_32481);

(statearr_32538_32611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (33))){
var inst_32467 = (state_32508[(25)]);
var inst_32469 = cljs.core.chunked_seq_QMARK_.call(null,inst_32467);
var state_32508__$1 = state_32508;
if(inst_32469){
var statearr_32539_32612 = state_32508__$1;
(statearr_32539_32612[(1)] = (36));

} else {
var statearr_32540_32613 = state_32508__$1;
(statearr_32540_32613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (13))){
var inst_32399 = (state_32508[(26)]);
var inst_32402 = cljs.core.async.close_BANG_.call(null,inst_32399);
var state_32508__$1 = state_32508;
var statearr_32541_32614 = state_32508__$1;
(statearr_32541_32614[(2)] = inst_32402);

(statearr_32541_32614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (22))){
var inst_32420 = (state_32508[(8)]);
var inst_32423 = cljs.core.async.close_BANG_.call(null,inst_32420);
var state_32508__$1 = state_32508;
var statearr_32542_32615 = state_32508__$1;
(statearr_32542_32615[(2)] = inst_32423);

(statearr_32542_32615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (36))){
var inst_32467 = (state_32508[(25)]);
var inst_32471 = cljs.core.chunk_first.call(null,inst_32467);
var inst_32472 = cljs.core.chunk_rest.call(null,inst_32467);
var inst_32473 = cljs.core.count.call(null,inst_32471);
var inst_32448 = inst_32472;
var inst_32449 = inst_32471;
var inst_32450 = inst_32473;
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32543 = state_32508;
(statearr_32543[(20)] = inst_32448);

(statearr_32543[(10)] = inst_32449);

(statearr_32543[(11)] = inst_32451);

(statearr_32543[(21)] = inst_32450);

return statearr_32543;
})();
var statearr_32544_32616 = state_32508__$1;
(statearr_32544_32616[(2)] = null);

(statearr_32544_32616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (41))){
var inst_32467 = (state_32508[(25)]);
var inst_32483 = (state_32508[(2)]);
var inst_32484 = cljs.core.next.call(null,inst_32467);
var inst_32448 = inst_32484;
var inst_32449 = null;
var inst_32450 = (0);
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32545 = state_32508;
(statearr_32545[(27)] = inst_32483);

(statearr_32545[(20)] = inst_32448);

(statearr_32545[(10)] = inst_32449);

(statearr_32545[(11)] = inst_32451);

(statearr_32545[(21)] = inst_32450);

return statearr_32545;
})();
var statearr_32546_32617 = state_32508__$1;
(statearr_32546_32617[(2)] = null);

(statearr_32546_32617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (43))){
var state_32508__$1 = state_32508;
var statearr_32547_32618 = state_32508__$1;
(statearr_32547_32618[(2)] = null);

(statearr_32547_32618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (29))){
var inst_32492 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32548_32619 = state_32508__$1;
(statearr_32548_32619[(2)] = inst_32492);

(statearr_32548_32619[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (44))){
var inst_32501 = (state_32508[(2)]);
var state_32508__$1 = (function (){var statearr_32549 = state_32508;
(statearr_32549[(28)] = inst_32501);

return statearr_32549;
})();
var statearr_32550_32620 = state_32508__$1;
(statearr_32550_32620[(2)] = null);

(statearr_32550_32620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (6))){
var inst_32440 = (state_32508[(29)]);
var inst_32439 = cljs.core.deref.call(null,cs);
var inst_32440__$1 = cljs.core.keys.call(null,inst_32439);
var inst_32441 = cljs.core.count.call(null,inst_32440__$1);
var inst_32442 = cljs.core.reset_BANG_.call(null,dctr,inst_32441);
var inst_32447 = cljs.core.seq.call(null,inst_32440__$1);
var inst_32448 = inst_32447;
var inst_32449 = null;
var inst_32450 = (0);
var inst_32451 = (0);
var state_32508__$1 = (function (){var statearr_32551 = state_32508;
(statearr_32551[(30)] = inst_32442);

(statearr_32551[(20)] = inst_32448);

(statearr_32551[(10)] = inst_32449);

(statearr_32551[(29)] = inst_32440__$1);

(statearr_32551[(11)] = inst_32451);

(statearr_32551[(21)] = inst_32450);

return statearr_32551;
})();
var statearr_32552_32621 = state_32508__$1;
(statearr_32552_32621[(2)] = null);

(statearr_32552_32621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (28))){
var inst_32448 = (state_32508[(20)]);
var inst_32467 = (state_32508[(25)]);
var inst_32467__$1 = cljs.core.seq.call(null,inst_32448);
var state_32508__$1 = (function (){var statearr_32553 = state_32508;
(statearr_32553[(25)] = inst_32467__$1);

return statearr_32553;
})();
if(inst_32467__$1){
var statearr_32554_32622 = state_32508__$1;
(statearr_32554_32622[(1)] = (33));

} else {
var statearr_32555_32623 = state_32508__$1;
(statearr_32555_32623[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (25))){
var inst_32451 = (state_32508[(11)]);
var inst_32450 = (state_32508[(21)]);
var inst_32453 = (inst_32451 < inst_32450);
var inst_32454 = inst_32453;
var state_32508__$1 = state_32508;
if(cljs.core.truth_(inst_32454)){
var statearr_32556_32624 = state_32508__$1;
(statearr_32556_32624[(1)] = (27));

} else {
var statearr_32557_32625 = state_32508__$1;
(statearr_32557_32625[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (34))){
var state_32508__$1 = state_32508;
var statearr_32558_32626 = state_32508__$1;
(statearr_32558_32626[(2)] = null);

(statearr_32558_32626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (17))){
var state_32508__$1 = state_32508;
var statearr_32559_32627 = state_32508__$1;
(statearr_32559_32627[(2)] = null);

(statearr_32559_32627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (3))){
var inst_32506 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32508__$1,inst_32506);
} else {
if((state_val_32509 === (12))){
var inst_32435 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32560_32628 = state_32508__$1;
(statearr_32560_32628[(2)] = inst_32435);

(statearr_32560_32628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (2))){
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32508__$1,(4),ch);
} else {
if((state_val_32509 === (23))){
var state_32508__$1 = state_32508;
var statearr_32561_32629 = state_32508__$1;
(statearr_32561_32629[(2)] = null);

(statearr_32561_32629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (35))){
var inst_32490 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32562_32630 = state_32508__$1;
(statearr_32562_32630[(2)] = inst_32490);

(statearr_32562_32630[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (19))){
var inst_32409 = (state_32508[(7)]);
var inst_32413 = cljs.core.chunk_first.call(null,inst_32409);
var inst_32414 = cljs.core.chunk_rest.call(null,inst_32409);
var inst_32415 = cljs.core.count.call(null,inst_32413);
var inst_32389 = inst_32414;
var inst_32390 = inst_32413;
var inst_32391 = inst_32415;
var inst_32392 = (0);
var state_32508__$1 = (function (){var statearr_32563 = state_32508;
(statearr_32563[(14)] = inst_32391);

(statearr_32563[(15)] = inst_32390);

(statearr_32563[(16)] = inst_32392);

(statearr_32563[(17)] = inst_32389);

return statearr_32563;
})();
var statearr_32564_32631 = state_32508__$1;
(statearr_32564_32631[(2)] = null);

(statearr_32564_32631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (11))){
var inst_32409 = (state_32508[(7)]);
var inst_32389 = (state_32508[(17)]);
var inst_32409__$1 = cljs.core.seq.call(null,inst_32389);
var state_32508__$1 = (function (){var statearr_32565 = state_32508;
(statearr_32565[(7)] = inst_32409__$1);

return statearr_32565;
})();
if(inst_32409__$1){
var statearr_32566_32632 = state_32508__$1;
(statearr_32566_32632[(1)] = (16));

} else {
var statearr_32567_32633 = state_32508__$1;
(statearr_32567_32633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (9))){
var inst_32437 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32568_32634 = state_32508__$1;
(statearr_32568_32634[(2)] = inst_32437);

(statearr_32568_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (5))){
var inst_32387 = cljs.core.deref.call(null,cs);
var inst_32388 = cljs.core.seq.call(null,inst_32387);
var inst_32389 = inst_32388;
var inst_32390 = null;
var inst_32391 = (0);
var inst_32392 = (0);
var state_32508__$1 = (function (){var statearr_32569 = state_32508;
(statearr_32569[(14)] = inst_32391);

(statearr_32569[(15)] = inst_32390);

(statearr_32569[(16)] = inst_32392);

(statearr_32569[(17)] = inst_32389);

return statearr_32569;
})();
var statearr_32570_32635 = state_32508__$1;
(statearr_32570_32635[(2)] = null);

(statearr_32570_32635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (14))){
var state_32508__$1 = state_32508;
var statearr_32571_32636 = state_32508__$1;
(statearr_32571_32636[(2)] = null);

(statearr_32571_32636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (45))){
var inst_32498 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32572_32637 = state_32508__$1;
(statearr_32572_32637[(2)] = inst_32498);

(statearr_32572_32637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (26))){
var inst_32440 = (state_32508[(29)]);
var inst_32494 = (state_32508[(2)]);
var inst_32495 = cljs.core.seq.call(null,inst_32440);
var state_32508__$1 = (function (){var statearr_32573 = state_32508;
(statearr_32573[(31)] = inst_32494);

return statearr_32573;
})();
if(inst_32495){
var statearr_32574_32638 = state_32508__$1;
(statearr_32574_32638[(1)] = (42));

} else {
var statearr_32575_32639 = state_32508__$1;
(statearr_32575_32639[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (16))){
var inst_32409 = (state_32508[(7)]);
var inst_32411 = cljs.core.chunked_seq_QMARK_.call(null,inst_32409);
var state_32508__$1 = state_32508;
if(inst_32411){
var statearr_32576_32640 = state_32508__$1;
(statearr_32576_32640[(1)] = (19));

} else {
var statearr_32577_32641 = state_32508__$1;
(statearr_32577_32641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (38))){
var inst_32487 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32578_32642 = state_32508__$1;
(statearr_32578_32642[(2)] = inst_32487);

(statearr_32578_32642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (30))){
var state_32508__$1 = state_32508;
var statearr_32579_32643 = state_32508__$1;
(statearr_32579_32643[(2)] = null);

(statearr_32579_32643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (10))){
var inst_32390 = (state_32508[(15)]);
var inst_32392 = (state_32508[(16)]);
var inst_32398 = cljs.core._nth.call(null,inst_32390,inst_32392);
var inst_32399 = cljs.core.nth.call(null,inst_32398,(0),null);
var inst_32400 = cljs.core.nth.call(null,inst_32398,(1),null);
var state_32508__$1 = (function (){var statearr_32580 = state_32508;
(statearr_32580[(26)] = inst_32399);

return statearr_32580;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32581_32644 = state_32508__$1;
(statearr_32581_32644[(1)] = (13));

} else {
var statearr_32582_32645 = state_32508__$1;
(statearr_32582_32645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (18))){
var inst_32433 = (state_32508[(2)]);
var state_32508__$1 = state_32508;
var statearr_32583_32646 = state_32508__$1;
(statearr_32583_32646[(2)] = inst_32433);

(statearr_32583_32646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (42))){
var state_32508__$1 = state_32508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32508__$1,(45),dchan);
} else {
if((state_val_32509 === (37))){
var inst_32380 = (state_32508[(9)]);
var inst_32467 = (state_32508[(25)]);
var inst_32476 = (state_32508[(23)]);
var inst_32476__$1 = cljs.core.first.call(null,inst_32467);
var inst_32477 = cljs.core.async.put_BANG_.call(null,inst_32476__$1,inst_32380,done);
var state_32508__$1 = (function (){var statearr_32584 = state_32508;
(statearr_32584[(23)] = inst_32476__$1);

return statearr_32584;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32585_32647 = state_32508__$1;
(statearr_32585_32647[(1)] = (39));

} else {
var statearr_32586_32648 = state_32508__$1;
(statearr_32586_32648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32509 === (8))){
var inst_32391 = (state_32508[(14)]);
var inst_32392 = (state_32508[(16)]);
var inst_32394 = (inst_32392 < inst_32391);
var inst_32395 = inst_32394;
var state_32508__$1 = state_32508;
if(cljs.core.truth_(inst_32395)){
var statearr_32587_32649 = state_32508__$1;
(statearr_32587_32649[(1)] = (10));

} else {
var statearr_32588_32650 = state_32508__$1;
(statearr_32588_32650[(1)] = (11));

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
});})(c__18767__auto___32596,cs,m,dchan,dctr,done))
;
return ((function (switch__18711__auto__,c__18767__auto___32596,cs,m,dchan,dctr,done){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32592[(0)] = state_machine__18712__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var state_machine__18712__auto____1 = (function (state_32508){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_32508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e32593){if((e32593 instanceof Object)){
var ex__18715__auto__ = e32593;
var statearr_32594_32651 = state_32508;
(statearr_32594_32651[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32652 = state_32508;
state_32508 = G__32652;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_32508){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_32508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___32596,cs,m,dchan,dctr,done))
})();
var state__18769__auto__ = (function (){var statearr_32595 = f__18768__auto__.call(null);
(statearr_32595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___32596);

return statearr_32595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___32596,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj32654 = {};
return obj32654;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32655){
var map__32660 = p__32655;
var map__32660__$1 = ((cljs.core.seq_QMARK_.call(null,map__32660))?cljs.core.apply.call(null,cljs.core.hash_map,map__32660):map__32660);
var opts = map__32660__$1;
var statearr_32661_32664 = state;
(statearr_32661_32664[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__32660,map__32660__$1,opts){
return (function (val){
var statearr_32662_32665 = state;
(statearr_32662_32665[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32660,map__32660__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_32663_32666 = state;
(statearr_32663_32666[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32655 = null;
if (arguments.length > 3) {
var G__32667__i = 0, G__32667__a = new Array(arguments.length -  3);
while (G__32667__i < G__32667__a.length) {G__32667__a[G__32667__i] = arguments[G__32667__i + 3]; ++G__32667__i;}
  p__32655 = new cljs.core.IndexedSeq(G__32667__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32655);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32668){
var state = cljs.core.first(arglist__32668);
arglist__32668 = cljs.core.next(arglist__32668);
var cont_block = cljs.core.first(arglist__32668);
arglist__32668 = cljs.core.next(arglist__32668);
var ports = cljs.core.first(arglist__32668);
var p__32655 = cljs.core.rest(arglist__32668);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32655);
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
if(typeof cljs.core.async.t32788 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32788 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32789){
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
this.meta32789 = meta32789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32788.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32788.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32788.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32788.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32790){
var self__ = this;
var _32790__$1 = this;
return self__.meta32789;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32790,meta32789__$1){
var self__ = this;
var _32790__$1 = this;
return (new cljs.core.async.t32788(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32789__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32788.cljs$lang$type = true;

cljs.core.async.t32788.cljs$lang$ctorStr = "cljs.core.async/t32788";

cljs.core.async.t32788.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t32788");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32788 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32788(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32789){
return (new cljs.core.async.t32788(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32789));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32788(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18767__auto___32907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32860){
var state_val_32861 = (state_32860[(1)]);
if((state_val_32861 === (7))){
var inst_32804 = (state_32860[(7)]);
var inst_32809 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32804);
var state_32860__$1 = state_32860;
var statearr_32862_32908 = state_32860__$1;
(statearr_32862_32908[(2)] = inst_32809);

(statearr_32862_32908[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (20))){
var inst_32819 = (state_32860[(8)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32860__$1,(23),out,inst_32819);
} else {
if((state_val_32861 === (1))){
var inst_32794 = (state_32860[(9)]);
var inst_32794__$1 = calc_state.call(null);
var inst_32795 = cljs.core.seq_QMARK_.call(null,inst_32794__$1);
var state_32860__$1 = (function (){var statearr_32863 = state_32860;
(statearr_32863[(9)] = inst_32794__$1);

return statearr_32863;
})();
if(inst_32795){
var statearr_32864_32909 = state_32860__$1;
(statearr_32864_32909[(1)] = (2));

} else {
var statearr_32865_32910 = state_32860__$1;
(statearr_32865_32910[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (24))){
var inst_32812 = (state_32860[(10)]);
var inst_32804 = inst_32812;
var state_32860__$1 = (function (){var statearr_32866 = state_32860;
(statearr_32866[(7)] = inst_32804);

return statearr_32866;
})();
var statearr_32867_32911 = state_32860__$1;
(statearr_32867_32911[(2)] = null);

(statearr_32867_32911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (4))){
var inst_32794 = (state_32860[(9)]);
var inst_32800 = (state_32860[(2)]);
var inst_32801 = cljs.core.get.call(null,inst_32800,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32802 = cljs.core.get.call(null,inst_32800,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32803 = cljs.core.get.call(null,inst_32800,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32804 = inst_32794;
var state_32860__$1 = (function (){var statearr_32868 = state_32860;
(statearr_32868[(11)] = inst_32803);

(statearr_32868[(12)] = inst_32802);

(statearr_32868[(13)] = inst_32801);

(statearr_32868[(7)] = inst_32804);

return statearr_32868;
})();
var statearr_32869_32912 = state_32860__$1;
(statearr_32869_32912[(2)] = null);

(statearr_32869_32912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (15))){
var state_32860__$1 = state_32860;
var statearr_32870_32913 = state_32860__$1;
(statearr_32870_32913[(2)] = null);

(statearr_32870_32913[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (21))){
var inst_32812 = (state_32860[(10)]);
var inst_32804 = inst_32812;
var state_32860__$1 = (function (){var statearr_32871 = state_32860;
(statearr_32871[(7)] = inst_32804);

return statearr_32871;
})();
var statearr_32872_32914 = state_32860__$1;
(statearr_32872_32914[(2)] = null);

(statearr_32872_32914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (13))){
var inst_32856 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32873_32915 = state_32860__$1;
(statearr_32873_32915[(2)] = inst_32856);

(statearr_32873_32915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (22))){
var inst_32854 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32874_32916 = state_32860__$1;
(statearr_32874_32916[(2)] = inst_32854);

(statearr_32874_32916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (6))){
var inst_32858 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32860__$1,inst_32858);
} else {
if((state_val_32861 === (25))){
var state_32860__$1 = state_32860;
var statearr_32875_32917 = state_32860__$1;
(statearr_32875_32917[(2)] = null);

(statearr_32875_32917[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (17))){
var inst_32834 = (state_32860[(14)]);
var state_32860__$1 = state_32860;
var statearr_32876_32918 = state_32860__$1;
(statearr_32876_32918[(2)] = inst_32834);

(statearr_32876_32918[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (3))){
var inst_32794 = (state_32860[(9)]);
var state_32860__$1 = state_32860;
var statearr_32877_32919 = state_32860__$1;
(statearr_32877_32919[(2)] = inst_32794);

(statearr_32877_32919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (12))){
var inst_32820 = (state_32860[(15)]);
var inst_32815 = (state_32860[(16)]);
var inst_32834 = (state_32860[(14)]);
var inst_32834__$1 = inst_32815.call(null,inst_32820);
var state_32860__$1 = (function (){var statearr_32878 = state_32860;
(statearr_32878[(14)] = inst_32834__$1);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32834__$1)){
var statearr_32879_32920 = state_32860__$1;
(statearr_32879_32920[(1)] = (17));

} else {
var statearr_32880_32921 = state_32860__$1;
(statearr_32880_32921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (2))){
var inst_32794 = (state_32860[(9)]);
var inst_32797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32794);
var state_32860__$1 = state_32860;
var statearr_32881_32922 = state_32860__$1;
(statearr_32881_32922[(2)] = inst_32797);

(statearr_32881_32922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (23))){
var inst_32845 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32845)){
var statearr_32882_32923 = state_32860__$1;
(statearr_32882_32923[(1)] = (24));

} else {
var statearr_32883_32924 = state_32860__$1;
(statearr_32883_32924[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (19))){
var inst_32842 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32842)){
var statearr_32884_32925 = state_32860__$1;
(statearr_32884_32925[(1)] = (20));

} else {
var statearr_32885_32926 = state_32860__$1;
(statearr_32885_32926[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (11))){
var inst_32819 = (state_32860[(8)]);
var inst_32825 = (inst_32819 == null);
var state_32860__$1 = state_32860;
if(cljs.core.truth_(inst_32825)){
var statearr_32886_32927 = state_32860__$1;
(statearr_32886_32927[(1)] = (14));

} else {
var statearr_32887_32928 = state_32860__$1;
(statearr_32887_32928[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (9))){
var inst_32812 = (state_32860[(10)]);
var inst_32812__$1 = (state_32860[(2)]);
var inst_32813 = cljs.core.get.call(null,inst_32812__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32814 = cljs.core.get.call(null,inst_32812__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32815 = cljs.core.get.call(null,inst_32812__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_32860__$1 = (function (){var statearr_32888 = state_32860;
(statearr_32888[(10)] = inst_32812__$1);

(statearr_32888[(17)] = inst_32814);

(statearr_32888[(16)] = inst_32815);

return statearr_32888;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32860__$1,(10),inst_32813);
} else {
if((state_val_32861 === (5))){
var inst_32804 = (state_32860[(7)]);
var inst_32807 = cljs.core.seq_QMARK_.call(null,inst_32804);
var state_32860__$1 = state_32860;
if(inst_32807){
var statearr_32889_32929 = state_32860__$1;
(statearr_32889_32929[(1)] = (7));

} else {
var statearr_32890_32930 = state_32860__$1;
(statearr_32890_32930[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (14))){
var inst_32820 = (state_32860[(15)]);
var inst_32827 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32820);
var state_32860__$1 = state_32860;
var statearr_32891_32931 = state_32860__$1;
(statearr_32891_32931[(2)] = inst_32827);

(statearr_32891_32931[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (26))){
var inst_32850 = (state_32860[(2)]);
var state_32860__$1 = state_32860;
var statearr_32892_32932 = state_32860__$1;
(statearr_32892_32932[(2)] = inst_32850);

(statearr_32892_32932[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (16))){
var inst_32830 = (state_32860[(2)]);
var inst_32831 = calc_state.call(null);
var inst_32804 = inst_32831;
var state_32860__$1 = (function (){var statearr_32893 = state_32860;
(statearr_32893[(18)] = inst_32830);

(statearr_32893[(7)] = inst_32804);

return statearr_32893;
})();
var statearr_32894_32933 = state_32860__$1;
(statearr_32894_32933[(2)] = null);

(statearr_32894_32933[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (10))){
var inst_32820 = (state_32860[(15)]);
var inst_32819 = (state_32860[(8)]);
var inst_32818 = (state_32860[(2)]);
var inst_32819__$1 = cljs.core.nth.call(null,inst_32818,(0),null);
var inst_32820__$1 = cljs.core.nth.call(null,inst_32818,(1),null);
var inst_32821 = (inst_32819__$1 == null);
var inst_32822 = cljs.core._EQ_.call(null,inst_32820__$1,change);
var inst_32823 = (inst_32821) || (inst_32822);
var state_32860__$1 = (function (){var statearr_32895 = state_32860;
(statearr_32895[(15)] = inst_32820__$1);

(statearr_32895[(8)] = inst_32819__$1);

return statearr_32895;
})();
if(cljs.core.truth_(inst_32823)){
var statearr_32896_32934 = state_32860__$1;
(statearr_32896_32934[(1)] = (11));

} else {
var statearr_32897_32935 = state_32860__$1;
(statearr_32897_32935[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (18))){
var inst_32814 = (state_32860[(17)]);
var inst_32820 = (state_32860[(15)]);
var inst_32815 = (state_32860[(16)]);
var inst_32837 = cljs.core.empty_QMARK_.call(null,inst_32815);
var inst_32838 = inst_32814.call(null,inst_32820);
var inst_32839 = cljs.core.not.call(null,inst_32838);
var inst_32840 = (inst_32837) && (inst_32839);
var state_32860__$1 = state_32860;
var statearr_32898_32936 = state_32860__$1;
(statearr_32898_32936[(2)] = inst_32840);

(statearr_32898_32936[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32861 === (8))){
var inst_32804 = (state_32860[(7)]);
var state_32860__$1 = state_32860;
var statearr_32899_32937 = state_32860__$1;
(statearr_32899_32937[(2)] = inst_32804);

(statearr_32899_32937[(1)] = (9));


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
});})(c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18711__auto__,c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_32903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32903[(0)] = state_machine__18712__auto__);

(statearr_32903[(1)] = (1));

return statearr_32903;
});
var state_machine__18712__auto____1 = (function (state_32860){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_32860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e32904){if((e32904 instanceof Object)){
var ex__18715__auto__ = e32904;
var statearr_32905_32938 = state_32860;
(statearr_32905_32938[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_32860;
state_32860 = G__32939;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_32860){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_32860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18769__auto__ = (function (){var statearr_32906 = f__18768__auto__.call(null);
(statearr_32906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___32907);

return statearr_32906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___32907,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj32941 = {};
return obj32941;
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
return (function (p1__32942_SHARP_){
if(cljs.core.truth_(p1__32942_SHARP_.call(null,topic))){
return p1__32942_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32942_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15658__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33065 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33065 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33066){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33066 = meta33066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33065.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33065.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t33065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33065.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33065.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33067){
var self__ = this;
var _33067__$1 = this;
return self__.meta33066;
});})(mults,ensure_mult))
;

cljs.core.async.t33065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33067,meta33066__$1){
var self__ = this;
var _33067__$1 = this;
return (new cljs.core.async.t33065(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33066__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33065.cljs$lang$type = true;

cljs.core.async.t33065.cljs$lang$ctorStr = "cljs.core.async/t33065";

cljs.core.async.t33065.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33065");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33065 = ((function (mults,ensure_mult){
return (function __GT_t33065(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33066){
return (new cljs.core.async.t33065(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33066));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33065(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18767__auto___33187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___33187,mults,ensure_mult,p){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___33187,mults,ensure_mult,p){
return (function (state_33139){
var state_val_33140 = (state_33139[(1)]);
if((state_val_33140 === (7))){
var inst_33135 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33141_33188 = state_33139__$1;
(statearr_33141_33188[(2)] = inst_33135);

(statearr_33141_33188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (20))){
var state_33139__$1 = state_33139;
var statearr_33142_33189 = state_33139__$1;
(statearr_33142_33189[(2)] = null);

(statearr_33142_33189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (1))){
var state_33139__$1 = state_33139;
var statearr_33143_33190 = state_33139__$1;
(statearr_33143_33190[(2)] = null);

(statearr_33143_33190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (24))){
var inst_33118 = (state_33139[(7)]);
var inst_33127 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33118);
var state_33139__$1 = state_33139;
var statearr_33144_33191 = state_33139__$1;
(statearr_33144_33191[(2)] = inst_33127);

(statearr_33144_33191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (4))){
var inst_33070 = (state_33139[(8)]);
var inst_33070__$1 = (state_33139[(2)]);
var inst_33071 = (inst_33070__$1 == null);
var state_33139__$1 = (function (){var statearr_33145 = state_33139;
(statearr_33145[(8)] = inst_33070__$1);

return statearr_33145;
})();
if(cljs.core.truth_(inst_33071)){
var statearr_33146_33192 = state_33139__$1;
(statearr_33146_33192[(1)] = (5));

} else {
var statearr_33147_33193 = state_33139__$1;
(statearr_33147_33193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (15))){
var inst_33112 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33148_33194 = state_33139__$1;
(statearr_33148_33194[(2)] = inst_33112);

(statearr_33148_33194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (21))){
var inst_33132 = (state_33139[(2)]);
var state_33139__$1 = (function (){var statearr_33149 = state_33139;
(statearr_33149[(9)] = inst_33132);

return statearr_33149;
})();
var statearr_33150_33195 = state_33139__$1;
(statearr_33150_33195[(2)] = null);

(statearr_33150_33195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (13))){
var inst_33094 = (state_33139[(10)]);
var inst_33096 = cljs.core.chunked_seq_QMARK_.call(null,inst_33094);
var state_33139__$1 = state_33139;
if(inst_33096){
var statearr_33151_33196 = state_33139__$1;
(statearr_33151_33196[(1)] = (16));

} else {
var statearr_33152_33197 = state_33139__$1;
(statearr_33152_33197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (22))){
var inst_33124 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
if(cljs.core.truth_(inst_33124)){
var statearr_33153_33198 = state_33139__$1;
(statearr_33153_33198[(1)] = (23));

} else {
var statearr_33154_33199 = state_33139__$1;
(statearr_33154_33199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (6))){
var inst_33070 = (state_33139[(8)]);
var inst_33120 = (state_33139[(11)]);
var inst_33118 = (state_33139[(7)]);
var inst_33118__$1 = topic_fn.call(null,inst_33070);
var inst_33119 = cljs.core.deref.call(null,mults);
var inst_33120__$1 = cljs.core.get.call(null,inst_33119,inst_33118__$1);
var state_33139__$1 = (function (){var statearr_33155 = state_33139;
(statearr_33155[(11)] = inst_33120__$1);

(statearr_33155[(7)] = inst_33118__$1);

return statearr_33155;
})();
if(cljs.core.truth_(inst_33120__$1)){
var statearr_33156_33200 = state_33139__$1;
(statearr_33156_33200[(1)] = (19));

} else {
var statearr_33157_33201 = state_33139__$1;
(statearr_33157_33201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (25))){
var inst_33129 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33158_33202 = state_33139__$1;
(statearr_33158_33202[(2)] = inst_33129);

(statearr_33158_33202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (17))){
var inst_33094 = (state_33139[(10)]);
var inst_33103 = cljs.core.first.call(null,inst_33094);
var inst_33104 = cljs.core.async.muxch_STAR_.call(null,inst_33103);
var inst_33105 = cljs.core.async.close_BANG_.call(null,inst_33104);
var inst_33106 = cljs.core.next.call(null,inst_33094);
var inst_33080 = inst_33106;
var inst_33081 = null;
var inst_33082 = (0);
var inst_33083 = (0);
var state_33139__$1 = (function (){var statearr_33159 = state_33139;
(statearr_33159[(12)] = inst_33083);

(statearr_33159[(13)] = inst_33081);

(statearr_33159[(14)] = inst_33082);

(statearr_33159[(15)] = inst_33080);

(statearr_33159[(16)] = inst_33105);

return statearr_33159;
})();
var statearr_33160_33203 = state_33139__$1;
(statearr_33160_33203[(2)] = null);

(statearr_33160_33203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (3))){
var inst_33137 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33139__$1,inst_33137);
} else {
if((state_val_33140 === (12))){
var inst_33114 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33161_33204 = state_33139__$1;
(statearr_33161_33204[(2)] = inst_33114);

(statearr_33161_33204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (2))){
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33139__$1,(4),ch);
} else {
if((state_val_33140 === (23))){
var state_33139__$1 = state_33139;
var statearr_33162_33205 = state_33139__$1;
(statearr_33162_33205[(2)] = null);

(statearr_33162_33205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (19))){
var inst_33070 = (state_33139[(8)]);
var inst_33120 = (state_33139[(11)]);
var inst_33122 = cljs.core.async.muxch_STAR_.call(null,inst_33120);
var state_33139__$1 = state_33139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33139__$1,(22),inst_33122,inst_33070);
} else {
if((state_val_33140 === (11))){
var inst_33094 = (state_33139[(10)]);
var inst_33080 = (state_33139[(15)]);
var inst_33094__$1 = cljs.core.seq.call(null,inst_33080);
var state_33139__$1 = (function (){var statearr_33163 = state_33139;
(statearr_33163[(10)] = inst_33094__$1);

return statearr_33163;
})();
if(inst_33094__$1){
var statearr_33164_33206 = state_33139__$1;
(statearr_33164_33206[(1)] = (13));

} else {
var statearr_33165_33207 = state_33139__$1;
(statearr_33165_33207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (9))){
var inst_33116 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33166_33208 = state_33139__$1;
(statearr_33166_33208[(2)] = inst_33116);

(statearr_33166_33208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (5))){
var inst_33077 = cljs.core.deref.call(null,mults);
var inst_33078 = cljs.core.vals.call(null,inst_33077);
var inst_33079 = cljs.core.seq.call(null,inst_33078);
var inst_33080 = inst_33079;
var inst_33081 = null;
var inst_33082 = (0);
var inst_33083 = (0);
var state_33139__$1 = (function (){var statearr_33167 = state_33139;
(statearr_33167[(12)] = inst_33083);

(statearr_33167[(13)] = inst_33081);

(statearr_33167[(14)] = inst_33082);

(statearr_33167[(15)] = inst_33080);

return statearr_33167;
})();
var statearr_33168_33209 = state_33139__$1;
(statearr_33168_33209[(2)] = null);

(statearr_33168_33209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (14))){
var state_33139__$1 = state_33139;
var statearr_33172_33210 = state_33139__$1;
(statearr_33172_33210[(2)] = null);

(statearr_33172_33210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (16))){
var inst_33094 = (state_33139[(10)]);
var inst_33098 = cljs.core.chunk_first.call(null,inst_33094);
var inst_33099 = cljs.core.chunk_rest.call(null,inst_33094);
var inst_33100 = cljs.core.count.call(null,inst_33098);
var inst_33080 = inst_33099;
var inst_33081 = inst_33098;
var inst_33082 = inst_33100;
var inst_33083 = (0);
var state_33139__$1 = (function (){var statearr_33173 = state_33139;
(statearr_33173[(12)] = inst_33083);

(statearr_33173[(13)] = inst_33081);

(statearr_33173[(14)] = inst_33082);

(statearr_33173[(15)] = inst_33080);

return statearr_33173;
})();
var statearr_33174_33211 = state_33139__$1;
(statearr_33174_33211[(2)] = null);

(statearr_33174_33211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (10))){
var inst_33083 = (state_33139[(12)]);
var inst_33081 = (state_33139[(13)]);
var inst_33082 = (state_33139[(14)]);
var inst_33080 = (state_33139[(15)]);
var inst_33088 = cljs.core._nth.call(null,inst_33081,inst_33083);
var inst_33089 = cljs.core.async.muxch_STAR_.call(null,inst_33088);
var inst_33090 = cljs.core.async.close_BANG_.call(null,inst_33089);
var inst_33091 = (inst_33083 + (1));
var tmp33169 = inst_33081;
var tmp33170 = inst_33082;
var tmp33171 = inst_33080;
var inst_33080__$1 = tmp33171;
var inst_33081__$1 = tmp33169;
var inst_33082__$1 = tmp33170;
var inst_33083__$1 = inst_33091;
var state_33139__$1 = (function (){var statearr_33175 = state_33139;
(statearr_33175[(17)] = inst_33090);

(statearr_33175[(12)] = inst_33083__$1);

(statearr_33175[(13)] = inst_33081__$1);

(statearr_33175[(14)] = inst_33082__$1);

(statearr_33175[(15)] = inst_33080__$1);

return statearr_33175;
})();
var statearr_33176_33212 = state_33139__$1;
(statearr_33176_33212[(2)] = null);

(statearr_33176_33212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (18))){
var inst_33109 = (state_33139[(2)]);
var state_33139__$1 = state_33139;
var statearr_33177_33213 = state_33139__$1;
(statearr_33177_33213[(2)] = inst_33109);

(statearr_33177_33213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33140 === (8))){
var inst_33083 = (state_33139[(12)]);
var inst_33082 = (state_33139[(14)]);
var inst_33085 = (inst_33083 < inst_33082);
var inst_33086 = inst_33085;
var state_33139__$1 = state_33139;
if(cljs.core.truth_(inst_33086)){
var statearr_33178_33214 = state_33139__$1;
(statearr_33178_33214[(1)] = (10));

} else {
var statearr_33179_33215 = state_33139__$1;
(statearr_33179_33215[(1)] = (11));

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
});})(c__18767__auto___33187,mults,ensure_mult,p))
;
return ((function (switch__18711__auto__,c__18767__auto___33187,mults,ensure_mult,p){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33183[(0)] = state_machine__18712__auto__);

(statearr_33183[(1)] = (1));

return statearr_33183;
});
var state_machine__18712__auto____1 = (function (state_33139){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33184){if((e33184 instanceof Object)){
var ex__18715__auto__ = e33184;
var statearr_33185_33216 = state_33139;
(statearr_33185_33216[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33217 = state_33139;
state_33139 = G__33217;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33139){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___33187,mults,ensure_mult,p))
})();
var state__18769__auto__ = (function (){var statearr_33186 = f__18768__auto__.call(null);
(statearr_33186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___33187);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___33187,mults,ensure_mult,p))
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
var c__18767__auto___33354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33324){
var state_val_33325 = (state_33324[(1)]);
if((state_val_33325 === (7))){
var state_33324__$1 = state_33324;
var statearr_33326_33355 = state_33324__$1;
(statearr_33326_33355[(2)] = null);

(statearr_33326_33355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (1))){
var state_33324__$1 = state_33324;
var statearr_33327_33356 = state_33324__$1;
(statearr_33327_33356[(2)] = null);

(statearr_33327_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (4))){
var inst_33288 = (state_33324[(7)]);
var inst_33290 = (inst_33288 < cnt);
var state_33324__$1 = state_33324;
if(cljs.core.truth_(inst_33290)){
var statearr_33328_33357 = state_33324__$1;
(statearr_33328_33357[(1)] = (6));

} else {
var statearr_33329_33358 = state_33324__$1;
(statearr_33329_33358[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (15))){
var inst_33320 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33330_33359 = state_33324__$1;
(statearr_33330_33359[(2)] = inst_33320);

(statearr_33330_33359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (13))){
var inst_33313 = cljs.core.async.close_BANG_.call(null,out);
var state_33324__$1 = state_33324;
var statearr_33331_33360 = state_33324__$1;
(statearr_33331_33360[(2)] = inst_33313);

(statearr_33331_33360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (6))){
var state_33324__$1 = state_33324;
var statearr_33332_33361 = state_33324__$1;
(statearr_33332_33361[(2)] = null);

(statearr_33332_33361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (3))){
var inst_33322 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33324__$1,inst_33322);
} else {
if((state_val_33325 === (12))){
var inst_33310 = (state_33324[(8)]);
var inst_33310__$1 = (state_33324[(2)]);
var inst_33311 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33310__$1);
var state_33324__$1 = (function (){var statearr_33333 = state_33324;
(statearr_33333[(8)] = inst_33310__$1);

return statearr_33333;
})();
if(cljs.core.truth_(inst_33311)){
var statearr_33334_33362 = state_33324__$1;
(statearr_33334_33362[(1)] = (13));

} else {
var statearr_33335_33363 = state_33324__$1;
(statearr_33335_33363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (2))){
var inst_33287 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33288 = (0);
var state_33324__$1 = (function (){var statearr_33336 = state_33324;
(statearr_33336[(7)] = inst_33288);

(statearr_33336[(9)] = inst_33287);

return statearr_33336;
})();
var statearr_33337_33364 = state_33324__$1;
(statearr_33337_33364[(2)] = null);

(statearr_33337_33364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (11))){
var inst_33288 = (state_33324[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33324,(10),Object,null,(9));
var inst_33297 = chs__$1.call(null,inst_33288);
var inst_33298 = done.call(null,inst_33288);
var inst_33299 = cljs.core.async.take_BANG_.call(null,inst_33297,inst_33298);
var state_33324__$1 = state_33324;
var statearr_33338_33365 = state_33324__$1;
(statearr_33338_33365[(2)] = inst_33299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (9))){
var inst_33288 = (state_33324[(7)]);
var inst_33301 = (state_33324[(2)]);
var inst_33302 = (inst_33288 + (1));
var inst_33288__$1 = inst_33302;
var state_33324__$1 = (function (){var statearr_33339 = state_33324;
(statearr_33339[(7)] = inst_33288__$1);

(statearr_33339[(10)] = inst_33301);

return statearr_33339;
})();
var statearr_33340_33366 = state_33324__$1;
(statearr_33340_33366[(2)] = null);

(statearr_33340_33366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (5))){
var inst_33308 = (state_33324[(2)]);
var state_33324__$1 = (function (){var statearr_33341 = state_33324;
(statearr_33341[(11)] = inst_33308);

return statearr_33341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33324__$1,(12),dchan);
} else {
if((state_val_33325 === (14))){
var inst_33310 = (state_33324[(8)]);
var inst_33315 = cljs.core.apply.call(null,f,inst_33310);
var state_33324__$1 = state_33324;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33324__$1,(16),out,inst_33315);
} else {
if((state_val_33325 === (16))){
var inst_33317 = (state_33324[(2)]);
var state_33324__$1 = (function (){var statearr_33342 = state_33324;
(statearr_33342[(12)] = inst_33317);

return statearr_33342;
})();
var statearr_33343_33367 = state_33324__$1;
(statearr_33343_33367[(2)] = null);

(statearr_33343_33367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (10))){
var inst_33292 = (state_33324[(2)]);
var inst_33293 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33324__$1 = (function (){var statearr_33344 = state_33324;
(statearr_33344[(13)] = inst_33292);

return statearr_33344;
})();
var statearr_33345_33368 = state_33324__$1;
(statearr_33345_33368[(2)] = inst_33293);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33324__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33325 === (8))){
var inst_33306 = (state_33324[(2)]);
var state_33324__$1 = state_33324;
var statearr_33346_33369 = state_33324__$1;
(statearr_33346_33369[(2)] = inst_33306);

(statearr_33346_33369[(1)] = (5));


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
});})(c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18711__auto__,c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33350[(0)] = state_machine__18712__auto__);

(statearr_33350[(1)] = (1));

return statearr_33350;
});
var state_machine__18712__auto____1 = (function (state_33324){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33351){if((e33351 instanceof Object)){
var ex__18715__auto__ = e33351;
var statearr_33352_33370 = state_33324;
(statearr_33352_33370[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33371 = state_33324;
state_33324 = G__33371;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33324){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18769__auto__ = (function (){var statearr_33353 = f__18768__auto__.call(null);
(statearr_33353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___33354);

return statearr_33353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___33354,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__18767__auto___33479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___33479,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___33479,out){
return (function (state_33455){
var state_val_33456 = (state_33455[(1)]);
if((state_val_33456 === (7))){
var inst_33435 = (state_33455[(7)]);
var inst_33434 = (state_33455[(8)]);
var inst_33434__$1 = (state_33455[(2)]);
var inst_33435__$1 = cljs.core.nth.call(null,inst_33434__$1,(0),null);
var inst_33436 = cljs.core.nth.call(null,inst_33434__$1,(1),null);
var inst_33437 = (inst_33435__$1 == null);
var state_33455__$1 = (function (){var statearr_33457 = state_33455;
(statearr_33457[(9)] = inst_33436);

(statearr_33457[(7)] = inst_33435__$1);

(statearr_33457[(8)] = inst_33434__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33437)){
var statearr_33458_33480 = state_33455__$1;
(statearr_33458_33480[(1)] = (8));

} else {
var statearr_33459_33481 = state_33455__$1;
(statearr_33459_33481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (1))){
var inst_33426 = cljs.core.vec.call(null,chs);
var inst_33427 = inst_33426;
var state_33455__$1 = (function (){var statearr_33460 = state_33455;
(statearr_33460[(10)] = inst_33427);

return statearr_33460;
})();
var statearr_33461_33482 = state_33455__$1;
(statearr_33461_33482[(2)] = null);

(statearr_33461_33482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (4))){
var inst_33427 = (state_33455[(10)]);
var state_33455__$1 = state_33455;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33455__$1,(7),inst_33427);
} else {
if((state_val_33456 === (6))){
var inst_33451 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33462_33483 = state_33455__$1;
(statearr_33462_33483[(2)] = inst_33451);

(statearr_33462_33483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (3))){
var inst_33453 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33455__$1,inst_33453);
} else {
if((state_val_33456 === (2))){
var inst_33427 = (state_33455[(10)]);
var inst_33429 = cljs.core.count.call(null,inst_33427);
var inst_33430 = (inst_33429 > (0));
var state_33455__$1 = state_33455;
if(cljs.core.truth_(inst_33430)){
var statearr_33464_33484 = state_33455__$1;
(statearr_33464_33484[(1)] = (4));

} else {
var statearr_33465_33485 = state_33455__$1;
(statearr_33465_33485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (11))){
var inst_33427 = (state_33455[(10)]);
var inst_33444 = (state_33455[(2)]);
var tmp33463 = inst_33427;
var inst_33427__$1 = tmp33463;
var state_33455__$1 = (function (){var statearr_33466 = state_33455;
(statearr_33466[(10)] = inst_33427__$1);

(statearr_33466[(11)] = inst_33444);

return statearr_33466;
})();
var statearr_33467_33486 = state_33455__$1;
(statearr_33467_33486[(2)] = null);

(statearr_33467_33486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (9))){
var inst_33435 = (state_33455[(7)]);
var state_33455__$1 = state_33455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33455__$1,(11),out,inst_33435);
} else {
if((state_val_33456 === (5))){
var inst_33449 = cljs.core.async.close_BANG_.call(null,out);
var state_33455__$1 = state_33455;
var statearr_33468_33487 = state_33455__$1;
(statearr_33468_33487[(2)] = inst_33449);

(statearr_33468_33487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (10))){
var inst_33447 = (state_33455[(2)]);
var state_33455__$1 = state_33455;
var statearr_33469_33488 = state_33455__$1;
(statearr_33469_33488[(2)] = inst_33447);

(statearr_33469_33488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33456 === (8))){
var inst_33436 = (state_33455[(9)]);
var inst_33427 = (state_33455[(10)]);
var inst_33435 = (state_33455[(7)]);
var inst_33434 = (state_33455[(8)]);
var inst_33439 = (function (){var c = inst_33436;
var v = inst_33435;
var vec__33432 = inst_33434;
var cs = inst_33427;
return ((function (c,v,vec__33432,cs,inst_33436,inst_33427,inst_33435,inst_33434,state_val_33456,c__18767__auto___33479,out){
return (function (p1__33372_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33372_SHARP_);
});
;})(c,v,vec__33432,cs,inst_33436,inst_33427,inst_33435,inst_33434,state_val_33456,c__18767__auto___33479,out))
})();
var inst_33440 = cljs.core.filterv.call(null,inst_33439,inst_33427);
var inst_33427__$1 = inst_33440;
var state_33455__$1 = (function (){var statearr_33470 = state_33455;
(statearr_33470[(10)] = inst_33427__$1);

return statearr_33470;
})();
var statearr_33471_33489 = state_33455__$1;
(statearr_33471_33489[(2)] = null);

(statearr_33471_33489[(1)] = (2));


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
});})(c__18767__auto___33479,out))
;
return ((function (switch__18711__auto__,c__18767__auto___33479,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33475 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33475[(0)] = state_machine__18712__auto__);

(statearr_33475[(1)] = (1));

return statearr_33475;
});
var state_machine__18712__auto____1 = (function (state_33455){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33476){if((e33476 instanceof Object)){
var ex__18715__auto__ = e33476;
var statearr_33477_33490 = state_33455;
(statearr_33477_33490[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33491 = state_33455;
state_33455 = G__33491;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33455){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___33479,out))
})();
var state__18769__auto__ = (function (){var statearr_33478 = f__18768__auto__.call(null);
(statearr_33478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___33479);

return statearr_33478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___33479,out))
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
var c__18767__auto___33584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___33584,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___33584,out){
return (function (state_33561){
var state_val_33562 = (state_33561[(1)]);
if((state_val_33562 === (7))){
var inst_33543 = (state_33561[(7)]);
var inst_33543__$1 = (state_33561[(2)]);
var inst_33544 = (inst_33543__$1 == null);
var inst_33545 = cljs.core.not.call(null,inst_33544);
var state_33561__$1 = (function (){var statearr_33563 = state_33561;
(statearr_33563[(7)] = inst_33543__$1);

return statearr_33563;
})();
if(inst_33545){
var statearr_33564_33585 = state_33561__$1;
(statearr_33564_33585[(1)] = (8));

} else {
var statearr_33565_33586 = state_33561__$1;
(statearr_33565_33586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (1))){
var inst_33538 = (0);
var state_33561__$1 = (function (){var statearr_33566 = state_33561;
(statearr_33566[(8)] = inst_33538);

return statearr_33566;
})();
var statearr_33567_33587 = state_33561__$1;
(statearr_33567_33587[(2)] = null);

(statearr_33567_33587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (4))){
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33561__$1,(7),ch);
} else {
if((state_val_33562 === (6))){
var inst_33556 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33568_33588 = state_33561__$1;
(statearr_33568_33588[(2)] = inst_33556);

(statearr_33568_33588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (3))){
var inst_33558 = (state_33561[(2)]);
var inst_33559 = cljs.core.async.close_BANG_.call(null,out);
var state_33561__$1 = (function (){var statearr_33569 = state_33561;
(statearr_33569[(9)] = inst_33558);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33561__$1,inst_33559);
} else {
if((state_val_33562 === (2))){
var inst_33538 = (state_33561[(8)]);
var inst_33540 = (inst_33538 < n);
var state_33561__$1 = state_33561;
if(cljs.core.truth_(inst_33540)){
var statearr_33570_33589 = state_33561__$1;
(statearr_33570_33589[(1)] = (4));

} else {
var statearr_33571_33590 = state_33561__$1;
(statearr_33571_33590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (11))){
var inst_33538 = (state_33561[(8)]);
var inst_33548 = (state_33561[(2)]);
var inst_33549 = (inst_33538 + (1));
var inst_33538__$1 = inst_33549;
var state_33561__$1 = (function (){var statearr_33572 = state_33561;
(statearr_33572[(10)] = inst_33548);

(statearr_33572[(8)] = inst_33538__$1);

return statearr_33572;
})();
var statearr_33573_33591 = state_33561__$1;
(statearr_33573_33591[(2)] = null);

(statearr_33573_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (9))){
var state_33561__$1 = state_33561;
var statearr_33574_33592 = state_33561__$1;
(statearr_33574_33592[(2)] = null);

(statearr_33574_33592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (5))){
var state_33561__$1 = state_33561;
var statearr_33575_33593 = state_33561__$1;
(statearr_33575_33593[(2)] = null);

(statearr_33575_33593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (10))){
var inst_33553 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33576_33594 = state_33561__$1;
(statearr_33576_33594[(2)] = inst_33553);

(statearr_33576_33594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (8))){
var inst_33543 = (state_33561[(7)]);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33561__$1,(11),out,inst_33543);
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
});})(c__18767__auto___33584,out))
;
return ((function (switch__18711__auto__,c__18767__auto___33584,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33580[(0)] = state_machine__18712__auto__);

(statearr_33580[(1)] = (1));

return statearr_33580;
});
var state_machine__18712__auto____1 = (function (state_33561){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33581){if((e33581 instanceof Object)){
var ex__18715__auto__ = e33581;
var statearr_33582_33595 = state_33561;
(statearr_33582_33595[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33596 = state_33561;
state_33561 = G__33596;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33561){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___33584,out))
})();
var state__18769__auto__ = (function (){var statearr_33583 = f__18768__auto__.call(null);
(statearr_33583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___33584);

return statearr_33583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___33584,out))
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
if(typeof cljs.core.async.t33604 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33604 = (function (ch,f,map_LT_,meta33605){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33607 = (function (fn1,_,meta33605,map_LT_,f,ch,meta33608){
this.fn1 = fn1;
this._ = _;
this.meta33605 = meta33605;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33608 = meta33608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33597_SHARP_){
return f1.call(null,(((p1__33597_SHARP_ == null))?null:self__.f.call(null,p1__33597_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33609){
var self__ = this;
var _33609__$1 = this;
return self__.meta33608;
});})(___$1))
;

cljs.core.async.t33607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33609,meta33608__$1){
var self__ = this;
var _33609__$1 = this;
return (new cljs.core.async.t33607(self__.fn1,self__._,self__.meta33605,self__.map_LT_,self__.f,self__.ch,meta33608__$1));
});})(___$1))
;

cljs.core.async.t33607.cljs$lang$type = true;

cljs.core.async.t33607.cljs$lang$ctorStr = "cljs.core.async/t33607";

cljs.core.async.t33607.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33607");
});})(___$1))
;

cljs.core.async.__GT_t33607 = ((function (___$1){
return (function __GT_t33607(fn1__$1,___$2,meta33605__$1,map_LT___$1,f__$1,ch__$1,meta33608){
return (new cljs.core.async.t33607(fn1__$1,___$2,meta33605__$1,map_LT___$1,f__$1,ch__$1,meta33608));
});})(___$1))
;

}

return (new cljs.core.async.t33607(fn1,___$1,self__.meta33605,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33606){
var self__ = this;
var _33606__$1 = this;
return self__.meta33605;
});

cljs.core.async.t33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33606,meta33605__$1){
var self__ = this;
var _33606__$1 = this;
return (new cljs.core.async.t33604(self__.ch,self__.f,self__.map_LT_,meta33605__$1));
});

cljs.core.async.t33604.cljs$lang$type = true;

cljs.core.async.t33604.cljs$lang$ctorStr = "cljs.core.async/t33604";

cljs.core.async.t33604.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33604");
});

cljs.core.async.__GT_t33604 = (function __GT_t33604(ch__$1,f__$1,map_LT___$1,meta33605){
return (new cljs.core.async.t33604(ch__$1,f__$1,map_LT___$1,meta33605));
});

}

return (new cljs.core.async.t33604(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t33613 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33613 = (function (ch,f,map_GT_,meta33614){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33614 = meta33614;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33615){
var self__ = this;
var _33615__$1 = this;
return self__.meta33614;
});

cljs.core.async.t33613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33615,meta33614__$1){
var self__ = this;
var _33615__$1 = this;
return (new cljs.core.async.t33613(self__.ch,self__.f,self__.map_GT_,meta33614__$1));
});

cljs.core.async.t33613.cljs$lang$type = true;

cljs.core.async.t33613.cljs$lang$ctorStr = "cljs.core.async/t33613";

cljs.core.async.t33613.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33613");
});

cljs.core.async.__GT_t33613 = (function __GT_t33613(ch__$1,f__$1,map_GT___$1,meta33614){
return (new cljs.core.async.t33613(ch__$1,f__$1,map_GT___$1,meta33614));
});

}

return (new cljs.core.async.t33613(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t33619 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33619 = (function (ch,p,filter_GT_,meta33620){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33620 = meta33620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33621){
var self__ = this;
var _33621__$1 = this;
return self__.meta33620;
});

cljs.core.async.t33619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33621,meta33620__$1){
var self__ = this;
var _33621__$1 = this;
return (new cljs.core.async.t33619(self__.ch,self__.p,self__.filter_GT_,meta33620__$1));
});

cljs.core.async.t33619.cljs$lang$type = true;

cljs.core.async.t33619.cljs$lang$ctorStr = "cljs.core.async/t33619";

cljs.core.async.t33619.cljs$lang$ctorPrWriter = (function (this__16245__auto__,writer__16246__auto__,opt__16247__auto__){
return cljs.core._write.call(null,writer__16246__auto__,"cljs.core.async/t33619");
});

cljs.core.async.__GT_t33619 = (function __GT_t33619(ch__$1,p__$1,filter_GT___$1,meta33620){
return (new cljs.core.async.t33619(ch__$1,p__$1,filter_GT___$1,meta33620));
});

}

return (new cljs.core.async.t33619(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18767__auto___33704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___33704,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___33704,out){
return (function (state_33683){
var state_val_33684 = (state_33683[(1)]);
if((state_val_33684 === (7))){
var inst_33679 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33685_33705 = state_33683__$1;
(statearr_33685_33705[(2)] = inst_33679);

(statearr_33685_33705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (1))){
var state_33683__$1 = state_33683;
var statearr_33686_33706 = state_33683__$1;
(statearr_33686_33706[(2)] = null);

(statearr_33686_33706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (4))){
var inst_33665 = (state_33683[(7)]);
var inst_33665__$1 = (state_33683[(2)]);
var inst_33666 = (inst_33665__$1 == null);
var state_33683__$1 = (function (){var statearr_33687 = state_33683;
(statearr_33687[(7)] = inst_33665__$1);

return statearr_33687;
})();
if(cljs.core.truth_(inst_33666)){
var statearr_33688_33707 = state_33683__$1;
(statearr_33688_33707[(1)] = (5));

} else {
var statearr_33689_33708 = state_33683__$1;
(statearr_33689_33708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (6))){
var inst_33665 = (state_33683[(7)]);
var inst_33670 = p.call(null,inst_33665);
var state_33683__$1 = state_33683;
if(cljs.core.truth_(inst_33670)){
var statearr_33690_33709 = state_33683__$1;
(statearr_33690_33709[(1)] = (8));

} else {
var statearr_33691_33710 = state_33683__$1;
(statearr_33691_33710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (3))){
var inst_33681 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33683__$1,inst_33681);
} else {
if((state_val_33684 === (2))){
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33683__$1,(4),ch);
} else {
if((state_val_33684 === (11))){
var inst_33673 = (state_33683[(2)]);
var state_33683__$1 = state_33683;
var statearr_33692_33711 = state_33683__$1;
(statearr_33692_33711[(2)] = inst_33673);

(statearr_33692_33711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (9))){
var state_33683__$1 = state_33683;
var statearr_33693_33712 = state_33683__$1;
(statearr_33693_33712[(2)] = null);

(statearr_33693_33712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (5))){
var inst_33668 = cljs.core.async.close_BANG_.call(null,out);
var state_33683__$1 = state_33683;
var statearr_33694_33713 = state_33683__$1;
(statearr_33694_33713[(2)] = inst_33668);

(statearr_33694_33713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (10))){
var inst_33676 = (state_33683[(2)]);
var state_33683__$1 = (function (){var statearr_33695 = state_33683;
(statearr_33695[(8)] = inst_33676);

return statearr_33695;
})();
var statearr_33696_33714 = state_33683__$1;
(statearr_33696_33714[(2)] = null);

(statearr_33696_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33684 === (8))){
var inst_33665 = (state_33683[(7)]);
var state_33683__$1 = state_33683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33683__$1,(11),out,inst_33665);
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
});})(c__18767__auto___33704,out))
;
return ((function (switch__18711__auto__,c__18767__auto___33704,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33700 = [null,null,null,null,null,null,null,null,null];
(statearr_33700[(0)] = state_machine__18712__auto__);

(statearr_33700[(1)] = (1));

return statearr_33700;
});
var state_machine__18712__auto____1 = (function (state_33683){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33701){if((e33701 instanceof Object)){
var ex__18715__auto__ = e33701;
var statearr_33702_33715 = state_33683;
(statearr_33702_33715[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33716 = state_33683;
state_33683 = G__33716;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33683){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___33704,out))
})();
var state__18769__auto__ = (function (){var statearr_33703 = f__18768__auto__.call(null);
(statearr_33703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___33704);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___33704,out))
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
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__){
return (function (state_33882){
var state_val_33883 = (state_33882[(1)]);
if((state_val_33883 === (7))){
var inst_33878 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33884_33925 = state_33882__$1;
(statearr_33884_33925[(2)] = inst_33878);

(statearr_33884_33925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (20))){
var inst_33848 = (state_33882[(7)]);
var inst_33859 = (state_33882[(2)]);
var inst_33860 = cljs.core.next.call(null,inst_33848);
var inst_33834 = inst_33860;
var inst_33835 = null;
var inst_33836 = (0);
var inst_33837 = (0);
var state_33882__$1 = (function (){var statearr_33885 = state_33882;
(statearr_33885[(8)] = inst_33859);

(statearr_33885[(9)] = inst_33837);

(statearr_33885[(10)] = inst_33836);

(statearr_33885[(11)] = inst_33834);

(statearr_33885[(12)] = inst_33835);

return statearr_33885;
})();
var statearr_33886_33926 = state_33882__$1;
(statearr_33886_33926[(2)] = null);

(statearr_33886_33926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (1))){
var state_33882__$1 = state_33882;
var statearr_33887_33927 = state_33882__$1;
(statearr_33887_33927[(2)] = null);

(statearr_33887_33927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (4))){
var inst_33823 = (state_33882[(13)]);
var inst_33823__$1 = (state_33882[(2)]);
var inst_33824 = (inst_33823__$1 == null);
var state_33882__$1 = (function (){var statearr_33888 = state_33882;
(statearr_33888[(13)] = inst_33823__$1);

return statearr_33888;
})();
if(cljs.core.truth_(inst_33824)){
var statearr_33889_33928 = state_33882__$1;
(statearr_33889_33928[(1)] = (5));

} else {
var statearr_33890_33929 = state_33882__$1;
(statearr_33890_33929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (15))){
var state_33882__$1 = state_33882;
var statearr_33894_33930 = state_33882__$1;
(statearr_33894_33930[(2)] = null);

(statearr_33894_33930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (21))){
var state_33882__$1 = state_33882;
var statearr_33895_33931 = state_33882__$1;
(statearr_33895_33931[(2)] = null);

(statearr_33895_33931[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (13))){
var inst_33837 = (state_33882[(9)]);
var inst_33836 = (state_33882[(10)]);
var inst_33834 = (state_33882[(11)]);
var inst_33835 = (state_33882[(12)]);
var inst_33844 = (state_33882[(2)]);
var inst_33845 = (inst_33837 + (1));
var tmp33891 = inst_33836;
var tmp33892 = inst_33834;
var tmp33893 = inst_33835;
var inst_33834__$1 = tmp33892;
var inst_33835__$1 = tmp33893;
var inst_33836__$1 = tmp33891;
var inst_33837__$1 = inst_33845;
var state_33882__$1 = (function (){var statearr_33896 = state_33882;
(statearr_33896[(9)] = inst_33837__$1);

(statearr_33896[(10)] = inst_33836__$1);

(statearr_33896[(11)] = inst_33834__$1);

(statearr_33896[(14)] = inst_33844);

(statearr_33896[(12)] = inst_33835__$1);

return statearr_33896;
})();
var statearr_33897_33932 = state_33882__$1;
(statearr_33897_33932[(2)] = null);

(statearr_33897_33932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (22))){
var state_33882__$1 = state_33882;
var statearr_33898_33933 = state_33882__$1;
(statearr_33898_33933[(2)] = null);

(statearr_33898_33933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (6))){
var inst_33823 = (state_33882[(13)]);
var inst_33832 = f.call(null,inst_33823);
var inst_33833 = cljs.core.seq.call(null,inst_33832);
var inst_33834 = inst_33833;
var inst_33835 = null;
var inst_33836 = (0);
var inst_33837 = (0);
var state_33882__$1 = (function (){var statearr_33899 = state_33882;
(statearr_33899[(9)] = inst_33837);

(statearr_33899[(10)] = inst_33836);

(statearr_33899[(11)] = inst_33834);

(statearr_33899[(12)] = inst_33835);

return statearr_33899;
})();
var statearr_33900_33934 = state_33882__$1;
(statearr_33900_33934[(2)] = null);

(statearr_33900_33934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (17))){
var inst_33848 = (state_33882[(7)]);
var inst_33852 = cljs.core.chunk_first.call(null,inst_33848);
var inst_33853 = cljs.core.chunk_rest.call(null,inst_33848);
var inst_33854 = cljs.core.count.call(null,inst_33852);
var inst_33834 = inst_33853;
var inst_33835 = inst_33852;
var inst_33836 = inst_33854;
var inst_33837 = (0);
var state_33882__$1 = (function (){var statearr_33901 = state_33882;
(statearr_33901[(9)] = inst_33837);

(statearr_33901[(10)] = inst_33836);

(statearr_33901[(11)] = inst_33834);

(statearr_33901[(12)] = inst_33835);

return statearr_33901;
})();
var statearr_33902_33935 = state_33882__$1;
(statearr_33902_33935[(2)] = null);

(statearr_33902_33935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (3))){
var inst_33880 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33882__$1,inst_33880);
} else {
if((state_val_33883 === (12))){
var inst_33868 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33903_33936 = state_33882__$1;
(statearr_33903_33936[(2)] = inst_33868);

(statearr_33903_33936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (2))){
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33882__$1,(4),in$);
} else {
if((state_val_33883 === (23))){
var inst_33876 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33904_33937 = state_33882__$1;
(statearr_33904_33937[(2)] = inst_33876);

(statearr_33904_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (19))){
var inst_33863 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33905_33938 = state_33882__$1;
(statearr_33905_33938[(2)] = inst_33863);

(statearr_33905_33938[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (11))){
var inst_33834 = (state_33882[(11)]);
var inst_33848 = (state_33882[(7)]);
var inst_33848__$1 = cljs.core.seq.call(null,inst_33834);
var state_33882__$1 = (function (){var statearr_33906 = state_33882;
(statearr_33906[(7)] = inst_33848__$1);

return statearr_33906;
})();
if(inst_33848__$1){
var statearr_33907_33939 = state_33882__$1;
(statearr_33907_33939[(1)] = (14));

} else {
var statearr_33908_33940 = state_33882__$1;
(statearr_33908_33940[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (9))){
var inst_33870 = (state_33882[(2)]);
var inst_33871 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33882__$1 = (function (){var statearr_33909 = state_33882;
(statearr_33909[(15)] = inst_33870);

return statearr_33909;
})();
if(cljs.core.truth_(inst_33871)){
var statearr_33910_33941 = state_33882__$1;
(statearr_33910_33941[(1)] = (21));

} else {
var statearr_33911_33942 = state_33882__$1;
(statearr_33911_33942[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (5))){
var inst_33826 = cljs.core.async.close_BANG_.call(null,out);
var state_33882__$1 = state_33882;
var statearr_33912_33943 = state_33882__$1;
(statearr_33912_33943[(2)] = inst_33826);

(statearr_33912_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (14))){
var inst_33848 = (state_33882[(7)]);
var inst_33850 = cljs.core.chunked_seq_QMARK_.call(null,inst_33848);
var state_33882__$1 = state_33882;
if(inst_33850){
var statearr_33913_33944 = state_33882__$1;
(statearr_33913_33944[(1)] = (17));

} else {
var statearr_33914_33945 = state_33882__$1;
(statearr_33914_33945[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (16))){
var inst_33866 = (state_33882[(2)]);
var state_33882__$1 = state_33882;
var statearr_33915_33946 = state_33882__$1;
(statearr_33915_33946[(2)] = inst_33866);

(statearr_33915_33946[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33883 === (10))){
var inst_33837 = (state_33882[(9)]);
var inst_33835 = (state_33882[(12)]);
var inst_33842 = cljs.core._nth.call(null,inst_33835,inst_33837);
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33882__$1,(13),out,inst_33842);
} else {
if((state_val_33883 === (18))){
var inst_33848 = (state_33882[(7)]);
var inst_33857 = cljs.core.first.call(null,inst_33848);
var state_33882__$1 = state_33882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33882__$1,(20),out,inst_33857);
} else {
if((state_val_33883 === (8))){
var inst_33837 = (state_33882[(9)]);
var inst_33836 = (state_33882[(10)]);
var inst_33839 = (inst_33837 < inst_33836);
var inst_33840 = inst_33839;
var state_33882__$1 = state_33882;
if(cljs.core.truth_(inst_33840)){
var statearr_33916_33947 = state_33882__$1;
(statearr_33916_33947[(1)] = (10));

} else {
var statearr_33917_33948 = state_33882__$1;
(statearr_33917_33948[(1)] = (11));

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
});})(c__18767__auto__))
;
return ((function (switch__18711__auto__,c__18767__auto__){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_33921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33921[(0)] = state_machine__18712__auto__);

(statearr_33921[(1)] = (1));

return statearr_33921;
});
var state_machine__18712__auto____1 = (function (state_33882){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_33882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e33922){if((e33922 instanceof Object)){
var ex__18715__auto__ = e33922;
var statearr_33923_33949 = state_33882;
(statearr_33923_33949[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33950 = state_33882;
state_33882 = G__33950;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_33882){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_33882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__))
})();
var state__18769__auto__ = (function (){var statearr_33924 = f__18768__auto__.call(null);
(statearr_33924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_33924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__))
);

return c__18767__auto__;
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
var c__18767__auto___34047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___34047,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___34047,out){
return (function (state_34022){
var state_val_34023 = (state_34022[(1)]);
if((state_val_34023 === (7))){
var inst_34017 = (state_34022[(2)]);
var state_34022__$1 = state_34022;
var statearr_34024_34048 = state_34022__$1;
(statearr_34024_34048[(2)] = inst_34017);

(statearr_34024_34048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (1))){
var inst_33999 = null;
var state_34022__$1 = (function (){var statearr_34025 = state_34022;
(statearr_34025[(7)] = inst_33999);

return statearr_34025;
})();
var statearr_34026_34049 = state_34022__$1;
(statearr_34026_34049[(2)] = null);

(statearr_34026_34049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (4))){
var inst_34002 = (state_34022[(8)]);
var inst_34002__$1 = (state_34022[(2)]);
var inst_34003 = (inst_34002__$1 == null);
var inst_34004 = cljs.core.not.call(null,inst_34003);
var state_34022__$1 = (function (){var statearr_34027 = state_34022;
(statearr_34027[(8)] = inst_34002__$1);

return statearr_34027;
})();
if(inst_34004){
var statearr_34028_34050 = state_34022__$1;
(statearr_34028_34050[(1)] = (5));

} else {
var statearr_34029_34051 = state_34022__$1;
(statearr_34029_34051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (6))){
var state_34022__$1 = state_34022;
var statearr_34030_34052 = state_34022__$1;
(statearr_34030_34052[(2)] = null);

(statearr_34030_34052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (3))){
var inst_34019 = (state_34022[(2)]);
var inst_34020 = cljs.core.async.close_BANG_.call(null,out);
var state_34022__$1 = (function (){var statearr_34031 = state_34022;
(statearr_34031[(9)] = inst_34019);

return statearr_34031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34022__$1,inst_34020);
} else {
if((state_val_34023 === (2))){
var state_34022__$1 = state_34022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34022__$1,(4),ch);
} else {
if((state_val_34023 === (11))){
var inst_34002 = (state_34022[(8)]);
var inst_34011 = (state_34022[(2)]);
var inst_33999 = inst_34002;
var state_34022__$1 = (function (){var statearr_34032 = state_34022;
(statearr_34032[(7)] = inst_33999);

(statearr_34032[(10)] = inst_34011);

return statearr_34032;
})();
var statearr_34033_34053 = state_34022__$1;
(statearr_34033_34053[(2)] = null);

(statearr_34033_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (9))){
var inst_34002 = (state_34022[(8)]);
var state_34022__$1 = state_34022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34022__$1,(11),out,inst_34002);
} else {
if((state_val_34023 === (5))){
var inst_33999 = (state_34022[(7)]);
var inst_34002 = (state_34022[(8)]);
var inst_34006 = cljs.core._EQ_.call(null,inst_34002,inst_33999);
var state_34022__$1 = state_34022;
if(inst_34006){
var statearr_34035_34054 = state_34022__$1;
(statearr_34035_34054[(1)] = (8));

} else {
var statearr_34036_34055 = state_34022__$1;
(statearr_34036_34055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (10))){
var inst_34014 = (state_34022[(2)]);
var state_34022__$1 = state_34022;
var statearr_34037_34056 = state_34022__$1;
(statearr_34037_34056[(2)] = inst_34014);

(statearr_34037_34056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34023 === (8))){
var inst_33999 = (state_34022[(7)]);
var tmp34034 = inst_33999;
var inst_33999__$1 = tmp34034;
var state_34022__$1 = (function (){var statearr_34038 = state_34022;
(statearr_34038[(7)] = inst_33999__$1);

return statearr_34038;
})();
var statearr_34039_34057 = state_34022__$1;
(statearr_34039_34057[(2)] = null);

(statearr_34039_34057[(1)] = (2));


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
});})(c__18767__auto___34047,out))
;
return ((function (switch__18711__auto__,c__18767__auto___34047,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_34043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34043[(0)] = state_machine__18712__auto__);

(statearr_34043[(1)] = (1));

return statearr_34043;
});
var state_machine__18712__auto____1 = (function (state_34022){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_34022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e34044){if((e34044 instanceof Object)){
var ex__18715__auto__ = e34044;
var statearr_34045_34058 = state_34022;
(statearr_34045_34058[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34059 = state_34022;
state_34022 = G__34059;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_34022){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_34022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___34047,out))
})();
var state__18769__auto__ = (function (){var statearr_34046 = f__18768__auto__.call(null);
(statearr_34046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___34047);

return statearr_34046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___34047,out))
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
var c__18767__auto___34194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___34194,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___34194,out){
return (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34160 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34166_34195 = state_34164__$1;
(statearr_34166_34195[(2)] = inst_34160);

(statearr_34166_34195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (1))){
var inst_34127 = (new Array(n));
var inst_34128 = inst_34127;
var inst_34129 = (0);
var state_34164__$1 = (function (){var statearr_34167 = state_34164;
(statearr_34167[(7)] = inst_34128);

(statearr_34167[(8)] = inst_34129);

return statearr_34167;
})();
var statearr_34168_34196 = state_34164__$1;
(statearr_34168_34196[(2)] = null);

(statearr_34168_34196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var inst_34132 = (state_34164[(9)]);
var inst_34132__$1 = (state_34164[(2)]);
var inst_34133 = (inst_34132__$1 == null);
var inst_34134 = cljs.core.not.call(null,inst_34133);
var state_34164__$1 = (function (){var statearr_34169 = state_34164;
(statearr_34169[(9)] = inst_34132__$1);

return statearr_34169;
})();
if(inst_34134){
var statearr_34170_34197 = state_34164__$1;
(statearr_34170_34197[(1)] = (5));

} else {
var statearr_34171_34198 = state_34164__$1;
(statearr_34171_34198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (15))){
var inst_34154 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34172_34199 = state_34164__$1;
(statearr_34172_34199[(2)] = inst_34154);

(statearr_34172_34199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (13))){
var state_34164__$1 = state_34164;
var statearr_34173_34200 = state_34164__$1;
(statearr_34173_34200[(2)] = null);

(statearr_34173_34200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (6))){
var inst_34129 = (state_34164[(8)]);
var inst_34150 = (inst_34129 > (0));
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34150)){
var statearr_34174_34201 = state_34164__$1;
(statearr_34174_34201[(1)] = (12));

} else {
var statearr_34175_34202 = state_34164__$1;
(statearr_34175_34202[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var inst_34162 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34164__$1,inst_34162);
} else {
if((state_val_34165 === (12))){
var inst_34128 = (state_34164[(7)]);
var inst_34152 = cljs.core.vec.call(null,inst_34128);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34164__$1,(15),out,inst_34152);
} else {
if((state_val_34165 === (2))){
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34164__$1,(4),ch);
} else {
if((state_val_34165 === (11))){
var inst_34144 = (state_34164[(2)]);
var inst_34145 = (new Array(n));
var inst_34128 = inst_34145;
var inst_34129 = (0);
var state_34164__$1 = (function (){var statearr_34176 = state_34164;
(statearr_34176[(10)] = inst_34144);

(statearr_34176[(7)] = inst_34128);

(statearr_34176[(8)] = inst_34129);

return statearr_34176;
})();
var statearr_34177_34203 = state_34164__$1;
(statearr_34177_34203[(2)] = null);

(statearr_34177_34203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var inst_34128 = (state_34164[(7)]);
var inst_34142 = cljs.core.vec.call(null,inst_34128);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34164__$1,(11),out,inst_34142);
} else {
if((state_val_34165 === (5))){
var inst_34132 = (state_34164[(9)]);
var inst_34128 = (state_34164[(7)]);
var inst_34137 = (state_34164[(11)]);
var inst_34129 = (state_34164[(8)]);
var inst_34136 = (inst_34128[inst_34129] = inst_34132);
var inst_34137__$1 = (inst_34129 + (1));
var inst_34138 = (inst_34137__$1 < n);
var state_34164__$1 = (function (){var statearr_34178 = state_34164;
(statearr_34178[(12)] = inst_34136);

(statearr_34178[(11)] = inst_34137__$1);

return statearr_34178;
})();
if(cljs.core.truth_(inst_34138)){
var statearr_34179_34204 = state_34164__$1;
(statearr_34179_34204[(1)] = (8));

} else {
var statearr_34180_34205 = state_34164__$1;
(statearr_34180_34205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (14))){
var inst_34157 = (state_34164[(2)]);
var inst_34158 = cljs.core.async.close_BANG_.call(null,out);
var state_34164__$1 = (function (){var statearr_34182 = state_34164;
(statearr_34182[(13)] = inst_34157);

return statearr_34182;
})();
var statearr_34183_34206 = state_34164__$1;
(statearr_34183_34206[(2)] = inst_34158);

(statearr_34183_34206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34148 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34184_34207 = state_34164__$1;
(statearr_34184_34207[(2)] = inst_34148);

(statearr_34184_34207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (8))){
var inst_34128 = (state_34164[(7)]);
var inst_34137 = (state_34164[(11)]);
var tmp34181 = inst_34128;
var inst_34128__$1 = tmp34181;
var inst_34129 = inst_34137;
var state_34164__$1 = (function (){var statearr_34185 = state_34164;
(statearr_34185[(7)] = inst_34128__$1);

(statearr_34185[(8)] = inst_34129);

return statearr_34185;
})();
var statearr_34186_34208 = state_34164__$1;
(statearr_34186_34208[(2)] = null);

(statearr_34186_34208[(1)] = (2));


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
});})(c__18767__auto___34194,out))
;
return ((function (switch__18711__auto__,c__18767__auto___34194,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_34190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34190[(0)] = state_machine__18712__auto__);

(statearr_34190[(1)] = (1));

return statearr_34190;
});
var state_machine__18712__auto____1 = (function (state_34164){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_34164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e34191){if((e34191 instanceof Object)){
var ex__18715__auto__ = e34191;
var statearr_34192_34209 = state_34164;
(statearr_34192_34209[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34210 = state_34164;
state_34164 = G__34210;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___34194,out))
})();
var state__18769__auto__ = (function (){var statearr_34193 = f__18768__auto__.call(null);
(statearr_34193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___34194);

return statearr_34193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___34194,out))
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
var c__18767__auto___34353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___34353,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___34353,out){
return (function (state_34323){
var state_val_34324 = (state_34323[(1)]);
if((state_val_34324 === (7))){
var inst_34319 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34325_34354 = state_34323__$1;
(statearr_34325_34354[(2)] = inst_34319);

(statearr_34325_34354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (1))){
var inst_34282 = [];
var inst_34283 = inst_34282;
var inst_34284 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34323__$1 = (function (){var statearr_34326 = state_34323;
(statearr_34326[(7)] = inst_34284);

(statearr_34326[(8)] = inst_34283);

return statearr_34326;
})();
var statearr_34327_34355 = state_34323__$1;
(statearr_34327_34355[(2)] = null);

(statearr_34327_34355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (4))){
var inst_34287 = (state_34323[(9)]);
var inst_34287__$1 = (state_34323[(2)]);
var inst_34288 = (inst_34287__$1 == null);
var inst_34289 = cljs.core.not.call(null,inst_34288);
var state_34323__$1 = (function (){var statearr_34328 = state_34323;
(statearr_34328[(9)] = inst_34287__$1);

return statearr_34328;
})();
if(inst_34289){
var statearr_34329_34356 = state_34323__$1;
(statearr_34329_34356[(1)] = (5));

} else {
var statearr_34330_34357 = state_34323__$1;
(statearr_34330_34357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (15))){
var inst_34313 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34331_34358 = state_34323__$1;
(statearr_34331_34358[(2)] = inst_34313);

(statearr_34331_34358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (13))){
var state_34323__$1 = state_34323;
var statearr_34332_34359 = state_34323__$1;
(statearr_34332_34359[(2)] = null);

(statearr_34332_34359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (6))){
var inst_34283 = (state_34323[(8)]);
var inst_34308 = inst_34283.length;
var inst_34309 = (inst_34308 > (0));
var state_34323__$1 = state_34323;
if(cljs.core.truth_(inst_34309)){
var statearr_34333_34360 = state_34323__$1;
(statearr_34333_34360[(1)] = (12));

} else {
var statearr_34334_34361 = state_34323__$1;
(statearr_34334_34361[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (3))){
var inst_34321 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34323__$1,inst_34321);
} else {
if((state_val_34324 === (12))){
var inst_34283 = (state_34323[(8)]);
var inst_34311 = cljs.core.vec.call(null,inst_34283);
var state_34323__$1 = state_34323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34323__$1,(15),out,inst_34311);
} else {
if((state_val_34324 === (2))){
var state_34323__$1 = state_34323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34323__$1,(4),ch);
} else {
if((state_val_34324 === (11))){
var inst_34291 = (state_34323[(10)]);
var inst_34287 = (state_34323[(9)]);
var inst_34301 = (state_34323[(2)]);
var inst_34302 = [];
var inst_34303 = inst_34302.push(inst_34287);
var inst_34283 = inst_34302;
var inst_34284 = inst_34291;
var state_34323__$1 = (function (){var statearr_34335 = state_34323;
(statearr_34335[(11)] = inst_34301);

(statearr_34335[(7)] = inst_34284);

(statearr_34335[(8)] = inst_34283);

(statearr_34335[(12)] = inst_34303);

return statearr_34335;
})();
var statearr_34336_34362 = state_34323__$1;
(statearr_34336_34362[(2)] = null);

(statearr_34336_34362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (9))){
var inst_34283 = (state_34323[(8)]);
var inst_34299 = cljs.core.vec.call(null,inst_34283);
var state_34323__$1 = state_34323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34323__$1,(11),out,inst_34299);
} else {
if((state_val_34324 === (5))){
var inst_34284 = (state_34323[(7)]);
var inst_34291 = (state_34323[(10)]);
var inst_34287 = (state_34323[(9)]);
var inst_34291__$1 = f.call(null,inst_34287);
var inst_34292 = cljs.core._EQ_.call(null,inst_34291__$1,inst_34284);
var inst_34293 = cljs.core.keyword_identical_QMARK_.call(null,inst_34284,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34294 = (inst_34292) || (inst_34293);
var state_34323__$1 = (function (){var statearr_34337 = state_34323;
(statearr_34337[(10)] = inst_34291__$1);

return statearr_34337;
})();
if(cljs.core.truth_(inst_34294)){
var statearr_34338_34363 = state_34323__$1;
(statearr_34338_34363[(1)] = (8));

} else {
var statearr_34339_34364 = state_34323__$1;
(statearr_34339_34364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (14))){
var inst_34316 = (state_34323[(2)]);
var inst_34317 = cljs.core.async.close_BANG_.call(null,out);
var state_34323__$1 = (function (){var statearr_34341 = state_34323;
(statearr_34341[(13)] = inst_34316);

return statearr_34341;
})();
var statearr_34342_34365 = state_34323__$1;
(statearr_34342_34365[(2)] = inst_34317);

(statearr_34342_34365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (10))){
var inst_34306 = (state_34323[(2)]);
var state_34323__$1 = state_34323;
var statearr_34343_34366 = state_34323__$1;
(statearr_34343_34366[(2)] = inst_34306);

(statearr_34343_34366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34324 === (8))){
var inst_34283 = (state_34323[(8)]);
var inst_34291 = (state_34323[(10)]);
var inst_34287 = (state_34323[(9)]);
var inst_34296 = inst_34283.push(inst_34287);
var tmp34340 = inst_34283;
var inst_34283__$1 = tmp34340;
var inst_34284 = inst_34291;
var state_34323__$1 = (function (){var statearr_34344 = state_34323;
(statearr_34344[(7)] = inst_34284);

(statearr_34344[(8)] = inst_34283__$1);

(statearr_34344[(14)] = inst_34296);

return statearr_34344;
})();
var statearr_34345_34367 = state_34323__$1;
(statearr_34345_34367[(2)] = null);

(statearr_34345_34367[(1)] = (2));


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
});})(c__18767__auto___34353,out))
;
return ((function (switch__18711__auto__,c__18767__auto___34353,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_34349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34349[(0)] = state_machine__18712__auto__);

(statearr_34349[(1)] = (1));

return statearr_34349;
});
var state_machine__18712__auto____1 = (function (state_34323){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_34323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e34350){if((e34350 instanceof Object)){
var ex__18715__auto__ = e34350;
var statearr_34351_34368 = state_34323;
(statearr_34351_34368[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34369 = state_34323;
state_34323 = G__34369;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_34323){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_34323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___34353,out))
})();
var state__18769__auto__ = (function (){var statearr_34352 = f__18768__auto__.call(null);
(statearr_34352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___34353);

return statearr_34352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___34353,out))
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