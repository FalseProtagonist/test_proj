(ns main 
  (:require    
   [cljs.core.async :refer [go go-loop chan <! >! timeout]]
   [membrane.basic-components :as basic]
   [membrane.component :as component
    :refer [defui defeffect]]
   [membrane.ui :as ui]
   [membrane.webgl]))

(defn get-canvas [] 
  (.getElementById js/document "canvas"))

(defn start-app [runnable]
    (membrane.webgl/run 
     runnable
     {:container
      (get-canvas)}))

;; (start-app 
;;  #(ui/with-color [0 0 0] (ui/rounded-rectangle 500 500 50))
;;  (membrane.component/make-app 
;;    #'membrane.basic-components/textarea 
;;   (atom {:text "yo"})))

(defonce
  canvas-info
  (membrane.webgl/run
;;  #(ui/with-color [0 0 0] (ui/rounded-rectangle 500 500 50))
   (membrane.component/make-app 
    #'membrane.basic-components/textarea 
    (atom {:text "yo"}))
   {:container (get-canvas)}))