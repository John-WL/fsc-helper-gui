const {BrowserWindow} = require('electron')
const path = require('path')

function createWindow() {
  // Create the browser window.
  return new BrowserWindow({
    width: 800,
    height: 600,
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
