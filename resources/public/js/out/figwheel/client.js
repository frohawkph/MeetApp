// Compiled by ClojureScript 0.0-2760 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__16071,args){
var map__16073 = p__16071;
var map__16073__$1 = ((cljs.core.seq_QMARK_.call(null,map__16073))?cljs.core.apply.call(null,cljs.core.hash_map,map__16073):map__16073);
var debug = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__16071,var_args){
var args = null;
if (arguments.length > 1) {
var G__16074__i = 0, G__16074__a = new Array(arguments.length -  1);
while (G__16074__i < G__16074__a.length) {G__16074__a[G__16074__i] = arguments[G__16074__i + 1]; ++G__16074__i;}
  args = new cljs.core.IndexedSeq(G__16074__a,0);
} 
return log__delegate.call(this,p__16071,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__16075){
var p__16071 = cljs.core.first(arglist__16075);
var args = cljs.core.rest(arglist__16075);
return log__delegate(p__16071,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__16076){
var map__16078 = p__16076;
var map__16078__$1 = ((cljs.core.seq_QMARK_.call(null,map__16078))?cljs.core.apply.call(null,cljs.core.hash_map,map__16078):map__16078);
var websocket_url = cljs.core.get.call(null,map__16078__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__16079,callback){
var map__16081 = p__16079;
var map__16081__$1 = ((cljs.core.seq_QMARK_.call(null,map__16081))?cljs.core.apply.call(null,cljs.core.hash_map,map__16081):map__16081);
var msg = map__16081__$1;
var dependency_file = cljs.core.get.call(null,map__16081__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__16081__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__16081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__3252__auto__ = dependency_file;
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__16081,map__16081__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__16081,map__16081__$1,msg,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){

return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__16082,p__16083){
var map__16086 = p__16082;
var map__16086__$1 = ((cljs.core.seq_QMARK_.call(null,map__16086))?cljs.core.apply.call(null,cljs.core.hash_map,map__16086):map__16086);
var opts = map__16086__$1;
var url_rewriter = cljs.core.get.call(null,map__16086__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__16087 = p__16083;
var map__16087__$1 = ((cljs.core.seq_QMARK_.call(null,map__16087))?cljs.core.apply.call(null,cljs.core.hash_map,map__16087):map__16087);
var d = map__16087__$1;
var file = cljs.core.get.call(null,map__16087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__16088,p__16089){
var map__16131 = p__16088;
var map__16131__$1 = ((cljs.core.seq_QMARK_.call(null,map__16131))?cljs.core.apply.call(null,cljs.core.hash_map,map__16131):map__16131);
var opts = map__16131__$1;
var on_jsload = cljs.core.get.call(null,map__16131__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__16131__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__16132 = p__16089;
var map__16132__$1 = ((cljs.core.seq_QMARK_.call(null,map__16132))?cljs.core.apply.call(null,cljs.core.hash_map,map__16132):map__16132);
var files = cljs.core.get.call(null,map__16132__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files){
return (function (state_16155){
var state_val_16156 = (state_16155[(1)]);
if((state_val_16156 === (6))){
var inst_16137 = (state_16155[(7)]);
var inst_16146 = (state_16155[(2)]);
var inst_16147 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16148 = [inst_16137];
var inst_16149 = (new cljs.core.PersistentVector(null,1,(5),inst_16147,inst_16148,null));
var inst_16150 = cljs.core.apply.call(null,on_jsload,inst_16149);
var state_16155__$1 = (function (){var statearr_16157 = state_16155;
(statearr_16157[(8)] = inst_16146);

return statearr_16157;
})();
var statearr_16158_16172 = state_16155__$1;
(statearr_16158_16172[(2)] = inst_16150);

(statearr_16158_16172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16156 === (5))){
var inst_16153 = (state_16155[(2)]);
var state_16155__$1 = state_16155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16155__$1,inst_16153);
} else {
if((state_val_16156 === (4))){
var state_16155__$1 = state_16155;
var statearr_16159_16173 = state_16155__$1;
(statearr_16159_16173[(2)] = null);

(statearr_16159_16173[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16156 === (3))){
var inst_16137 = (state_16155[(7)]);
var inst_16140 = console.debug("Figwheel: loaded these files");
var inst_16141 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16137);
var inst_16142 = cljs.core.prn_str.call(null,inst_16141);
var inst_16143 = console.log(inst_16142);
var inst_16144 = cljs.core.async.timeout.call(null,(10));
var state_16155__$1 = (function (){var statearr_16160 = state_16155;
(statearr_16160[(9)] = inst_16143);

(statearr_16160[(10)] = inst_16140);

return statearr_16160;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16155__$1,(6),inst_16144);
} else {
if((state_val_16156 === (2))){
var inst_16137 = (state_16155[(7)]);
var inst_16137__$1 = (state_16155[(2)]);
var inst_16138 = cljs.core.not_empty.call(null,inst_16137__$1);
var state_16155__$1 = (function (){var statearr_16161 = state_16155;
(statearr_16161[(7)] = inst_16137__$1);

return statearr_16161;
})();
if(cljs.core.truth_(inst_16138)){
var statearr_16162_16174 = state_16155__$1;
(statearr_16162_16174[(1)] = (3));

} else {
var statearr_16163_16175 = state_16155__$1;
(statearr_16163_16175[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16156 === (1))){
var inst_16133 = before_jsload.call(null,files);
var inst_16134 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_16135 = figwheel.client.load_all_js_files.call(null,inst_16134);
var state_16155__$1 = (function (){var statearr_16164 = state_16155;
(statearr_16164[(11)] = inst_16133);

return statearr_16164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16155__$1,(2),inst_16135);
} else {
return null;
}
}
}
}
}
}
});})(c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files))
;
return ((function (switch__6357__auto__,c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16168 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16168[(0)] = state_machine__6358__auto__);

(statearr_16168[(1)] = (1));

return statearr_16168;
});
var state_machine__6358__auto____1 = (function (state_16155){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16169){if((e16169 instanceof Object)){
var ex__6361__auto__ = e16169;
var statearr_16170_16176 = state_16155;
(statearr_16170_16176[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16177 = state_16155;
state_16155 = G__16177;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16155){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files))
})();
var state__6415__auto__ = (function (){var statearr_16171 = f__6414__auto__.call(null);
(statearr_16171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_16171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__,map__16131,map__16131__$1,opts,on_jsload,before_jsload,map__16132,map__16132__$1,files))
);

return c__6413__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__16178,link_href){
var map__16180 = p__16178;
var map__16180__$1 = ((cljs.core.seq_QMARK_.call(null,map__16180))?cljs.core.apply.call(null,cljs.core.hash_map,map__16180):map__16180);
var request_url = cljs.core.get.call(null,map__16180__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.add_cache_buster.call(null,url);

return link;
});
figwheel.client.add_link_to_doc = (function() {
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

var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__,parent){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__,parent){
return (function (state_16201){
var state_val_16202 = (state_16201[(1)]);
if((state_val_16202 === (2))){
var inst_16198 = (state_16201[(2)]);
var inst_16199 = parent.removeChild(orig_link);
var state_16201__$1 = (function (){var statearr_16203 = state_16201;
(statearr_16203[(7)] = inst_16198);

return statearr_16203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16201__$1,inst_16199);
} else {
if((state_val_16202 === (1))){
var inst_16196 = cljs.core.async.timeout.call(null,(200));
var state_16201__$1 = state_16201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16201__$1,(2),inst_16196);
} else {
return null;
}
}
});})(c__6413__auto__,parent))
;
return ((function (switch__6357__auto__,c__6413__auto__,parent){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16207 = [null,null,null,null,null,null,null,null];
(statearr_16207[(0)] = state_machine__6358__auto__);

(statearr_16207[(1)] = (1));

return statearr_16207;
});
var state_machine__6358__auto____1 = (function (state_16201){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16208){if((e16208 instanceof Object)){
var ex__6361__auto__ = e16208;
var statearr_16209_16211 = state_16201;
(statearr_16209_16211[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16212 = state_16201;
state_16201 = G__16212;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16201){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__,parent))
})();
var state__6415__auto__ = (function (){var statearr_16210 = f__6414__auto__.call(null);
(statearr_16210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_16210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__,parent))
);

return c__6413__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__16213){
var map__16215 = p__16213;
var map__16215__$1 = ((cljs.core.seq_QMARK_.call(null,map__16215))?cljs.core.apply.call(null,cljs.core.hash_map,map__16215):map__16215);
var f_data = map__16215__$1;
var request_url = cljs.core.get.call(null,map__16215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__16215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__16216,files_msg){
var map__16238 = p__16216;
var map__16238__$1 = ((cljs.core.seq_QMARK_.call(null,map__16238))?cljs.core.apply.call(null,cljs.core.hash_map,map__16238):map__16238);
var opts = map__16238__$1;
var on_cssload = cljs.core.get.call(null,map__16238__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__16239_16259 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__16240_16260 = null;
var count__16241_16261 = (0);
var i__16242_16262 = (0);
while(true){
if((i__16242_16262 < count__16241_16261)){
var f_16263 = cljs.core._nth.call(null,chunk__16240_16260,i__16242_16262);
figwheel.client.reload_css_file.call(null,f_16263);

var G__16264 = seq__16239_16259;
var G__16265 = chunk__16240_16260;
var G__16266 = count__16241_16261;
var G__16267 = (i__16242_16262 + (1));
seq__16239_16259 = G__16264;
chunk__16240_16260 = G__16265;
count__16241_16261 = G__16266;
i__16242_16262 = G__16267;
continue;
} else {
var temp__4126__auto___16268 = cljs.core.seq.call(null,seq__16239_16259);
if(temp__4126__auto___16268){
var seq__16239_16269__$1 = temp__4126__auto___16268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16239_16269__$1)){
var c__4039__auto___16270 = cljs.core.chunk_first.call(null,seq__16239_16269__$1);
var G__16271 = cljs.core.chunk_rest.call(null,seq__16239_16269__$1);
var G__16272 = c__4039__auto___16270;
var G__16273 = cljs.core.count.call(null,c__4039__auto___16270);
var G__16274 = (0);
seq__16239_16259 = G__16271;
chunk__16240_16260 = G__16272;
count__16241_16261 = G__16273;
i__16242_16262 = G__16274;
continue;
} else {
var f_16275 = cljs.core.first.call(null,seq__16239_16269__$1);
figwheel.client.reload_css_file.call(null,f_16275);

var G__16276 = cljs.core.next.call(null,seq__16239_16269__$1);
var G__16277 = null;
var G__16278 = (0);
var G__16279 = (0);
seq__16239_16259 = G__16276;
chunk__16240_16260 = G__16277;
count__16241_16261 = G__16278;
i__16242_16262 = G__16279;
continue;
}
} else {
}
}
break;
}

var c__6413__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload){
return (function (){
var f__6414__auto__ = (function (){var switch__6357__auto__ = ((function (c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload){
return (function (state_16249){
var state_val_16250 = (state_16249[(1)]);
if((state_val_16250 === (2))){
var inst_16245 = (state_16249[(2)]);
var inst_16246 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_16247 = on_cssload.call(null,inst_16246);
var state_16249__$1 = (function (){var statearr_16251 = state_16249;
(statearr_16251[(7)] = inst_16245);

return statearr_16251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16249__$1,inst_16247);
} else {
if((state_val_16250 === (1))){
var inst_16243 = cljs.core.async.timeout.call(null,(100));
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16249__$1,(2),inst_16243);
} else {
return null;
}
}
});})(c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload))
;
return ((function (switch__6357__auto__,c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload){
return (function() {
var state_machine__6358__auto__ = null;
var state_machine__6358__auto____0 = (function (){
var statearr_16255 = [null,null,null,null,null,null,null,null];
(statearr_16255[(0)] = state_machine__6358__auto__);

(statearr_16255[(1)] = (1));

return statearr_16255;
});
var state_machine__6358__auto____1 = (function (state_16249){
while(true){
var ret_value__6359__auto__ = (function (){try{while(true){
var result__6360__auto__ = switch__6357__auto__.call(null,state_16249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6360__auto__;
}
break;
}
}catch (e16256){if((e16256 instanceof Object)){
var ex__6361__auto__ = e16256;
var statearr_16257_16280 = state_16249;
(statearr_16257_16280[(5)] = ex__6361__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16281 = state_16249;
state_16249 = G__16281;
continue;
} else {
return ret_value__6359__auto__;
}
break;
}
});
state_machine__6358__auto__ = function(state_16249){
switch(arguments.length){
case 0:
return state_machine__6358__auto____0.call(this);
case 1:
return state_machine__6358__auto____1.call(this,state_16249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6358__auto____0;
state_machine__6358__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6358__auto____1;
return state_machine__6358__auto__;
})()
;})(switch__6357__auto__,c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload))
})();
var state__6415__auto__ = (function (){var statearr_16258 = f__6414__auto__.call(null);
(statearr_16258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6413__auto__);

return statearr_16258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6415__auto__);
});})(c__6413__auto__,map__16238,map__16238__$1,opts,on_cssload))
);

return c__6413__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){
return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.have_websockets_QMARK_ = (function have_websockets_QMARK_(){
return ("WebSocket" in window);
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__16282){
var map__16287 = p__16282;
var map__16287__$1 = ((cljs.core.seq_QMARK_.call(null,map__16287))?cljs.core.apply.call(null,cljs.core.hash_map,map__16287):map__16287);
var opts = map__16287__$1;
var on_compile_fail = cljs.core.get.call(null,map__16287__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__16287__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__16287__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__16287__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
if(cljs.core.not.call(null,figwheel.client.have_websockets_QMARK_.call(null))){
return console.debug("Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets");
} else {
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__16288 = cljs.core._EQ_;
var expr__16289 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__16288.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__16289))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__16288.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__16289))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__16288.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__16289))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__16287,map__16287__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
}
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16294 = {"detail":url};
return obj16294;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__16295){
var map__16297 = p__16295;
var map__16297__$1 = ((cljs.core.seq_QMARK_.call(null,map__16297))?cljs.core.apply.call(null,cljs.core.hash_map,map__16297):map__16297);
var class$ = cljs.core.get.call(null,map__16297__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__16297__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__16298){
var map__16304 = p__16298;
var map__16304__$1 = ((cljs.core.seq_QMARK_.call(null,map__16304))?cljs.core.apply.call(null,cljs.core.hash_map,map__16304):map__16304);
var ed = map__16304__$1;
var exception_data = cljs.core.get.call(null,map__16304__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__16304__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__16305_16309 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__16306_16310 = null;
var count__16307_16311 = (0);
var i__16308_16312 = (0);
while(true){
if((i__16308_16312 < count__16307_16311)){
var msg_16313 = cljs.core._nth.call(null,chunk__16306_16310,i__16308_16312);
console.log(msg_16313);

var G__16314 = seq__16305_16309;
var G__16315 = chunk__16306_16310;
var G__16316 = count__16307_16311;
var G__16317 = (i__16308_16312 + (1));
seq__16305_16309 = G__16314;
chunk__16306_16310 = G__16315;
count__16307_16311 = G__16316;
i__16308_16312 = G__16317;
continue;
} else {
var temp__4126__auto___16318 = cljs.core.seq.call(null,seq__16305_16309);
if(temp__4126__auto___16318){
var seq__16305_16319__$1 = temp__4126__auto___16318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16305_16319__$1)){
var c__4039__auto___16320 = cljs.core.chunk_first.call(null,seq__16305_16319__$1);
var G__16321 = cljs.core.chunk_rest.call(null,seq__16305_16319__$1);
var G__16322 = c__4039__auto___16320;
var G__16323 = cljs.core.count.call(null,c__4039__auto___16320);
var G__16324 = (0);
seq__16305_16309 = G__16321;
chunk__16306_16310 = G__16322;
count__16307_16311 = G__16323;
i__16308_16312 = G__16324;
continue;
} else {
var msg_16325 = cljs.core.first.call(null,seq__16305_16319__$1);
console.log(msg_16325);

var G__16326 = cljs.core.next.call(null,seq__16305_16319__$1);
var G__16327 = null;
var G__16328 = (0);
var G__16329 = (0);
seq__16305_16309 = G__16326;
chunk__16306_16310 = G__16327;
count__16307_16311 = G__16328;
i__16308_16312 = G__16329;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: loading files");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){
if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton"))){
return null;
} else {
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3252__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3252__auto__)){
return or__3252__auto__;
} else {
return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join('')], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__16330){
var map__16332 = p__16330;
var map__16332__$1 = ((cljs.core.seq_QMARK_.call(null,map__16332))?cljs.core.apply.call(null,cljs.core.hash_map,map__16332):map__16332);
var opts = map__16332__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__16330 = null;
if (arguments.length > 0) {
var G__16333__i = 0, G__16333__a = new Array(arguments.length -  0);
while (G__16333__i < G__16333__a.length) {G__16333__a[G__16333__i] = arguments[G__16333__i + 0]; ++G__16333__i;}
  p__16330 = new cljs.core.IndexedSeq(G__16333__a,0);
} 
return watch_and_reload__delegate.call(this,p__16330);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__16334){
var p__16330 = cljs.core.seq(arglist__16334);
return watch_and_reload__delegate(p__16330);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map