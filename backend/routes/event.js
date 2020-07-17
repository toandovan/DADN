
var express = require('express');
var router = express.Router();
var event=require('../models/eventModel')
var schedule = require('node-schedule');
var publisher = require('./publisher');
router.post('/', (req, res)=>{
    let date=req.body.Date
    let duration=req.body.Duration
    let deviceId=req.body.Device
    let intensity=req.body.Intensity
    event.model(deviceId,date,duration,intensity)
    console.log(date)
    var j = schedule.scheduleJob(date, function(){
        console.log('hello world.');
        if(intensity>0){
            publisher.Publisher(deviceId,1,intensity);
        }
        else{
            publisher.Publisher(deviceId,0,0);
        }
    });
    let dateOff=new Date(date).getTime();
    let dateNew= new Date(dateOff+duration*60*1000);
    var x = schedule.scheduleJob(dateNew, function(){
        console.log('hello world.');
        publisher.Publisher(deviceId,0,0);
    });
    res.send("SET EVENT OK");
})
router.post('/delete',(req,res)=>{
    let date=req.body.Date
    let duration=req.body.Duration
    let deviceId=req.body.Device
    let intensity=req.body.Intensity
    event.deleteModel(deviceId,date,duration,intensity)
})
module.exports = router;