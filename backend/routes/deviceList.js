var express = require('express');
const mongoose=require('mongoose')
let speaker = mongoose.model('speaker')
const moistures= require('../models/moistures')

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

router.get('/speaker', function(req, res, next) {
  // console.log(req.params)
  speaker.find()
  .exec().then((doc)=>{
    res.status(200).json({
      // message: 'handling get request',
      speakerData: doc
    })
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({err: err})
  })
});

module.exports = router;
