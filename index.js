const { app, BrowserWindow } = require('electron')

// Define the electron app
function createWindow () {
  let win = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: true,
    minimizable: false,
    setBackgroundColor: '#323234'
  })
  //win.removeMenu(); // Removes the menu bar from the application because it's not needed (for now)
  // The html file will be index.html
  win.loadFile('index.html')
}

app.on('ready', createWindow)