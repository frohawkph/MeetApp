(ns meetapp.store
  (:require [reagent.core :as reagent :refer [atom]]
            [alandipert.storage-atom :refer [local-storage]])
  (:use     [meetapp.lib.collections :only [without insert reposition]]))

(defonce state (local-storage (atom (hash-map
                                     :roster (sorted-set)
                                     :queue []))
                              :meetapp-state))

(defonce current-name (atom "")) ;; the value of input

(defn add-to-roster [name]
  (reset! current-name nil)
  (swap! state update-in [:roster] #(conj % name)))

(defn remove-from-roster [name]
  (swap! state update-in [:roster] #(disj % name)))

(defn add-to-queue [name]
  (swap! state update-in [:queue] #(conj % name)))

(defn remove-from-queue [index]
  (if (boolean index)
    (swap! state update-in [:queue] (partial without index))))