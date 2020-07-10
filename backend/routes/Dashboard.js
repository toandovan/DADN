var express = require('express');
// const sensor= require('../models/humidities')
const mongoose=require('mongoose')
let sensor = mongoose.model('humidities')
let sensorMois = mongoose.model('moistures')
var router = express.Router();
/* GET home page. */
router.get('/date/:date/', function(req, res, next) {
  // console.log(req.params)
  let thirty_day_before = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000));
  sensorMois.find({ date: { $gt: thirty_day_before } } )
  // .where('date').gt(y).lt(x)
  .exec().then((doc)=>{
    // console.log(doc)
    console.log(doc);
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
