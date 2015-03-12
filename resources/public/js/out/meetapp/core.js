// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.core');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('meetapp.roster');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('alandipert.storage_atom');
goog.require('meetapp.store');
goog.require('meetapp.queue');
goog.require('goog.History');
goog.require('goog.events');
goog.require('meetapp.util');
goog.require('goog.string.format');
meetapp.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__17674__auto___23529 = (function (params__17675__auto__){
if(cljs.core.map_QMARK_.call(null,params__17675__auto__)){
var map__23527 = params__17675__auto__;
var map__23527__$1 = ((cljs.core.seq_QMARK_.call(null,map__23527))?cljs.core.apply.call(null,cljs.core.hash_map,map__23527):map__23527);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.queue.main;},new cljs.core.Symbol("meetapp.queue","main","meetapp.queue/main",-1023346495,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meetapp.queue","meetapp.queue",265855802,null),new cljs.core.Symbol(null,"main","main",-477271134,null),"/Users/levitanong/MeetApp/src/cljs/meetapp/queue.cljs",12,7,27,27,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(meetapp.queue.main)?meetapp.queue.main.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17675__auto__)){
var vec__23528 = params__17675__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.queue.main;},new cljs.core.Symbol("meetapp.queue","main","meetapp.queue/main",-1023346495,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meetapp.queue","meetapp.queue",265855802,null),new cljs.core.Symbol(null,"main","main",-477271134,null),"/Users/levitanong/MeetApp/src/cljs/meetapp/queue.cljs",12,7,27,27,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(meetapp.queue.main)?meetapp.queue.main.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__17674__auto___23529);

var action__17674__auto___23532 = (function (params__17675__auto__){
if(cljs.core.map_QMARK_.call(null,params__17675__auto__)){
var map__23530 = params__17675__auto__;
var map__23530__$1 = ((cljs.core.seq_QMARK_.call(null,map__23530))?cljs.core.apply.call(null,cljs.core.hash_map,map__23530):map__23530);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.roster.main;},new cljs.core.Symbol("meetapp.roster","main","meetapp.roster/main",-1826462429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meetapp.roster","meetapp.roster",742075108,null),new cljs.core.Symbol(null,"main","main",-477271134,null),"/Users/levitanong/MeetApp/src/cljs/meetapp/roster.cljs",12,7,91,91,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(meetapp.roster.main)?meetapp.roster.main.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__17675__auto__)){
var vec__23531 = params__17675__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.roster.main;},new cljs.core.Symbol("meetapp.roster","main","meetapp.roster/main",-1826462429,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"meetapp.roster","meetapp.roster",742075108,null),new cljs.core.Symbol(null,"main","main",-477271134,null),"/Users/levitanong/MeetApp/src/cljs/meetapp/roster.cljs",12,7,91,91,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(meetapp.roster.main)?meetapp.roster.main.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/roster",action__17674__auto___23532);

meetapp.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__23534 = (new goog.History());
goog.events.listen(G__23534,goog.history.EventType.NAVIGATE,((function (G__23534){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23534))
);

G__23534.setEnabled(true);

return G__23534;
});
meetapp.core.init_BANG_ = (function init_BANG_(){
meetapp.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map