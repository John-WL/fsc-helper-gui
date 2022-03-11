const ipcRenderer = require('electron').ipcRenderer;

['midi', 'events', 'output'].forEach(target => {
    document.getElementById(`get-${target}-fsc`).onclick = () => {
        ipcRenderer.send('OpenFileDialog', { target });
    };
});

document.getElementById("export-midi-fsc").onclick = () => {
    ipcRenderer.send('exportMidiFsc', {
        "events-type": document.getElementById("events-fsc-type").value,
    });
};
