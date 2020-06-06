var mqtt=require('mqtt')
var humidity=require(__dirname+'/sensorModel.js')
const mongoose=require('mongoose')
// const User=require('./models/sensorModel.js')
broker='40.112.49.62'
var client =mqtt.connect('mqtt://'+broker)
var cb = function(err){
    if(!err)
        console.log("Connection Opened");
    else
        console.log("Connection Opened Failed");
};
client.on('connect',function(){
    client.subscribe('home/humidity',function(err){
        //open connect to database
        if(err){
            console.log(err)
        }
        mongoose.connect("mongodb+srv://toando:toando@cluster0-xfeu0.azure.mongodb.net/iotserver?retryWrites=true&w=majority",cb);
        con = mongoose.connection;
})})
client.on('message',function(topic,message){
    //message
    var obj=JSON.parse(message);
    console.log(obj.value)
    humidity.model(obj.device_id,'on',obj.value);
})
