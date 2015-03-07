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
meetapp.core.key_handler = (function key_handler(page_id,event){
meetapp.core.preventDefault = (function preventDefault(){
return event.preventDefault();
});

var G__26561 = event.keyCode;
switch (G__26561) {
case (40):
console.log("down");

return meetapp.core.preventDefault.call(null);

break;
case (38):
console.log("up");

return meetapp.core.preventDefault.call(null);

break;
case (13):
console.log("return");

return meetapp.core.preventDefault.call(null);

break;
case (27):
console.log("escape");

return meetapp.core.preventDefault.call(null);

break;
case (32):
return null;

break;
case (8):
return null;

break;
default:
return console.log("other keys",event.keyCode);

}
});
meetapp.core.queue_view = (function queue_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://torchapps.github.io/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-torch","i.icon-torch",-993760056)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"MeetApp"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spacer","div.spacer",2037275558)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/roster"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-add","i.icon-add",-74563495)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.queue.main], null)], null)], null);
});
meetapp.core.queue_page = (function queue_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return document.addEventListener("keydown",cljs.core.partial.call(null,meetapp.core.key_handler,"queue"));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return document.removeEventListener("keydown",cljs.core.partial.call(null,meetapp.core.key_handler,"queue"));
}),new cljs.core.Keyword(null,"component-function","component-function",654728922),meetapp.core.queue_view], null));
});
meetapp.core.roster_page = (function roster_page(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return document.addEventListener("keydown",cljs.core.partial.call(null,meetapp.core.key_handler,"roster"));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return document.removeEventListener("keydown",cljs.core.partial.call(null,meetapp.core.key_handler,"roster"));
}),new cljs.core.Keyword(null,"component-function","component-function",654728922),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.toolbar","div.toolbar",-1371089148),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon-button","a.icon-button",989529593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-arrow-back","i.icon-arrow-back",1710557319)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.roster.main], null)], null)], null);
})], null));
});
meetapp.core.current_page = (function current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__19339__auto___26565 = (function (params__19340__auto__){
if(cljs.core.map_QMARK_.call(null,params__19340__auto__)){
var map__26563 = params__19340__auto__;
var map__26563__$1 = ((cljs.core.seq_QMARK_.call(null,map__26563))?cljs.core.apply.call(null,cljs.core.hash_map,map__26563):map__26563);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.queue_page;},new cljs.core.Symbol("meetapp.core","queue-page","meetapp.core/queue-page",-1386827433,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.queue_page)?meetapp.core.queue_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"queue-page","queue-page",1956325432,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19340__auto__)){
var vec__26564 = params__19340__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.queue_page;},new cljs.core.Symbol("meetapp.core","queue-page","meetapp.core/queue-page",-1386827433,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.queue_page)?meetapp.core.queue_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"queue-page","queue-page",1956325432,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),57,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19339__auto___26565);

var action__19339__auto___26568 = (function (params__19340__auto__){
if(cljs.core.map_QMARK_.call(null,params__19340__auto__)){
var map__26566 = params__19340__auto__;
var map__26566__$1 = ((cljs.core.seq_QMARK_.call(null,map__26566))?cljs.core.apply.call(null,cljs.core.hash_map,map__26566):map__26566);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.roster_page;},new cljs.core.Symbol("meetapp.core","roster-page","meetapp.core/roster-page",-1628759679,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.roster_page)?meetapp.core.roster_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"roster-page","roster-page",-1230610404,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),63,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19340__auto__)){
var vec__26567 = params__19340__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return meetapp.core.roster_page;},new cljs.core.Symbol("meetapp.core","roster-page","meetapp.core/roster-page",-1628759679,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(meetapp.core.roster_page)?meetapp.core.roster_page.cljs$lang$test:null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"roster-page","roster-page",-1230610404,null),new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"line","line",212345235),63,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/levitanong/MeetApp/src/cljs/meetapp/core.cljs",new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"meetapp.core","meetapp.core",-712138258,null)], null)));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/roster",action__19339__auto___26568);

meetapp.core.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){
var G__26570 = (new goog.History());
goog.events.listen(G__26570,goog.history.EventType.NAVIGATE,((function (G__26570){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__26570))
);

G__26570.setEnabled(true);

return G__26570;
});
meetapp.core.init_BANG_ = (function init_BANG_(){
meetapp.core.hook_browser_navigation_BANG_.call(null);

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [meetapp.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map