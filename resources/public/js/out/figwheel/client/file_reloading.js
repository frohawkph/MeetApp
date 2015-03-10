// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__30660_SHARP_,p2__30661_SHARP_){
var and__15646__auto__ = p1__30660_SHARP_;
if(cljs.core.truth_(and__15646__auto__)){
return p2__30661_SHARP_;
} else {
return and__15646__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__15658__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__15658__auto__){
return or__15658__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30663_SHARP_,p2__30662_SHARP_){
return [cljs.core.str(p2__30662_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__15658__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__15658__auto__){
return or__15658__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__15658__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30664){
var map__30665 = p__30664;
var map__30665__$1 = ((cljs.core.seq_QMARK_.call(null,map__30665))?cljs.core.apply.call(null,cljs.core.hash_map,map__30665):map__30665);
var file = cljs.core.get.call(null,map__30665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30666){
var map__30667 = p__30666;
var map__30667__$1 = ((cljs.core.seq_QMARK_.call(null,map__30667))?cljs.core.apply.call(null,cljs.core.hash_map,map__30667):map__30667);
var namespace = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30668){if((e30668 instanceof Error)){
var e = e30668;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30668;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__30669,callback){
var map__30671 = p__30669;
var map__30671__$1 = ((cljs.core.seq_QMARK_.call(null,map__30671))?cljs.core.apply.call(null,cljs.core.hash_map,map__30671):map__30671);
var file_msg = map__30671__$1;
var request_url = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30671,map__30671__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30671,map__30671__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30672){
var map__30674 = p__30672;
var map__30674__$1 = ((cljs.core.seq_QMARK_.call(null,map__30674))?cljs.core.apply.call(null,cljs.core.hash_map,map__30674):map__30674);
var file_msg = map__30674__$1;
var meta_data = cljs.core.get.call(null,map__30674__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__15658__auto__ = meta_data;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__15646__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__15646__auto__){
var or__15658__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
var or__15658__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__15658__auto____$1)){
return or__15658__auto____$1;
} else {
var and__15646__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__15646__auto____$1){
var or__15658__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__15658__auto____$2){
return or__15658__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__15646__auto____$1;
}
}
}
} else {
return and__15646__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__30675,callback){
var map__30677 = p__30675;
var map__30677__$1 = ((cljs.core.seq_QMARK_.call(null,map__30677))?cljs.core.apply.call(null,cljs.core.hash_map,map__30677):map__30677);
var file_msg = map__30677__$1;
var namespace = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30677__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18806__auto___30764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___30764,out){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___30764,out){
return (function (state_30746){
var state_val_30747 = (state_30746[(1)]);
if((state_val_30747 === (7))){
var inst_30730 = (state_30746[(7)]);
var inst_30736 = (state_30746[(2)]);
var inst_30737 = cljs.core.async.put_BANG_.call(null,out,inst_30736);
var inst_30726 = inst_30730;
var state_30746__$1 = (function (){var statearr_30748 = state_30746;
(statearr_30748[(8)] = inst_30726);

(statearr_30748[(9)] = inst_30737);

return statearr_30748;
})();
var statearr_30749_30765 = state_30746__$1;
(statearr_30749_30765[(2)] = null);

(statearr_30749_30765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (6))){
var inst_30742 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
var statearr_30750_30766 = state_30746__$1;
(statearr_30750_30766[(2)] = inst_30742);

(statearr_30750_30766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (5))){
var inst_30740 = cljs.core.async.close_BANG_.call(null,out);
var state_30746__$1 = state_30746;
var statearr_30751_30767 = state_30746__$1;
(statearr_30751_30767[(2)] = inst_30740);

(statearr_30751_30767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (4))){
var inst_30729 = (state_30746[(10)]);
var inst_30734 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30729);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30746__$1,(7),inst_30734);
} else {
if((state_val_30747 === (3))){
var inst_30744 = (state_30746[(2)]);
var state_30746__$1 = state_30746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30746__$1,inst_30744);
} else {
if((state_val_30747 === (2))){
var inst_30726 = (state_30746[(8)]);
var inst_30729 = (state_30746[(10)]);
var inst_30729__$1 = cljs.core.nth.call(null,inst_30726,(0),null);
var inst_30730 = cljs.core.nthnext.call(null,inst_30726,(1));
var inst_30731 = (inst_30729__$1 == null);
var inst_30732 = cljs.core.not.call(null,inst_30731);
var state_30746__$1 = (function (){var statearr_30752 = state_30746;
(statearr_30752[(7)] = inst_30730);

(statearr_30752[(10)] = inst_30729__$1);

return statearr_30752;
})();
if(inst_30732){
var statearr_30753_30768 = state_30746__$1;
(statearr_30753_30768[(1)] = (4));

} else {
var statearr_30754_30769 = state_30746__$1;
(statearr_30754_30769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30747 === (1))){
var inst_30724 = cljs.core.nth.call(null,files,(0),null);
var inst_30725 = cljs.core.nthnext.call(null,files,(1));
var inst_30726 = files;
var state_30746__$1 = (function (){var statearr_30755 = state_30746;
(statearr_30755[(8)] = inst_30726);

(statearr_30755[(11)] = inst_30724);

(statearr_30755[(12)] = inst_30725);

return statearr_30755;
})();
var statearr_30756_30770 = state_30746__$1;
(statearr_30756_30770[(2)] = null);

(statearr_30756_30770[(1)] = (2));


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
});})(c__18806__auto___30764,out))
;
return ((function (switch__18750__auto__,c__18806__auto___30764,out){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30760 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30760[(0)] = state_machine__18751__auto__);

(statearr_30760[(1)] = (1));

return statearr_30760;
});
var state_machine__18751__auto____1 = (function (state_30746){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30761){if((e30761 instanceof Object)){
var ex__18754__auto__ = e30761;
var statearr_30762_30771 = state_30746;
(statearr_30762_30771[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30772 = state_30746;
state_30746 = G__30772;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30746){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___30764,out))
})();
var state__18808__auto__ = (function (){var statearr_30763 = f__18807__auto__.call(null);
(statearr_30763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___30764);

return statearr_30763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___30764,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30773,p__30774){
var map__30777 = p__30773;
var map__30777__$1 = ((cljs.core.seq_QMARK_.call(null,map__30777))?cljs.core.apply.call(null,cljs.core.hash_map,map__30777):map__30777);
var opts = map__30777__$1;
var url_rewriter = cljs.core.get.call(null,map__30777__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30778 = p__30774;
var map__30778__$1 = ((cljs.core.seq_QMARK_.call(null,map__30778))?cljs.core.apply.call(null,cljs.core.hash_map,map__30778):map__30778);
var file_msg = map__30778__$1;
var file = cljs.core.get.call(null,map__30778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30779){
var map__30782 = p__30779;
var map__30782__$1 = ((cljs.core.seq_QMARK_.call(null,map__30782))?cljs.core.apply.call(null,cljs.core.hash_map,map__30782):map__30782);
var file = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30782__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__15646__auto__ = eval_body__$1;
if(cljs.core.truth_(and__15646__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__15646__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e30783){var e = e30783;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30788,p__30789){
var map__30990 = p__30788;
var map__30990__$1 = ((cljs.core.seq_QMARK_.call(null,map__30990))?cljs.core.apply.call(null,cljs.core.hash_map,map__30990):map__30990);
var opts = map__30990__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30990__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30991 = p__30789;
var map__30991__$1 = ((cljs.core.seq_QMARK_.call(null,map__30991))?cljs.core.apply.call(null,cljs.core.hash_map,map__30991):map__30991);
var msg = map__30991__$1;
var files = cljs.core.get.call(null,map__30991__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (7))){
var inst_31004 = (state_31115[(7)]);
var inst_31002 = (state_31115[(8)]);
var inst_31005 = (state_31115[(9)]);
var inst_31003 = (state_31115[(10)]);
var inst_31010 = cljs.core._nth.call(null,inst_31003,inst_31005);
var inst_31011 = figwheel.client.file_reloading.eval_body.call(null,inst_31010);
var inst_31012 = (inst_31005 + (1));
var tmp31117 = inst_31004;
var tmp31118 = inst_31002;
var tmp31119 = inst_31003;
var inst_31002__$1 = tmp31118;
var inst_31003__$1 = tmp31119;
var inst_31004__$1 = tmp31117;
var inst_31005__$1 = inst_31012;
var state_31115__$1 = (function (){var statearr_31120 = state_31115;
(statearr_31120[(7)] = inst_31004__$1);

(statearr_31120[(8)] = inst_31002__$1);

(statearr_31120[(9)] = inst_31005__$1);

(statearr_31120[(11)] = inst_31011);

(statearr_31120[(10)] = inst_31003__$1);

return statearr_31120;
})();
var statearr_31121_31190 = state_31115__$1;
(statearr_31121_31190[(2)] = null);

(statearr_31121_31190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (20))){
var inst_31048 = (state_31115[(12)]);
var inst_31051 = (state_31115[(13)]);
var inst_31052 = (state_31115[(14)]);
var inst_31047 = (state_31115[(15)]);
var inst_31054 = (state_31115[(16)]);
var inst_31057 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31059 = (function (){var files_not_loaded = inst_31054;
var res = inst_31052;
var res_SINGLEQUOTE_ = inst_31051;
var files_SINGLEQUOTE_ = inst_31048;
var all_files = inst_31047;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31054,inst_31057,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p__31058){
var map__31122 = p__31058;
var map__31122__$1 = ((cljs.core.seq_QMARK_.call(null,map__31122))?cljs.core.apply.call(null,cljs.core.hash_map,map__31122):map__31122);
var file = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31054,inst_31057,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31060 = cljs.core.map.call(null,inst_31059,inst_31052);
var inst_31061 = cljs.core.pr_str.call(null,inst_31060);
var inst_31062 = figwheel.client.utils.log.call(null,inst_31061);
var inst_31063 = (function (){var files_not_loaded = inst_31054;
var res = inst_31052;
var res_SINGLEQUOTE_ = inst_31051;
var files_SINGLEQUOTE_ = inst_31048;
var all_files = inst_31047;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31054,inst_31057,inst_31059,inst_31060,inst_31061,inst_31062,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31054,inst_31057,inst_31059,inst_31060,inst_31061,inst_31062,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31064 = setTimeout(inst_31063,(10));
var state_31115__$1 = (function (){var statearr_31123 = state_31115;
(statearr_31123[(17)] = inst_31062);

(statearr_31123[(18)] = inst_31057);

return statearr_31123;
})();
var statearr_31124_31191 = state_31115__$1;
(statearr_31124_31191[(2)] = inst_31064);

(statearr_31124_31191[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (27))){
var inst_31074 = (state_31115[(19)]);
var state_31115__$1 = state_31115;
var statearr_31125_31192 = state_31115__$1;
(statearr_31125_31192[(2)] = inst_31074);

(statearr_31125_31192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (1))){
var inst_30994 = (state_31115[(20)]);
var inst_30992 = before_jsload.call(null,files);
var inst_30993 = (function (){return ((function (inst_30994,inst_30992,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p1__30784_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30784_SHARP_);
});
;})(inst_30994,inst_30992,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_30994__$1 = cljs.core.filter.call(null,inst_30993,files);
var inst_30995 = cljs.core.not_empty.call(null,inst_30994__$1);
var state_31115__$1 = (function (){var statearr_31126 = state_31115;
(statearr_31126[(21)] = inst_30992);

(statearr_31126[(20)] = inst_30994__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_30995)){
var statearr_31127_31193 = state_31115__$1;
(statearr_31127_31193[(1)] = (2));

} else {
var statearr_31128_31194 = state_31115__$1;
(statearr_31128_31194[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (24))){
var state_31115__$1 = state_31115;
var statearr_31129_31195 = state_31115__$1;
(statearr_31129_31195[(2)] = null);

(statearr_31129_31195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (4))){
var inst_31039 = (state_31115[(2)]);
var inst_31040 = (function (){return ((function (inst_31039,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p1__30785_SHARP_){
var and__15646__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30785_SHARP_);
if(cljs.core.truth_(and__15646__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30785_SHARP_));
} else {
return and__15646__auto__;
}
});
;})(inst_31039,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31041 = cljs.core.filter.call(null,inst_31040,files);
var state_31115__$1 = (function (){var statearr_31130 = state_31115;
(statearr_31130[(22)] = inst_31039);

(statearr_31130[(23)] = inst_31041);

return statearr_31130;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31131_31196 = state_31115__$1;
(statearr_31131_31196[(1)] = (16));

} else {
var statearr_31132_31197 = state_31115__$1;
(statearr_31132_31197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (15))){
var inst_31029 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31133_31198 = state_31115__$1;
(statearr_31133_31198[(2)] = inst_31029);

(statearr_31133_31198[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (21))){
var state_31115__$1 = state_31115;
var statearr_31134_31199 = state_31115__$1;
(statearr_31134_31199[(2)] = null);

(statearr_31134_31199[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (31))){
var inst_31082 = (state_31115[(24)]);
var inst_31092 = (state_31115[(2)]);
var inst_31093 = cljs.core.not_empty.call(null,inst_31082);
var state_31115__$1 = (function (){var statearr_31135 = state_31115;
(statearr_31135[(25)] = inst_31092);

return statearr_31135;
})();
if(cljs.core.truth_(inst_31093)){
var statearr_31136_31200 = state_31115__$1;
(statearr_31136_31200[(1)] = (32));

} else {
var statearr_31137_31201 = state_31115__$1;
(statearr_31137_31201[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (32))){
var inst_31082 = (state_31115[(24)]);
var inst_31095 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31082);
var inst_31096 = cljs.core.pr_str.call(null,inst_31095);
var inst_31097 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31096)].join('');
var inst_31098 = figwheel.client.utils.log.call(null,inst_31097);
var state_31115__$1 = state_31115;
var statearr_31138_31202 = state_31115__$1;
(statearr_31138_31202[(2)] = inst_31098);

(statearr_31138_31202[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (33))){
var state_31115__$1 = state_31115;
var statearr_31139_31203 = state_31115__$1;
(statearr_31139_31203[(2)] = null);

(statearr_31139_31203[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (13))){
var inst_31015 = (state_31115[(26)]);
var inst_31019 = cljs.core.chunk_first.call(null,inst_31015);
var inst_31020 = cljs.core.chunk_rest.call(null,inst_31015);
var inst_31021 = cljs.core.count.call(null,inst_31019);
var inst_31002 = inst_31020;
var inst_31003 = inst_31019;
var inst_31004 = inst_31021;
var inst_31005 = (0);
var state_31115__$1 = (function (){var statearr_31140 = state_31115;
(statearr_31140[(7)] = inst_31004);

(statearr_31140[(8)] = inst_31002);

(statearr_31140[(9)] = inst_31005);

(statearr_31140[(10)] = inst_31003);

return statearr_31140;
})();
var statearr_31141_31204 = state_31115__$1;
(statearr_31141_31204[(2)] = null);

(statearr_31141_31204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (22))){
var inst_31054 = (state_31115[(16)]);
var inst_31067 = (state_31115[(2)]);
var inst_31068 = cljs.core.not_empty.call(null,inst_31054);
var state_31115__$1 = (function (){var statearr_31142 = state_31115;
(statearr_31142[(27)] = inst_31067);

return statearr_31142;
})();
if(cljs.core.truth_(inst_31068)){
var statearr_31143_31205 = state_31115__$1;
(statearr_31143_31205[(1)] = (23));

} else {
var statearr_31144_31206 = state_31115__$1;
(statearr_31144_31206[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (36))){
var state_31115__$1 = state_31115;
var statearr_31145_31207 = state_31115__$1;
(statearr_31145_31207[(2)] = null);

(statearr_31145_31207[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (29))){
var inst_31083 = (state_31115[(28)]);
var inst_31086 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31083);
var inst_31087 = cljs.core.pr_str.call(null,inst_31086);
var inst_31088 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31087)].join('');
var inst_31089 = figwheel.client.utils.log.call(null,inst_31088);
var state_31115__$1 = state_31115;
var statearr_31146_31208 = state_31115__$1;
(statearr_31146_31208[(2)] = inst_31089);

(statearr_31146_31208[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (6))){
var inst_31036 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31147_31209 = state_31115__$1;
(statearr_31147_31209[(2)] = inst_31036);

(statearr_31147_31209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (28))){
var inst_31083 = (state_31115[(28)]);
var inst_31080 = (state_31115[(2)]);
var inst_31081 = cljs.core.get.call(null,inst_31080,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31082 = cljs.core.get.call(null,inst_31080,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31083__$1 = cljs.core.get.call(null,inst_31080,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31084 = cljs.core.not_empty.call(null,inst_31083__$1);
var state_31115__$1 = (function (){var statearr_31148 = state_31115;
(statearr_31148[(29)] = inst_31081);

(statearr_31148[(28)] = inst_31083__$1);

(statearr_31148[(24)] = inst_31082);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31084)){
var statearr_31149_31210 = state_31115__$1;
(statearr_31149_31210[(1)] = (29));

} else {
var statearr_31150_31211 = state_31115__$1;
(statearr_31150_31211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (25))){
var inst_31113 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31115__$1,inst_31113);
} else {
if((state_val_31116 === (34))){
var inst_31081 = (state_31115[(29)]);
var inst_31101 = (state_31115[(2)]);
var inst_31102 = cljs.core.not_empty.call(null,inst_31081);
var state_31115__$1 = (function (){var statearr_31151 = state_31115;
(statearr_31151[(30)] = inst_31101);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31102)){
var statearr_31152_31212 = state_31115__$1;
(statearr_31152_31212[(1)] = (35));

} else {
var statearr_31153_31213 = state_31115__$1;
(statearr_31153_31213[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (17))){
var inst_31041 = (state_31115[(23)]);
var state_31115__$1 = state_31115;
var statearr_31154_31214 = state_31115__$1;
(statearr_31154_31214[(2)] = inst_31041);

(statearr_31154_31214[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (3))){
var state_31115__$1 = state_31115;
var statearr_31155_31215 = state_31115__$1;
(statearr_31155_31215[(2)] = null);

(statearr_31155_31215[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (12))){
var inst_31032 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31156_31216 = state_31115__$1;
(statearr_31156_31216[(2)] = inst_31032);

(statearr_31156_31216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (2))){
var inst_30994 = (state_31115[(20)]);
var inst_31001 = cljs.core.seq.call(null,inst_30994);
var inst_31002 = inst_31001;
var inst_31003 = null;
var inst_31004 = (0);
var inst_31005 = (0);
var state_31115__$1 = (function (){var statearr_31157 = state_31115;
(statearr_31157[(7)] = inst_31004);

(statearr_31157[(8)] = inst_31002);

(statearr_31157[(9)] = inst_31005);

(statearr_31157[(10)] = inst_31003);

return statearr_31157;
})();
var statearr_31158_31217 = state_31115__$1;
(statearr_31158_31217[(2)] = null);

(statearr_31158_31217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (23))){
var inst_31048 = (state_31115[(12)]);
var inst_31051 = (state_31115[(13)]);
var inst_31052 = (state_31115[(14)]);
var inst_31047 = (state_31115[(15)]);
var inst_31074 = (state_31115[(19)]);
var inst_31054 = (state_31115[(16)]);
var inst_31070 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31073 = (function (){var files_not_loaded = inst_31054;
var res = inst_31052;
var res_SINGLEQUOTE_ = inst_31051;
var files_SINGLEQUOTE_ = inst_31048;
var all_files = inst_31047;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31074,inst_31054,inst_31070,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p__31072){
var map__31159 = p__31072;
var map__31159__$1 = ((cljs.core.seq_QMARK_.call(null,map__31159))?cljs.core.apply.call(null,cljs.core.hash_map,map__31159):map__31159);
var meta_data = cljs.core.get.call(null,map__31159__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31074,inst_31054,inst_31070,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31074__$1 = cljs.core.group_by.call(null,inst_31073,inst_31054);
var inst_31075 = cljs.core.seq_QMARK_.call(null,inst_31074__$1);
var state_31115__$1 = (function (){var statearr_31160 = state_31115;
(statearr_31160[(19)] = inst_31074__$1);

(statearr_31160[(31)] = inst_31070);

return statearr_31160;
})();
if(inst_31075){
var statearr_31161_31218 = state_31115__$1;
(statearr_31161_31218[(1)] = (26));

} else {
var statearr_31162_31219 = state_31115__$1;
(statearr_31162_31219[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (35))){
var inst_31081 = (state_31115[(29)]);
var inst_31104 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31081);
var inst_31105 = cljs.core.pr_str.call(null,inst_31104);
var inst_31106 = [cljs.core.str("not required: "),cljs.core.str(inst_31105)].join('');
var inst_31107 = figwheel.client.utils.log.call(null,inst_31106);
var state_31115__$1 = state_31115;
var statearr_31163_31220 = state_31115__$1;
(statearr_31163_31220[(2)] = inst_31107);

(statearr_31163_31220[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (19))){
var inst_31048 = (state_31115[(12)]);
var inst_31051 = (state_31115[(13)]);
var inst_31052 = (state_31115[(14)]);
var inst_31047 = (state_31115[(15)]);
var inst_31051__$1 = (state_31115[(2)]);
var inst_31052__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31051__$1);
var inst_31053 = (function (){var res = inst_31052__$1;
var res_SINGLEQUOTE_ = inst_31051__$1;
var files_SINGLEQUOTE_ = inst_31048;
var all_files = inst_31047;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31051__$1,inst_31052__$1,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p1__30787_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30787_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31048,inst_31051,inst_31052,inst_31047,inst_31051__$1,inst_31052__$1,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31054 = cljs.core.filter.call(null,inst_31053,inst_31051__$1);
var inst_31055 = cljs.core.not_empty.call(null,inst_31052__$1);
var state_31115__$1 = (function (){var statearr_31164 = state_31115;
(statearr_31164[(13)] = inst_31051__$1);

(statearr_31164[(14)] = inst_31052__$1);

(statearr_31164[(16)] = inst_31054);

return statearr_31164;
})();
if(cljs.core.truth_(inst_31055)){
var statearr_31165_31221 = state_31115__$1;
(statearr_31165_31221[(1)] = (20));

} else {
var statearr_31166_31222 = state_31115__$1;
(statearr_31166_31222[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (11))){
var state_31115__$1 = state_31115;
var statearr_31167_31223 = state_31115__$1;
(statearr_31167_31223[(2)] = null);

(statearr_31167_31223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (9))){
var inst_31034 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31168_31224 = state_31115__$1;
(statearr_31168_31224[(2)] = inst_31034);

(statearr_31168_31224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (5))){
var inst_31004 = (state_31115[(7)]);
var inst_31005 = (state_31115[(9)]);
var inst_31007 = (inst_31005 < inst_31004);
var inst_31008 = inst_31007;
var state_31115__$1 = state_31115;
if(cljs.core.truth_(inst_31008)){
var statearr_31169_31225 = state_31115__$1;
(statearr_31169_31225[(1)] = (7));

} else {
var statearr_31170_31226 = state_31115__$1;
(statearr_31170_31226[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (14))){
var inst_31015 = (state_31115[(26)]);
var inst_31024 = cljs.core.first.call(null,inst_31015);
var inst_31025 = figwheel.client.file_reloading.eval_body.call(null,inst_31024);
var inst_31026 = cljs.core.next.call(null,inst_31015);
var inst_31002 = inst_31026;
var inst_31003 = null;
var inst_31004 = (0);
var inst_31005 = (0);
var state_31115__$1 = (function (){var statearr_31171 = state_31115;
(statearr_31171[(7)] = inst_31004);

(statearr_31171[(8)] = inst_31002);

(statearr_31171[(9)] = inst_31005);

(statearr_31171[(32)] = inst_31025);

(statearr_31171[(10)] = inst_31003);

return statearr_31171;
})();
var statearr_31172_31227 = state_31115__$1;
(statearr_31172_31227[(2)] = null);

(statearr_31172_31227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (26))){
var inst_31074 = (state_31115[(19)]);
var inst_31077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31074);
var state_31115__$1 = state_31115;
var statearr_31173_31228 = state_31115__$1;
(statearr_31173_31228[(2)] = inst_31077);

(statearr_31173_31228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (16))){
var inst_31041 = (state_31115[(23)]);
var inst_31043 = (function (){var all_files = inst_31041;
return ((function (all_files,inst_31041,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function (p1__30786_SHARP_){
return cljs.core.update_in.call(null,p1__30786_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31041,state_val_31116,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var inst_31044 = cljs.core.map.call(null,inst_31043,inst_31041);
var state_31115__$1 = state_31115;
var statearr_31174_31229 = state_31115__$1;
(statearr_31174_31229[(2)] = inst_31044);

(statearr_31174_31229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (30))){
var state_31115__$1 = state_31115;
var statearr_31175_31230 = state_31115__$1;
(statearr_31175_31230[(2)] = null);

(statearr_31175_31230[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (10))){
var inst_31015 = (state_31115[(26)]);
var inst_31017 = cljs.core.chunked_seq_QMARK_.call(null,inst_31015);
var state_31115__$1 = state_31115;
if(inst_31017){
var statearr_31176_31231 = state_31115__$1;
(statearr_31176_31231[(1)] = (13));

} else {
var statearr_31177_31232 = state_31115__$1;
(statearr_31177_31232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (18))){
var inst_31048 = (state_31115[(12)]);
var inst_31047 = (state_31115[(15)]);
var inst_31047__$1 = (state_31115[(2)]);
var inst_31048__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31047__$1);
var inst_31049 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31048__$1);
var state_31115__$1 = (function (){var statearr_31178 = state_31115;
(statearr_31178[(12)] = inst_31048__$1);

(statearr_31178[(15)] = inst_31047__$1);

return statearr_31178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31115__$1,(19),inst_31049);
} else {
if((state_val_31116 === (37))){
var inst_31110 = (state_31115[(2)]);
var state_31115__$1 = state_31115;
var statearr_31179_31233 = state_31115__$1;
(statearr_31179_31233[(2)] = inst_31110);

(statearr_31179_31233[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31116 === (8))){
var inst_31002 = (state_31115[(8)]);
var inst_31015 = (state_31115[(26)]);
var inst_31015__$1 = cljs.core.seq.call(null,inst_31002);
var state_31115__$1 = (function (){var statearr_31180 = state_31115;
(statearr_31180[(26)] = inst_31015__$1);

return statearr_31180;
})();
if(inst_31015__$1){
var statearr_31181_31234 = state_31115__$1;
(statearr_31181_31234[(1)] = (10));

} else {
var statearr_31182_31235 = state_31115__$1;
(statearr_31182_31235[(1)] = (11));

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
});})(c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
;
return ((function (switch__18750__auto__,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31186[(0)] = state_machine__18751__auto__);

(statearr_31186[(1)] = (1));

return statearr_31186;
});
var state_machine__18751__auto____1 = (function (state_31115){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31187){if((e31187 instanceof Object)){
var ex__18754__auto__ = e31187;
var statearr_31188_31236 = state_31115;
(statearr_31188_31236[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31237 = state_31115;
state_31115 = G__31237;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
})();
var state__18808__auto__ = (function (){var statearr_31189 = f__18807__auto__.call(null);
(statearr_31189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_31189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__,map__30990,map__30990__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30991,map__30991__$1,msg,files))
);

return c__18806__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31240,link){
var map__31242 = p__31240;
var map__31242__$1 = ((cljs.core.seq_QMARK_.call(null,map__31242))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);
var file = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31242,map__31242__$1,file){
return (function (p1__31238_SHARP_,p2__31239_SHARP_){
if(cljs.core._EQ_.call(null,p1__31238_SHARP_,p2__31239_SHARP_)){
return p1__31238_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31242,map__31242__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31246){
var map__31247 = p__31246;
var map__31247__$1 = ((cljs.core.seq_QMARK_.call(null,map__31247))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var current_url_length = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31243_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31243_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31248){
var map__31250 = p__31248;
var map__31250__$1 = ((cljs.core.seq_QMARK_.call(null,map__31250))?cljs.core.apply.call(null,cljs.core.hash_map,map__31250):map__31250);
var f_data = map__31250__$1;
var request_url = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__15658__auto__ = request_url;
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31251,files_msg){
var map__31273 = p__31251;
var map__31273__$1 = ((cljs.core.seq_QMARK_.call(null,map__31273))?cljs.core.apply.call(null,cljs.core.hash_map,map__31273):map__31273);
var opts = map__31273__$1;
var on_cssload = cljs.core.get.call(null,map__31273__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31274_31294 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31275_31295 = null;
var count__31276_31296 = (0);
var i__31277_31297 = (0);
while(true){
if((i__31277_31297 < count__31276_31296)){
var f_31298 = cljs.core._nth.call(null,chunk__31275_31295,i__31277_31297);
figwheel.client.file_reloading.reload_css_file.call(null,f_31298);

var G__31299 = seq__31274_31294;
var G__31300 = chunk__31275_31295;
var G__31301 = count__31276_31296;
var G__31302 = (i__31277_31297 + (1));
seq__31274_31294 = G__31299;
chunk__31275_31295 = G__31300;
count__31276_31296 = G__31301;
i__31277_31297 = G__31302;
continue;
} else {
var temp__4126__auto___31303 = cljs.core.seq.call(null,seq__31274_31294);
if(temp__4126__auto___31303){
var seq__31274_31304__$1 = temp__4126__auto___31303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31274_31304__$1)){
var c__16445__auto___31305 = cljs.core.chunk_first.call(null,seq__31274_31304__$1);
var G__31306 = cljs.core.chunk_rest.call(null,seq__31274_31304__$1);
var G__31307 = c__16445__auto___31305;
var G__31308 = cljs.core.count.call(null,c__16445__auto___31305);
var G__31309 = (0);
seq__31274_31294 = G__31306;
chunk__31275_31295 = G__31307;
count__31276_31296 = G__31308;
i__31277_31297 = G__31309;
continue;
} else {
var f_31310 = cljs.core.first.call(null,seq__31274_31304__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31310);

var G__31311 = cljs.core.next.call(null,seq__31274_31304__$1);
var G__31312 = null;
var G__31313 = (0);
var G__31314 = (0);
seq__31274_31294 = G__31311;
chunk__31275_31295 = G__31312;
count__31276_31296 = G__31313;
i__31277_31297 = G__31314;
continue;
}
} else {
}
}
break;
}

var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function (state_31284){
var state_val_31285 = (state_31284[(1)]);
if((state_val_31285 === (2))){
var inst_31280 = (state_31284[(2)]);
var inst_31281 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31282 = on_cssload.call(null,inst_31281);
var state_31284__$1 = (function (){var statearr_31286 = state_31284;
(statearr_31286[(7)] = inst_31280);

return statearr_31286;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31284__$1,inst_31282);
} else {
if((state_val_31285 === (1))){
var inst_31278 = cljs.core.async.timeout.call(null,(100));
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31284__$1,(2),inst_31278);
} else {
return null;
}
}
});})(c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload))
;
return ((function (switch__18750__auto__,c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_31290 = [null,null,null,null,null,null,null,null];
(statearr_31290[(0)] = state_machine__18751__auto__);

(statearr_31290[(1)] = (1));

return statearr_31290;
});
var state_machine__18751__auto____1 = (function (state_31284){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_31284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object)){
var ex__18754__auto__ = e31291;
var statearr_31292_31315 = state_31284;
(statearr_31292_31315[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31316 = state_31284;
state_31284 = G__31316;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_31284){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_31284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload))
})();
var state__18808__auto__ = (function (){var statearr_31293 = f__18807__auto__.call(null);
(statearr_31293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_31293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__,map__31273,map__31273__$1,opts,on_cssload))
);

return c__18806__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map