var express = require('express');
const sensor= require('./../models/sensor')
const mongoose=require('mongoose')
var router = express.Router();
/* GET home page. */
router.get('/date/:date/', function(req, res, next) {
  console.log(req.params)
  sensor.find()
  // .where('date').gt(y).lt(x)
  .exec().then((doc)=>{
    res.status(200).json({
      // message: 'handling get request',
      sensorData: doc
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});

module.exports = router;
