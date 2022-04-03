(ns backend
  (:require

   [clojure.core.async :refer [chan take! poll! put! <! >! timeout go go-loop pipeline]]
   [cljs.core.async.interop :refer-macros [<p!]]
  
  ;;  ["kangrok-core" :refer [testQuery]]
   ["fs" :as fs]
   ["path" :as path]
   ["process" :as process]
   ["reflect-metadata" :as reflect-metadata])
  )

(println "backend yo")

(def electron (js/require "electron"))

(def BrowserWindow (.-BrowserWindow electron))
(def app (.-app electron))


(defn create-window [data]
  (let [win (BrowserWindow.
             #js {:width 1600 :height 900
                  :webPreferences #js {:nodeIntegration true
                                       :nodeIntegrationInWorker true
                                       :nodeIntegrationInSubFrames true
                                       :enableRemoteModule true
                                       :contextIsolation false
                            ;;  :preload
                                       }})]
    (.loadFile win (str js/__dirname "../../../../index.html"))
    win))

(.then (.whenReady app)
       (fn []
         (let [win (create-window nil)]
           (.on ^js (.-webContents win) "did-finish-load"
                (fn [e]
                  (println "created window")
                  )))))

(def ^:export dummy-export)

(println "backend pro")

