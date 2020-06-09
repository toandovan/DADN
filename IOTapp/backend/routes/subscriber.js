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
        // console.log(err)
        console.log("Connection Opened Failed");
};
client.on('connect',function(){
    client.subscribe('home/humidity',function(err){
        //open connect to database
        if(err){
            console.log(err)
        }
        // mongoose.connect("mongodb+srv://toando:toando@cluster0-xfeu0.azure.mongodb.net/iotserver?retryWrites=true&w=majority",cb);
        mongoose.connect("mongodb+srv://tronganhn2:xsGLAKbZo3KbI9I0@cluster0-qswj1.gcp.mongodb.net/data-test1?retryWrites=true&w=majority",cb);

        
        con = mongoose.connection;
})})
client.on('message',function(topic,message){
    //message
    var obj=JSON.parse(message);
    console.log(obj.value)

    // let device_id=message.
    // //write msg to database
    humidity.model(obj.device_id,obj.status,obj.value);
})





// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://tronganhn2:TheMoon1.@cluster0-qswj1.gcp.mongodb.net/data-test1?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });