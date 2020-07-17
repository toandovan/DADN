const mongoose=require('mongoose');
//schema
const eventSchema=new mongoose.Schema({
    device_id: String,
    date: String,
    duration: String,
    intensity: String,
})
let event = mongoose.model('event',eventSchema)

let deleteModel=(device_id, date, duration, intensity)=>{
    event.remove({
        device_id:device_id,
        date: date,
        duration: duration,
        intensity: intensity
    },function(err,alex){
            if(err){
                console.log(err);
            }else{
                console.log("Document Remove Done");
            }
            });
}
let findModel=(device_id, date, duration, intensity)=>{
    event.findOne({
        device_id:device_id,
        date: date,
        duration: duration,
        intensity: intensity
    })
    .exec()
    .then((res)=>{
        if(!res){
            return false
        }
        return true
    });
}
let findAllModel=(res)=>{
     event.find({})
    .exec()
    .then((doc)=>{
        res.json(doc)
    })
}
let model= (device_id, date, duration, intensity)=>{
    let eventRecord=new event(
        {
            device_id:device_id,
            date: date,
            duration: duration,
            intensity: intensity
        }
    )
    eventRecord.save(function(err,alex){
        if(err){
            console.log(err);
        }else{
            console.log("Event Save Done");
          }
        });
}

module.exports={
    event,deleteModel,findModel,findAllModel,
    model
};