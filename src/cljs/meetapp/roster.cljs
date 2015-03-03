(ns meetapp.roster
  (:require [reagent.core :as reagent :refer [atom]]
            [meetapp.store :as store]
            [meetapp.lib.collapse :as collapse]
            [goog.string :as gstring]))

(defonce collapse-open? (atom false))

(defn get-event-value [event] (-> event .-target .-value))

(defn blur-handler [event]
  (reset! collapse-open? false))

(defn main []
  [:div.roster
   [:div.search-section
    [:input {
             :type "text"
             :on-focus #(reset! collapse-open? true)
             :on-blur blur-handler
             :value @store/current-name
             :placeholder "Search or Add"
             :on-change #(reset! store/current-name (get-event-value %))}]
    [:button {
              :on-click #(if
                           (> (count @store/current-name) 0)
                           (store/add-to-roster @store/current-name)
                           (.log js/console "Error: name is blank"))} "Add"]]
   [collapse/main @collapse-open? 
    [:div {:on-mouse-down #(.preventDefault %)} 
     [:ul.basic-list (for
                       [name (sort (if (boolean @store/current-name) (filter #(gstring/caseInsensitiveContains % @store/current-name) (@store/state :roster)) (@store/state :roster)))]
                       [:li
                        {:key name}
                        [:a.entry {:on-click #(store/add-to-queue name)} name]
                        [:a.icon-button {:on-click #(store/remove-from-roster name)} [:i.icon-close]]])]]]])

