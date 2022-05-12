module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "curdapplication",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


// const dbConn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'curdapplication'
// });