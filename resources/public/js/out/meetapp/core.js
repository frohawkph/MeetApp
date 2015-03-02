// Compiled by ClojureScript 0.0-2760 {}
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
goog.require('goog.string.format');
meetapp.core.home_page = (function home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://torchapps.github.io/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-torch","i.icon-torch",-993760056)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"MeetApp"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.roster.main], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.queue.main], null)], null)], null);
});
meetapp.core.about_page = (function about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About meetapp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"go to the home page"], null)], null)], null);
});
meetapp.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__19339__auto___23354 = (function (params__19340__auto__){
if(cljs.core.map_QMARK_.call(null,params__19340__auto__)){
var map__23352 = params__19340__auto__;
var map__23352__$1 = ((cljs.core.seq_QMARK_.call(null,map__23352))?cljs.core.apply.call(null,cljs.core.hash_map,map__23352):map__23352);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.home_page;},new cljs.core.Symbol("meetapp.core","home-page","meetapp.core/home-page",-493532420,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.home_page)?meetapp.core.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19340__auto__)){
var vec__23353 = params__19340__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.home_page;},new cljs.core.Symbol("meetapp.core","home-page","meetapp.core/home-page",-493532420,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.home_page)?meetapp.core.home_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19339__auto___23354);

var action__19339__auto___23357 = (function (params__19340__auto__){
if(cljs.core.map_QMARK_.call(null,params__19340__auto__)){
var map__23355 = params__19340__auto__;
var map__23355__$1 = ((cljs.core.seq_QMARK_.call(null,map__23355))?cljs.core.apply.call(null,cljs.core.hash_map,map__23355):map__23355);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.about_page;},new cljs.core.Symbol("meetapp.core","about-page","meetapp.core/about-page",-1772091460,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.about_page)?meetapp.core.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19340__auto__)){
var vec__23356 = params__19340__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.about_page;},new cljs.core.Symbol("meetapp.core","about-page","meetapp.core/about-page",-1772091460,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.about_page)?meetapp.core.about_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),31,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19339__auto___23357);

meetapp.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__23359 = (new goog.History());
goog.events.listen(G__23359,goog.history.EventType.NAVIGATE,((function (G__23359){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__23359))
);

G__23359.setEnabled(true);

return G__23359;
});
meetapp.core.init_BANG_ = (function init_BANG_(){
meetapp.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map