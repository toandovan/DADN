const mongoose=require('mongoose');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    hardwareVersion: String,
    softwareVersion: String,
    manufacture: String,
    modelNum: String,
    deviceSerialNumber:String,
    deviceType: String,
    status: String
})
module.exports=mongoose.model('deviceModel',sensorSchema)