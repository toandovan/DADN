const mongoose=require('mongoose');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    date: Number,
    status: String,
    sensor_value: [String]
})
module.exports=mongoose.model('humidities',sensorSchema)