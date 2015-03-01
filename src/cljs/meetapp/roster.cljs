(ns meetapp.roster
  (:require [reagent.core :as reagent :refer [atom]]
            [meetapp.store :as store]
            [goog.string :as gstring]))

(defn get-event-value [event] (-> event .-target .-value))

(defn main []
  [:div.roster
   [:div.search-section
    [:input {
             :type "text"
             :value @store/current-name
             :placeholder "Search or Add"
             :on-change #(reset! store/current-name (get-event-value %))}]
    [:button {
              :on-click #(if
                           (> (count @store/current-name) 0)
                           (store/add-to-roster @store/current-name)
                           (.log js/console "Error: name is blank"))} "Add"]]

   [:ul.basic-list (for
                     [name (sort (if (boolean @store/current-name) (filter #(gstring/caseInsensitiveContains % @store/current-name) (@store/state :roster)) (@store/state :roster)))]
                     [:li
                      {:key name}
                      [:a.entry {:on-click #(store/add-to-queue name)} name]
                      [:a.icon-button {:on-click #(store/remove-from-roster name)} [:i.icon-close]]])]])

