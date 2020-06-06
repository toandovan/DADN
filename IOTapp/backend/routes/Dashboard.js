var express = require('express');
const sensor= require('./../models/sensor')
const mongoose=require('mongoose')
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  //res status
  // const sensor;
  sensor.find().exec().then((doc)=>{
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
