const {BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
  // Create the browser window.
  return new BrowserWindow({
    width: 500,
    height: 200,
    title: 'fst helper',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
  })
}

module.exports = {
  createWindow
};
