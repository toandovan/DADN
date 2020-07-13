// let cron = require('node-cron')
// var CronJob = require('cron').CronJob;
// var job = new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
// job.start();



// let newCron = new cron()

// var job = new CronJob();
// var period = 1;
// var CronJob = require('cron').CronJob;
//  function createCron(job, newPeriod) {
//   if (job) {
//     job.stop();
//     console.log("job stop")
//   }
//   job =  new CronJob('*/' + newPeriod + ' * * * * *', function () {
//             console.log(newPeriod);
//         }, null, true, "Indian/Mauritius");
// }
// createCron(job, 1);

// setTimeout(function() {
//   period = period * 2;
//   createCron(job, period);
// }, 3000);

// function randomNum() {
//     let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     a.forEach(element => TestCron(element)
//         // let a = element => {
//         //     cron.schedule('*\10 * * * * *', (element) => {
//         //         console.log(element)
//         //     })
//         // }
//         // setTimeout( a, 3000);
//     )

// }


const CronJob = require('cron').CronJob
const CronTime = require('cron').CronTime

const a = new CronJob('*/4 * * * * *', function () {
  run() // function called inside cron
}, null, false)

let run = () => {
  console.log('function called')
}

let scheduler = () => {
  console.log('CRON JOB STARTED WILL RUN IN EVERY 4 SECOND')
  a.start()
}

let schedulerStop = () => {
  a.stop()
  console.log('scheduler stopped')
}

let schedulerStatus = () => {
  console.log('cron status ---->>>', a.running)
}

let changeTime = (input) => {
  a.setTime(new CronTime(input))
  console.log('changed to every 1 second')
}

scheduler()
setTimeout(() => { schedulerStatus() }, 1000)
setTimeout(() => { schedulerStop() }, 9000)
setTimeout(() => { schedulerStatus() }, 10000)
setTimeout(() => { changeTime('* * * * * *') }, 11000)
setTimeout(() => { scheduler() }, 12000)
setTimeout(() => { schedulerStop() }, 16000)

// randomNum()