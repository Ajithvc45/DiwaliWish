const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Wish');

mongoose.connection.on('connected',()=>{
    console.log('Connected to database mongodb @ 27107');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error in db connection'+err);
    }
})

var Greetings = new mongoose.Schema({
    yourName:String,
    friendName:String,
    friendEmail:String
},{
    versionKey: false
})

const wishlist = mongoose.model('greetings', Greetings);
module.exports = wishlist;