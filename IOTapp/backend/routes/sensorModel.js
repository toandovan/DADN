const mongoose=require('mongoose');
const slugify = require('slugify');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    date: Number,
    status: String,
    sensor_value: [String]
})
var sensorModel=mongoose.model('humidity',sensorSchema);
// module.exports.sensorModel=sensorModel;

let model= (device_id,status,sensor_value)=>{
    var abc=new sensorModel(
        {   device_id:device_id,
            date: Date.now(),
            status: status,
            sensor_value: sensor_value
        }
    )
    abc.save(function(err,alex){
        if(err){
            console.log(err);
        }else{
            console.log("Document Save Done");
          }
        });
}
module.exports={model};