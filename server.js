#!/usr/bin/env node
'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const open = require('open')
const port = 5002

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req, res){
    res.sendFile(__dirname + '/public/index.html')
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
    open('http://localhost:5002/');
})