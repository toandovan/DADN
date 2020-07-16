var express = require('express');
const mongoose=require('mongoose')
let sensorMois = mongoose.model('moistures')
var router = express.Router();
/* GET home page. */
router.get('/type/:type/', function(req, res, next) {
  let sensorType = req.params['type']
  // console.log(sensorType)
  let thirty_day_before = new Date(Date.now() - (30 * 24 * 60 * 60 * 1000));
  sensorMois.find({ device_id: sensorType, date: { $gt: thirty_day_before } } )
  // .where('date').gt(y).lt(x)
  .exec().then((doc)=>{
    // console.log(doc);
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
