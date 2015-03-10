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
var seq__30621_30625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30622_30626 = null;
var count__30623_30627 = (0);
var i__30624_30628 = (0);
while(true){
if((i__30624_30628 < count__30623_30627)){
var f_30629 = cljs.core._nth.call(null,chunk__30622_30626,i__30624_30628);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30629);

var G__30630 = seq__30621_30625;
var G__30631 = chunk__30622_30626;
var G__30632 = count__30623_30627;
var G__30633 = (i__30624_30628 + (1));
seq__30621_30625 = G__30630;
chunk__30622_30626 = G__30631;
count__30623_30627 = G__30632;
i__30624_30628 = G__30633;
continue;
} else {
var temp__4126__auto___30634 = cljs.core.seq.call(null,seq__30621_30625);
if(temp__4126__auto___30634){
var seq__30621_30635__$1 = temp__4126__auto___30634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30621_30635__$1)){
var c__16445__auto___30636 = cljs.core.chunk_first.call(null,seq__30621_30635__$1);
var G__30637 = cljs.core.chunk_rest.call(null,seq__30621_30635__$1);
var G__30638 = c__16445__auto___30636;
var G__30639 = cljs.core.count.call(null,c__16445__auto___30636);
var G__30640 = (0);
seq__30621_30625 = G__30637;
chunk__30622_30626 = G__30638;
count__30623_30627 = G__30639;
i__30624_30628 = G__30640;
continue;
} else {
var f_30641 = cljs.core.first.call(null,seq__30621_30635__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_30641);

var G__30642 = cljs.core.next.call(null,seq__30621_30635__$1);
var G__30643 = null;
var G__30644 = (0);
var G__30645 = (0);
seq__30621_30625 = G__30642;
chunk__30622_30626 = G__30643;
count__30623_30627 = G__30644;
i__30624_30628 = G__30645;
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