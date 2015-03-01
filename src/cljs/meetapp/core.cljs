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

(defn home-page []
  [:div.app-container
    [:div.toolbar
      [:a.icon-button {:href "http://torchapps.github.io/"}
        [:i.icon-torch]]
      [:span "MeetApp"]]
    [:div.main
     ;; roster
     [roster/main]
     ;; queue.
     [queue/main]]])

(defn about-page []
  [:div [:h2 "About meetapp"]
   [:div [:a {:href "#/"} "go to the home page"]]])

(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

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
