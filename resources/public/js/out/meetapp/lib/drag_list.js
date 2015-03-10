// Compiled by ClojureScript 0.0-2913 {}
goog.provide('meetapp.lib.drag_list');
goog.require('cljs.core');
goog.require('meetapp.lib.collections');
goog.require('reagent.core');
if(typeof meetapp.lib.drag_list.dragging !== 'undefined'){
} else {
meetapp.lib.drag_list.dragging = reagent.core.atom.call(null,null);
}
meetapp.lib.drag_list.start = (function start(event){
cljs.core.reset_BANG_.call(null,meetapp.lib.drag_list.dragging,Number(event.currentTarget.dataset.id));

event.dataTransfer.effectAllowed = "move";

return event.dataTransfer.setData("text/html",event.currentTarget);
});
meetapp.lib.drag_list.end = (function end(event){
return cljs.core.reset_BANG_.call(null,meetapp.lib.drag_list.dragging,null);
});
meetapp.lib.drag_list.over = (function over(store,address,event){
event.preventDefault();

var from = cljs.core.deref.call(null,meetapp.lib.drag_list.dragging);
var to = Number(event.currentTarget.dataset.id);
cljs.core.swap_BANG_.call(null,store,cljs.core.update_in,address,((function (from,to){
return (function (p1__17763_SHARP_){
return meetapp.lib.collections.reposition.call(null,p1__17763_SHARP_,from,to);
});})(from,to))
);

return cljs.core.reset_BANG_.call(null,meetapp.lib.drag_list.dragging,to);
});

//# sourceMappingURL=drag_list.js.map