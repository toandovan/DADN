const mongoose=require('mongoose');
const slugify = require('slugify');
//schema
const sensorSchema=new mongoose.Schema({
    device_id: String,
    sensor_record: {
       date: Date,
       status: String,
       sensor_value: Number
    }
})
var sensorModel=mongoose.model('humidity',sensorSchema);
// module.exports.sensorModel=sensorModel;

let model= (device_id,status,sensor_value)=>{
    var abc=new sensorModel({device_id:device_id,
    sensor_record:{
        date: new Date(),
        status: status,
        sensor_value: sensor_value
    }
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
// var cb = function(err){
//       if(!err)
//         console.log("Connection Opened");
//       else
//         console.log("Connection Opened Failed");
//       };
//     mongoose.connect("mongodb+srv://toando:toando@cluster0-xfeu0.azure.mongodb.net/iotserver?retryWrites=true&w=majority",cb);
//     con = mongoose.connection;
