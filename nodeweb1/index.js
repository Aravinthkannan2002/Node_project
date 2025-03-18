const express = require('express');
const app =express();
const bodyParser = require('body-parser');
var cors = require('cors');
const router = require('./totalapis/router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());////////////which helps to 
app.use(cors());/////////////which is help to biding two different domines like angilar js and node js Frontend and Backend
app.use(router);


app.listen(1405,()=>{
    console.log('this app is running on port num 1405')
});