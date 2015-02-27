(ns meetapp.lib.collections)

(defn without [n coll]
  (let [v (vec coll)]
    (into (subvec v 0 n) (subvec v (inc n)))))

(defn insert [coll n value]
  (let [v (vec coll)]
    (vec (concat (subvec v 0 n) [value] (subvec v n)))))

(defn reposition [coll from to]
  (let [v (vec coll)]
    (insert (without from v) to (v from))))