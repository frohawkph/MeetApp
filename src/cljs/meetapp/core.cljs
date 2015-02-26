(ns meetapp.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [alandipert.storage-atom :refer [local-storage]]
              [secretary.core :as secretary :include-macros true]
              [goog.events :as events]
              [goog.history.EventType :as EventType]
              [goog.string :as gstring]
              [goog.string.format])
    (:import goog.History))

;; -------------------------
;; Views

(defonce roster (local-storage (atom (set nil)) :roster))
(defonce queue (local-storage (atom (list)) :queue))
(defonce current-name (atom "")) ;; the value of input
(defonce current-speaker (atom "")) ;; the guy talking

(defonce initial-time (atom (js/Date.now)))
(defonce delta-time (atom (js/Date. 0)))
(defonce time-color (atom "#f34"))

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
  ;; normally should expect to use conj, because vector, but queue is somehow coerced into list because of local-storage.
  (swap! queue concat [name]))

(defn next-speaker []
  (reset-timer)
  (reset! current-speaker (first @queue))
  (swap! queue rest))

(defn swap "swap indices i1 and i2 withiin vector v" [v i1 i2]
   (assoc v i2 (v i1) i1 (v i2)))

(defn in-bounds? [value upper lower]
  (max value ))

(defn drag-start-handler [event]
  (let
    [boundingbox (.getBoundingClientRect event.target)
     top (.-top boundingbox)
     bottom (.-bottom boundingbox)]
    (cond
     (< event.pageY top) (.log js/console "going up")
     (> event.pageY bottom) (.log js/console "going down"))))

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
                         ^{:key name} [:li
                          [:a.entry {:on-click #(add-to-queue name)} name]
                          [:a.icon-button {:on-click #(remove-from-list-atom name roster)} [:i.icon-close]]])]]

      ;; queue.
      [:div.queue
       {:on-drag drag-start-handler}
       [:h2 {:on-click #(next-speaker)}
        (clock)
        @current-speaker]
       [:ul.basic-list (map-indexed
                        (fn [index item] ^{:key index} [:li
                                                        {:on-drag drag-start-handler :draggable true}
                                                        [:div.entry item]
                                                        [:a.icon-button {:on-click #(remove-from-list-atom item queue)} [:i.icon-close]]])
          @queue)]]]])

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
