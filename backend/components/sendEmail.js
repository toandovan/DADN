// let cron = require('node-cron');
// let nodemailer = require('nodemailer');
// let sensor = mongoose.model('humidities')


// var mongoose=require('mongoose')

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

// let mailOptions = {
//     from: 'ngtronganhn01@gmail.com',
//     to: 'tronganhn2@gmail.com',
//     subject: 'Email from Node-App: A Test Message!',
//     text: 'Some content to send'
// };


// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'ngtronganhn01@gmail.com',
//       pass: 'TheMoon1'
//     }
// });

// function sendEmail(){
//     cron.schedule('* * * * *', () => {
//         transporter.sendMail(mailOptions, function(error, info){
//           if (error) {
//             console.log(error);
//           } else {
//             console.log('Email sent: ' + info.response);
//           }
//       });
//     }
// )
// }
// let data = []
// sensor.find({}, function (err, user) {
//     console.log(user)
// });

