//process does not require a "require", it's automatically available

const processFun = () => {
  port = process.env.PORT;
  host = process.env.HOST;
  nodeenv = process.env.NODE_ENV
}

//tell the OS to run env with node as parameter
// console.log('shebang', process.env)

//process is immediately forced to terminate
// process.exit(1);

//A program will gracefully exit when all the processing is done.
// process.exitCode = 1

module.exports = processFun;