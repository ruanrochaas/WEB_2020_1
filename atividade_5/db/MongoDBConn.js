
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

var mongoDB_URI = 'mongodb://127.0.0.1:27017/sistemadisciplinas';
mongoose.connect(mongoDB_URI,{useNewUrlParser:true});

var db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Mongoose está conectado a ' + mongoDB_URI);
});

db.on('disconnected', ()=>{
    console.log('Mongoose está desconectado a ' + mongoDB_URI);
});

db.on('error', (err)=>{
    console.log('Mongoose Error: ' + err);
});