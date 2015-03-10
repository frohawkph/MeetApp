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
return cljs.core.reduce.call(null,(function (p1__30621_SHARP_,p2__30622_SHARP_){
var and__15646__auto__ = p1__30621_SHARP_;
if(cljs.core.truth_(and__15646__auto__)){
return p2__30622_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__30624_SHARP_,p2__30623_SHARP_){
return [cljs.core.str(p2__30623_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__30625){
var map__30626 = p__30625;
var map__30626__$1 = ((cljs.core.seq_QMARK_.call(null,map__30626))?cljs.core.apply.call(null,cljs.core.hash_map,map__30626):map__30626);
var file = cljs.core.get.call(null,map__30626__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__30627){
var map__30628 = p__30627;
var map__30628__$1 = ((cljs.core.seq_QMARK_.call(null,map__30628))?cljs.core.apply.call(null,cljs.core.hash_map,map__30628):map__30628);
var namespace = cljs.core.get.call(null,map__30628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e30629){if((e30629 instanceof Error)){
var e = e30629;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30629;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__30630,callback){
var map__30632 = p__30630;
var map__30632__$1 = ((cljs.core.seq_QMARK_.call(null,map__30632))?cljs.core.apply.call(null,cljs.core.hash_map,map__30632):map__30632);
var file_msg = map__30632__$1;
var request_url = cljs.core.get.call(null,map__30632__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30632,map__30632__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30632,map__30632__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__30633){
var map__30635 = p__30633;
var map__30635__$1 = ((cljs.core.seq_QMARK_.call(null,map__30635))?cljs.core.apply.call(null,cljs.core.hash_map,map__30635):map__30635);
var file_msg = map__30635__$1;
var meta_data = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__30635__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function js_reload(p__30636,callback){
var map__30638 = p__30636;
var map__30638__$1 = ((cljs.core.seq_QMARK_.call(null,map__30638))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);
var file_msg = map__30638__$1;
var namespace = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__18767__auto___30725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___30725,out){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___30725,out){
return (function (state_30707){
var state_val_30708 = (state_30707[(1)]);
if((state_val_30708 === (7))){
var inst_30691 = (state_30707[(7)]);
var inst_30697 = (state_30707[(2)]);
var inst_30698 = cljs.core.async.put_BANG_.call(null,out,inst_30697);
var inst_30687 = inst_30691;
var state_30707__$1 = (function (){var statearr_30709 = state_30707;
(statearr_30709[(8)] = inst_30698);

(statearr_30709[(9)] = inst_30687);

return statearr_30709;
})();
var statearr_30710_30726 = state_30707__$1;
(statearr_30710_30726[(2)] = null);

(statearr_30710_30726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (6))){
var inst_30703 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30711_30727 = state_30707__$1;
(statearr_30711_30727[(2)] = inst_30703);

(statearr_30711_30727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (5))){
var inst_30701 = cljs.core.async.close_BANG_.call(null,out);
var state_30707__$1 = state_30707;
var statearr_30712_30728 = state_30707__$1;
(statearr_30712_30728[(2)] = inst_30701);

(statearr_30712_30728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (4))){
var inst_30690 = (state_30707[(10)]);
var inst_30695 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30690);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30707__$1,(7),inst_30695);
} else {
if((state_val_30708 === (3))){
var inst_30705 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30707__$1,inst_30705);
} else {
if((state_val_30708 === (2))){
var inst_30687 = (state_30707[(9)]);
var inst_30690 = (state_30707[(10)]);
var inst_30690__$1 = cljs.core.nth.call(null,inst_30687,(0),null);
var inst_30691 = cljs.core.nthnext.call(null,inst_30687,(1));
var inst_30692 = (inst_30690__$1 == null);
var inst_30693 = cljs.core.not.call(null,inst_30692);
var state_30707__$1 = (function (){var statearr_30713 = state_30707;
(statearr_30713[(7)] = inst_30691);

(statearr_30713[(10)] = inst_30690__$1);

return statearr_30713;
})();
if(inst_30693){
var statearr_30714_30729 = state_30707__$1;
(statearr_30714_30729[(1)] = (4));

} else {
var statearr_30715_30730 = state_30707__$1;
(statearr_30715_30730[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (1))){
var inst_30685 = cljs.core.nth.call(null,files,(0),null);
var inst_30686 = cljs.core.nthnext.call(null,files,(1));
var inst_30687 = files;
var state_30707__$1 = (function (){var statearr_30716 = state_30707;
(statearr_30716[(9)] = inst_30687);

(statearr_30716[(11)] = inst_30685);

(statearr_30716[(12)] = inst_30686);

return statearr_30716;
})();
var statearr_30717_30731 = state_30707__$1;
(statearr_30717_30731[(2)] = null);

(statearr_30717_30731[(1)] = (2));


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
});})(c__18767__auto___30725,out))
;
return ((function (switch__18711__auto__,c__18767__auto___30725,out){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_30721 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30721[(0)] = state_machine__18712__auto__);

(statearr_30721[(1)] = (1));

return statearr_30721;
});
var state_machine__18712__auto____1 = (function (state_30707){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_30707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e30722){if((e30722 instanceof Object)){
var ex__18715__auto__ = e30722;
var statearr_30723_30732 = state_30707;
(statearr_30723_30732[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30733 = state_30707;
state_30707 = G__30733;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_30707){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_30707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___30725,out))
})();
var state__18769__auto__ = (function (){var statearr_30724 = f__18768__auto__.call(null);
(statearr_30724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___30725);

return statearr_30724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___30725,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__30734,p__30735){
var map__30738 = p__30734;
var map__30738__$1 = ((cljs.core.seq_QMARK_.call(null,map__30738))?cljs.core.apply.call(null,cljs.core.hash_map,map__30738):map__30738);
var opts = map__30738__$1;
var url_rewriter = cljs.core.get.call(null,map__30738__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30739 = p__30735;
var map__30739__$1 = ((cljs.core.seq_QMARK_.call(null,map__30739))?cljs.core.apply.call(null,cljs.core.hash_map,map__30739):map__30739);
var file_msg = map__30739__$1;
var file = cljs.core.get.call(null,map__30739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__30740){
var map__30743 = p__30740;
var map__30743__$1 = ((cljs.core.seq_QMARK_.call(null,map__30743))?cljs.core.apply.call(null,cljs.core.hash_map,map__30743):map__30743);
var file = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__30743__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e30744){var e = e30744;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__30749,p__30750){
var map__30951 = p__30749;
var map__30951__$1 = ((cljs.core.seq_QMARK_.call(null,map__30951))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);
var opts = map__30951__$1;
var load_unchanged_files = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30952 = p__30750;
var map__30952__$1 = ((cljs.core.seq_QMARK_.call(null,map__30952))?cljs.core.apply.call(null,cljs.core.hash_map,map__30952):map__30952);
var msg = map__30952__$1;
var files = cljs.core.get.call(null,map__30952__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (state_31076){
var state_val_31077 = (state_31076[(1)]);
if((state_val_31077 === (7))){
var inst_30966 = (state_31076[(7)]);
var inst_30963 = (state_31076[(8)]);
var inst_30964 = (state_31076[(9)]);
var inst_30965 = (state_31076[(10)]);
var inst_30971 = cljs.core._nth.call(null,inst_30964,inst_30966);
var inst_30972 = figwheel.client.file_reloading.eval_body.call(null,inst_30971);
var inst_30973 = (inst_30966 + (1));
var tmp31078 = inst_30963;
var tmp31079 = inst_30964;
var tmp31080 = inst_30965;
var inst_30963__$1 = tmp31078;
var inst_30964__$1 = tmp31079;
var inst_30965__$1 = tmp31080;
var inst_30966__$1 = inst_30973;
var state_31076__$1 = (function (){var statearr_31081 = state_31076;
(statearr_31081[(7)] = inst_30966__$1);

(statearr_31081[(8)] = inst_30963__$1);

(statearr_31081[(9)] = inst_30964__$1);

(statearr_31081[(11)] = inst_30972);

(statearr_31081[(10)] = inst_30965__$1);

return statearr_31081;
})();
var statearr_31082_31151 = state_31076__$1;
(statearr_31082_31151[(2)] = null);

(statearr_31082_31151[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (20))){
var inst_31013 = (state_31076[(12)]);
var inst_31015 = (state_31076[(13)]);
var inst_31008 = (state_31076[(14)]);
var inst_31012 = (state_31076[(15)]);
var inst_31009 = (state_31076[(16)]);
var inst_31018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31020 = (function (){var files_not_loaded = inst_31015;
var res = inst_31013;
var res_SINGLEQUOTE_ = inst_31012;
var files_SINGLEQUOTE_ = inst_31009;
var all_files = inst_31008;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31015,inst_31008,inst_31012,inst_31009,inst_31018,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p__31019){
var map__31083 = p__31019;
var map__31083__$1 = ((cljs.core.seq_QMARK_.call(null,map__31083))?cljs.core.apply.call(null,cljs.core.hash_map,map__31083):map__31083);
var file = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31083__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31015,inst_31008,inst_31012,inst_31009,inst_31018,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31021 = cljs.core.map.call(null,inst_31020,inst_31013);
var inst_31022 = cljs.core.pr_str.call(null,inst_31021);
var inst_31023 = figwheel.client.utils.log.call(null,inst_31022);
var inst_31024 = (function (){var files_not_loaded = inst_31015;
var res = inst_31013;
var res_SINGLEQUOTE_ = inst_31012;
var files_SINGLEQUOTE_ = inst_31009;
var all_files = inst_31008;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31015,inst_31008,inst_31012,inst_31009,inst_31018,inst_31020,inst_31021,inst_31022,inst_31023,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31015,inst_31008,inst_31012,inst_31009,inst_31018,inst_31020,inst_31021,inst_31022,inst_31023,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31025 = setTimeout(inst_31024,(10));
var state_31076__$1 = (function (){var statearr_31084 = state_31076;
(statearr_31084[(17)] = inst_31018);

(statearr_31084[(18)] = inst_31023);

return statearr_31084;
})();
var statearr_31085_31152 = state_31076__$1;
(statearr_31085_31152[(2)] = inst_31025);

(statearr_31085_31152[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (27))){
var inst_31035 = (state_31076[(19)]);
var state_31076__$1 = state_31076;
var statearr_31086_31153 = state_31076__$1;
(statearr_31086_31153[(2)] = inst_31035);

(statearr_31086_31153[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (1))){
var inst_30955 = (state_31076[(20)]);
var inst_30953 = before_jsload.call(null,files);
var inst_30954 = (function (){return ((function (inst_30955,inst_30953,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p1__30745_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30745_SHARP_);
});
;})(inst_30955,inst_30953,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_30955__$1 = cljs.core.filter.call(null,inst_30954,files);
var inst_30956 = cljs.core.not_empty.call(null,inst_30955__$1);
var state_31076__$1 = (function (){var statearr_31087 = state_31076;
(statearr_31087[(20)] = inst_30955__$1);

(statearr_31087[(21)] = inst_30953);

return statearr_31087;
})();
if(cljs.core.truth_(inst_30956)){
var statearr_31088_31154 = state_31076__$1;
(statearr_31088_31154[(1)] = (2));

} else {
var statearr_31089_31155 = state_31076__$1;
(statearr_31089_31155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (24))){
var state_31076__$1 = state_31076;
var statearr_31090_31156 = state_31076__$1;
(statearr_31090_31156[(2)] = null);

(statearr_31090_31156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (4))){
var inst_31000 = (state_31076[(2)]);
var inst_31001 = (function (){return ((function (inst_31000,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p1__30746_SHARP_){
var and__15646__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30746_SHARP_);
if(cljs.core.truth_(and__15646__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30746_SHARP_));
} else {
return and__15646__auto__;
}
});
;})(inst_31000,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31002 = cljs.core.filter.call(null,inst_31001,files);
var state_31076__$1 = (function (){var statearr_31091 = state_31076;
(statearr_31091[(22)] = inst_31002);

(statearr_31091[(23)] = inst_31000);

return statearr_31091;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31092_31157 = state_31076__$1;
(statearr_31092_31157[(1)] = (16));

} else {
var statearr_31093_31158 = state_31076__$1;
(statearr_31093_31158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (15))){
var inst_30990 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31094_31159 = state_31076__$1;
(statearr_31094_31159[(2)] = inst_30990);

(statearr_31094_31159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (21))){
var state_31076__$1 = state_31076;
var statearr_31095_31160 = state_31076__$1;
(statearr_31095_31160[(2)] = null);

(statearr_31095_31160[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (31))){
var inst_31043 = (state_31076[(24)]);
var inst_31053 = (state_31076[(2)]);
var inst_31054 = cljs.core.not_empty.call(null,inst_31043);
var state_31076__$1 = (function (){var statearr_31096 = state_31076;
(statearr_31096[(25)] = inst_31053);

return statearr_31096;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31097_31161 = state_31076__$1;
(statearr_31097_31161[(1)] = (32));

} else {
var statearr_31098_31162 = state_31076__$1;
(statearr_31098_31162[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (32))){
var inst_31043 = (state_31076[(24)]);
var inst_31056 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31043);
var inst_31057 = cljs.core.pr_str.call(null,inst_31056);
var inst_31058 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31057)].join('');
var inst_31059 = figwheel.client.utils.log.call(null,inst_31058);
var state_31076__$1 = state_31076;
var statearr_31099_31163 = state_31076__$1;
(statearr_31099_31163[(2)] = inst_31059);

(statearr_31099_31163[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (33))){
var state_31076__$1 = state_31076;
var statearr_31100_31164 = state_31076__$1;
(statearr_31100_31164[(2)] = null);

(statearr_31100_31164[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (13))){
var inst_30976 = (state_31076[(26)]);
var inst_30980 = cljs.core.chunk_first.call(null,inst_30976);
var inst_30981 = cljs.core.chunk_rest.call(null,inst_30976);
var inst_30982 = cljs.core.count.call(null,inst_30980);
var inst_30963 = inst_30981;
var inst_30964 = inst_30980;
var inst_30965 = inst_30982;
var inst_30966 = (0);
var state_31076__$1 = (function (){var statearr_31101 = state_31076;
(statearr_31101[(7)] = inst_30966);

(statearr_31101[(8)] = inst_30963);

(statearr_31101[(9)] = inst_30964);

(statearr_31101[(10)] = inst_30965);

return statearr_31101;
})();
var statearr_31102_31165 = state_31076__$1;
(statearr_31102_31165[(2)] = null);

(statearr_31102_31165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (22))){
var inst_31015 = (state_31076[(13)]);
var inst_31028 = (state_31076[(2)]);
var inst_31029 = cljs.core.not_empty.call(null,inst_31015);
var state_31076__$1 = (function (){var statearr_31103 = state_31076;
(statearr_31103[(27)] = inst_31028);

return statearr_31103;
})();
if(cljs.core.truth_(inst_31029)){
var statearr_31104_31166 = state_31076__$1;
(statearr_31104_31166[(1)] = (23));

} else {
var statearr_31105_31167 = state_31076__$1;
(statearr_31105_31167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (36))){
var state_31076__$1 = state_31076;
var statearr_31106_31168 = state_31076__$1;
(statearr_31106_31168[(2)] = null);

(statearr_31106_31168[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (29))){
var inst_31044 = (state_31076[(28)]);
var inst_31047 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31044);
var inst_31048 = cljs.core.pr_str.call(null,inst_31047);
var inst_31049 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31048)].join('');
var inst_31050 = figwheel.client.utils.log.call(null,inst_31049);
var state_31076__$1 = state_31076;
var statearr_31107_31169 = state_31076__$1;
(statearr_31107_31169[(2)] = inst_31050);

(statearr_31107_31169[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (6))){
var inst_30997 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31108_31170 = state_31076__$1;
(statearr_31108_31170[(2)] = inst_30997);

(statearr_31108_31170[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (28))){
var inst_31044 = (state_31076[(28)]);
var inst_31041 = (state_31076[(2)]);
var inst_31042 = cljs.core.get.call(null,inst_31041,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31043 = cljs.core.get.call(null,inst_31041,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31044__$1 = cljs.core.get.call(null,inst_31041,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31045 = cljs.core.not_empty.call(null,inst_31044__$1);
var state_31076__$1 = (function (){var statearr_31109 = state_31076;
(statearr_31109[(28)] = inst_31044__$1);

(statearr_31109[(24)] = inst_31043);

(statearr_31109[(29)] = inst_31042);

return statearr_31109;
})();
if(cljs.core.truth_(inst_31045)){
var statearr_31110_31171 = state_31076__$1;
(statearr_31110_31171[(1)] = (29));

} else {
var statearr_31111_31172 = state_31076__$1;
(statearr_31111_31172[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (25))){
var inst_31074 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31076__$1,inst_31074);
} else {
if((state_val_31077 === (34))){
var inst_31042 = (state_31076[(29)]);
var inst_31062 = (state_31076[(2)]);
var inst_31063 = cljs.core.not_empty.call(null,inst_31042);
var state_31076__$1 = (function (){var statearr_31112 = state_31076;
(statearr_31112[(30)] = inst_31062);

return statearr_31112;
})();
if(cljs.core.truth_(inst_31063)){
var statearr_31113_31173 = state_31076__$1;
(statearr_31113_31173[(1)] = (35));

} else {
var statearr_31114_31174 = state_31076__$1;
(statearr_31114_31174[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (17))){
var inst_31002 = (state_31076[(22)]);
var state_31076__$1 = state_31076;
var statearr_31115_31175 = state_31076__$1;
(statearr_31115_31175[(2)] = inst_31002);

(statearr_31115_31175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (3))){
var state_31076__$1 = state_31076;
var statearr_31116_31176 = state_31076__$1;
(statearr_31116_31176[(2)] = null);

(statearr_31116_31176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (12))){
var inst_30993 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31117_31177 = state_31076__$1;
(statearr_31117_31177[(2)] = inst_30993);

(statearr_31117_31177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (2))){
var inst_30955 = (state_31076[(20)]);
var inst_30962 = cljs.core.seq.call(null,inst_30955);
var inst_30963 = inst_30962;
var inst_30964 = null;
var inst_30965 = (0);
var inst_30966 = (0);
var state_31076__$1 = (function (){var statearr_31118 = state_31076;
(statearr_31118[(7)] = inst_30966);

(statearr_31118[(8)] = inst_30963);

(statearr_31118[(9)] = inst_30964);

(statearr_31118[(10)] = inst_30965);

return statearr_31118;
})();
var statearr_31119_31178 = state_31076__$1;
(statearr_31119_31178[(2)] = null);

(statearr_31119_31178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (23))){
var inst_31013 = (state_31076[(12)]);
var inst_31035 = (state_31076[(19)]);
var inst_31015 = (state_31076[(13)]);
var inst_31008 = (state_31076[(14)]);
var inst_31012 = (state_31076[(15)]);
var inst_31009 = (state_31076[(16)]);
var inst_31031 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31034 = (function (){var files_not_loaded = inst_31015;
var res = inst_31013;
var res_SINGLEQUOTE_ = inst_31012;
var files_SINGLEQUOTE_ = inst_31009;
var all_files = inst_31008;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31035,inst_31015,inst_31008,inst_31012,inst_31009,inst_31031,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p__31033){
var map__31120 = p__31033;
var map__31120__$1 = ((cljs.core.seq_QMARK_.call(null,map__31120))?cljs.core.apply.call(null,cljs.core.hash_map,map__31120):map__31120);
var meta_data = cljs.core.get.call(null,map__31120__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31035,inst_31015,inst_31008,inst_31012,inst_31009,inst_31031,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31035__$1 = cljs.core.group_by.call(null,inst_31034,inst_31015);
var inst_31036 = cljs.core.seq_QMARK_.call(null,inst_31035__$1);
var state_31076__$1 = (function (){var statearr_31121 = state_31076;
(statearr_31121[(31)] = inst_31031);

(statearr_31121[(19)] = inst_31035__$1);

return statearr_31121;
})();
if(inst_31036){
var statearr_31122_31179 = state_31076__$1;
(statearr_31122_31179[(1)] = (26));

} else {
var statearr_31123_31180 = state_31076__$1;
(statearr_31123_31180[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (35))){
var inst_31042 = (state_31076[(29)]);
var inst_31065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31042);
var inst_31066 = cljs.core.pr_str.call(null,inst_31065);
var inst_31067 = [cljs.core.str("not required: "),cljs.core.str(inst_31066)].join('');
var inst_31068 = figwheel.client.utils.log.call(null,inst_31067);
var state_31076__$1 = state_31076;
var statearr_31124_31181 = state_31076__$1;
(statearr_31124_31181[(2)] = inst_31068);

(statearr_31124_31181[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (19))){
var inst_31013 = (state_31076[(12)]);
var inst_31008 = (state_31076[(14)]);
var inst_31012 = (state_31076[(15)]);
var inst_31009 = (state_31076[(16)]);
var inst_31012__$1 = (state_31076[(2)]);
var inst_31013__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31012__$1);
var inst_31014 = (function (){var res = inst_31013__$1;
var res_SINGLEQUOTE_ = inst_31012__$1;
var files_SINGLEQUOTE_ = inst_31009;
var all_files = inst_31008;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31008,inst_31012,inst_31009,inst_31012__$1,inst_31013__$1,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p1__30748_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30748_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31013,inst_31008,inst_31012,inst_31009,inst_31012__$1,inst_31013__$1,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31015 = cljs.core.filter.call(null,inst_31014,inst_31012__$1);
var inst_31016 = cljs.core.not_empty.call(null,inst_31013__$1);
var state_31076__$1 = (function (){var statearr_31125 = state_31076;
(statearr_31125[(12)] = inst_31013__$1);

(statearr_31125[(13)] = inst_31015);

(statearr_31125[(15)] = inst_31012__$1);

return statearr_31125;
})();
if(cljs.core.truth_(inst_31016)){
var statearr_31126_31182 = state_31076__$1;
(statearr_31126_31182[(1)] = (20));

} else {
var statearr_31127_31183 = state_31076__$1;
(statearr_31127_31183[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (11))){
var state_31076__$1 = state_31076;
var statearr_31128_31184 = state_31076__$1;
(statearr_31128_31184[(2)] = null);

(statearr_31128_31184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (9))){
var inst_30995 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31129_31185 = state_31076__$1;
(statearr_31129_31185[(2)] = inst_30995);

(statearr_31129_31185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (5))){
var inst_30966 = (state_31076[(7)]);
var inst_30965 = (state_31076[(10)]);
var inst_30968 = (inst_30966 < inst_30965);
var inst_30969 = inst_30968;
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_30969)){
var statearr_31130_31186 = state_31076__$1;
(statearr_31130_31186[(1)] = (7));

} else {
var statearr_31131_31187 = state_31076__$1;
(statearr_31131_31187[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (14))){
var inst_30976 = (state_31076[(26)]);
var inst_30985 = cljs.core.first.call(null,inst_30976);
var inst_30986 = figwheel.client.file_reloading.eval_body.call(null,inst_30985);
var inst_30987 = cljs.core.next.call(null,inst_30976);
var inst_30963 = inst_30987;
var inst_30964 = null;
var inst_30965 = (0);
var inst_30966 = (0);
var state_31076__$1 = (function (){var statearr_31132 = state_31076;
(statearr_31132[(7)] = inst_30966);

(statearr_31132[(8)] = inst_30963);

(statearr_31132[(9)] = inst_30964);

(statearr_31132[(10)] = inst_30965);

(statearr_31132[(32)] = inst_30986);

return statearr_31132;
})();
var statearr_31133_31188 = state_31076__$1;
(statearr_31133_31188[(2)] = null);

(statearr_31133_31188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (26))){
var inst_31035 = (state_31076[(19)]);
var inst_31038 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31035);
var state_31076__$1 = state_31076;
var statearr_31134_31189 = state_31076__$1;
(statearr_31134_31189[(2)] = inst_31038);

(statearr_31134_31189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (16))){
var inst_31002 = (state_31076[(22)]);
var inst_31004 = (function (){var all_files = inst_31002;
return ((function (all_files,inst_31002,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function (p1__30747_SHARP_){
return cljs.core.update_in.call(null,p1__30747_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31002,state_val_31077,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var inst_31005 = cljs.core.map.call(null,inst_31004,inst_31002);
var state_31076__$1 = state_31076;
var statearr_31135_31190 = state_31076__$1;
(statearr_31135_31190[(2)] = inst_31005);

(statearr_31135_31190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (30))){
var state_31076__$1 = state_31076;
var statearr_31136_31191 = state_31076__$1;
(statearr_31136_31191[(2)] = null);

(statearr_31136_31191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (10))){
var inst_30976 = (state_31076[(26)]);
var inst_30978 = cljs.core.chunked_seq_QMARK_.call(null,inst_30976);
var state_31076__$1 = state_31076;
if(inst_30978){
var statearr_31137_31192 = state_31076__$1;
(statearr_31137_31192[(1)] = (13));

} else {
var statearr_31138_31193 = state_31076__$1;
(statearr_31138_31193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (18))){
var inst_31008 = (state_31076[(14)]);
var inst_31009 = (state_31076[(16)]);
var inst_31008__$1 = (state_31076[(2)]);
var inst_31009__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31008__$1);
var inst_31010 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31009__$1);
var state_31076__$1 = (function (){var statearr_31139 = state_31076;
(statearr_31139[(14)] = inst_31008__$1);

(statearr_31139[(16)] = inst_31009__$1);

return statearr_31139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31076__$1,(19),inst_31010);
} else {
if((state_val_31077 === (37))){
var inst_31071 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31140_31194 = state_31076__$1;
(statearr_31140_31194[(2)] = inst_31071);

(statearr_31140_31194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (8))){
var inst_30963 = (state_31076[(8)]);
var inst_30976 = (state_31076[(26)]);
var inst_30976__$1 = cljs.core.seq.call(null,inst_30963);
var state_31076__$1 = (function (){var statearr_31141 = state_31076;
(statearr_31141[(26)] = inst_30976__$1);

return statearr_31141;
})();
if(inst_30976__$1){
var statearr_31142_31195 = state_31076__$1;
(statearr_31142_31195[(1)] = (10));

} else {
var statearr_31143_31196 = state_31076__$1;
(statearr_31143_31196[(1)] = (11));

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
});})(c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
;
return ((function (switch__18711__auto__,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31147 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31147[(0)] = state_machine__18712__auto__);

(statearr_31147[(1)] = (1));

return statearr_31147;
});
var state_machine__18712__auto____1 = (function (state_31076){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31148){if((e31148 instanceof Object)){
var ex__18715__auto__ = e31148;
var statearr_31149_31197 = state_31076;
(statearr_31149_31197[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31198 = state_31076;
state_31076 = G__31198;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31076){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
})();
var state__18769__auto__ = (function (){var statearr_31150 = f__18768__auto__.call(null);
(statearr_31150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_31150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__,map__30951,map__30951__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__30952,map__30952__$1,msg,files))
);

return c__18767__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31201,link){
var map__31203 = p__31201;
var map__31203__$1 = ((cljs.core.seq_QMARK_.call(null,map__31203))?cljs.core.apply.call(null,cljs.core.hash_map,map__31203):map__31203);
var file = cljs.core.get.call(null,map__31203__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31203,map__31203__$1,file){
return (function (p1__31199_SHARP_,p2__31200_SHARP_){
if(cljs.core._EQ_.call(null,p1__31199_SHARP_,p2__31200_SHARP_)){
return p1__31199_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31203,map__31203__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31207){
var map__31208 = p__31207;
var map__31208__$1 = ((cljs.core.seq_QMARK_.call(null,map__31208))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);
var current_url_length = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31204_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31204_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31209){
var map__31211 = p__31209;
var map__31211__$1 = ((cljs.core.seq_QMARK_.call(null,map__31211))?cljs.core.apply.call(null,cljs.core.hash_map,map__31211):map__31211);
var f_data = map__31211__$1;
var request_url = cljs.core.get.call(null,map__31211__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31211__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31212,files_msg){
var map__31234 = p__31212;
var map__31234__$1 = ((cljs.core.seq_QMARK_.call(null,map__31234))?cljs.core.apply.call(null,cljs.core.hash_map,map__31234):map__31234);
var opts = map__31234__$1;
var on_cssload = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31235_31255 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31236_31256 = null;
var count__31237_31257 = (0);
var i__31238_31258 = (0);
while(true){
if((i__31238_31258 < count__31237_31257)){
var f_31259 = cljs.core._nth.call(null,chunk__31236_31256,i__31238_31258);
figwheel.client.file_reloading.reload_css_file.call(null,f_31259);

var G__31260 = seq__31235_31255;
var G__31261 = chunk__31236_31256;
var G__31262 = count__31237_31257;
var G__31263 = (i__31238_31258 + (1));
seq__31235_31255 = G__31260;
chunk__31236_31256 = G__31261;
count__31237_31257 = G__31262;
i__31238_31258 = G__31263;
continue;
} else {
var temp__4126__auto___31264 = cljs.core.seq.call(null,seq__31235_31255);
if(temp__4126__auto___31264){
var seq__31235_31265__$1 = temp__4126__auto___31264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31235_31265__$1)){
var c__16445__auto___31266 = cljs.core.chunk_first.call(null,seq__31235_31265__$1);
var G__31267 = cljs.core.chunk_rest.call(null,seq__31235_31265__$1);
var G__31268 = c__16445__auto___31266;
var G__31269 = cljs.core.count.call(null,c__16445__auto___31266);
var G__31270 = (0);
seq__31235_31255 = G__31267;
chunk__31236_31256 = G__31268;
count__31237_31257 = G__31269;
i__31238_31258 = G__31270;
continue;
} else {
var f_31271 = cljs.core.first.call(null,seq__31235_31265__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31271);

var G__31272 = cljs.core.next.call(null,seq__31235_31265__$1);
var G__31273 = null;
var G__31274 = (0);
var G__31275 = (0);
seq__31235_31255 = G__31272;
chunk__31236_31256 = G__31273;
count__31237_31257 = G__31274;
i__31238_31258 = G__31275;
continue;
}
} else {
}
}
break;
}

var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload){
return (function (state_31245){
var state_val_31246 = (state_31245[(1)]);
if((state_val_31246 === (2))){
var inst_31241 = (state_31245[(2)]);
var inst_31242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31243 = on_cssload.call(null,inst_31242);
var state_31245__$1 = (function (){var statearr_31247 = state_31245;
(statearr_31247[(7)] = inst_31241);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31245__$1,inst_31243);
} else {
if((state_val_31246 === (1))){
var inst_31239 = cljs.core.async.timeout.call(null,(100));
var state_31245__$1 = state_31245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31245__$1,(2),inst_31239);
} else {
return null;
}
}
});})(c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload))
;
return ((function (switch__18711__auto__,c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_31251 = [null,null,null,null,null,null,null,null];
(statearr_31251[(0)] = state_machine__18712__auto__);

(statearr_31251[(1)] = (1));

return statearr_31251;
});
var state_machine__18712__auto____1 = (function (state_31245){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_31245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e31252){if((e31252 instanceof Object)){
var ex__18715__auto__ = e31252;
var statearr_31253_31276 = state_31245;
(statearr_31253_31276[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31277 = state_31245;
state_31245 = G__31277;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_31245){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_31245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload))
})();
var state__18769__auto__ = (function (){var statearr_31254 = f__18768__auto__.call(null);
(statearr_31254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_31254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__,map__31234,map__31234__$1,opts,on_cssload))
);

return c__18767__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map