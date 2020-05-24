

// Initialize Database Connection 
var db = require('./database');
db.connectDataBase();


//setup Server
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', require('./src/controller/'));
var server = app.listen(PORT, function () {
    console.log('Node server is running..');
});


// register models
require('./src/models/notes');

