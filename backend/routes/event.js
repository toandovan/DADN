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
    event.model(deviceId,date,duration,intensity).then(()=>{
        console.log(date)
    res.send("SET EVENT OK");
    var j = schedule.scheduleJob(date, function(){
        console.log('hello world.');
        if(event.findModel(deviceId,date,duration,intensity)){
            console.log('hello world. xxxxxxxxxxx');
            if(intensity>0){
                console.log("run this")
                publisher.Publisher(deviceId,1,intensity);
            }
            else{
                publisher.Publisher(deviceId,0,0);
            }
        }else{
            console.log("abc")
        }
        //false
    });
    let dateOff=new Date(date).getTime();
    let dateNew= new Date(dateOff+duration*60*1000);
    var x = schedule.scheduleJob(dateNew, function(){
        console.log("xyz")
        if (event.findModel(deviceId,date,duration,intensity)){
            console.log("xyzaaaaaaaaaaaaaaaaaaa")
            publisher.Publisher(deviceId,0,0);
            event.deleteModel(deviceId,date,duration,intensity);
        }else{
            console.log("asfjsdfjlasfjsdlkj")
        }
    });
    })
})
//ok
router.post('/delete',(req,res)=>{
    let date=req.body.date
    let duration=req.body.duration
    let deviceId=req.body.device_id
    let intensity=req.body.intensity
    event.deleteModel(deviceId,date,duration,intensity)
    res.send("abc");
})
router.post('/all',(req,res)=>{
    console.log("in")
    event.findAllModel(res);
})
module.exports = router;