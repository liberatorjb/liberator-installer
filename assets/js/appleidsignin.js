const { app } = require('electron').remote
var Dialogs = require('dialogs')
const dialogs = Dialogs()

const login = () => {
    var userdata = {}
    dialogs.prompt('What is your Apple ID email?', email => {
        userdata.email = email;
        dialogs.prompt('What is your Apple ID password?', pass => {
            userdata.pass = pass;
        })
    })
}