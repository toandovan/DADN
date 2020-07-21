var express = require('express');
// const mongoose=require('mongoose')
var router = express.Router();
/* GET home page. */
// var subcriber = require('./subscriber')
var LimitValue = require('./LimitValue')

router.post('/', function(req, res, next) {
  console.log("in post")
  if(req.body.autoValue){
    // console.log(req.body.autoValue)
    LimitValue.setArr(req.body.autoValue);
    console.log(LimitValue.Arr)
  }
  else{console.log("none")}
  })

module.exports = router;
