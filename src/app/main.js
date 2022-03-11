const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const mainJsScript = require("./mainWindow.js");
const { execFileSync } = require("child_process");
const fscExecutablePath = require('which').sync('fsc.exe');

app.whenReady().then(() => {
    mainJsScript.main();
    
    const macRecreateWindow = () => {
        if (BrowserWindow.getAllWindows().length === 0) mainJsScript.main();
    };
    app.on('activate', macRecreateWindow);
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
});

const paths = {
    midi: "",
    events: "",
}

ipcMain.on('OpenFileDialog', (_event, { target }) => {
    const filePaths = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [
            { name: 'MIDI Files', extensions: ['fsc'] },
        ]
    });

    if (filePaths) paths[target] = filePaths[0];
});

ipcMain.on('exportMidiFsc', function (_event, data) {
    execFileSync(fscExecutablePath, [
        `--${data['events-type']}-from`, paths['events'],
        paths['midi'],
        paths['midi'],
    ]);
});
