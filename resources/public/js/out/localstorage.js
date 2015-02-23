// Compiled by ClojureScript 0.0-2760 {}
goog.provide('localstorage');
goog.require('cljs.core');
/**
* Set `key' in browser's localStorage to `val`.
*/
localstorage.set_item_BANG_ = (function set_item_BANG_(key,val){
return window.localStorage.setItem(key,val);
});
/**
* Returns value of `key' from browser's localStorage.
*/
localstorage.get_item = (function get_item(key){
return window.localStorage.getItem(key);
});
/**
* Remove the browser's localStorage value for the given `key`
*/
localstorage.remove_item_BANG_ = (function remove_item_BANG_(key){
return window.localStorage.removeItem(key);
});

//# sourceMappingURL=localstorage.js.map