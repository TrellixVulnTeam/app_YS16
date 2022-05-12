const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

/*
EventEmitter use to handle our events.
emit is used to trigger an event.
on is used to add a callback function that's going to be executed when the event is triggered.
*/
const evtOn = () => {
  eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
  })
}

eventEmitter.emit('start', 1, 100)

module.exports = {
  evtOn
}