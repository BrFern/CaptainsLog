require("dotenv").config();
const {default: mongoose} =require('mongoose');
const logSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    entry: {
        type: String,
        require: true
    },
    shipIsBroken: {
        type: Boolean,
        require: true
    }
})


const Logs = mongoose.model('Logs', logSchema);
module.exports = Logs;