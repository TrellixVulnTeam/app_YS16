const ProgressBar = require('progress')


const add = () => {
  [1, 2, 3].forEach(num => {
    // console.log(num)
  })
}

const argumentsCall = () => {
  for (let j = 0; j < process.argv.length; j++) {
    // console.log('argumentsCall', j + ' -> ' + (process.argv[j]));
  }
  console.log('process.argv.slice(2)', process.argv.slice(2))
}

const count = () => {
  const oranges = ['orange', 'orange']
  const apples = ['just one apple']

  oranges.forEach(fruit => {
    // console.count(fruit)
  })
  apples.forEach(fruit => {
    // console.count(fruit)
  })
}

//The console.countReset() method resets counter used with console.count().
const resetCount = () => {
  const oranges = ['orange', 'orange']
  const apples = ['just one apple']
  oranges.forEach(fruit => {
    console.count(fruit)
  })
  apples.forEach(fruit => {
    console.count(fruit)
  })

  console.countReset('orange')

  oranges.forEach(fruit => {
    console.count(fruit)
  })
}


//stack trace
const stackTrace = () => console.trace(resetCount)


//Calculate the time spent
//calculate how much time a function takes to run, using time() and timeEnd()
const doSomething = () => console.log('test')
const measureDoingSomething = () => {
  console.time('doSomething()')
  //do something, and measure the time it takes
  doSomething()
  console.timeEnd('doSomething()')
}


/*
This snippet creates a 10-step progress bar, and every 100ms one step is completed. When the 
bar completes we clear the interval.
*/
const progressLine = () => {
  const bar = new ProgressBar(':bar', { total: 10 })
  const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) {
      clearInterval(timer)
    }
  }, 100)
}


module.exports = {
  argumentsCall,
  add,
  count,
  stackTrace,
  measureDoingSomething,
  progressLine
}