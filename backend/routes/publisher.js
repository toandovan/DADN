var mqtt = require('mqtt')
let deviceModel = require('../models/deviceModel')

function Publisher(id, val0, val1){
    // broker="52.187.125.59"
    // let object = JSON.stringify([{ "device_id":id, "values":[val0.toString(),val1.toString()]}])
    // var client = mqtt.connect({
    //     host: broker,
    //     port: 1883,
    //     username: 'BKvm',
    //     password: 'Hcmut_CSE_2020'
    // });

    // client.on('connect',function(){
    //     console.log("OK-pub-done")
    //     client.publish('Topic/Speaker', object);
    // })



    /////////////////////////////////////////

    broker = "40.112.49.62"
    // var client = mqtt.connect('mqtt://'+broker)
    var clientTest = mqtt.connect({
        host: broker
    });
    let object = JSON.stringify([{ "device_id":id, "values":[val0.toString(),val1.toString()]}])

    clientTest.on('connect',function(){
        console.log("OK-pub-done")
        clientTest.publish('Topic/Speaker', object);
        let obj=JSON.parse(object)
        deviceModel.model(obj[0].device_id,obj[0].values[0],obj[0].values[1]);
    })
}

// const arraytest = [{ "device_id":"Speaker", "values":["1","59"]}]
// const jsontest = JSON.stringify(arraytest)
// Publisher(jsontest)
module.exports = {Publisher};