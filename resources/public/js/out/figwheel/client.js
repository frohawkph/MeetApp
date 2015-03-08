// Compiled by ClojureScript 0.0-2913 {}
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
var log__delegate = function (p__30460,args){
var map__30462 = p__30460;
var map__30462__$1 = ((cljs.core.seq_QMARK_.call(null,map__30462))?cljs.core.apply.call(null,cljs.core.hash_map,map__30462):map__30462);
var debug = cljs.core.get.call(null,map__30462__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__30460,var_args){
var args = null;
if (arguments.length > 1) {
var G__30463__i = 0, G__30463__a = new Array(arguments.length -  1);
while (G__30463__i < G__30463__a.length) {G__30463__a[G__30463__i] = arguments[G__30463__i + 1]; ++G__30463__i;}
  args = new cljs.core.IndexedSeq(G__30463__a,0);
} 
return log__delegate.call(this,p__30460,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__30464){
var p__30460 = cljs.core.first(arglist__30464);
var args = cljs.core.rest(arglist__30464);
return log__delegate(p__30460,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__30465){
var map__30467 = p__30465;
var map__30467__$1 = ((cljs.core.seq_QMARK_.call(null,map__30467))?cljs.core.apply.call(null,cljs.core.hash_map,map__30467):map__30467);
var websocket_url = cljs.core.get.call(null,map__30467__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){
return [cljs.core.str(url),cljs.core.str("?rel="),cljs.core.str((new Date()).getTime())].join('');
});
figwheel.client.js_reload = (function js_reload(p__30468,callback){
var map__30470 = p__30468;
var map__30470__$1 = ((cljs.core.seq_QMARK_.call(null,map__30470))?cljs.core.apply.call(null,cljs.core.hash_map,map__30470):map__30470);
var msg = map__30470__$1;
var dependency_file = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(cljs.core.truth_((function (){var or__17618__auto__ = dependency_file;
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
} else {
return goog.isProvided_(namespace);
}
})())){
return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__30470,map__30470__$1,msg,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__30470,map__30470__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__30471,p__30472){
var map__30475 = p__30471;
var map__30475__$1 = ((cljs.core.seq_QMARK_.call(null,map__30475))?cljs.core.apply.call(null,cljs.core.hash_map,map__30475):map__30475);
var opts = map__30475__$1;
var url_rewriter = cljs.core.get.call(null,map__30475__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__30476 = p__30472;
var map__30476__$1 = ((cljs.core.seq_QMARK_.call(null,map__30476))?cljs.core.apply.call(null,cljs.core.hash_map,map__30476):map__30476);
var d = map__30476__$1;
var file = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__30477,p__30478){
var map__30520 = p__30477;
var map__30520__$1 = ((cljs.core.seq_QMARK_.call(null,map__30520))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);
var opts = map__30520__$1;
var on_jsload = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__30521 = p__30478;
var map__30521__$1 = ((cljs.core.seq_QMARK_.call(null,map__30521))?cljs.core.apply.call(null,cljs.core.hash_map,map__30521):map__30521);
var files = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files){
return (function (state_30544){
var state_val_30545 = (state_30544[(1)]);
if((state_val_30545 === (6))){
var inst_30526 = (state_30544[(7)]);
var inst_30535 = (state_30544[(2)]);
var inst_30536 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30537 = [inst_30526];
var inst_30538 = (new cljs.core.PersistentVector(null,1,(5),inst_30536,inst_30537,null));
var inst_30539 = cljs.core.apply.call(null,on_jsload,inst_30538);
var state_30544__$1 = (function (){var statearr_30546 = state_30544;
(statearr_30546[(8)] = inst_30535);

return statearr_30546;
})();
var statearr_30547_30561 = state_30544__$1;
(statearr_30547_30561[(2)] = inst_30539);

(statearr_30547_30561[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (5))){
var inst_30542 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30544__$1,inst_30542);
} else {
if((state_val_30545 === (4))){
var state_30544__$1 = state_30544;
var statearr_30548_30562 = state_30544__$1;
(statearr_30548_30562[(2)] = null);

(statearr_30548_30562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (3))){
var inst_30526 = (state_30544[(7)]);
var inst_30529 = console.debug("Figwheel: loaded these files");
var inst_30530 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30526);
var inst_30531 = cljs.core.prn_str.call(null,inst_30530);
var inst_30532 = console.log(inst_30531);
var inst_30533 = cljs.core.async.timeout.call(null,(10));
var state_30544__$1 = (function (){var statearr_30549 = state_30544;
(statearr_30549[(9)] = inst_30529);

(statearr_30549[(10)] = inst_30532);

return statearr_30549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30544__$1,(6),inst_30533);
} else {
if((state_val_30545 === (2))){
var inst_30526 = (state_30544[(7)]);
var inst_30526__$1 = (state_30544[(2)]);
var inst_30527 = cljs.core.not_empty.call(null,inst_30526__$1);
var state_30544__$1 = (function (){var statearr_30550 = state_30544;
(statearr_30550[(7)] = inst_30526__$1);

return statearr_30550;
})();
if(cljs.core.truth_(inst_30527)){
var statearr_30551_30563 = state_30544__$1;
(statearr_30551_30563[(1)] = (3));

} else {
var statearr_30552_30564 = state_30544__$1;
(statearr_30552_30564[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (1))){
var inst_30522 = before_jsload.call(null,files);
var inst_30523 = figwheel.client.add_request_urls.call(null,opts,files);
var inst_30524 = figwheel.client.load_all_js_files.call(null,inst_30523);
var state_30544__$1 = (function (){var statearr_30553 = state_30544;
(statearr_30553[(11)] = inst_30522);

return statearr_30553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30544__$1,(2),inst_30524);
} else {
return null;
}
}
}
}
}
}
});})(c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files))
;
return ((function (switch__20663__auto__,c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_30557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30557[(0)] = state_machine__20664__auto__);

(statearr_30557[(1)] = (1));

return statearr_30557;
});
var state_machine__20664__auto____1 = (function (state_30544){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_30544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e30558){if((e30558 instanceof Object)){
var ex__20667__auto__ = e30558;
var statearr_30559_30565 = state_30544;
(statearr_30559_30565[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30566 = state_30544;
state_30544 = G__30566;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_30544){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_30544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files))
})();
var state__20721__auto__ = (function (){var statearr_30560 = f__20720__auto__.call(null);
(statearr_30560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__,map__30520,map__30520__$1,opts,on_jsload,before_jsload,map__30521,map__30521__$1,files))
);

return c__20719__auto__;
});
figwheel.client.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__30567,link_href){
var map__30569 = p__30567;
var map__30569__$1 = ((cljs.core.seq_QMARK_.call(null,map__30569))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var request_url = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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

var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__,parent){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__,parent){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (2))){
var inst_30587 = (state_30590[(2)]);
var inst_30588 = parent.removeChild(orig_link);
var state_30590__$1 = (function (){var statearr_30592 = state_30590;
(statearr_30592[(7)] = inst_30587);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (1))){
var inst_30585 = cljs.core.async.timeout.call(null,(200));
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(2),inst_30585);
} else {
return null;
}
}
});})(c__20719__auto__,parent))
;
return ((function (switch__20663__auto__,c__20719__auto__,parent){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_30596 = [null,null,null,null,null,null,null,null];
(statearr_30596[(0)] = state_machine__20664__auto__);

(statearr_30596[(1)] = (1));

return statearr_30596;
});
var state_machine__20664__auto____1 = (function (state_30590){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e30597){if((e30597 instanceof Object)){
var ex__20667__auto__ = e30597;
var statearr_30598_30600 = state_30590;
(statearr_30598_30600[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30601 = state_30590;
state_30590 = G__30601;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__,parent))
})();
var state__20721__auto__ = (function (){var statearr_30599 = f__20720__auto__.call(null);
(statearr_30599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_30599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__,parent))
);

return c__20719__auto__;
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
figwheel.client.reload_css_file = (function reload_css_file(p__30602){
var map__30604 = p__30602;
var map__30604__$1 = ((cljs.core.seq_QMARK_.call(null,map__30604))?cljs.core.apply.call(null,cljs.core.hash_map,map__30604):map__30604);
var f_data = map__30604__$1;
var request_url = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30604__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else {
return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__30605,files_msg){
var map__30627 = p__30605;
var map__30627__$1 = ((cljs.core.seq_QMARK_.call(null,map__30627))?cljs.core.apply.call(null,cljs.core.hash_map,map__30627):map__30627);
var opts = map__30627__$1;
var on_cssload = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__30628_30648 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30629_30649 = null;
var count__30630_30650 = (0);
var i__30631_30651 = (0);
while(true){
if((i__30631_30651 < count__30630_30650)){
var f_30652 = cljs.core._nth.call(null,chunk__30629_30649,i__30631_30651);
figwheel.client.reload_css_file.call(null,f_30652);

var G__30653 = seq__30628_30648;
var G__30654 = chunk__30629_30649;
var G__30655 = count__30630_30650;
var G__30656 = (i__30631_30651 + (1));
seq__30628_30648 = G__30653;
chunk__30629_30649 = G__30654;
count__30630_30650 = G__30655;
i__30631_30651 = G__30656;
continue;
} else {
var temp__4126__auto___30657 = cljs.core.seq.call(null,seq__30628_30648);
if(temp__4126__auto___30657){
var seq__30628_30658__$1 = temp__4126__auto___30657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30628_30658__$1)){
var c__18405__auto___30659 = cljs.core.chunk_first.call(null,seq__30628_30658__$1);
var G__30660 = cljs.core.chunk_rest.call(null,seq__30628_30658__$1);
var G__30661 = c__18405__auto___30659;
var G__30662 = cljs.core.count.call(null,c__18405__auto___30659);
var G__30663 = (0);
seq__30628_30648 = G__30660;
chunk__30629_30649 = G__30661;
count__30630_30650 = G__30662;
i__30631_30651 = G__30663;
continue;
} else {
var f_30664 = cljs.core.first.call(null,seq__30628_30658__$1);
figwheel.client.reload_css_file.call(null,f_30664);

var G__30665 = cljs.core.next.call(null,seq__30628_30658__$1);
var G__30666 = null;
var G__30667 = (0);
var G__30668 = (0);
seq__30628_30648 = G__30665;
chunk__30629_30649 = G__30666;
count__30630_30650 = G__30667;
i__30631_30651 = G__30668;
continue;
}
} else {
}
}
break;
}

var c__20719__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload){
return (function (){
var f__20720__auto__ = (function (){var switch__20663__auto__ = ((function (c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload){
return (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (2))){
var inst_30634 = (state_30638[(2)]);
var inst_30635 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30636 = on_cssload.call(null,inst_30635);
var state_30638__$1 = (function (){var statearr_30640 = state_30638;
(statearr_30640[(7)] = inst_30634);

return statearr_30640;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30638__$1,inst_30636);
} else {
if((state_val_30639 === (1))){
var inst_30632 = cljs.core.async.timeout.call(null,(100));
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30638__$1,(2),inst_30632);
} else {
return null;
}
}
});})(c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload))
;
return ((function (switch__20663__auto__,c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload){
return (function() {
var state_machine__20664__auto__ = null;
var state_machine__20664__auto____0 = (function (){
var statearr_30644 = [null,null,null,null,null,null,null,null];
(statearr_30644[(0)] = state_machine__20664__auto__);

(statearr_30644[(1)] = (1));

return statearr_30644;
});
var state_machine__20664__auto____1 = (function (state_30638){
while(true){
var ret_value__20665__auto__ = (function (){try{while(true){
var result__20666__auto__ = switch__20663__auto__.call(null,state_30638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20666__auto__;
}
break;
}
}catch (e30645){if((e30645 instanceof Object)){
var ex__20667__auto__ = e30645;
var statearr_30646_30669 = state_30638;
(statearr_30646_30669[(5)] = ex__20667__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30670 = state_30638;
state_30638 = G__30670;
continue;
} else {
return ret_value__20665__auto__;
}
break;
}
});
state_machine__20664__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return state_machine__20664__auto____0.call(this);
case 1:
return state_machine__20664__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__20664__auto____0;
state_machine__20664__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__20664__auto____1;
return state_machine__20664__auto__;
})()
;})(switch__20663__auto__,c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload))
})();
var state__20721__auto__ = (function (){var statearr_30647 = f__20720__auto__.call(null);
(statearr_30647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20719__auto__);

return statearr_30647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20721__auto__);
});})(c__20719__auto__,map__30627,map__30627__$1,opts,on_cssload))
);

return c__20719__auto__;
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__30671){
var map__30676 = p__30671;
var map__30676__$1 = ((cljs.core.seq_QMARK_.call(null,map__30676))?cljs.core.apply.call(null,cljs.core.hash_map,map__30676):map__30676);
var opts = map__30676__$1;
var on_compile_fail = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var jsload_callback = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
var websocket_url = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retry_count = cljs.core.get.call(null,map__30676__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
if(cljs.core.not.call(null,figwheel.client.have_websockets_QMARK_.call(null))){
return console.debug("Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets");
} else {
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){
var msg = cljs.reader.read_string.call(null,msg_str.data);
var pred__30677 = cljs.core._EQ_;
var expr__30678 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(pred__30677.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__30678))){
return figwheel.client.reload_js_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__30677.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__30678))){
return figwheel.client.reload_css_files.call(null,opts,msg);
} else {
if(cljs.core.truth_(pred__30677.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30678))){
return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else {
return null;
}
}
}
});})(socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onopen = ((function (socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.patch_goog_base.call(null);

return console.debug("Figwheel: socket connection established");
});})(socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

socket.onclose = ((function (socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > (0))){
return window.setTimeout(((function (socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){
return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else {
return null;
}
});})(socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;

return socket.onerror = ((function (socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){
return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__30676,map__30676__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
}
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30683 = {"detail":url};
return obj30683;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30684){
var map__30686 = p__30684;
var map__30686__$1 = ((cljs.core.seq_QMARK_.call(null,map__30686))?cljs.core.apply.call(null,cljs.core.hash_map,map__30686):map__30686);
var class$ = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30686__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30687){
var map__30693 = p__30687;
var map__30693__$1 = ((cljs.core.seq_QMARK_.call(null,map__30693))?cljs.core.apply.call(null,cljs.core.hash_map,map__30693):map__30693);
var ed = map__30693__$1;
var exception_data = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30693__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__30694_30698 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30695_30699 = null;
var count__30696_30700 = (0);
var i__30697_30701 = (0);
while(true){
if((i__30697_30701 < count__30696_30700)){
var msg_30702 = cljs.core._nth.call(null,chunk__30695_30699,i__30697_30701);
console.log(msg_30702);

var G__30703 = seq__30694_30698;
var G__30704 = chunk__30695_30699;
var G__30705 = count__30696_30700;
var G__30706 = (i__30697_30701 + (1));
seq__30694_30698 = G__30703;
chunk__30695_30699 = G__30704;
count__30696_30700 = G__30705;
i__30697_30701 = G__30706;
continue;
} else {
var temp__4126__auto___30707 = cljs.core.seq.call(null,seq__30694_30698);
if(temp__4126__auto___30707){
var seq__30694_30708__$1 = temp__4126__auto___30707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30694_30708__$1)){
var c__18405__auto___30709 = cljs.core.chunk_first.call(null,seq__30694_30708__$1);
var G__30710 = cljs.core.chunk_rest.call(null,seq__30694_30708__$1);
var G__30711 = c__18405__auto___30709;
var G__30712 = cljs.core.count.call(null,c__18405__auto___30709);
var G__30713 = (0);
seq__30694_30698 = G__30710;
chunk__30695_30699 = G__30711;
count__30696_30700 = G__30712;
i__30697_30701 = G__30713;
continue;
} else {
var msg_30714 = cljs.core.first.call(null,seq__30694_30708__$1);
console.log(msg_30714);

var G__30715 = cljs.core.next.call(null,seq__30694_30708__$1);
var G__30716 = null;
var G__30717 = (0);
var G__30718 = (0);
seq__30694_30698 = G__30715;
chunk__30695_30699 = G__30716;
count__30696_30700 = G__30717;
i__30697_30701 = G__30718;
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
figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__17618__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17618__auto__)){
return or__17618__auto__;
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
var watch_and_reload__delegate = function (p__30719){
var map__30721 = p__30719;
var map__30721__$1 = ((cljs.core.seq_QMARK_.call(null,map__30721))?cljs.core.apply.call(null,cljs.core.hash_map,map__30721):map__30721);
var opts = map__30721__$1;
return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30719 = null;
if (arguments.length > 0) {
var G__30722__i = 0, G__30722__a = new Array(arguments.length -  0);
while (G__30722__i < G__30722__a.length) {G__30722__a[G__30722__i] = arguments[G__30722__i + 0]; ++G__30722__i;}
  p__30719 = new cljs.core.IndexedSeq(G__30722__a,0);
} 
return watch_and_reload__delegate.call(this,p__30719);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30723){
var p__30719 = cljs.core.seq(arglist__30723);
return watch_and_reload__delegate(p__30719);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map