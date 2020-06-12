var mqtt=require('mqtt')
var humidity=require(__dirname+'/sensorModel.js')
const mongoose=require('mongoose')
// const User=require('./models/sensorModel.js')
broker="13.76.250.158"
// var client = mqtt.connect('mqtt://'+broker)
var client = mqtt.connect({
    host: broker,
    port: 1883,
    username: 'BKvm2',
    password: 'Hcmut_CSE_2020'
});
var cb = function(err){
    if(!err)
        console.log("Connection Opened");
    else
        console.log("Connection Opened Failed");
};
client.on('connect',function(){
    client.subscribe('Topic/Mois',function(err){
        //open connect to database
        if(err){
            console.log(err)
        }
        mongoose.connect("mongodb+srv://tronganhn2:aa@cluster0-qswj1.gcp.mongodb.net/data-test1?retryWrites=true&w=majority",cb);
        con = mongoose.connection;
})})
client.on('message',function(topic,message){
    //message
    var obj=JSON.parse(message);
    console.log(obj)
    humidity.model(obj.device_id,'on',obj.values);
})
