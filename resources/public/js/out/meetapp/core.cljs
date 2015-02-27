(ns meetapp.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [alandipert.storage-atom :refer [local-storage]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [goog.string :as gstring]
              [goog.string.format])
    (:use     [meetapp.lib.collections :only [without insert reposition]])
    (:import goog.History))

;; -------------------------
;; Views

(defonce roster (local-storage (atom (set nil)) :roster))
(defonce queue (local-storage (atom []) :queue))
(defonce current-name (atom "")) ;; the value of input
(defonce current-speaker (atom "")) ;; the guy talking

(defonce initial-time (atom (js/Date.now)))
(defonce delta-time (atom (js/Date. 0)))
(defonce time-color (atom "#f34"))
(defonce dragging (atom nil))

(defn reset-timer []
  (reset! initial-time (js/Date.now))
  (if (boolean @current-speaker)
    (js/setInterval #(reset! delta-time (js/Date. (- (js/Date.now) @initial-time))) 1000)) ;; an interval where the timer is reset.)
    (reset! delta-time (js/Date. 0)))

(defn clock []
  (let [time-str (clojure.string/join ":" (map #(gstring/format "%02d" %) [(.getMinutes @delta-time)(.getSeconds @delta-time)]))]
    [:div.example-clock
     {:style {:color @time-color}}
     time-str]))

(defn get-event-value [event] (-> event .-target .-value))

(defn add-to-roster [name]
  (reset! current-name nil)
  (swap! roster conj name))

(defn remove-from-roster [name]
  (swap! roster disj name))

(defn remove-from-queue [index]
  (swap! queue (partial without index)))

(defn add-to-queue [name]
  (swap! queue conj name))

(defn next-speaker []
  (reset-timer)
  (reset! current-speaker (first @queue))
  (swap! queue subvec 1))

(defn drag-start-handler [event]
  (reset! dragging (js/Number event.currentTarget.dataset.id))

  ; for use with firefox
  (set! (.-effectAllowed event.dataTransfer) "move")
  (.setData event.dataTransfer "text/html" event.currentTarget))

(defn drag-end-handler [index event]
  (reset! dragging nil))

(defn drag-over-handler [event]
  (.preventDefault event)
  (let [from @dragging
        to (js/Number event.currentTarget.dataset.id)]
    (swap! queue #(reposition % from to))
    (reset! dragging to)))

(defn dragging? [index]
  (= index @dragging))

(defn home-page []
  [:div.app-container
    [:div.toolbar
      [:a.icon-button {:href "http://torchapps.github.io/"}
        [:i.icon-torch]]
      [:span "MeetApp"]]
    [:div.main

      ;; roster.
      [:div.roster
        [:div.search-section
         [:input {
          :type "text"
          :value @current-name
          :placeholder "Search or Add"
          :on-change #(reset! current-name (get-event-value %))}]
         [:button {
          :on-click #(if
            (> (count @current-name) 0)
            (add-to-roster @current-name)
            (.log js/console "Error: name is blank"))} "Add"]]

        [:ul.basic-list (for
                         [name (sort (if (boolean @current-name) (filter #(gstring/caseInsensitiveContains % @current-name) @roster) @roster))]
                          [:li
                           {:key name}
                           [:a.entry {:on-click #(add-to-queue name)} name]
                           [:a.icon-button {:on-click #(remove-from-roster name)} [:i.icon-close]]])]]

      ;; queue.
      [:div.queue
       [:h2 {:on-click #(next-speaker)}
        (clock)
        @current-speaker]
       [:ul.basic-list (doall (map-indexed
                        (fn [index item]
                          [:li
                           {:key index
                            :data-id index
                            :draggable true
                            :on-drag-end (partial drag-end-handler index)
                            :on-drag-over drag-over-handler
                            :on-drag-start drag-start-handler
                            :class (if (= @dragging index) "dragging" "")
                            }
                           [:div.entry item]
                           [:a.icon-button {:on-click #(remove-from-queue index)} [:i.icon-close]]])
                        @queue))]]]])

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
