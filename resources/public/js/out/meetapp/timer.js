// Compiled by ClojureScript 0.0-2760 {}
goog.provide('meetapp.timer');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('reagent.core');
if(typeof meetapp.timer.counter !== 'undefined'){
} else {
meetapp.timer.counter = reagent.core.atom.call(null,(0));
}
if(typeof meetapp.timer.interval !== 'undefined'){
} else {
meetapp.timer.interval = setInterval((function (){
return cljs.core.swap_BANG_.call(null,meetapp.timer.counter,(function (p1__23518_SHARP_){
return (p1__23518_SHARP_ + (1000));
}));
}),(1000));
}
meetapp.timer.format_timer = (function format_timer(delta){
return clojure.string.join.call(null,":",cljs.core.map.call(null,(function (p1__23519_SHARP_){
return goog.string.format("%02d",p1__23519_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [delta.getMinutes(),delta.getSeconds()], null)));
});
meetapp.timer.reset = (function reset(){
return cljs.core.reset_BANG_.call(null,meetapp.timer.counter,(0));
});
meetapp.timer.main = (function main(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),meetapp.timer.format_timer.call(null,(new Date(cljs.core.deref.call(null,meetapp.timer.counter))))], null);
});
});

//# sourceMappingURL=timer.js.map