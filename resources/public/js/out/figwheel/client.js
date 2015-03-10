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
var G__29689__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29689 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29690__i = 0, G__29690__a = new Array(arguments.length -  0);
while (G__29690__i < G__29690__a.length) {G__29690__a[G__29690__i] = arguments[G__29690__i + 0]; ++G__29690__i;}
  args = new cljs.core.IndexedSeq(G__29690__a,0);
} 
return G__29689__delegate.call(this,args);};
G__29689.cljs$lang$maxFixedArity = 0;
G__29689.cljs$lang$applyTo = (function (arglist__29691){
var args = cljs.core.seq(arglist__29691);
return G__29689__delegate(args);
});
G__29689.cljs$core$IFn$_invoke$arity$variadic = G__29689__delegate;
return G__29689;
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
figwheel.client.error_msg_format = (function error_msg_format(p__29692){
var map__29694 = p__29692;
var map__29694__$1 = ((cljs.core.seq_QMARK_.call(null,map__29694))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var class$ = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__18767__auto___29823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___29823,ch){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___29823,ch){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29793 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29799_29824 = state_29797__$1;
(statearr_29799_29824[(2)] = inst_29793);

(statearr_29799_29824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var state_29797__$1 = state_29797;
var statearr_29800_29825 = state_29797__$1;
(statearr_29800_29825[(2)] = null);

(statearr_29800_29825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var inst_29761 = (state_29797[(7)]);
var inst_29761__$1 = (state_29797[(2)]);
var state_29797__$1 = (function (){var statearr_29801 = state_29797;
(statearr_29801[(7)] = inst_29761__$1);

return statearr_29801;
})();
if(cljs.core.truth_(inst_29761__$1)){
var statearr_29802_29826 = state_29797__$1;
(statearr_29802_29826[(1)] = (5));

} else {
var statearr_29803_29827 = state_29797__$1;
(statearr_29803_29827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (13))){
var state_29797__$1 = state_29797;
var statearr_29804_29828 = state_29797__$1;
(statearr_29804_29828[(2)] = null);

(statearr_29804_29828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (6))){
var state_29797__$1 = state_29797;
var statearr_29805_29829 = state_29797__$1;
(statearr_29805_29829[(2)] = null);

(statearr_29805_29829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29795 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (12))){
var inst_29768 = (state_29797[(8)]);
var inst_29781 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29768);
var inst_29782 = cljs.core.first.call(null,inst_29781);
var inst_29783 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29782);
var inst_29784 = console.warn("Figwheel: Not loading code with warnings - ",inst_29783);
var state_29797__$1 = state_29797;
var statearr_29806_29830 = state_29797__$1;
(statearr_29806_29830[(2)] = inst_29784);

(statearr_29806_29830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (2))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(4),ch);
} else {
if((state_val_29798 === (11))){
var inst_29777 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29807_29831 = state_29797__$1;
(statearr_29807_29831[(2)] = inst_29777);

(statearr_29807_29831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var inst_29767 = (state_29797[(9)]);
var inst_29779 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29767,opts);
var state_29797__$1 = state_29797;
if(inst_29779){
var statearr_29808_29832 = state_29797__$1;
(statearr_29808_29832[(1)] = (12));

} else {
var statearr_29809_29833 = state_29797__$1;
(statearr_29809_29833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var inst_29767 = (state_29797[(9)]);
var inst_29761 = (state_29797[(7)]);
var inst_29763 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29764 = (new cljs.core.PersistentArrayMap(null,2,inst_29763,null));
var inst_29765 = (new cljs.core.PersistentHashSet(null,inst_29764,null));
var inst_29766 = figwheel.client.focus_msgs.call(null,inst_29765,inst_29761);
var inst_29767__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29766);
var inst_29768 = cljs.core.first.call(null,inst_29766);
var inst_29769 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29767__$1,opts);
var state_29797__$1 = (function (){var statearr_29810 = state_29797;
(statearr_29810[(9)] = inst_29767__$1);

(statearr_29810[(8)] = inst_29768);

return statearr_29810;
})();
if(cljs.core.truth_(inst_29769)){
var statearr_29811_29834 = state_29797__$1;
(statearr_29811_29834[(1)] = (8));

} else {
var statearr_29812_29835 = state_29797__$1;
(statearr_29812_29835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (14))){
var inst_29787 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29813_29836 = state_29797__$1;
(statearr_29813_29836[(2)] = inst_29787);

(statearr_29813_29836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29789 = (state_29797[(2)]);
var state_29797__$1 = (function (){var statearr_29814 = state_29797;
(statearr_29814[(10)] = inst_29789);

return statearr_29814;
})();
var statearr_29815_29837 = state_29797__$1;
(statearr_29815_29837[(2)] = null);

(statearr_29815_29837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29768 = (state_29797[(8)]);
var inst_29771 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29772 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29768);
var inst_29773 = cljs.core.async.timeout.call(null,(1000));
var inst_29774 = [inst_29772,inst_29773];
var inst_29775 = (new cljs.core.PersistentVector(null,2,(5),inst_29771,inst_29774,null));
var state_29797__$1 = state_29797;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29797__$1,(11),inst_29775);
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
});})(c__18767__auto___29823,ch))
;
return ((function (switch__18711__auto__,c__18767__auto___29823,ch){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_29819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29819[(0)] = state_machine__18712__auto__);

(statearr_29819[(1)] = (1));

return statearr_29819;
});
var state_machine__18712__auto____1 = (function (state_29797){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e29820){if((e29820 instanceof Object)){
var ex__18715__auto__ = e29820;
var statearr_29821_29838 = state_29797;
(statearr_29821_29838[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29839 = state_29797;
state_29797 = G__29839;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___29823,ch))
})();
var state__18769__auto__ = (function (){var statearr_29822 = f__18768__auto__.call(null);
(statearr_29822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___29823);

return statearr_29822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___29823,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29840_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29840_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_29849 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29842_SHARP_,p2__29841_SHARP_){
return [cljs.core.str(p2__29841_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29849){
return (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_29847 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29848 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29847,_STAR_print_newline_STAR_29848,base_path_29849){
return (function() { 
var G__29850__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29850 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29851__i = 0, G__29851__a = new Array(arguments.length -  0);
while (G__29851__i < G__29851__a.length) {G__29851__a[G__29851__i] = arguments[G__29851__i + 0]; ++G__29851__i;}
  args = new cljs.core.IndexedSeq(G__29851__a,0);
} 
return G__29850__delegate.call(this,args);};
G__29850.cljs$lang$maxFixedArity = 0;
G__29850.cljs$lang$applyTo = (function (arglist__29852){
var args = cljs.core.seq(arglist__29852);
return G__29850__delegate(args);
});
G__29850.cljs$core$IFn$_invoke$arity$variadic = G__29850__delegate;
return G__29850;
})()
;})(_STAR_print_fn_STAR_29847,_STAR_print_newline_STAR_29848,base_path_29849))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29848;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29847;
}}catch (e29846){if((e29846 instanceof Error)){
var e = e29846;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29849], null));
} else {
var e = e29846;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29849))
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
figwheel.client.repl_plugin = (function repl_plugin(p__29853){
var map__29858 = p__29853;
var map__29858__$1 = ((cljs.core.seq_QMARK_.call(null,map__29858))?cljs.core.apply.call(null,cljs.core.hash_map,map__29858):map__29858);
var opts = map__29858__$1;
var build_id = cljs.core.get.call(null,map__29858__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29858,map__29858__$1,opts,build_id){
return (function (p__29859){
var vec__29860 = p__29859;
var map__29861 = cljs.core.nth.call(null,vec__29860,(0),null);
var map__29861__$1 = ((cljs.core.seq_QMARK_.call(null,map__29861))?cljs.core.apply.call(null,cljs.core.hash_map,map__29861):map__29861);
var msg = map__29861__$1;
var msg_name = cljs.core.get.call(null,map__29861__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29860,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__29860,map__29861,map__29861__$1,msg,msg_name,_,map__29858,map__29858__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29860,map__29861,map__29861__$1,msg,msg_name,_,map__29858,map__29858__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29858,map__29858__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__29865){
var vec__29866 = p__29865;
var map__29867 = cljs.core.nth.call(null,vec__29866,(0),null);
var map__29867__$1 = ((cljs.core.seq_QMARK_.call(null,map__29867))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var msg = map__29867__$1;
var msg_name = cljs.core.get.call(null,map__29867__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29866,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__29868){
var map__29876 = p__29868;
var map__29876__$1 = ((cljs.core.seq_QMARK_.call(null,map__29876))?cljs.core.apply.call(null,cljs.core.hash_map,map__29876):map__29876);
var on_compile_fail = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__29876,map__29876__$1,on_compile_fail,on_compile_warning){
return (function (p__29877){
var vec__29878 = p__29877;
var map__29879 = cljs.core.nth.call(null,vec__29878,(0),null);
var map__29879__$1 = ((cljs.core.seq_QMARK_.call(null,map__29879))?cljs.core.apply.call(null,cljs.core.hash_map,map__29879):map__29879);
var msg = map__29879__$1;
var msg_name = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29878,(1));
var pred__29880 = cljs.core._EQ_;
var expr__29881 = msg_name;
if(cljs.core.truth_(pred__29880.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29881))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29880.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29881))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29876,map__29876__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__,msg_hist,msg_names,msg){
return (function (state_30078){
var state_val_30079 = (state_30078[(1)]);
if((state_val_30079 === (7))){
var inst_30014 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30080_30121 = state_30078__$1;
(statearr_30080_30121[(2)] = inst_30014);

(statearr_30080_30121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (20))){
var inst_30040 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30040){
var statearr_30081_30122 = state_30078__$1;
(statearr_30081_30122[(1)] = (22));

} else {
var statearr_30082_30123 = state_30078__$1;
(statearr_30082_30123[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (27))){
var inst_30052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30053 = figwheel.client.heads_up.display_warning.call(null,inst_30052);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(30),inst_30053);
} else {
if((state_val_30079 === (1))){
var inst_30002 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30078__$1 = state_30078;
if(cljs.core.truth_(inst_30002)){
var statearr_30083_30124 = state_30078__$1;
(statearr_30083_30124[(1)] = (2));

} else {
var statearr_30084_30125 = state_30078__$1;
(statearr_30084_30125[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (24))){
var inst_30068 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30085_30126 = state_30078__$1;
(statearr_30085_30126[(2)] = inst_30068);

(statearr_30085_30126[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (4))){
var inst_30076 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30078__$1,inst_30076);
} else {
if((state_val_30079 === (15))){
var inst_30029 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30030 = figwheel.client.format_messages.call(null,inst_30029);
var inst_30031 = figwheel.client.heads_up.display_error.call(null,inst_30030);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(18),inst_30031);
} else {
if((state_val_30079 === (21))){
var inst_30070 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30086_30127 = state_30078__$1;
(statearr_30086_30127[(2)] = inst_30070);

(statearr_30086_30127[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (31))){
var inst_30059 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(34),inst_30059);
} else {
if((state_val_30079 === (32))){
var state_30078__$1 = state_30078;
var statearr_30087_30128 = state_30078__$1;
(statearr_30087_30128[(2)] = null);

(statearr_30087_30128[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (33))){
var inst_30064 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30088_30129 = state_30078__$1;
(statearr_30088_30129[(2)] = inst_30064);

(statearr_30088_30129[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (13))){
var inst_30020 = (state_30078[(2)]);
var inst_30021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30022 = figwheel.client.format_messages.call(null,inst_30021);
var inst_30023 = figwheel.client.heads_up.display_error.call(null,inst_30022);
var state_30078__$1 = (function (){var statearr_30089 = state_30078;
(statearr_30089[(7)] = inst_30020);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(14),inst_30023);
} else {
if((state_val_30079 === (22))){
var inst_30042 = figwheel.client.heads_up.clear.call(null);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(25),inst_30042);
} else {
if((state_val_30079 === (29))){
var inst_30066 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30090_30130 = state_30078__$1;
(statearr_30090_30130[(2)] = inst_30066);

(statearr_30090_30130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (6))){
var inst_30010 = figwheel.client.heads_up.clear.call(null);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(9),inst_30010);
} else {
if((state_val_30079 === (28))){
var inst_30057 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30057){
var statearr_30091_30131 = state_30078__$1;
(statearr_30091_30131[(1)] = (31));

} else {
var statearr_30092_30132 = state_30078__$1;
(statearr_30092_30132[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (25))){
var inst_30044 = (state_30078[(2)]);
var inst_30045 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30046 = figwheel.client.heads_up.display_warning.call(null,inst_30045);
var state_30078__$1 = (function (){var statearr_30093 = state_30078;
(statearr_30093[(8)] = inst_30044);

return statearr_30093;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(26),inst_30046);
} else {
if((state_val_30079 === (34))){
var inst_30061 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30094_30133 = state_30078__$1;
(statearr_30094_30133[(2)] = inst_30061);

(statearr_30094_30133[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (17))){
var inst_30072 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30095_30134 = state_30078__$1;
(statearr_30095_30134[(2)] = inst_30072);

(statearr_30095_30134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (3))){
var inst_30016 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30016){
var statearr_30096_30135 = state_30078__$1;
(statearr_30096_30135[(1)] = (10));

} else {
var statearr_30097_30136 = state_30078__$1;
(statearr_30097_30136[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (12))){
var inst_30074 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30098_30137 = state_30078__$1;
(statearr_30098_30137[(2)] = inst_30074);

(statearr_30098_30137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (2))){
var inst_30004 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30078__$1 = state_30078;
if(cljs.core.truth_(inst_30004)){
var statearr_30099_30138 = state_30078__$1;
(statearr_30099_30138[(1)] = (5));

} else {
var statearr_30100_30139 = state_30078__$1;
(statearr_30100_30139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (23))){
var inst_30050 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30050){
var statearr_30101_30140 = state_30078__$1;
(statearr_30101_30140[(1)] = (27));

} else {
var statearr_30102_30141 = state_30078__$1;
(statearr_30102_30141[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (19))){
var inst_30037 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30038 = figwheel.client.heads_up.append_message.call(null,inst_30037);
var state_30078__$1 = state_30078;
var statearr_30103_30142 = state_30078__$1;
(statearr_30103_30142[(2)] = inst_30038);

(statearr_30103_30142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (11))){
var inst_30027 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30027){
var statearr_30104_30143 = state_30078__$1;
(statearr_30104_30143[(1)] = (15));

} else {
var statearr_30105_30144 = state_30078__$1;
(statearr_30105_30144[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (9))){
var inst_30012 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30106_30145 = state_30078__$1;
(statearr_30106_30145[(2)] = inst_30012);

(statearr_30106_30145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (5))){
var inst_30006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(8),inst_30006);
} else {
if((state_val_30079 === (14))){
var inst_30025 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30107_30146 = state_30078__$1;
(statearr_30107_30146[(2)] = inst_30025);

(statearr_30107_30146[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (26))){
var inst_30048 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30108_30147 = state_30078__$1;
(statearr_30108_30147[(2)] = inst_30048);

(statearr_30108_30147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (16))){
var inst_30035 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30078__$1 = state_30078;
if(inst_30035){
var statearr_30109_30148 = state_30078__$1;
(statearr_30109_30148[(1)] = (19));

} else {
var statearr_30110_30149 = state_30078__$1;
(statearr_30110_30149[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (30))){
var inst_30055 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30111_30150 = state_30078__$1;
(statearr_30111_30150[(2)] = inst_30055);

(statearr_30111_30150[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (10))){
var inst_30018 = figwheel.client.heads_up.clear.call(null);
var state_30078__$1 = state_30078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30078__$1,(13),inst_30018);
} else {
if((state_val_30079 === (18))){
var inst_30033 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30112_30151 = state_30078__$1;
(statearr_30112_30151[(2)] = inst_30033);

(statearr_30112_30151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30079 === (8))){
var inst_30008 = (state_30078[(2)]);
var state_30078__$1 = state_30078;
var statearr_30113_30152 = state_30078__$1;
(statearr_30113_30152[(2)] = inst_30008);

(statearr_30113_30152[(1)] = (7));


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
});})(c__18767__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18711__auto__,c__18767__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_30117 = [null,null,null,null,null,null,null,null,null];
(statearr_30117[(0)] = state_machine__18712__auto__);

(statearr_30117[(1)] = (1));

return statearr_30117;
});
var state_machine__18712__auto____1 = (function (state_30078){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_30078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e30118){if((e30118 instanceof Object)){
var ex__18715__auto__ = e30118;
var statearr_30119_30153 = state_30078;
(statearr_30119_30153[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30154 = state_30078;
state_30078 = G__30154;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_30078){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_30078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__,msg_hist,msg_names,msg))
})();
var state__18769__auto__ = (function (){var statearr_30120 = f__18768__auto__.call(null);
(statearr_30120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_30120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__,msg_hist,msg_names,msg))
);

return c__18767__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18767__auto___30217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto___30217,ch){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto___30217,ch){
return (function (state_30200){
var state_val_30201 = (state_30200[(1)]);
if((state_val_30201 === (8))){
var inst_30192 = (state_30200[(2)]);
var state_30200__$1 = (function (){var statearr_30202 = state_30200;
(statearr_30202[(7)] = inst_30192);

return statearr_30202;
})();
var statearr_30203_30218 = state_30200__$1;
(statearr_30203_30218[(2)] = null);

(statearr_30203_30218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (7))){
var inst_30196 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
var statearr_30204_30219 = state_30200__$1;
(statearr_30204_30219[(2)] = inst_30196);

(statearr_30204_30219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (6))){
var state_30200__$1 = state_30200;
var statearr_30205_30220 = state_30200__$1;
(statearr_30205_30220[(2)] = null);

(statearr_30205_30220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (5))){
var inst_30188 = (state_30200[(8)]);
var inst_30190 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30188);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30200__$1,(8),inst_30190);
} else {
if((state_val_30201 === (4))){
var inst_30188 = (state_30200[(8)]);
var inst_30188__$1 = (state_30200[(2)]);
var state_30200__$1 = (function (){var statearr_30206 = state_30200;
(statearr_30206[(8)] = inst_30188__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30188__$1)){
var statearr_30207_30221 = state_30200__$1;
(statearr_30207_30221[(1)] = (5));

} else {
var statearr_30208_30222 = state_30200__$1;
(statearr_30208_30222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30201 === (3))){
var inst_30198 = (state_30200[(2)]);
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30200__$1,inst_30198);
} else {
if((state_val_30201 === (2))){
var state_30200__$1 = state_30200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30200__$1,(4),ch);
} else {
if((state_val_30201 === (1))){
var state_30200__$1 = state_30200;
var statearr_30209_30223 = state_30200__$1;
(statearr_30209_30223[(2)] = null);

(statearr_30209_30223[(1)] = (2));


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
});})(c__18767__auto___30217,ch))
;
return ((function (switch__18711__auto__,c__18767__auto___30217,ch){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_30213 = [null,null,null,null,null,null,null,null,null];
(statearr_30213[(0)] = state_machine__18712__auto__);

(statearr_30213[(1)] = (1));

return statearr_30213;
});
var state_machine__18712__auto____1 = (function (state_30200){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_30200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e30214){if((e30214 instanceof Object)){
var ex__18715__auto__ = e30214;
var statearr_30215_30224 = state_30200;
(statearr_30215_30224[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30225 = state_30200;
state_30200 = G__30225;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_30200){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_30200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto___30217,ch))
})();
var state__18769__auto__ = (function (){var statearr_30216 = f__18768__auto__.call(null);
(statearr_30216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto___30217);

return statearr_30216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto___30217,ch))
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
var c__18767__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18767__auto__){
return (function (){
var f__18768__auto__ = (function (){var switch__18711__auto__ = ((function (c__18767__auto__){
return (function (state_30246){
var state_val_30247 = (state_30246[(1)]);
if((state_val_30247 === (2))){
var inst_30243 = (state_30246[(2)]);
var inst_30244 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30246__$1 = (function (){var statearr_30248 = state_30246;
(statearr_30248[(7)] = inst_30243);

return statearr_30248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30246__$1,inst_30244);
} else {
if((state_val_30247 === (1))){
var inst_30241 = cljs.core.async.timeout.call(null,(3000));
var state_30246__$1 = state_30246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30246__$1,(2),inst_30241);
} else {
return null;
}
}
});})(c__18767__auto__))
;
return ((function (switch__18711__auto__,c__18767__auto__){
return (function() {
var state_machine__18712__auto__ = null;
var state_machine__18712__auto____0 = (function (){
var statearr_30252 = [null,null,null,null,null,null,null,null];
(statearr_30252[(0)] = state_machine__18712__auto__);

(statearr_30252[(1)] = (1));

return statearr_30252;
});
var state_machine__18712__auto____1 = (function (state_30246){
while(true){
var ret_value__18713__auto__ = (function (){try{while(true){
var result__18714__auto__ = switch__18711__auto__.call(null,state_30246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18714__auto__;
}
break;
}
}catch (e30253){if((e30253 instanceof Object)){
var ex__18715__auto__ = e30253;
var statearr_30254_30256 = state_30246;
(statearr_30254_30256[(5)] = ex__18715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30257 = state_30246;
state_30246 = G__30257;
continue;
} else {
return ret_value__18713__auto__;
}
break;
}
});
state_machine__18712__auto__ = function(state_30246){
switch(arguments.length){
case 0:
return state_machine__18712__auto____0.call(this);
case 1:
return state_machine__18712__auto____1.call(this,state_30246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18712__auto____0;
state_machine__18712__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18712__auto____1;
return state_machine__18712__auto__;
})()
;})(switch__18711__auto__,c__18767__auto__))
})();
var state__18769__auto__ = (function (){var statearr_30255 = f__18768__auto__.call(null);
(statearr_30255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18767__auto__);

return statearr_30255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18769__auto__);
});})(c__18767__auto__))
);

return c__18767__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj30261 = {"detail":url};
return obj30261;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__30262){
var map__30268 = p__30262;
var map__30268__$1 = ((cljs.core.seq_QMARK_.call(null,map__30268))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);
var ed = map__30268__$1;
var exception_data = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30269_30273 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30270_30274 = null;
var count__30271_30275 = (0);
var i__30272_30276 = (0);
while(true){
if((i__30272_30276 < count__30271_30275)){
var msg_30277 = cljs.core._nth.call(null,chunk__30270_30274,i__30272_30276);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30277);

var G__30278 = seq__30269_30273;
var G__30279 = chunk__30270_30274;
var G__30280 = count__30271_30275;
var G__30281 = (i__30272_30276 + (1));
seq__30269_30273 = G__30278;
chunk__30270_30274 = G__30279;
count__30271_30275 = G__30280;
i__30272_30276 = G__30281;
continue;
} else {
var temp__4126__auto___30282 = cljs.core.seq.call(null,seq__30269_30273);
if(temp__4126__auto___30282){
var seq__30269_30283__$1 = temp__4126__auto___30282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30269_30283__$1)){
var c__16445__auto___30284 = cljs.core.chunk_first.call(null,seq__30269_30283__$1);
var G__30285 = cljs.core.chunk_rest.call(null,seq__30269_30283__$1);
var G__30286 = c__16445__auto___30284;
var G__30287 = cljs.core.count.call(null,c__16445__auto___30284);
var G__30288 = (0);
seq__30269_30273 = G__30285;
chunk__30270_30274 = G__30286;
count__30271_30275 = G__30287;
i__30272_30276 = G__30288;
continue;
} else {
var msg_30289 = cljs.core.first.call(null,seq__30269_30283__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30289);

var G__30290 = cljs.core.next.call(null,seq__30269_30283__$1);
var G__30291 = null;
var G__30292 = (0);
var G__30293 = (0);
seq__30269_30273 = G__30290;
chunk__30270_30274 = G__30291;
count__30271_30275 = G__30292;
i__30272_30276 = G__30293;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__30294){
var map__30296 = p__30294;
var map__30296__$1 = ((cljs.core.seq_QMARK_.call(null,map__30296))?cljs.core.apply.call(null,cljs.core.hash_map,map__30296):map__30296);
var w = map__30296__$1;
var message = cljs.core.get.call(null,map__30296__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30303 = cljs.core.seq.call(null,plugins);
var chunk__30304 = null;
var count__30305 = (0);
var i__30306 = (0);
while(true){
if((i__30306 < count__30305)){
var vec__30307 = cljs.core._nth.call(null,chunk__30304,i__30306);
var k = cljs.core.nth.call(null,vec__30307,(0),null);
var plugin = cljs.core.nth.call(null,vec__30307,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30309 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30303,chunk__30304,count__30305,i__30306,pl_30309,vec__30307,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30309.call(null,msg_hist);
});})(seq__30303,chunk__30304,count__30305,i__30306,pl_30309,vec__30307,k,plugin))
);
} else {
}

var G__30310 = seq__30303;
var G__30311 = chunk__30304;
var G__30312 = count__30305;
var G__30313 = (i__30306 + (1));
seq__30303 = G__30310;
chunk__30304 = G__30311;
count__30305 = G__30312;
i__30306 = G__30313;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30303);
if(temp__4126__auto__){
var seq__30303__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30303__$1)){
var c__16445__auto__ = cljs.core.chunk_first.call(null,seq__30303__$1);
var G__30314 = cljs.core.chunk_rest.call(null,seq__30303__$1);
var G__30315 = c__16445__auto__;
var G__30316 = cljs.core.count.call(null,c__16445__auto__);
var G__30317 = (0);
seq__30303 = G__30314;
chunk__30304 = G__30315;
count__30305 = G__30316;
i__30306 = G__30317;
continue;
} else {
var vec__30308 = cljs.core.first.call(null,seq__30303__$1);
var k = cljs.core.nth.call(null,vec__30308,(0),null);
var plugin = cljs.core.nth.call(null,vec__30308,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30318 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30303,chunk__30304,count__30305,i__30306,pl_30318,vec__30308,k,plugin,seq__30303__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30318.call(null,msg_hist);
});})(seq__30303,chunk__30304,count__30305,i__30306,pl_30318,vec__30308,k,plugin,seq__30303__$1,temp__4126__auto__))
);
} else {
}

var G__30319 = cljs.core.next.call(null,seq__30303__$1);
var G__30320 = null;
var G__30321 = (0);
var G__30322 = (0);
seq__30303 = G__30319;
chunk__30304 = G__30320;
count__30305 = G__30321;
i__30306 = G__30322;
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
var watch_and_reload__delegate = function (p__30323){
var map__30325 = p__30323;
var map__30325__$1 = ((cljs.core.seq_QMARK_.call(null,map__30325))?cljs.core.apply.call(null,cljs.core.hash_map,map__30325):map__30325);
var opts = map__30325__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__30323 = null;
if (arguments.length > 0) {
var G__30326__i = 0, G__30326__a = new Array(arguments.length -  0);
while (G__30326__i < G__30326__a.length) {G__30326__a[G__30326__i] = arguments[G__30326__i + 0]; ++G__30326__i;}
  p__30323 = new cljs.core.IndexedSeq(G__30326__a,0);
} 
return watch_and_reload__delegate.call(this,p__30323);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__30327){
var p__30323 = cljs.core.seq(arglist__30327);
return watch_and_reload__delegate(p__30323);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map