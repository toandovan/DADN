var express = require('express');
const sensor= require('./../models/sensor')
const mongoose=require('mongoose')
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  //res status
  // const sensor;
  console.log(Date.now())
  var x=Date.now()
  console.log(x)
  console.log(typeof(x))
  var y=x-3600*100*24
  console.log(y)
  console.log(typeof(y))
  sensor.find()
  .where('date').gt(y).lt(x)
  .exec().then((doc)=>{
    console.log(doc)
    res.status(200).json({
      message: 'handling get request',
      sensorData: doc
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});

module.exports = router;
