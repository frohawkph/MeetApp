(ns meetapp.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [alandipert.storage-atom :refer [local-storage]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType])
    (:import goog.History))

;; -------------------------
;; Views

(defonce roster (local-storage (atom (set nil)) :roster))
(defonce queue (local-storage (atom []) :queue))
(defonce current-name (atom ""))
(defn get-event-value [event] (-> event .-target .-value))

(defn add-to-roster [name] 
  (swap! roster conj name))

(defn remove-from-list-atom [item list-atom]
  (swap! list-atom
    (fn [current-list-atom deathrow] (remove #(= % deathrow) current-list-atom)) 
    item))

(defn remove-from-roster [name] 
  (swap! roster 
    (fn [current-roster deathrow] (remove #(= % deathrow) current-roster)) 
    name))

(defn add-to-queue [name]
  (swap! queue conj name))

(defn home-page []
  [:div.app-container 
    [:div.toolbar 
      [:a.icon-button {:href "http://torchapps.github.io/"} 
        [:i.icon-torch]] 
      [:span "MeetApp"]]
    [:div.main
      [:div.roster 
        [:input {
          :type "text"
          :value @current-name
          :on-change #(reset! current-name (get-event-value %))}]
        [:button {
          :on-click #(if 
            (> (count @current-name) 0) 
            (add-to-roster @current-name)
            (.log js/console "Error: name is blank"))} "Add"]
        [:ul (for [name @roster] 
          ^{:key name} [:li 
            [:a.entry {:on-click #(add-to-queue name)} name] 
            [:a.icon-button {:on-click #(remove-from-list-atom name roster)} [:i.icon-close]]])]]
      [:div.queue
        [:h2 "Timer"]
        [:ul (map-indexed 
          (fn [index item] ^{:key index} [:li 
            [:a.entry {:on-click #(remove-from-list-atom item queue)} item]])
          @queue)]]]])
;(for [name @queue]
          ;^{:key name} [:li name])
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
