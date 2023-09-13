const mongoose = require('mongoose')

const schema = mongoose.Schema({
    image:  String,
    name: String
})

const UserModal =  mongoose.model('users', schema)
module.exports = UserModal
