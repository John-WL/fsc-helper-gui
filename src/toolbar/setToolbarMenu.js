const {app, Menu} = require('electron');
const open = require('open');

const isOnMac = process.platform === 'darwin';

const menuTemplate = [
  { label: 'File',
    submenu: [
      {
        label: 'Export',
        accelerator: 'Ctrl+E',
        click: () => {}
      },
      { type: 'separator' },
      {
        label: 'Exit',
        click: () => { app.quit(); },
      },
    ]
  },
  { label: 'Help',
    submenu: [
      {
        label: 'About',
        click: () => {},
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
