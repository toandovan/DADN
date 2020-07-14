const mongoose=require('mongoose');
//schema
const deviceSchema=new mongoose.Schema({
    device_id: String,
    // area: String,
    status: String,
    DeviceValue: String,
})
// let mois = mongoose.model('moistures',sensorSchema)
// let model= (device_id,area, status,sensor_value)=>{
//     var abc=new mois(
//         {   device_id:device_id,
//             date: Date.now(),
//             area: area,
//             status: status,
//             sensor_value: sensor_value
//         }
//     )
//     abc.save(function(err,alex){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Document Save Done");
//           }
//         });
// }
// module.exports={
//     mois,
//     model
// };
// module.exports=mongoose.model('devices',sensorSchema)