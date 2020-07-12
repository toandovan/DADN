let cron = require('node-cron');
let nodemailer = require('nodemailer');
var mongoose=require('mongoose')
let moistures = mongoose.model('moistures')



// var cb = function(err){
//   if(!err)
//       console.log("Connection Opened");
//   else{
//       console.log("Connection Opened Failed");
//       console.log(err)
//   }
// };
// mongoose.connect("mongodb+srv://tronganhn2:aa@cluster0-qswj1.gcp.mongodb.net/data-test1?retryWrites=true&w=majority",cb);
// con = mongoose.connection;

let mailOptions = {
    from: 'PAT2H.TECH@gmail.com',
    to: 'ngocphat.tin.hoa@gmail.com',
    subject: 'Email from IOT-App',
    text: "Dear Sir/Mam, \n \nHere is the daily status of your Smart Farm: \n"
};


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'PAT2H.TECH@gmail.com',
      pass: 'PAT2H.TECHTEAM'
    }
});

function sendEmail(){
    Test()
    cron.schedule('* * * * *', () => {
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
      });
    }
)
}



function Test(){
  moistures.aggregate([
    {
      $sort: {
        'date':-1
      }
    },
    {
      $group:{
        _id: "$device_id",
        date:{ $first: "$date"},
        area: {$first: "$area"},
        status: {$first: "$status"},
        value: {$first: "$sensor_value"}
      }
    }
  ]).exec().then(doc => {
    let x = JSON.parse(JSON.stringify(doc))
    x.forEach(y => {
      mailOptions["text"] += "\t Sensor: " + y._id + " is " +y.status+ " - Latest value is "+ y.value +"\n"
    })
    mailOptions["text"] += "\n \n - Daily message is sent by PAT2H-Tech IOT System -"
  })
}

module.exports = { sendEmail }


