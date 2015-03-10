(ns meetapp.queue
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as secretary :include-macros true]
            [meetapp.store :as store]
            [goog.string :as gstring]
            [meetapp.lib.drag-list :as drag-list]
            [meetapp.timer :as timer])
  (:use     [meetapp.lib.collections :only [without insert reposition]]))

(defn next-speaker []
  (timer/reset)
  (if (boolean (first (@store/state :queue))) (store/remove-from-queue 0)))

(defn key-handler [event]
  (defn preventDefault [] (.preventDefault event))
  ;(.log js/console page-id)
  
  #_(case (util/key-mapping (.-keyCode event))
      "down"  (.log js/console "going down")
      "up"    (.log js/console "going up")))

(defn main []
  (let [go-roster #(secretary/dispatch! "/roster")] 
    (reagent/create-class 
      {:component-did-mount     #(.addEventListener js/document "keydown" key-handler)
       :component-will-unmount  #(.removeEventListener js/document "keydown" key-handler)
       :render                  (fn []
                                  [:div.app-container 
                                   [:div.toolbar
                                    [:a.icon-button {:href "http://torchapps.github.io/"} [:i.icon-torch]]
                                    [:span "MeetApp"]
                                    [:div.spacer]
                                    [:a.icon-button {:on-click go-roster} [:i.icon-add]]]
                                   [:div.queue.main
                                    [:h2 {:on-click #(next-speaker)}
                                     [timer/main]]
                                    [:ul.basic-list (doall (map-indexed
                                                             (fn [index item]
                                                               [:li
                                                                {:key index
                                                                 :data-id index
                                                                 :draggable true
                                                                 :on-drag-end drag-list/end
                                                                 :on-drag-over (partial drag-list/over store/state [:queue])
                                                                 :on-drag-start drag-list/start
                                                                 :class (if (= @drag-list/dragging index) "dragging" "")
                                                                 }
                                                                [:div.entry item]
                                                                [:a.icon-button {:on-click #(store/remove-from-queue index)} [:i.icon-close]]])
                                                             (@store/state :queue)))]]])})
    ))
;(subvec (@store/state :queue) 1)