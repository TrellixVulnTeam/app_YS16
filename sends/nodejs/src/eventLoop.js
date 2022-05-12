
const bar = () => console.log('bar')

const baz = () => console.log('baz')

const eventL = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}


/*
Promises that resolve before the current function ends will be executed right after the 
current function.
*/
const promis = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

let done = true

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone)
  } else {
    const why = 'Still working on something else'
    reject(why)
  }
})

const checkIfItsDone = () => {
  isItDoneYet
    .then(ok => {
      console.log(ok)
    })
    .catch(err => {
      console.error(err)
    })
}


// const chainingPromises = () => {
//   const status = response => {
//     if (response.status >= 200 && response.status < 300) {
//       return Promise.resolve(response)
//     }
//     return Promise.reject(new Error(response.statusText))
//   }

//   const json = response => response.json()

//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(status)
//     .then(json)
//     .then(data => {
//       console.log('Request succeeded with JSON response', data)
//     })
//     .catch(error => {
//       console.log('Request failed', error)
//     })
// }


/*
If you need to synchronize different promises, Promise.all() helps you define a list of 
promises, and execute something when they are all resolved.
*/

const promiseAll = () => {
  const f1 = fetch('First Promise')
  const f2 = fetch('Second Promise')

  Promise.all([f1, f2]).then(([res1, res2]) => {
    console.log('Results', res1, res2)
  })
}


/*
Promise.race() runs when the first of the promises you pass to it settles (resolves or rejects), 
and it runs the attached callback just once, with the result of the first promise settled.
*/
const promiseRace = () => {
  const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
  })

  Promise.race([first, second]).then(result => {
    console.log(result)
  })
}


/*
Promise.any() settles when any of the promises you pass to it fulfill or all of the promises 
get rejected. It returns a single promise that resolves with the value from the first promise 
that is fulfilled. If all promises are rejected, then the returned promise is rejected with an 
AggregateError.
*/


module.exports = {
  eventL,
  promis,
  checkIfItsDone,
  // chainingPromises,
  // promiseAll,
  promiseRace
}