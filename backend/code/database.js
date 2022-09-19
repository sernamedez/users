const mongoose = require('mongoose');

async function connect (){
    await mongoose.connect('mongodb://localhost/dbflutternode', {
        useNewUrlParser:true
    });
    console.log('DB Connected')
}

module.exports = { connect };