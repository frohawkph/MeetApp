(ns meetapp.roster
  (:require [reagent.core :as reagent :refer [atom]]
            [meetapp.store :as store]
            [meetapp.lib.collapse :as collapse]
            [goog.string :as gstring]))

(defonce collapse-open? (atom false))

(defn get-event-value [event] (-> event .-target .-value))

(defn blur-handler [event]
  (reset! collapse-open? false))

(defn enter-handler []
  (if 
    (contains? (get-in @store/state [:roster]) @store/current-name)
    (.log js/console "Error: name exists"))
  (if 
    (> (count @store/current-name) 0)
    (store/add-to-roster @store/current-name)
    (.log js/console "Error: name is blank")))

(defn keyhandler [event]
  (.log js/console (.-key event))
  (case (.-key event)
    "Enter" (enter-handler)
    "default"))

(defn main []
  [:div.roster
   [:div.search-section
    [:input {
             :type "text"
             :on-focus #(reset! collapse-open? true)
             :on-blur blur-handler
             :value @store/current-name
             :placeholder "Search or Add"
             :on-key-press keyhandler
             :on-change #(reset! store/current-name (get-event-value %))}]
    [:button {
              :on-click #(if
                           (> (count @store/current-name) 0)
                           (store/add-to-roster @store/current-name)
                           (.log js/console "Error: name is blank"))} "Add"]] 
   [:ul.basic-list {:on-mouse-down #(.preventDefault %)} 
    (for
      [name (sort (if (boolean @store/current-name) (filter #(gstring/caseInsensitiveContains % @store/current-name) (@store/state :roster)) (@store/state :roster)))]
      [:li
       {:key name}
       [:a.entry {:href "#/" :on-click #(store/add-to-queue name)} name]
       [:a.icon-button {:on-click #(store/remove-from-roster name)} [:i.icon-close]]])]])

