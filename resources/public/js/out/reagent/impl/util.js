// Compiled by ClojureScript 0.0-2913 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util.extract_props = (function extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.util.extract_children = (function extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = ((((p == null)) || (cljs.core.map_QMARK_.call(null,p)))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.util.get_argv = (function get_argv(c){
return (c["props"]["argv"]);
});
reagent.impl.util.get_props = (function get_props(c){
return reagent.impl.util.extract_props.call(null,(c["props"]["argv"]));
});
reagent.impl.util.get_children = (function get_children(c){
return reagent.impl.util.extract_children.call(null,(c["props"]["argv"]));
});
reagent.impl.util.reagent_component_QMARK_ = (function reagent_component_QMARK_(c){
return !(((c["props"]["argv"]) == null));
});
reagent.impl.util.cached_react_class = (function cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.util.cache_react_class = (function cache_react_class(c,constructor){
return (c["cljsReactClass"] = constructor);
});
reagent.impl.util.memoize_1 = (function memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__23974 = clojure.string.split.call(null,name_str,/-/);
var start = cljs.core.nth.call(null,vec__23974,(0),null);
var parts = cljs.core.nthnext.call(null,vec__23974,(1));
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});

/**
* @constructor
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__23976__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__17618__auto___23977 = self__.p;
if(cljs.core.truth_(or__17618__auto___23977)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__23976 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__23978__i = 0, G__23978__a = new Array(arguments.length -  1);
while (G__23978__i < G__23978__a.length) {G__23978__a[G__23978__i] = arguments[G__23978__i + 1]; ++G__23978__i;}
  a = new cljs.core.IndexedSeq(G__23978__a,0);
} 
return G__23976__delegate.call(this,self__,a);};
G__23976.cljs$lang$maxFixedArity = 1;
G__23976.cljs$lang$applyTo = (function (arglist__23979){
var self__ = cljs.core.first(arglist__23979);
var a = cljs.core.rest(arglist__23979);
return G__23976__delegate(self__,a);
});
G__23976.cljs$core$IFn$_invoke$arity$variadic = G__23976__delegate;
return G__23976;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args23975){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args23975)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__23980__delegate = function (a){
var _ = this;
var or__17618__auto___23981 = self__.p;
if(cljs.core.truth_(or__17618__auto___23981)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__23980 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__23982__i = 0, G__23982__a = new Array(arguments.length -  0);
while (G__23982__i < G__23982__a.length) {G__23982__a[G__23982__i] = arguments[G__23982__i + 0]; ++G__23982__i;}
  a = new cljs.core.IndexedSeq(G__23982__a,0);
} 
return G__23980__delegate.call(this,a);};
G__23980.cljs$lang$maxFixedArity = 0;
G__23980.cljs$lang$applyTo = (function (arglist__23983){
var a = cljs.core.seq(arglist__23983);
return G__23980__delegate(a);
});
G__23980.cljs$core$IFn$_invoke$arity$variadic = G__23980__delegate;
return G__23980;
})()
;

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__18205__auto__,writer__18206__auto__,opt__18207__auto__){
return cljs.core._write.call(null,writer__18206__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function merge_class(p1,p2){
var class$ = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var c1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var c2 = temp__4126__auto____$1;
return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function merge_style(p1,p2){
var style = (function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__4126__auto__)){
var s1 = temp__4126__auto__;
var temp__4126__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__4126__auto____$1)){
var s2 = temp__4126__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"p1","p1",703771573,null))))].join('')));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
if(typeof reagent.impl.util.roots !== 'undefined'){
} else {
reagent.impl.util.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.impl.util.clear_container = (function clear_container(node){
try{return (React["unmountComponentAtNode"])(node);
}catch (e23985){if((e23985 instanceof Object)){
var e = e23985;
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Error unmounting:")].join(''));
} else {
}

if(typeof console !== 'undefined'){
return console.log(e);
} else {
return null;
}
} else {
throw e23985;

}
}});
reagent.impl.util.render_component = (function render_component(comp,container,callback){
try{var _STAR_always_update_STAR_23990 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (React["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23990){
return (function (){
var _STAR_always_update_STAR_23991 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23991;
}});})(_STAR_always_update_STAR_23990))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23990;
}}catch (e23989){if((e23989 instanceof Object)){
var e = e23989;
reagent.impl.util.clear_container.call(null,container);

throw e;
} else {
throw e23989;

}
}});
reagent.impl.util.re_render_component = (function re_render_component(comp,container){
return reagent.impl.util.render_component.call(null,comp,container,null);
});
reagent.impl.util.unmount_component_at_node = (function unmount_component_at_node(container){
cljs.core.swap_BANG_.call(null,reagent.impl.util.roots,cljs.core.dissoc,container);

return (React["unmountComponentAtNode"])(container);
});
reagent.impl.util.force_update_all = (function force_update_all(){
var seq__23996_24000 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.impl.util.roots)));
var chunk__23997_24001 = null;
var count__23998_24002 = (0);
var i__23999_24003 = (0);
while(true){
if((i__23999_24003 < count__23998_24002)){
var v_24004 = cljs.core._nth.call(null,chunk__23997_24001,i__23999_24003);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_24004);

var G__24005 = seq__23996_24000;
var G__24006 = chunk__23997_24001;
var G__24007 = count__23998_24002;
var G__24008 = (i__23999_24003 + (1));
seq__23996_24000 = G__24005;
chunk__23997_24001 = G__24006;
count__23998_24002 = G__24007;
i__23999_24003 = G__24008;
continue;
} else {
var temp__4126__auto___24009 = cljs.core.seq.call(null,seq__23996_24000);
if(temp__4126__auto___24009){
var seq__23996_24010__$1 = temp__4126__auto___24009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23996_24010__$1)){
var c__18405__auto___24011 = cljs.core.chunk_first.call(null,seq__23996_24010__$1);
var G__24012 = cljs.core.chunk_rest.call(null,seq__23996_24010__$1);
var G__24013 = c__18405__auto___24011;
var G__24014 = cljs.core.count.call(null,c__18405__auto___24011);
var G__24015 = (0);
seq__23996_24000 = G__24012;
chunk__23997_24001 = G__24013;
count__23998_24002 = G__24014;
i__23999_24003 = G__24015;
continue;
} else {
var v_24016 = cljs.core.first.call(null,seq__23996_24010__$1);
cljs.core.apply.call(null,reagent.impl.util.re_render_component,v_24016);

var G__24017 = cljs.core.next.call(null,seq__23996_24010__$1);
var G__24018 = null;
var G__24019 = (0);
var G__24020 = (0);
seq__23996_24000 = G__24017;
chunk__23997_24001 = G__24018;
count__23998_24002 = G__24019;
i__23999_24003 = G__24020;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=util.js.map