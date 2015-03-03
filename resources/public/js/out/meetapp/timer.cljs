(ns meetapp.timer
  (:require [reagent.core :as reagent :refer [atom]]
            [goog.string :as gstring]))

(defonce counter (atom 0))

;; defonce because you don't want interval being triggered more than once ever.
(defonce interval (js/setInterval
                   (fn [] (swap! counter #(+ % 1000))) 1000))

(defn format-timer [delta]
  (clojure.string/join ":" (map #(gstring/format "%02d" %) [(.getMinutes delta)(.getSeconds delta)])))

(defn reset []
  (reset! counter 0))

(defn main []
  (fn []
    [:div.example-clock
     (-> @counter js/Date. format-timer)]))