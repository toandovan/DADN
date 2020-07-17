let cron = require('node-cron');
let nodemailer = require('nodemailer');
var mongoose = require('mongoose')
let moistures = mongoose.model('moistures');
let userModel = require('../models/UserModel');



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




let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'PAT2H.TECH@gmail.com',
    pass: 'PAT2H.TECHTEAM'
  }
});

function sendEmail(userEmail) {
  // Test()
  let mailOptions = {
    from: 'PAT2H.TECH@gmail.com',
    to: userEmail,
    subject: 'Email from IOT-App',
    text: "Dear Sir/Mam, \n \nHere is the daily status of your Smart Farm: \n" + Test()
  };
  cron.schedule('*/30 * * * * *', () => {
    console.log(mailOptions)
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    // });
  }
  )
}



async function Test() {
  let contentEmail = ''
  await moistures.aggregate([
    {
      $sort: {
        'date': -1
      }
    },
    {
      $group: {
        _id: "$device_id",
        date: { $first: "$date" },
        area: { $first: "$area" },
        status: { $first: "$status" },
        value: { $first: "$sensor_value" }
      }
    }
  ]).exec().then(doc => {
    let x = JSON.parse(JSON.stringify(doc))
    x.forEach(y => {
      contentEmail += "\t Sensor: " + y._id + " is " + y.status + " - Latest value is " + y.value + " Measure at " + (new Date(y.date)).toUTCString() + "\n"
    })
    contentEmail += "\n \n - Daily message is sent by PAT2H-Tech IOT System -"
  })

  return contentEmail
}

function sendEmail2() {
  cron.schedule('* * * * *', () => {
    Test().then((contentEmail) => {
    userModel.find({}).exec()
      .then(doc => {

        doc.forEach(element => {
          let mailOptions = {
            from: 'PAT2H.TECH@gmail.com',
            to: element.email,
            subject: 'Email from IOT-App',
            text: "Dear Sir/Mam, \n \nHere is the daily status of your Smart Farm: \n" + contentEmail
          };
          console.log(mailOptions);
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        })
      })
    })
  })
}

module.exports = { sendEmail, sendEmail2 }


