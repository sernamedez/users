const {Schema, model} = require('mongoose');

const userShema = new Schema({
    name: String,
    lastname: String,
    avatar: String,
})

model('user', userShema);

model.exports = model;