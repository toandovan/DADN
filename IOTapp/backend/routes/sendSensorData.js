var express = require('express');
// const sensor= require('../models/humidities')
// const mongoose=require('mongoose')
// let sensor = mongoose.model('humidities')
var router = express.Router();
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body.array)
  })

module.exports = router;