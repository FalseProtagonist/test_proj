const { app, BrowserWindow } = require('electron')
const path = require("path")
const backend = require("./cljs-backend.js")

console.log("through requires")

function createWindow (data) {
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      nodeIntegrationInSubFrames: true,
      enableRemoteModule: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')}});

//   win.loadFile('index.html')
  win.loadFile(path.join(__dirname, "../../../index.html"))
  // .then(
  //   () => {
  //     console.log("sending data");
  //     win.webContents.send("DATA", data);
  //     console.log("sent data");});
  return win}

app.whenReady()
  .then(() => 
    {
    // createWindow()
    console.log("ready")
    app.on('activate', function () {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow()})
    return res})
  .then(
    (res) => {
      // console.log("got " + JSON.stringify(res, null, 2))
    const win = createWindow(res);
    win.webContents.on(
      'did-finish-load', (e) => {
      console.log("did-finish-load " + e) 
      console.log("sending data");
      win.webContents.send("DATA", res);
      // backend.test_ws_inner();
      console.log("sent data");});},
    (error) => console.log("got error " + error)
  );
  

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()})
