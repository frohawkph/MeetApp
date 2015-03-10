// Compiled by ClojureScript 0.0-2913 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30384_30392 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30385_30393 = null;
var count__30386_30394 = (0);
var i__30387_30395 = (0);
while(true){
if((i__30387_30395 < count__30386_30394)){
var k_30396 = cljs.core._nth.call(null,chunk__30385_30393,i__30387_30395);
e.setAttribute(cljs.core.name.call(null,k_30396),cljs.core.get.call(null,attrs,k_30396));

var G__30397 = seq__30384_30392;
var G__30398 = chunk__30385_30393;
var G__30399 = count__30386_30394;
var G__30400 = (i__30387_30395 + (1));
seq__30384_30392 = G__30397;
chunk__30385_30393 = G__30398;
count__30386_30394 = G__30399;
i__30387_30395 = G__30400;
continue;
} else {
var temp__4126__auto___30401 = cljs.core.seq.call(null,seq__30384_30392);
if(temp__4126__auto___30401){
var seq__30384_30402__$1 = temp__4126__auto___30401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30384_30402__$1)){
var c__16445__auto___30403 = cljs.core.chunk_first.call(null,seq__30384_30402__$1);
var G__30404 = cljs.core.chunk_rest.call(null,seq__30384_30402__$1);
var G__30405 = c__16445__auto___30403;
var G__30406 = cljs.core.count.call(null,c__16445__auto___30403);
var G__30407 = (0);
seq__30384_30392 = G__30404;
chunk__30385_30393 = G__30405;
count__30386_30394 = G__30406;
i__30387_30395 = G__30407;
continue;
} else {
var k_30408 = cljs.core.first.call(null,seq__30384_30402__$1);
e.setAttribute(cljs.core.name.call(null,k_30408),cljs.core.get.call(null,attrs,k_30408));

var G__30409 = cljs.core.next.call(null,seq__30384_30402__$1);
var G__30410 = null;
var G__30411 = (0);
var G__30412 = (0);
seq__30384_30392 = G__30409;
chunk__30385_30393 = G__30410;
count__30386_30394 = G__30411;
i__30387_30395 = G__30412;
continue;
}
} else {
}
}
break;
}

