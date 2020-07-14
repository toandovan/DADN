var express = require('express');
const sensor= require('../models/deviceModel')
const moistures= require('../models/moistures')
const mongoose=require('mongoose')
var router = express.Router();

//sensor data realtime
router.get('/sensor', function(req, res, next) {
  console.log(req.params)
  moistures.mois.aggregate([
    {
      $sort: {
        'date':-1
      }
    },
    {
      $group:{
        _id: "$device_id",
        date:{ $first: "$date"},
        area: {$first: "$area"},
        status: {$first: "$status"},
        value: {$first: "$sensor_value"}
      }
    }
  ])
  .exec().then((doc)=>{
    // console.log(doc)
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
