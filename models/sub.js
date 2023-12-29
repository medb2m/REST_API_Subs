const mongoose = require('mongoose')

const subSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    subscribedToChanel : {
        type : String,
        required : true
    },
    subscribeDate : {
        type : Date,
        require : true,
        default : Date.now
    }
})

module.exports = mongoose.model('Sub', subSchema)