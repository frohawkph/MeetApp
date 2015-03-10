// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29728__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29728 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29729__i = 0, G__29729__a = new Array(arguments.length -  0);
while (G__29729__i < G__29729__a.length) {G__29729__a[G__29729__i] = arguments[G__29729__i + 0]; ++G__29729__i;}
  args = new cljs.core.IndexedSeq(G__29729__a,0);
} 
return G__29728__delegate.call(this,args);};
G__29728.cljs$lang$maxFixedArity = 0;
G__29728.cljs$lang$applyTo = (function (arglist__29730){
var args = cljs.core.seq(arglist__29730);
return G__29728__delegate(args);
});
G__29728.cljs$core$IFn$_invoke$arity$variadic = G__29728__delegate;
return G__29728;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__29731){
var map__29733 = p__29731;
var map__29733__$1 = ((cljs.core.seq_QMARK_.call(null,map__29733))?cljs.core.apply.call(null,cljs.core.hash_map,map__29733):map__29733);
var class$ = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__15658__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__15658__auto__)){
return or__15658__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__15646__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__15646__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__15646__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18806__auto___29862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___29862,ch){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___29862,ch){
return (function (state_29836){
var state_val_29837 = (state_29836[(1)]);
if((state_val_29837 === (7))){
var inst_29832 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29838_29863 = state_29836__$1;
(statearr_29838_29863[(2)] = inst_29832);

(statearr_29838_29863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (1))){
var state_29836__$1 = state_29836;
var statearr_29839_29864 = state_29836__$1;
(statearr_29839_29864[(2)] = null);

(statearr_29839_29864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (4))){
var inst_29800 = (state_29836[(7)]);
var inst_29800__$1 = (state_29836[(2)]);
var state_29836__$1 = (function (){var statearr_29840 = state_29836;
(statearr_29840[(7)] = inst_29800__$1);

return statearr_29840;
})();
if(cljs.core.truth_(inst_29800__$1)){
var statearr_29841_29865 = state_29836__$1;
(statearr_29841_29865[(1)] = (5));

} else {
var statearr_29842_29866 = state_29836__$1;
(statearr_29842_29866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (13))){
var state_29836__$1 = state_29836;
var statearr_29843_29867 = state_29836__$1;
(statearr_29843_29867[(2)] = null);

(statearr_29843_29867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (6))){
var state_29836__$1 = state_29836;
var statearr_29844_29868 = state_29836__$1;
(statearr_29844_29868[(2)] = null);

(statearr_29844_29868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (3))){
var inst_29834 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29836__$1,inst_29834);
} else {
if((state_val_29837 === (12))){
var inst_29807 = (state_29836[(8)]);
var inst_29820 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29807);
var inst_29821 = cljs.core.first.call(null,inst_29820);
var inst_29822 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29821);
var inst_29823 = console.warn("Figwheel: Not loading code with warnings - ",inst_29822);
var state_29836__$1 = state_29836;
var statearr_29845_29869 = state_29836__$1;
(statearr_29845_29869[(2)] = inst_29823);

(statearr_29845_29869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (2))){
var state_29836__$1 = state_29836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29836__$1,(4),ch);
} else {
if((state_val_29837 === (11))){
var inst_29816 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29846_29870 = state_29836__$1;
(statearr_29846_29870[(2)] = inst_29816);

(statearr_29846_29870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (9))){
var inst_29806 = (state_29836[(9)]);
var inst_29818 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29806,opts);
var state_29836__$1 = state_29836;
if(inst_29818){
var statearr_29847_29871 = state_29836__$1;
(statearr_29847_29871[(1)] = (12));

} else {
var statearr_29848_29872 = state_29836__$1;
(statearr_29848_29872[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (5))){
var inst_29806 = (state_29836[(9)]);
var inst_29800 = (state_29836[(7)]);
var inst_29802 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29803 = (new cljs.core.PersistentArrayMap(null,2,inst_29802,null));
var inst_29804 = (new cljs.core.PersistentHashSet(null,inst_29803,null));
var inst_29805 = figwheel.client.focus_msgs.call(null,inst_29804,inst_29800);
var inst_29806__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29805);
var inst_29807 = cljs.core.first.call(null,inst_29805);
var inst_29808 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29806__$1,opts);
var state_29836__$1 = (function (){var statearr_29849 = state_29836;
(statearr_29849[(8)] = inst_29807);

(statearr_29849[(9)] = inst_29806__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29850_29873 = state_29836__$1;
(statearr_29850_29873[(1)] = (8));

} else {
var statearr_29851_29874 = state_29836__$1;
(statearr_29851_29874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (14))){
var inst_29826 = (state_29836[(2)]);
var state_29836__$1 = state_29836;
var statearr_29852_29875 = state_29836__$1;
(statearr_29852_29875[(2)] = inst_29826);

(statearr_29852_29875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (10))){
var inst_29828 = (state_29836[(2)]);
var state_29836__$1 = (function (){var statearr_29853 = state_29836;
(statearr_29853[(10)] = inst_29828);

return statearr_29853;
})();
var statearr_29854_29876 = state_29836__$1;
(statearr_29854_29876[(2)] = null);

(statearr_29854_29876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29837 === (8))){
var inst_29807 = (state_29836[(8)]);
var inst_29810 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29811 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29807);
var inst_29812 = cljs.core.async.timeout.call(null,(1000));
var inst_29813 = [inst_29811,inst_29812];
var inst_29814 = (new cljs.core.PersistentVector(null,2,(5),inst_29810,inst_29813,null));
var state_29836__$1 = state_29836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29836__$1,(11),inst_29814);
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
});})(c__18806__auto___29862,ch))
;
return ((function (switch__18750__auto__,c__18806__auto___29862,ch){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_29858 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29858[(0)] = state_machine__18751__auto__);

(statearr_29858[(1)] = (1));

return statearr_29858;
});
var state_machine__18751__auto____1 = (function (state_29836){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_29836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e29859){if((e29859 instanceof Object)){
var ex__18754__auto__ = e29859;
var statearr_29860_29877 = state_29836;
(statearr_29860_29877[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29878 = state_29836;
state_29836 = G__29878;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_29836){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_29836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___29862,ch))
})();
var state__18808__auto__ = (function (){var statearr_29861 = f__18807__auto__.call(null);
(statearr_29861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___29862);

return statearr_29861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___29862,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29879_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29879_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29888 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29881_SHARP_,p2__29880_SHARP_){
return [cljs.core.str(p2__29880_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29888){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29887 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29886,_STAR_print_newline_STAR_29887,base_path_29888){
return (function() { 
var G__29889__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29890__i = 0, G__29890__a = new Array(arguments.length -  0);
while (G__29890__i < G__29890__a.length) {G__29890__a[G__29890__i] = arguments[G__29890__i + 0]; ++G__29890__i;}
  args = new cljs.core.IndexedSeq(G__29890__a,0);
} 
return G__29889__delegate.call(this,args);};
G__29889.cljs$lang$maxFixedArity = 0;
G__29889.cljs$lang$applyTo = (function (arglist__29891){
var args = cljs.core.seq(arglist__29891);
return G__29889__delegate(args);
});
G__29889.cljs$core$IFn$_invoke$arity$variadic = G__29889__delegate;
return G__29889;
})()
;})(_STAR_print_fn_STAR_29886,_STAR_print_newline_STAR_29887,base_path_29888))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29887;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29886;
}}catch (e29885){if((e29885 instanceof Error)){
var e = e29885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29888], null));
} else {
var e = e29885;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29888))
;
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__29892){
var map__29897 = p__29892;
var map__29897__$1 = ((cljs.core.seq_QMARK_.call(null,map__29897))?cljs.core.apply.call(null,cljs.core.hash_map,map__29897):map__29897);
var opts = map__29897__$1;
var build_id = cljs.core.get.call(null,map__29897__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29897,map__29897__$1,opts,build_id){
return (function (p__29898){
var vec__29899 = p__29898;
var map__29900 = cljs.core.nth.call(null,vec__29899,(0),null);
var map__29900__$1 = ((cljs.core.seq_QMARK_.call(null,map__29900))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);
var msg = map__29900__$1;
var msg_name = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29899,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29899,map__29900,map__29900__$1,msg,msg_name,_,map__29897,map__29897__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29899,map__29900,map__29900__$1,msg,msg_name,_,map__29897,map__29897__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29897,map__29897__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29904){
var vec__29905 = p__29904;
var map__29906 = cljs.core.nth.call(null,vec__29905,(0),null);
var map__29906__$1 = ((cljs.core.seq_QMARK_.call(null,map__29906))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);
var msg = map__29906__$1;
var msg_name = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29905,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29907){
var map__29915 = p__29907;
var map__29915__$1 = ((cljs.core.seq_QMARK_.call(null,map__29915))?cljs.core.apply.call(null,cljs.core.hash_map,map__29915):map__29915);
var on_compile_fail = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29915,map__29915__$1,on_compile_fail,on_compile_warning){
return (function (p__29916){
var vec__29917 = p__29916;
var map__29918 = cljs.core.nth.call(null,vec__29917,(0),null);
var map__29918__$1 = ((cljs.core.seq_QMARK_.call(null,map__29918))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var msg = map__29918__$1;
var msg_name = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29917,(1));
var pred__29919 = cljs.core._EQ_;
var expr__29920 = msg_name;
if(cljs.core.truth_(pred__29919.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29920))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29919.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29920))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29915,map__29915__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__,msg_hist,msg_names,msg){
return (function (state_30117){
var state_val_30118 = (state_30117[(1)]);
if((state_val_30118 === (7))){
var inst_30053 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30119_30160 = state_30117__$1;
(statearr_30119_30160[(2)] = inst_30053);

(statearr_30119_30160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (20))){
var inst_30079 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30079){
var statearr_30120_30161 = state_30117__$1;
(statearr_30120_30161[(1)] = (22));

} else {
var statearr_30121_30162 = state_30117__$1;
(statearr_30121_30162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (27))){
var inst_30091 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30092 = figwheel.client.heads_up.display_warning.call(null,inst_30091);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(30),inst_30092);
} else {
if((state_val_30118 === (1))){
var inst_30041 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30117__$1 = state_30117;
if(cljs.core.truth_(inst_30041)){
var statearr_30122_30163 = state_30117__$1;
(statearr_30122_30163[(1)] = (2));

} else {
var statearr_30123_30164 = state_30117__$1;
(statearr_30123_30164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (24))){
var inst_30107 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30124_30165 = state_30117__$1;
(statearr_30124_30165[(2)] = inst_30107);

(statearr_30124_30165[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (4))){
var inst_30115 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30117__$1,inst_30115);
} else {
if((state_val_30118 === (15))){
var inst_30068 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30069 = figwheel.client.format_messages.call(null,inst_30068);
var inst_30070 = figwheel.client.heads_up.display_error.call(null,inst_30069);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(18),inst_30070);
} else {
if((state_val_30118 === (21))){
var inst_30109 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30125_30166 = state_30117__$1;
(statearr_30125_30166[(2)] = inst_30109);

(statearr_30125_30166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (31))){
var inst_30098 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(34),inst_30098);
} else {
if((state_val_30118 === (32))){
var state_30117__$1 = state_30117;
var statearr_30126_30167 = state_30117__$1;
(statearr_30126_30167[(2)] = null);

(statearr_30126_30167[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (33))){
var inst_30103 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30127_30168 = state_30117__$1;
(statearr_30127_30168[(2)] = inst_30103);

(statearr_30127_30168[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (13))){
var inst_30059 = (state_30117[(2)]);
var inst_30060 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30061 = figwheel.client.format_messages.call(null,inst_30060);
var inst_30062 = figwheel.client.heads_up.display_error.call(null,inst_30061);
var state_30117__$1 = (function (){var statearr_30128 = state_30117;
(statearr_30128[(7)] = inst_30059);

return statearr_30128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(14),inst_30062);
} else {
if((state_val_30118 === (22))){
var inst_30081 = figwheel.client.heads_up.clear.call(null);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(25),inst_30081);
} else {
if((state_val_30118 === (29))){
var inst_30105 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30129_30169 = state_30117__$1;
(statearr_30129_30169[(2)] = inst_30105);

(statearr_30129_30169[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (6))){
var inst_30049 = figwheel.client.heads_up.clear.call(null);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(9),inst_30049);
} else {
if((state_val_30118 === (28))){
var inst_30096 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30096){
var statearr_30130_30170 = state_30117__$1;
(statearr_30130_30170[(1)] = (31));

} else {
var statearr_30131_30171 = state_30117__$1;
(statearr_30131_30171[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (25))){
var inst_30083 = (state_30117[(2)]);
var inst_30084 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30085 = figwheel.client.heads_up.display_warning.call(null,inst_30084);
var state_30117__$1 = (function (){var statearr_30132 = state_30117;
(statearr_30132[(8)] = inst_30083);

return statearr_30132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(26),inst_30085);
} else {
if((state_val_30118 === (34))){
var inst_30100 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30133_30172 = state_30117__$1;
(statearr_30133_30172[(2)] = inst_30100);

(statearr_30133_30172[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (17))){
var inst_30111 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30134_30173 = state_30117__$1;
(statearr_30134_30173[(2)] = inst_30111);

(statearr_30134_30173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (3))){
var inst_30055 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30055){
var statearr_30135_30174 = state_30117__$1;
(statearr_30135_30174[(1)] = (10));

} else {
var statearr_30136_30175 = state_30117__$1;
(statearr_30136_30175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (12))){
var inst_30113 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30137_30176 = state_30117__$1;
(statearr_30137_30176[(2)] = inst_30113);

(statearr_30137_30176[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (2))){
var inst_30043 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30117__$1 = state_30117;
if(cljs.core.truth_(inst_30043)){
var statearr_30138_30177 = state_30117__$1;
(statearr_30138_30177[(1)] = (5));

} else {
var statearr_30139_30178 = state_30117__$1;
(statearr_30139_30178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (23))){
var inst_30089 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30089){
var statearr_30140_30179 = state_30117__$1;
(statearr_30140_30179[(1)] = (27));

} else {
var statearr_30141_30180 = state_30117__$1;
(statearr_30141_30180[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (19))){
var inst_30076 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30077 = figwheel.client.heads_up.append_message.call(null,inst_30076);
var state_30117__$1 = state_30117;
var statearr_30142_30181 = state_30117__$1;
(statearr_30142_30181[(2)] = inst_30077);

(statearr_30142_30181[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (11))){
var inst_30066 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30066){
var statearr_30143_30182 = state_30117__$1;
(statearr_30143_30182[(1)] = (15));

} else {
var statearr_30144_30183 = state_30117__$1;
(statearr_30144_30183[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (9))){
var inst_30051 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30145_30184 = state_30117__$1;
(statearr_30145_30184[(2)] = inst_30051);

(statearr_30145_30184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (5))){
var inst_30045 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(8),inst_30045);
} else {
if((state_val_30118 === (14))){
var inst_30064 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30146_30185 = state_30117__$1;
(statearr_30146_30185[(2)] = inst_30064);

(statearr_30146_30185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (26))){
var inst_30087 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30147_30186 = state_30117__$1;
(statearr_30147_30186[(2)] = inst_30087);

(statearr_30147_30186[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (16))){
var inst_30074 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30117__$1 = state_30117;
if(inst_30074){
var statearr_30148_30187 = state_30117__$1;
(statearr_30148_30187[(1)] = (19));

} else {
var statearr_30149_30188 = state_30117__$1;
(statearr_30149_30188[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (30))){
var inst_30094 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30150_30189 = state_30117__$1;
(statearr_30150_30189[(2)] = inst_30094);

(statearr_30150_30189[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (10))){
var inst_30057 = figwheel.client.heads_up.clear.call(null);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(13),inst_30057);
} else {
if((state_val_30118 === (18))){
var inst_30072 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30151_30190 = state_30117__$1;
(statearr_30151_30190[(2)] = inst_30072);

(statearr_30151_30190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (8))){
var inst_30047 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30152_30191 = state_30117__$1;
(statearr_30152_30191[(2)] = inst_30047);

(statearr_30152_30191[(1)] = (7));


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
});})(c__18806__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18750__auto__,c__18806__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30156 = [null,null,null,null,null,null,null,null,null];
(statearr_30156[(0)] = state_machine__18751__auto__);

(statearr_30156[(1)] = (1));

return statearr_30156;
});
var state_machine__18751__auto____1 = (function (state_30117){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30157){if((e30157 instanceof Object)){
var ex__18754__auto__ = e30157;
var statearr_30158_30192 = state_30117;
(statearr_30158_30192[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30193 = state_30117;
state_30117 = G__30193;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30117){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__,msg_hist,msg_names,msg))
})();
var state__18808__auto__ = (function (){var statearr_30159 = f__18807__auto__.call(null);
(statearr_30159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_30159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__,msg_hist,msg_names,msg))
);

return c__18806__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18806__auto___30256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto___30256,ch){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto___30256,ch){
return (function (state_30239){
var state_val_30240 = (state_30239[(1)]);
if((state_val_30240 === (8))){
var inst_30231 = (state_30239[(2)]);
var state_30239__$1 = (function (){var statearr_30241 = state_30239;
(statearr_30241[(7)] = inst_30231);

return statearr_30241;
})();
var statearr_30242_30257 = state_30239__$1;
(statearr_30242_30257[(2)] = null);

(statearr_30242_30257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (7))){
var inst_30235 = (state_30239[(2)]);
var state_30239__$1 = state_30239;
var statearr_30243_30258 = state_30239__$1;
(statearr_30243_30258[(2)] = inst_30235);

(statearr_30243_30258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (6))){
var state_30239__$1 = state_30239;
var statearr_30244_30259 = state_30239__$1;
(statearr_30244_30259[(2)] = null);

(statearr_30244_30259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (5))){
var inst_30227 = (state_30239[(8)]);
var inst_30229 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30227);
var state_30239__$1 = state_30239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30239__$1,(8),inst_30229);
} else {
if((state_val_30240 === (4))){
var inst_30227 = (state_30239[(8)]);
var inst_30227__$1 = (state_30239[(2)]);
var state_30239__$1 = (function (){var statearr_30245 = state_30239;
(statearr_30245[(8)] = inst_30227__$1);

return statearr_30245;
})();
if(cljs.core.truth_(inst_30227__$1)){
var statearr_30246_30260 = state_30239__$1;
(statearr_30246_30260[(1)] = (5));

} else {
var statearr_30247_30261 = state_30239__$1;
(statearr_30247_30261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30240 === (3))){
var inst_30237 = (state_30239[(2)]);
var state_30239__$1 = state_30239;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30239__$1,inst_30237);
} else {
if((state_val_30240 === (2))){
var state_30239__$1 = state_30239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30239__$1,(4),ch);
} else {
if((state_val_30240 === (1))){
var state_30239__$1 = state_30239;
var statearr_30248_30262 = state_30239__$1;
(statearr_30248_30262[(2)] = null);

(statearr_30248_30262[(1)] = (2));


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
});})(c__18806__auto___30256,ch))
;
return ((function (switch__18750__auto__,c__18806__auto___30256,ch){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30252 = [null,null,null,null,null,null,null,null,null];
(statearr_30252[(0)] = state_machine__18751__auto__);

(statearr_30252[(1)] = (1));

return statearr_30252;
});
var state_machine__18751__auto____1 = (function (state_30239){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object)){
var ex__18754__auto__ = e30253;
var statearr_30254_30263 = state_30239;
(statearr_30254_30263[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30264 = state_30239;
state_30239 = G__30264;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30239){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto___30256,ch))
})();
var state__18808__auto__ = (function (){var statearr_30255 = f__18807__auto__.call(null);
(statearr_30255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto___30256);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto___30256,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_30285){
var state_val_30286 = (state_30285[(1)]);
if((state_val_30286 === (2))){
var inst_30282 = (state_30285[(2)]);
var inst_30283 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30285__$1 = (function (){var statearr_30287 = state_30285;
(statearr_30287[(7)] = inst_30282);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30285__$1,inst_30283);
} else {
if((state_val_30286 === (1))){
var inst_30280 = cljs.core.async.timeout.call(null,(3000));
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30285__$1,(2),inst_30280);
} else {
return null;
}
}
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = state_machine__18751__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var state_machine__18751__auto____1 = (function (state_30285){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__18754__auto__ = e30292;
var statearr_30293_30295 = state_30285;
(statearr_30293_30295[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30296 = state_30285;
state_30285 = G__30296;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30285){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_30294 = f__18807__auto__.call(null);
(statearr_30294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__15646__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__15646__auto__)){
return ("CustomEvent" in window);
} else {
return and__15646__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30300 = {"detail":url};
return obj30300;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30301){
var map__30307 = p__30301;
var map__30307__$1 = ((cljs.core.seq_QMARK_.call(null,map__30307))?cljs.core.apply.call(null,cljs.core.hash_map,map__30307):map__30307);
var ed = map__30307__$1;
var exception_data = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30307__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30308_30312 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30309_30313 = null;
var count__30310_30314 = (0);
var i__30311_30315 = (0);
while(true){
if((i__30311_30315 < count__30310_30314)){
var msg_30316 = cljs.core._nth.call(null,chunk__30309_30313,i__30311_30315);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30316);

var G__30317 = seq__30308_30312;
var G__30318 = chunk__30309_30313;
var G__30319 = count__30310_30314;
var G__30320 = (i__30311_30315 + (1));
seq__30308_30312 = G__30317;
chunk__30309_30313 = G__30318;
count__30310_30314 = G__30319;
i__30311_30315 = G__30320;
continue;
} else {
var temp__4126__auto___30321 = cljs.core.seq.call(null,seq__30308_30312);
if(temp__4126__auto___30321){
var seq__30308_30322__$1 = temp__4126__auto___30321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30308_30322__$1)){
var c__16445__auto___30323 = cljs.core.chunk_first.call(null,seq__30308_30322__$1);
var G__30324 = cljs.core.chunk_rest.call(null,seq__30308_30322__$1);
var G__30325 = c__16445__auto___30323;
var G__30326 = cljs.core.count.call(null,c__16445__auto___30323);
var G__30327 = (0);
seq__30308_30312 = G__30324;
chunk__30309_30313 = G__30325;
count__30310_30314 = G__30326;
i__30311_30315 = G__30327;
continue;
} else {
var msg_30328 = cljs.core.first.call(null,seq__30308_30322__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30328);

var G__30329 = cljs.core.next.call(null,seq__30308_30322__$1);
var G__30330 = null;
var G__30331 = (0);
var G__30332 = (0);
seq__30308_30312 = G__30329;
chunk__30309_30313 = G__30330;
count__30310_30314 = G__30331;
i__30311_30315 = G__30332;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30333){
var map__30335 = p__30333;
var map__30335__$1 = ((cljs.core.seq_QMARK_.call(null,map__30335))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335):map__30335);
var w = map__30335__$1;
var message = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__15646__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__15646__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__15646__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__30342 = cljs.core.seq.call(null,plugins);
var chunk__30343 = null;
var count__30344 = (0);
var i__30345 = (0);
while(true){
if((i__30345 < count__30344)){
var vec__30346 = cljs.core._nth.call(null,chunk__30343,i__30345);
var k = cljs.core.nth.call(null,vec__30346,(0),null);
var plugin = cljs.core.nth.call(null,vec__30346,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30348 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30342,chunk__30343,count__30344,i__30345,pl_30348,vec__30346,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30348.call(null,msg_hist);
});})(seq__30342,chunk__30343,count__30344,i__30345,pl_30348,vec__30346,k,plugin))
);
} else {
}

var G__30349 = seq__30342;
var G__30350 = chunk__30343;
var G__30351 = count__30344;
var G__30352 = (i__30345 + (1));
seq__30342 = G__30349;
chunk__30343 = G__30350;
count__30344 = G__30351;
i__30345 = G__30352;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30342);
if(temp__4126__auto__){
var seq__30342__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30342__$1)){
var c__16445__auto__ = cljs.core.chunk_first.call(null,seq__30342__$1);
var G__30353 = cljs.core.chunk_rest.call(null,seq__30342__$1);
var G__30354 = c__16445__auto__;
var G__30355 = cljs.core.count.call(null,c__16445__auto__);
var G__30356 = (0);
seq__30342 = G__30353;
chunk__30343 = G__30354;
count__30344 = G__30355;
i__30345 = G__30356;
continue;
} else {
var vec__30347 = cljs.core.first.call(null,seq__30342__$1);
var k = cljs.core.nth.call(null,vec__30347,(0),null);
var plugin = cljs.core.nth.call(null,vec__30347,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30357 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30342,chunk__30343,count__30344,i__30345,pl_30357,vec__30347,k,plugin,seq__30342__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30357.call(null,msg_hist);
});})(seq__30342,chunk__30343,count__30344,i__30345,pl_30357,vec__30347,k,plugin,seq__30342__$1,temp__4126__auto__))
);
} else {
}

var G__30358 = cljs.core.next.call(null,seq__30342__$1);
var G__30359 = null;
var G__30360 = (0);
var G__30361 = (0);
seq__30342 = G__30358;
chunk__30343 = G__30359;
count__30344 = G__30360;
i__30345 = G__30361;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__30362){
var map__30364 = p__30362;
var map__30364__$1 = ((cljs.core.seq_QMARK_.call(null,map__30364))?cljs.core.apply.call(null,cljs.core.hash_map,map__30364):map__30364);
var opts = map__30364__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30362 = null;
if (arguments.length > 0) {
var G__30365__i = 0, G__30365__a = new Array(arguments.length -  0);
while (G__30365__i < G__30365__a.length) {G__30365__a[G__30365__i] = arguments[G__30365__i + 0]; ++G__30365__i;}
  p__30362 = new cljs.core.IndexedSeq(G__30365__a,0);
} 
return watch_and_reload__delegate.call(this,p__30362);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30366){
var p__30362 = cljs.core.seq(arglist__30366);
return watch_and_reload__delegate(p__30362);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map