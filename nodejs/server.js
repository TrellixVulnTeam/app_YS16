const express = require('express');
const app = express();
require('dotenv').config();

const processFun = require('./src/processEnv')
// const { add, argumentsCall, count, stackTrace, measureDoingSomething, progressLine } = require('./src/logics');
// const {commandLines} = require('./src/commandLines');
// const { eventL, promis, checkIfItsDone, chainingPromises, promiseRace } = require('./src/eventLoop');
// const { delayTimeSet, intervslSet } = require('./src/delay')
// const { wind } = require('./src/windowFun')
// const { asyncAwait } = require('./src/asynch');
// const { evtOn } = require('./src/evtEmmiter');
// const { pathBase, pathDir, extnames, pathFormat, absolutes, joins } = require('./src/pathModules');
const { buffers } = require('./src/buffers')

app.get('/', (req, res) => {
  res.send("Hi")
});


processFun();
// add();
// argumentsCall();
// count();
// stackTrace();
// measureDoingSomething();
// progressLine();
// commandLines();
// eventL();
// promis();
// checkIfItsDone();
// chainingPromises();
// promiseAll();
// promiseRace();
// delayTimeSet();
// intervslSet();
// asyncAwait();
// evtOn();
// pathBase();
// pathDir();
// extnames();
// pathFormat();
// absolutes();
// joins();
// buffers();


app.listen(port, host, nodeenv, () => {
  // console.log(`Server running on Port ${port}, NodeEnv ${nodeenv} and Host ${host}`)
})

//signals
// process.on('SIGTERM', () => {
//   app.close(() => {
//     console.log('Process terminated')
//   })
// })