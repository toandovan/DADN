// var mqtt = require('mqtt')
// var moisSensor = require('../models/moistures')
// const mongoose = require('mongoose')
// const publish = require('./publisher')

// // const User=require('./models/sensorModel.js')
// function Checkdata(obj, id, value) {
//     // console.log(value)
//     if (obj[0].values[0] > 1) {
//         publish.Publisher(id, value[0], value[1])
//     }
// }

// function Subscribe() {


//     // broker="52.187.125.59"
//     //     var client = mqtt.connect({
//     //         host: broker,
//     //         port: 1883,
//     //         username: 'BKvm',
//     //         password: 'Hcmut_CSE_2020'
//     //     });


//     //     client.on('connect',function(){
//     //         client.subscribe('Topic/Mois',function(err){
//     //             //open connect to database
//     //             if(err){
//     //                 console.log(err)
//     //             }

//     //     })})

//     //     client.on('message',function(topic,message){
//     //         //message
//     //         var obj=JSON.parse(message);
//     //         console.log(obj)
//     //         Checkdata(obj, "Speaker", [0,0])
//     //         mois.model(obj[0].device_id,'on',obj[0].values);
//     //     })



//     /////////////////////////////////////////////////////////

//     broker = "40.112.49.62"
//     // server_muon = "52.187.119.84"
//     var clientTest = mqtt.connect({
//         host: broker
//     });

//     clientTest.on('connect', function () {
//         clientTest.subscribe('Topic/Mois', function (err) {
//             //open connect to database
//             if (err) {
//                 console.log(err)
//             }

//         })
//     })

//     clientTest.on('message', function (topic, message) {
//         //message
//         var obj = JSON.parse(message);
//         console.log(obj)
//         // Checkdata(obj, "Speaker", [0, 0])
//         moisSensor.saveSensorData(obj[0].device_id, "nat", 'on',obj[0].values);
//     })



// }
// module.exports = { Subscribe };



//////////////////////////////////////////////////////////////////////////////////
var mqtt = require('mqtt')
var mois = require('../models/moistures')
const mongoose = require('mongoose')
const publish = require('./publisher')

// const User=require('./models/sensorModel.js')
function Checkdata(obj, id, value) {
    // console.log(value)
    if (obj[0].values[0] > 1) {
        publish.Publisher(id, value[0], value[1])
    }
}

function Subscribe() {


    // broker="52.187.125.59"
    //     var client = mqtt.connect({
    //         host: broker,
    //         port: 1883,
    //         username: 'BKvm',
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
    //         mois.model(obj[0].device_id,'on',obj[0].values);
    //     })



    /////////////////////////////////////////////////////////

    broker = "40.112.49.62"
    // broker = "52.186.145.109"
    // server_muon = "52.187.119.84"
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
        // Checkdata(obj, "Speaker", [0, 0])
        mois.model(obj[0].device_id, "nat", 'on',obj[0].values);
    })



}
module.exports = { Subscribe }
