(ns meetapp.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [cljsjs.react :as react]
            [alandipert.storage-atom :refer [local-storage]]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [goog.string :as gstring]
            [goog.string.format]
            [meetapp.store :as store]
            [meetapp.roster :as roster]
            [meetapp.queue :as queue]
            [meetapp.util :as util])
  (:use     [meetapp.lib.collections :only [without insert reposition]])
  (:import goog.History))

;; -------------------------
;; Views

(defn key-handler [page-id event]
  (defn preventDefault [] (.preventDefault event))
  ;(.log js/console page-id)
  
  #_(case (util/key-mapping (.-keyCode event))
      "down"  (.log js/console "going down")
      "up"    (.log js/console "going up")))

(defn queue-page []
  (reagent/create-class
    {:component-did-mount #(.addEventListener js/document "keydown" (partial key-handler "queue"))
     :component-will-unmount #(.removeEventListener js/document "keydown" (partial key-handler "queue"))
     :component-function queue/main}))

(defn roster-page []
  [roster/main])

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
