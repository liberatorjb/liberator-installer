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
    alert.setAttribute('class', 'tag is-warning');
    alert.innerHTML = `Version ${latestversionStr} is now available. <span onclick="openReleases()" style="color: #1051ba">&ThickSpace; Download</span>`
    document.body.insertAdjacentElement('afterbegin', alert);
}

const openReleases = () => {
    shell.openExternal('https://github.com/liberatorjb/liberator-installer/releases')
}