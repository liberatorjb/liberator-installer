var Dialogs = require('dialogs')
const dialogs = Dialogs()

const login = () => {
    var userdata = {}
    dialogs.prompt('What is your Apple ID email?', email => {
        if(!email) return;
        userdata.email = email;
        dialogs.prompt('What is your Apple ID password?', pass => {
            if(!pass) return;
            userdata.pass = pass;
            installApp(userdata)
        })
    })
}

function installApp(userdata){
    alert(`Username: ${userdata.email}\nPassword: ${userdata.pass}`);
}