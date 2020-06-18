var mqtt = require('mqtt')
var humidity = require(__dirname + '/sensorModel.js')
const mongoose = require('mongoose')
const publish = require('./publisher')

// const User=require('./models/sensorModel.js')
function Checkdata(obj, id, value) {
    console.log(value)
    if (obj[0].values[0] > 1) {
        publish.Publisher(id, value[0], value[1])
    }
}

function Subscribe() {

    // var cb = function(err){
    //     if(!err)
    //         console.log("Connection Opened");
    //     else
    //         console.log("Connection Opened Failed"); 
    // };

    // broker="13.76.250.158"
    // // var client = mqtt.connect('mqtt://'+broker)
    //     var client = mqtt.connect({
    //         host: broker,
    //         port: 1883,
    //         username: 'BKvm2',
    //         password: 'Hcmut_CSE_2020'
    //     });


    //     client.on('connect',function(){
    //         client.subscribe('Topic/Mois',function(err){
    //             //open connect to database
    //             if(err){
    //                 console.log(err)
    //             }

    //     })})

    //     client.on('message',function(topic,message){
    //         //message
    //         var obj=JSON.parse(message);
    //         console.log(obj)
    //         Checkdata(obj, "Speaker", [0,0])
    //         // humidity.model(obj[0].device_id,'on',obj[0].values);
    //     })

    // 

    // Subscribe()

    /////////////////////////////////////////////////////////

    broker = "40.112.49.62"
    // var client = mqtt.connect('mqtt://'+broker)
    var clientTest = mqtt.connect({
        host: broker
    });

    clientTest.on('connect', function () {
        clientTest.subscribe('Topic/Mois', function (err) {
            //open connect to database
            if (err) {
                console.log(err)
            }

        })
    })

    clientTest.on('message', function (topic, message) {
        //message
        var obj = JSON.parse(message);
        console.log(obj)
        Checkdata(obj, "Speaker", [0, 0])
        humidity.model(obj[0].device_id,'on',obj[0].values);
    })



}
module.exports = { Subscribe };
