var express = require('express');
// const sensor= require('../models/humidities')
// const mongoose=require('mongoose')
// let sensor = mongoose.model('humidities')
var router = express.Router();
const publish = require('./publisher')
/* GET home page. */
router.post('/', function(req, res, next) {
  if(req.body.array){
    let tempvar = req.body.array
    console.log(tempvar)
    // let json = JSON.stringify([{ "device_id":"Speaker", "values": tempvar[0].values}])
    publish.Publisher("Speaker", tempvar[0].values[0], tempvar[0].values[1])
  }
  else{console.log("none")}
  })

module.exports = router;