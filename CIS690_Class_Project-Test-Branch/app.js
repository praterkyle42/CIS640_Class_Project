var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var homePageRouter = require('./routes/dashboard');
var accountsRouter = require('./routes/accounts');
var patientRouter = require('./routes/patient');
var AccountDetailsRouter = require('./routes/AccountDetails');



require('dotenv').config({ path: __dirname + '/.env' })

var app = express();

mongoose.connect(process.env['CONNECTION_STRING'], { useNewURLParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
var session = require('express-session');

require('./config/passport')(passport);

// required for passport
app.use(session({
  secret: 'devkey',
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
 
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
 
app.use(cookieParser()); // read cookies (needed for auth)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', homePageRouter)
app.use('/accounts', accountsRouter);
app.use('/patient', patientRouter);
app.use('/AccountDetails', AccountDetailsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
