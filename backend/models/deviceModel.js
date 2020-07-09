const mongoose=require('mongoose');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    area: String,
    status: String,
    motorValue: String,
    scheduleDate: Number
})
module.exports=mongoose.model('deviceModel',sensorSchema)