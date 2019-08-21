const { app, shell } = require('electron').remote

fetch('https://raw.githubusercontent.com/liberatorjb/liberator-installer/develop/package.json') // !!change to master branch once changes are merged!! Checks the latest package.json on the liberator-installer repo.
.then((res) => res.json())
.then(function(data) {
    const latestversionStr = data.version;
    const latestversion = Number(data.version.replace(/\./g, ""));
    const userversion = Number(app.getVersion().replace(/\./g, ""));
    if(userversion<latestversion) showUpdateAlert(latestversionStr);
})


const showUpdateAlert = (latestversionStr) => {
    let alert = document.createElement('span');
    alert.innerHTML = `<footer class="alert-bottom"><span class="alert-text">Version ${latestversionStr} now available. <a onclick="openReleases()">Download</a></span></footer>`
    document.body.insertAdjacentElement('beforeend', alert);
}

const openReleases = () => {
    shell.openExternal('https://github.com/liberatorjb/liberator-installer/releases')
}