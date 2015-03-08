(ns meetapp.roster
  (:require [reagent.core :as reagent :refer [atom]]
            [meetapp.store :as store]
            [meetapp.lib.collapse :as collapse]
            [meetapp.util :as util]
            [goog.string :as gstring]))

(defonce collapse-open? (atom false))
(defonce selected-index (atom nil))

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
  (.stopPropagation event)
  (case (.-key event)
    "Enter" (enter-handler)
    "default"))

(defn roster-input []
  (reagent/create-class 
    {:component-did-mount (fn [this] (.focus (reagent/dom-node this)))
     :component-function (fn []
                           [:input {:ref "focus"
                                    :type "text"
                                    :on-focus #(reset! collapse-open? true)
                                    :on-blur blur-handler
                                    :value @store/current-name
                                    :placeholder "Search or Add"
                                    :on-key-press keyhandler
                                    :on-change #(reset! store/current-name (get-event-value %))}])}))

(defn filtered-roster []
  (if (boolean @store/current-name)
    (filter #(gstring/caseInsensitiveContains % @store/current-name) (@store/state :roster))
    (@store/state :roster)))

(defn main-keyhandler [event]
  (let [max-count (-> (filtered-roster) count dec)
        within-bounds? (and 
                         (boolean @selected-index) 
                         (<= @selected-index max-count) 
                         (>= @selected-index 0))]
    (case (util/key-mapping (.-keyCode event))
      "enter" (do 
                (.log js/console (filtered-roster))
                (if within-bounds? (store/add-to-queue ((vec (filtered-roster)) @selected-index)))
                #_(session/put! :current-page #'queue-page))
      "escape" (reset! selected-index nil)
      "down" (do 
               (.preventDefault event)
               (if within-bounds? 
                 (swap! selected-index (if (< @selected-index max-count) inc identity)) 
                 (reset! selected-index 0)))
      "up" (do
             (.preventDefault event)
             (if within-bounds?
               (swap! selected-index (if (pos? @selected-index) dec identity))
               (reset! selected-index max-count)))
      (.log js/console "any key")))
  #_(.log js/console @selected-index))

(defn main []
  (reagent/create-class
    {:component-did-mount 
     (fn [] 
       (.removeEventListener js/document "keydown" main-keyhandler) ;remove the listener if it exists, before adding. 
       (.addEventListener js/document "keydown" main-keyhandler))
     :component-will-unmount 
     (fn [] (.removeEventListener js/document "keydown" main-keyhandler))
     :component-function 
     (fn [] 
       [:div 
        [:div.toolbar
         [:a.icon-button {:href "#/"} 
          [:i.icon-arrow-back]]]
        [:div.roster.main
         [:div.search-section
          [roster-input]] 
         [:ul.basic-list {:on-mouse-down #(.preventDefault %)} 
          (doall (map-indexed 
                   (fn [index name] 
                     [:li
                      {:key name
                       :class (if (= index @selected-index) "selected")}
                      [:a.entry {:href "#/" :on-click #(store/add-to-queue name)} name]
                      [:a.icon-button {:on-click #(store/remove-from-roster name)} [:i.icon-close]]]) 
                   (filtered-roster)))]]])}))


