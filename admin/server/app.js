const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport')

const router = require('./routes')

require('dotenv').config();
require('./passport');

const app = express();
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);


mongoose.connect(uri, {
    userNewUrlParser: true,
    userCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open',
    () => {
        console.log("Connect to MongoDB successfully");
    }
);

require('./shared/models')

module.exports = app;
