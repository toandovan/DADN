const mongoose=require('mongoose');
//schema
const deviceSchema=new mongoose.Schema({
    device_id: String,
    status: String,
    deviceValue: String,
})
let device = mongoose.model('speaker',deviceSchema)
let model= (device_id,status,device_value)=>{

    device.findOneAndUpdate({device_id: device_id},{
        device_id: device_id,
        status: status,
        deviceValue:device_value
    },{upsert: true},function(err,alex){
        if(err){
            console.log(err);
        }else{
            console.log("Document Save Done2");
          }
        });
}
module.exports={
    device,
    model
};