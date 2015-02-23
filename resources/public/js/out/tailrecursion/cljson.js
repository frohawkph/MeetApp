// Compiled by ClojureScript 0.0-2760 {}
goog.provide('tailrecursion.cljson');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.date.DateTime');
goog.require('cljs.reader');


tailrecursion.cljson.EncodeTagged = (function (){var obj23369 = {};
return obj23369;
})();

tailrecursion.cljson._encode = (function _encode(o){
if((function (){var and__17315__auto__ = o;
if(and__17315__auto__){
return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1;
} else {
return and__17315__auto__;
}
})()){
return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1(o);
} else {
var x__17971__auto__ = (((o == null))?null:o);
return (function (){var or__17327__auto__ = (tailrecursion.cljson._encode[goog.typeOf(x__17971__auto__)]);
if(or__17327__auto__){
return or__17327__auto__;
} else {
var or__17327__auto____$1 = (tailrecursion.cljson._encode["_"]);
if(or__17327__auto____$1){
return or__17327__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"EncodeTagged.-encode",o);
}
}
})().call(null,o);
}
});

/**
* Convert clj data to JSON string.
*/
tailrecursion.cljson.clj__GT_cljson = (function clj__GT_cljson(v){
return JSON.stringify(tailrecursion.cljson.encode.call(null,v));
});
/**
* Convert JSON string to clj data.
*/
tailrecursion.cljson.cljson__GT_clj = (function cljson__GT_clj(s){
return tailrecursion.cljson.decode.call(null,JSON.parse(s));
});
tailrecursion.cljson.enc_coll = (function enc_coll(tag,val){
var len = cljs.core.count.call(null,val);
var out = [tag];
var i = (0);
var c = val;
while(true){
if((i < len)){
var i__$1 = (i + (1));
(out[i__$1] = cljs.core.first.call(null,c));

var G__23386 = i__$1;
var G__23387 = cljs.core.rest.call(null,c);
i = G__23386;
c = G__23387;
continue;
} else {
return out;
}
break;
}
});
cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$ = true;

cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["uuid",o__$1.uuid];
});

Date.prototype.tailrecursion$cljson$EncodeTagged$ = true;

Date.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["inst",cljs.core.subs.call(null,cljs.core.pr_str.call(null,o__$1),(7),(36))];
});
/**
* Attempts to encode an object that does not satisfy EncodeTagged,
* but for which the printed representation contains a tag.
*/
tailrecursion.cljson.interpret = (function interpret(x){
var temp__4126__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/#([^<].*)/,cljs.core.pr_str.call(null,x)));
if(cljs.core.truth_(temp__4126__auto__)){
var match = temp__4126__auto__;
var tag = cljs.reader.read_string.call(null,match);
var val = cljs.reader.read_string.call(null,cljs.core.subs.call(null,match,[cljs.core.str(tag)].join('').length));
return [[cljs.core.str(tag)].join(''),tailrecursion.cljson.encode.call(null,val)];
} else {
return null;
}
});
tailrecursion.cljson.encode = (function encode(x){
var temp__4124__auto__ = (function (){var and__17315__auto__ = cljs.core._STAR_print_meta_STAR_;
if(cljs.core.truth_(and__17315__auto__)){
return cljs.core.meta.call(null,x);
} else {
return and__17315__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return ["z",encode.call(null,m),encode.call(null,cljs.core.with_meta.call(null,x,null))];
} else {
if((function (){var G__23404 = x;
if(G__23404){
var bit__18008__auto__ = null;
if(cljs.core.truth_((function (){var or__17327__auto__ = bit__18008__auto__;
if(cljs.core.truth_(or__17327__auto__)){
return or__17327__auto__;
} else {
return G__23404.tailrecursion$cljson$EncodeTagged$;
}
})())){
return true;
} else {
if((!G__23404.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,G__23404);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,G__23404);
}
})()){
return tailrecursion.cljson._encode.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return ["k",cljs.core.subs.call(null,[cljs.core.str(x)].join(''),(1))];
} else {
if((x instanceof cljs.core.Symbol)){
return ["y",[cljs.core.str(x)].join('')];
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"v",cljs.core.map.call(null,encode,x));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"l",cljs.core.map.call(null,encode,x));
} else {
if((cljs.core.map_QMARK_.call(null,x)) && (!((function (){var G__23406 = x;
if(G__23406){
var bit__18008__auto__ = (G__23406.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__18008__auto__) || (G__23406.cljs$core$IRecord$)){
return true;
} else {
if((!G__23406.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__23406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,G__23406);
}
})()))){
return tailrecursion.cljson.enc_coll.call(null,"m",cljs.core.map.call(null,encode,cljs.core.apply.call(null,cljs.core.concat,x)));
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"s",cljs.core.map.call(null,encode,x));
} else {
if((typeof x === 'string') || (typeof x === 'number') || ((x == null)) || (cljs.core._EQ_.call(null,true,x)) || (cljs.core._EQ_.call(null,false,x))){
return x;
} else {
var or__17327__auto__ = tailrecursion.cljson.interpret.call(null,x);
if(cljs.core.truth_(or__17327__auto__)){
return or__17327__auto__;
} else {
throw (new Error([cljs.core.str("No cljson encoding for type '"),cljs.core.str(cljs.core.type.call(null,x)),cljs.core.str("'.")].join('')));
}

}
}
}
}
}
}
}
}
}
});
tailrecursion.cljson.decode_tagged = (function decode_tagged(o){
var tag = (o[(0)]);
var G__23408 = tag;
switch (G__23408) {
case "v":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i < len)){
var G__23410 = (i + (1));
var G__23411 = len;
var G__23412 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__23410;
len = G__23411;
out = G__23412;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "m":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__23413 = (i + (2));
var G__23414 = len;
var G__23415 = cljs.core.assoc_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])),tailrecursion.cljson.decode.call(null,(o[(i + (1))])));
i = G__23413;
len = G__23414;
out = G__23415;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "l":
var i = (o.length - (1));
var out = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__23416 = (i - (1));
var G__23417 = cljs.core.conj.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__23416;
out = G__23417;
continue;
} else {
return out;
}
break;
}

break;
case "s":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__23418 = (i + (1));
var G__23419 = len;
var G__23420 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__23418;
len = G__23419;
out = G__23420;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "k":
return cljs.core.keyword.call(null,(o[(1)]));

break;
case "y":
var val = (o[(1)]);
var idx = val.indexOf("/");
if((idx < (0))){
return cljs.core.symbol.call(null,val);
} else {
return cljs.core.symbol.call(null,val.slice((0),idx),val.slice((idx + (1))));
}

break;
case "z":
var m = tailrecursion.cljson.decode.call(null,(o[(1)]));
var v = tailrecursion.cljson.decode.call(null,(o[(2)]));
return cljs.core.with_meta.call(null,v,m);

break;
default:
var temp__4124__auto__ = (function (){var or__17327__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
if(cljs.core.truth_(or__17327__auto__)){
return or__17327__auto__;
} else {
return cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var reader = temp__4124__auto__;
return reader.call(null,tailrecursion.cljson.decode.call(null,(o[(1)])));
} else {
throw (new Error([cljs.core.str("No reader function for tag '"),cljs.core.str(tag),cljs.core.str("'.")].join('')));
}

}
});
tailrecursion.cljson.decode = (function decode(v){
if(v instanceof Array){
return tailrecursion.cljson.decode_tagged.call(null,v);
} else {
return v;
}
});

//# sourceMappingURL=cljson.js.map