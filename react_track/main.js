const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');
const serverApp = express();
const port = 3000;


serverApp.use(express.static(__dirname + '/build'));
serverApp.listen(port, () => console.log('Server running on port ${port}'));

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    title: "Job Tracker",
    icon: 'public/JT_top.ico',
    width: 800,
    height: 600,
  });

  mainWindow.setMenu(null);

  // Point your Electron BrowserWindow to your server URL
  mainWindow.loadURL(`http://localhost:${port}`);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
