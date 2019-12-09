var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const auth = require('./routes/auth');
const user = require('./routes/users');

const passport = require('passport')

require('./passport');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', auth);
app.use('/user', passport.authenticate('jwt', {session: false}), user);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = process.env.PORT || 3000;
const dbPort = process.env.DB_PORT || 27017;
const dbUrl = process.env.DB_URL || "localhost";
const dbCollection = process.env.DB_COLLECTION || "web";
mongoose.set('useCreateIndex', true);
console.log(`mongodb://${dbUrl}:${dbPort}/${dbCollection}`)
//fixes an issue with a depricated default in Mongoose.js
mongoose.connect(
    `mongodb://${dbUrl}:${dbPort}/${dbCollection}`,
    {useNewUrlParser: true}
)
    .then(_ => console.log('Connected Successfully to MongoDB'))
    .catch(err => console.error(err));

module.exports = app;
