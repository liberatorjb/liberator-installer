const { app, BrowserWindow } = require('electron')
const isOnline = require('is-online');

// Define the electron app
function createWindow () {
  let loading = new BrowserWindow({
    show: false,
    width: 500,
    height: 150,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: true,
    minimizable: false,
    setBackgroundColor: '#ce0a31'
  })
  let win = new BrowserWindow({
    show: false,
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: true,
    minimizable: false,
    setBackgroundColor: '#323234'
  })
  loading.removeMenu();
  //win.removeMenu(); // Removes the menu bar from the application because it's not needed (for now)
  // The html file will be index.html
  
  loading.loadFile('docs/loading.html')

  loading.once('ready-to-show', async () => { // Allows for smooth opening and makes sure user is connected to internet
    loading.show();
    win.loadFile('docs/index.html');
    await isOnline();
    win.once('ready-to-show', () => {
      loading.close()
      win.show()
    })
  })
}

app.on('ready', createWindow)