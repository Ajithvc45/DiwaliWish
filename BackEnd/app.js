const express = require('express');
const cors = require('cors');
const wishlist = require('./Wish');
const bodyparser = require('body-parser');
const path = require('path');

const app = new express();
app.use(cors());
app.use(bodyparser.json());
app.use(express.json({unlencoded:true}));

app.post('/insert', (req, res)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var wishes = {
        yourName: req.body.item.yourName,
        friendName: req.body.item.friendName,
        friendEmail: req.body.friendEmail
    }
    var wish = new wishlist(wishes);
    wish.save().then((data)=>{console.log(data._id)
    res.send(data)})
})

app.listen(3000,()=>{
    console.log("Port is running");
});