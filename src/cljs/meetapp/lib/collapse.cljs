(ns meetapp.lib.collapse
  (:require [reagent.core :as r :refer [atom]]))

(defn main [open? comp]
  (if open?
    comp))