var seq__30388_30413 = cljs.core.seq.call(null,children);
var chunk__30389_30414 = null;
var count__30390_30415 = (0);
var i__30391_30416 = (0);
while(true){
if((i__30391_30416 < count__30390_30415)){
var ch_30417 = cljs.core._nth.call(null,chunk__30389_30414,i__30391_30416);
e.appendChild(ch_30417);

var G__30418 = seq__30388_30413;
var G__30419 = chunk__30389_30414;
var G__30420 = count__30390_30415;
var G__30421 = (i__30391_30416 + (1));
seq__30388_30413 = G__30418;
chunk__30389_30414 = G__30419;
count__30390_30415 = G__30420;
i__30391_30416 = G__30421;
continue;
} else {
var temp__4126__auto___30422 = cljs.core.seq.call(null,seq__30388_30413);
if(temp__4126__auto___30422){
var seq__30388_30423__$1 = temp__4126__auto___30422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30388_30423__$1)){
var c__16445__auto___30424 = cljs.core.chunk_first.call(null,seq__30388_30423__$1);
var G__30425 = cljs.core.chunk_rest.call(null,seq__30388_30423__$1);
var G__30426 = c__16445__auto___30424;
var G__30427 = cljs.core.count.call(null,c__16445__auto___30424);
var G__30428 = (0);
seq__30388_30413 = G__30425;
chunk__30389_30414 = G__30426;
count__30390_30415 = G__30427;
i__30391_30416 = G__30428;
continue;
} else {
var ch_30429 = cljs.core.first.call(null,seq__30388_30423__$1);
e.appendChild(ch_30429);

var G__30430 = cljs.core.next.call(null,seq__30388_30423__$1);
var G__30431 = null;
var G__30432 = (0);
var G__30433 = (0);
seq__30388_30413 = G__30430;
chunk__30389_30414 = G__30431;
count__30390_30415 = G__30432;
i__30391_30416 = G__30433;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__30434__i = 0, G__30434__a = new Array(arguments.length -  2);
while (G__30434__i < G__30434__a.length) {G__30434__a[G__30434__i] = arguments[G__30434__i + 2]; ++G__30434__i;}
  children = new cljs.core.IndexedSeq(G__30434__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__30435){
var t = cljs.core.first(arglist__30435);
arglist__30435 = cljs.core.next(arglist__30435);
var attrs = cljs.core.first(arglist__30435);
var children = cljs.core.rest(arglist__30435);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__16555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__16556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__16557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__16558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__16559__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__,hierarchy__16559__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__,hierarchy__16559__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__16559__auto__,method_table__16555__auto__,prefer_table__16556__auto__,method_cache__16557__auto__,cached_hierarchy__16558__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30436 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30436.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30436.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30436.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30436);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__30437,st_map){
var map__30441 = p__30437;
var map__30441__$1 = ((cljs.core.seq_QMARK_.call(null,map__30441))?cljs.core.apply.call(null,cljs.core.hash_map,map__30441):map__30441);
var container_el = cljs.core.get.call(null,map__30441__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30441,map__30441__$1,container_el){
return (function (p__30442){
var vec__30443 = p__30442;
var k = cljs.core.nth.call(null,vec__30443,(0),null);
var v = cljs.core.nth.call(null,vec__30443,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30441,map__30441__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__30444,dom_str){
var map__30446 = p__30444;
var map__30446__$1 = ((cljs.core.seq_QMARK_.call(null,map__30446))?cljs.core.apply.call(null,cljs.core.hash_map,map__30446):map__30446);
var c = map__30446__$1;
var content_area_el = cljs.core.get.call(null,map__30446__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__30447){
var map__30449 = p__30447;
var map__30449__$1 = ((cljs.core.seq_QMARK_.call(null,map__30449))?cljs.core.apply.call(null,cljs.core.hash_map,map__30449):map__30449);
var content_area_el = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_30491){
var state_val_30492 = (state_30491[(1)]);
if((state_val_30492 === (2))){
var inst_30476 = (state_30491[(7)]);
var inst_30485 = (state_30491[(2)]);
var inst_30486 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30487 = ["auto"];
var inst_30488 = cljs.core.PersistentHashMap.fromArrays(inst_30486,inst_30487);
var inst_30489 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30476,inst_30488);
var state_30491__$1 = (function (){var statearr_30493 = state_30491;
(statearr_30493[(8)] = inst_30485);

return statearr_30493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30491__$1,inst_30489);
} else {
if((state_val_30492 === (1))){
var inst_30476 = (state_30491[(7)]);
var inst_30476__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30477 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30478 = ["10px","10px","100%","68px","1.0"];
var inst_30479 = cljs.core.PersistentHashMap.fromArrays(inst_30477,inst_30478);
var inst_30480 = cljs.core.merge.call(null,inst_30479,style);
var inst_30481 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30476__$1,inst_30480);
var inst_30482 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30476__$1,msg);
var inst_30483 = cljs.core.async.timeout.call(null,(300));
var state_30491__$1 = (function (){var statearr_30494 = state_30491;
(statearr_30494[(7)] = inst_30476__$1);

(statearr_30494[(9)] = inst_30481);

(statearr_30494[(10)] = inst_30482);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30491__$1,(2),inst_30483);
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
var statearr_30498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30498[(0)] = state_machine__18751__auto__);

(statearr_30498[(1)] = (1));

return statearr_30498;
});
var state_machine__18751__auto____1 = (function (state_30491){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30499){if((e30499 instanceof Object)){
var ex__18754__auto__ = e30499;
var statearr_30500_30502 = state_30491;
(statearr_30500_30502[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30503 = state_30491;
state_30491 = G__30503;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30491){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_30501 = f__18807__auto__.call(null);
(statearr_30501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_30501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30505 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30505,(0),null);
var ln = cljs.core.nth.call(null,vec__30505,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__30508 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__30508,(0),null);
var file_line = cljs.core.nth.call(null,vec__30508,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30508,file_name,file_line){
return (function (p1__30506_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30506_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30508,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__30510 = figwheel.client.heads_up.ensure_container.call(null);
var map__30510__$1 = ((cljs.core.seq_QMARK_.call(null,map__30510))?cljs.core.apply.call(null,cljs.core.hash_map,map__30510):map__30510);
var content_area_el = cljs.core.get.call(null,map__30510__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_30557){
var state_val_30558 = (state_30557[(1)]);
if((state_val_30558 === (3))){
var inst_30540 = (state_30557[(7)]);
var inst_30554 = (state_30557[(2)]);
var inst_30555 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30540,"");
var state_30557__$1 = (function (){var statearr_30559 = state_30557;
(statearr_30559[(8)] = inst_30554);

return statearr_30559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30557__$1,inst_30555);
} else {
if((state_val_30558 === (2))){
var inst_30540 = (state_30557[(7)]);
var inst_30547 = (state_30557[(2)]);
var inst_30548 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30549 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30550 = cljs.core.PersistentHashMap.fromArrays(inst_30548,inst_30549);
var inst_30551 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30540,inst_30550);
var inst_30552 = cljs.core.async.timeout.call(null,(200));
var state_30557__$1 = (function (){var statearr_30560 = state_30557;
(statearr_30560[(9)] = inst_30551);

(statearr_30560[(10)] = inst_30547);

return statearr_30560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30557__$1,(3),inst_30552);
} else {
if((state_val_30558 === (1))){
var inst_30540 = (state_30557[(7)]);
var inst_30540__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30541 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30542 = ["0.0"];
var inst_30543 = cljs.core.PersistentHashMap.fromArrays(inst_30541,inst_30542);
var inst_30544 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30540__$1,inst_30543);
var inst_30545 = cljs.core.async.timeout.call(null,(300));
var state_30557__$1 = (function (){var statearr_30561 = state_30557;
(statearr_30561[(11)] = inst_30544);

(statearr_30561[(7)] = inst_30540__$1);

return statearr_30561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30557__$1,(2),inst_30545);
} else {
return null;
}
}
}
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30565[(0)] = state_machine__18751__auto__);

(statearr_30565[(1)] = (1));

return statearr_30565;
});
var state_machine__18751__auto____1 = (function (state_30557){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30566){if((e30566 instanceof Object)){
var ex__18754__auto__ = e30566;
var statearr_30567_30569 = state_30557;
(statearr_30567_30569[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30570 = state_30557;
state_30557 = G__30570;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30557){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_30568 = f__18807__auto__.call(null);
(statearr_30568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_30568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__18806__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18806__auto__){
return (function (){
var f__18807__auto__ = (function (){var switch__18750__auto__ = ((function (c__18806__auto__){
return (function (state_30602){
var state_val_30603 = (state_30602[(1)]);
if((state_val_30603 === (4))){
var inst_30600 = (state_30602[(2)]);
var state_30602__$1 = state_30602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30602__$1,inst_30600);
} else {
if((state_val_30603 === (3))){
var inst_30597 = (state_30602[(2)]);
var inst_30598 = figwheel.client.heads_up.clear.call(null);
var state_30602__$1 = (function (){var statearr_30604 = state_30602;
(statearr_30604[(7)] = inst_30597);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30602__$1,(4),inst_30598);
} else {
if((state_val_30603 === (2))){
var inst_30594 = (state_30602[(2)]);
var inst_30595 = cljs.core.async.timeout.call(null,(400));
var state_30602__$1 = (function (){var statearr_30605 = state_30602;
(statearr_30605[(8)] = inst_30594);

return statearr_30605;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30602__$1,(3),inst_30595);
} else {
if((state_val_30603 === (1))){
var inst_30592 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30602__$1 = state_30602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30602__$1,(2),inst_30592);
} else {
return null;
}
}
}
}
});})(c__18806__auto__))
;
return ((function (switch__18750__auto__,c__18806__auto__){
return (function() {
var state_machine__18751__auto__ = null;
var state_machine__18751__auto____0 = (function (){
var statearr_30609 = [null,null,null,null,null,null,null,null,null];
(statearr_30609[(0)] = state_machine__18751__auto__);

(statearr_30609[(1)] = (1));

return statearr_30609;
});
var state_machine__18751__auto____1 = (function (state_30602){
while(true){
var ret_value__18752__auto__ = (function (){try{while(true){
var result__18753__auto__ = switch__18750__auto__.call(null,state_30602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18753__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18753__auto__;
}
break;
}
}catch (e30610){if((e30610 instanceof Object)){
var ex__18754__auto__ = e30610;
var statearr_30611_30613 = state_30602;
(statearr_30611_30613[(5)] = ex__18754__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18752__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30614 = state_30602;
state_30602 = G__30614;
continue;
} else {
return ret_value__18752__auto__;
}
break;
}
});
state_machine__18751__auto__ = function(state_30602){
switch(arguments.length){
case 0:
return state_machine__18751__auto____0.call(this);
case 1:
return state_machine__18751__auto____1.call(this,state_30602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__18751__auto____0;
state_machine__18751__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__18751__auto____1;
return state_machine__18751__auto__;
})()
;})(switch__18750__auto__,c__18806__auto__))
})();
var state__18808__auto__ = (function (){var statearr_30612 = f__18807__auto__.call(null);
(statearr_30612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18806__auto__);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18808__auto__);
});})(c__18806__auto__))
);

return c__18806__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map