/*
setTimeout. You specify a callback function to execute later, and a value expressing how later
you want it to run, in milliseconds:
*/

const delayTime = () => {
  setTimeout(() => {
    console.log('after ')
  }, 0)

  console.log(' before ')
}
const delayTimeSet = () => {
  setTimeout(delayTime, 1000)
}


const intervslSet = () => {
  const interval = setInterval(() => {
    if (true) {
      clearInterval(interval)
      return
    }
    console.log('otherwise do things')
  }, 100)
}



module.exports = {
  delayTimeSet,
  intervslSet
}