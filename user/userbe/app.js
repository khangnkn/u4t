const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const routesLogger = require('./utils/routes-listing');

require('./utils/database');
require('./middlewares/passport-strategies');

const indexRouter = require('./routes');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', indexRouter);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

routesLogger(app);

module.exports = app;
