(ns meetapp.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [alandipert.storage-atom :refer [local-storage]]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [goog.string :as gstring]
            [goog.string.format]
            [meetapp.store :as store]
            [meetapp.roster :as roster]
            [meetapp.queue :as queue])
  (:use     [meetapp.lib.collections :only [without insert reposition]])
  (:import goog.History))

;; -------------------------
;; Views

(defn key-handler [page-id event]
  (defn preventDefault [] (.preventDefault event))
  ;(.log js/console page-id)
  (case (.-keyCode event)
    40 (do 
         (.log js/console "down")
         (preventDefault))
    38 (do 
         (.log js/console "up")
         (preventDefault))
    13 (do 
         (.log js/console "return")
         (preventDefault))
    27 (do
         (.log js/console "escape")
         (preventDefault))
    32 (do 
         #_(.log js/console "space")
         #_(preventDefault))
    8 (do 
        #_(.log js/console "delete")
        #_(preventDefault))
    (.log js/console "other keys" (.-keyCode event))))

(defn queue-view []
  [:div.app-container
   [:div.toolbar
    [:a.icon-button {:href "http://torchapps.github.io/"}
     [:i.icon-torch]]
    [:span "MeetApp"]
    [:div.spacer]
    ;[roster/main]
    [:a.icon-button {:href "#/roster"}
     [:i.icon-add]]]
   [:div.main
    ;; queue.
    [queue/main]]])

(defn queue-page []
  (reagent/create-class
    {:component-did-mount #(.addEventListener js/document "keydown" (partial key-handler "queue"))
     :component-will-unmount #(.removeEventListener js/document "keydown" (partial key-handler "queue"))
     :component-function queue-view}))

(defn roster-page []
  (reagent/create-class
    {:component-did-mount #(.addEventListener js/document "keydown" (partial key-handler "roster"))
     :component-will-unmount #(.removeEventListener js/document "keydown" (partial key-handler "roster"))
     :component-function (fn [] 
                           [:div 
                            [:div.toolbar
                             [:a.icon-button {:href "#/"} 
                              [:i.icon-arrow-back]]]
                            [:div.main 
                             [roster/main]]])}))

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
                    (session/put! :current-page #'queue-page))

(secretary/defroute "/roster" []
                    (session/put! :current-page #'roster-page))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
      EventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn init! []
  (hook-browser-navigation!)
  (reagent/render-component [current-page] (.getElementById js/document "app")))
