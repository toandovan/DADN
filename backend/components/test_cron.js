
const CronJob = require('cron').CronJob
const CronTime = require('cron').CronTime
let day = 1307
let val1 = 0
let val2 = 0
const a = new CronJob('*/4 * * * * *', function () {
  console.log(val1 +' to '+ val2) // function called inside cron
}, null, false)

// let run = (day) => {
//   console.log(day)
// }

let changeTime = (time) => {
  let time_str = '*/'+time+' * * * * *'
  a.stop()
  a.setTime(new CronTime(time_str))
  console.log("every "+time)
  a.start()
}

function Test(time,x1, x2){
  val1 = x1
  val2 = x2
  changeTime(time)
}

Test(5,1,2)
setTimeout(()=>Test(2,3,4), 20000)
// Test(1000, 3,4)
// scheduler()
// setTimeout(() => { schedulerStatus() }, 1000)
// setTimeout(() => { schedulerStop() }, 9000)
// setTimeout(() => { schedulerStatus() }, 10000)
// setTimeout(() => { changeTime('* * * * * *') }, 11000)
// setTimeout(() => { scheduler() }, 12000)
// setTimeout(() => { schedulerStop() }, 16000)

// randomNum()