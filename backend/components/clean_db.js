const express = require('express')
var router = express.Router();
const mongoose = require('mongoose');
// let sensorMois = mongoose.model('moistures')
let sensorMois = require('../models/moistures');

function clean_database_duplicate(){
    let day = 1594746000000
    console.log("vo dc ham chua")
    sensorMois.mois.find({}).exec().then(doc =>  console.log(doc.date)).catch(err => console.log(err) )
    // sensorMois.deleteMany({"date": {$gt: day}}).exec()
    //     .then(() => {
    //         console.log("Delete complete")
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
}

clean_database_duplicate()