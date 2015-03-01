(ns meetapp.lib.drag-list
  (:require [reagent.core :as reagent :refer [atom]])
  (:use     [meetapp.lib.collections :only [without insert reposition]]))

;; drag things

(defonce dragging (atom nil))

(defn start [event]
  (reset! dragging (js/Number event.currentTarget.dataset.id))

  ; for use with firefox
  (set! (.-effectAllowed event.dataTransfer) "move")
  (.setData event.dataTransfer "text/html" event.currentTarget))

(defn end [event]
  (reset! dragging nil))

(defn over [store address event]
  (.preventDefault event)
  (let [from @dragging
        to (js/Number event.currentTarget.dataset.id)]
    (swap! store update-in address #(reposition % from to))
    (reset! dragging to)))