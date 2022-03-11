const {app, Menu} = require('electron');
const open = require('open');

const isOnMac = process.platform === 'darwin';

const menuTemplate = [
  { label: 'File',
    submenu: [
      {
        label: 'Exit',
        click: () => { app.quit(); },
      },
    ]
  },
]

function setAppMenu(window) {
  window.removeMenu();
  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate))
}

module.exports = {
  setAppMenu
};
