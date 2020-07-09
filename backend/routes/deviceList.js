var express = require('express');
const sensor= require('../models/deviceModel')
const mongoose=require('mongoose')
var router = express.Router();


//humidity
router.get('/humidity', function(req, res, next) {
  console.log(req.params)
  sensor.find()
  .where('deviceType').equals('humidity')
  .exec().then((doc)=>{
    var x=[]
    doc.map(r=>x.push(r.device_id))
    res.status(200).json({
      // message: 'handling get request',
      sensorData: x
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});
//temperature
router.get('/temperature', function(req, res, next) {
  console.log(req.params)
  sensor.find()
  .where('deviceType').equals('humidity')
  .exec().then((doc)=>{
    var x=[]
    doc.map(r=>x.push(r.device_id))
    res.status(200).json({
      // message: 'handling get request',
      sensorData: x
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});

router.get('/motor', function(req, res, next) {
  console.log(req.params)
  sensor.find()
  .where('deviceType').equals('humidity')
  .exec().then((doc)=>{
    var x=[]
    doc.map(r=>x.push(r.device_id))
    res.status(200).json({
      // message: 'handling get request',
      sensorData: x
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});

module.exports = router;