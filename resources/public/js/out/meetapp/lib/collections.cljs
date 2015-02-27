(ns meetapp.lib.collections)

(defn without [n vctr]
  (into (subvec vctr 0 n) (subvec vctr (inc n))))

(defn insert [vctr n value]
  (vec (concat (subvec vctr 0 n) [value] (subvec vctr n))))

(defn reposition [vctr from to]
  (insert (without from vctr) to (vctr from)))
