'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const configDB = require('./config').url;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(configDB, { useMongoClient: true }); // connect to our database

app.use(cors());
// set up  express application
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({extended: true}));

require('./routes')(app);

module.exports = app;
