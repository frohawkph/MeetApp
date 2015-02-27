(ns lib.collections
  (:gen-class))

(defn without [n coll]
  (let [v (into [] coll)]
    (concat (subvec v 0 n) (subvec v (inc n)))))

(defn insert [coll n value]
  (let [v (into [] coll)]
    (concat (subvec v 0 n) [value] (subvec v n))))

(defn reposition [coll from to]
  (let [v (into [] coll)]
    (insert (without from v) to (v from))))