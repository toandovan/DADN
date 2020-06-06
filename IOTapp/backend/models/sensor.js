const mongoose=require('mongoose');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    sensor_record: {
       date: Date,
       status: String,
       sensor_value: [String]
    }
})
module.exports=mongoose.model('humidities',sensorSchema)