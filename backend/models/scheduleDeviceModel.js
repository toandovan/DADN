// const mongoose=require('mongoose');
// //schema
// const sensorSchema=new mongoose.Schema({
//     device_id: String,
//     date: Number,
//     area: String,
//     status: String,
//     sensor_value: [String]
// })
// let schedule = mongoose.model('DeviceSchedule',sensorSchema)
// let model= (device_id,area, status,sensor_value)=>{
//     var abc=new schedule(
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
