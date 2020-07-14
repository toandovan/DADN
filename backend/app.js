var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose')
let Subscriber = require('./routes/subscriber')
const http = require("http");
const socketIo = require("socket.io");
let socket = require('./components/socketRealTime')
const sendEmail = require('./components/sendEmail')

var cb = function(err){
  if(!err)
      console.log("Connection Opened");
  else{
      console.log("Connection Opened Failed");
      console.log(err)
  }
};
mongoose.connect("mongodb+srv://tronganhn2:aa@cluster0-qswj1.gcp.mongodb.net/data-test1?retryWrites=true&w=majority",cb);
con = mongoose.connection;

var dashBoardRouter=require('./routes/Dashboard')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var deviceRouter = require('./routes/deviceList');
let sendSensorData = require('./routes/sendSensorData')
let authUser = require('./routes/authServer')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Dashboard', dashBoardRouter);
app.use('/device', deviceRouter);
app.use('/Dashboard/sensorData', sendSensorData);

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});

app.use("/api/", authUser)

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

Subscriber.Subscribe()


// const server = require('http').Server(app);
// const io = require('socket.io')(server);
socket.realTime(app)
// sendEmail.sendEmail()
// sendEmail.Test()


// sensor.find({}, function (err, docs) {
//   console.log(docs)
// })
    


module.exports = app;
