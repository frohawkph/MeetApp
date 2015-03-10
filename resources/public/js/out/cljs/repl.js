// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30582_30586 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30583_30587 = null;
var count__30584_30588 = (0);
var i__30585_30589 = (0);
while(true){
if((i__30585_30589 < count__30584_30588)){
var f_30590 = cljs.core._nth.call(null,chunk__30583_30587,i__30585_30589);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30590);

var G__30591 = seq__30582_30586;
var G__30592 = chunk__30583_30587;
var G__30593 = count__30584_30588;
var G__30594 = (i__30585_30589 + (1));
seq__30582_30586 = G__30591;
chunk__30583_30587 = G__30592;
count__30584_30588 = G__30593;
i__30585_30589 = G__30594;
continue;
} else {
var temp__4126__auto___30595 = cljs.core.seq.call(null,seq__30582_30586);
if(temp__4126__auto___30595){
var seq__30582_30596__$1 = temp__4126__auto___30595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30582_30596__$1)){
var c__16445__auto___30597 = cljs.core.chunk_first.call(null,seq__30582_30596__$1);
var G__30598 = cljs.core.chunk_rest.call(null,seq__30582_30596__$1);
var G__30599 = c__16445__auto___30597;
var G__30600 = cljs.core.count.call(null,c__16445__auto___30597);
var G__30601 = (0);
seq__30582_30586 = G__30598;
chunk__30583_30587 = G__30599;
count__30584_30588 = G__30600;
i__30585_30589 = G__30601;
continue;
} else {
var f_30602 = cljs.core.first.call(null,seq__30582_30596__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30602);

var G__30603 = cljs.core.next.call(null,seq__30582_30596__$1);
var G__30604 = null;
var G__30605 = (0);
var G__30606 = (0);
seq__30582_30586 = G__30603;
chunk__30583_30587 = G__30604;
count__30584_30588 = G__30605;
i__30585_30589 = G__30606;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map