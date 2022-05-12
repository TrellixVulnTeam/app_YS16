import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../../ReactJs/styles.css'
import Sidebar from '../sidebar';
import PrismCode from '../../ReactJs/prismCode';


const titles = { backgroundColor: '#F0F8FF', padding: '1px', fontSize: '16px' }

const styles = theme => ({
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
  smMargin: {
    margin: theme.spacing(1)
  },
  actionDiv: {
    textAlign: "center"
  }
})


const envs = `
NODE_ENV = development
PORT = 5000
MYSQLDB = 'curdapplication'
JWT_SECRET = 'abc123'`.trim();

const config = `
const mysql = require("mysql");

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curdapplication'
});

dbConn.connect(function (error) {
    if (error) throw error;
    console.log('Database Connected Successfully!!!');
})

module.exports = dbConn;
`.trim();

const models = `
var dbConn = require('../config/db.config');

var Employee = function (employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees WHERE is_deleted=0', (err, res) => {
        if (err) {
            console.log('Error while fetching employess', err);
            result(null, err);
        } else {
            console.log('Employees fetched successfully');
            result(null, res);
        }
    })
}

// get employee by ID from DB
Employee.getEmployeeByID = (id, result) => {
    dbConn.query('SELECT * FROM employees WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching employee by id', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// create new employee
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employees SET ? ', employeeReqData, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Employee created successfully');
            result(null, res)
        }
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result) => {
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? 
      WHERE id = ?", [employeeReqData.first_name, employeeReqData.last_name, employeeReqData.email, 
      employeeReqData.phone, employeeReqData.organization, employeeReqData.designation, employeeReqData.salary, id], 
      
      (err, res) => {
        if (err) {
            console.log('Error while updating the employee');
            result(null, err);
        } else {
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Employee.deleteEmployee = (id, result) => {
    // dbConn.query('DELETE FROM employees WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the employee');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE employees SET is_deleted=? WHERE id = ?", [1, id], (err, res) => {
        if (err) {
            console.log('Error while deleting the employee');
            result(null, err);
        } else {
            console.log("Employee deleted successfully");
            result(null, res);
        }
    });
}

module.exports = Employee;`.trim();

const controller = `
const express = require('express');
const router = express.Router();
const EmployeeModel = require('../models/employee.model');

// get all employee list
router.getEmployeeList = (req, res) => {
    EmployeeModel.getAllEmployees((err, employees) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

// get employee by ID
router.getEmployeeByID = (req, res) => {
    EmployeeModel.getEmployeeByID(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        console.log('single employee data', employee);
        res.send(employee);
    })
}

// create new employee
router.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee Created Successfully', data: employee.insertId })
        })
    }
}

// update employee
router.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        EmployeeModel.updateEmployee(req.params.id, employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Employee updated Successfully' })
        })
    }
}

// delete employee
router.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Employee deleted successully!' });
    })
}


module.exports = router;`.trim();

const routes = `
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');


router.get('/', employeeController.getEmployeeList);

router.get('/:id', employeeController.getEmployeeByID);

router.post('/', employeeController.createNewEmployee);

router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;`.trim();

const server = `
const express = require('express');
const cors = require('cors')
require("dotenv").config();
const app = express()

// parse request data content type application/x-www-form-rulencoded
app.use(express.urlencoded({ extended: true }));

// parse request data content type application/json
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/employee', require('./routes/employee.route'));

const port = process.env.PORT;

app.listen(port, () => {
  console.log('Express is running at port 5000');
});`.trim();


class MysqlCurd extends Component {
  componentDidMount() {
    setTimeout(() => Prism.highlightAll(), 0)
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <h4><Sidebar /></h4>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <List>
              <h3>MySqlCurd</h3>
              <b>.env</b>
              <div style={titles}>
                <PrismCode
                  code={envs}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>config/db.config.js</b>
              <div style={titles}>
                <PrismCode
                  code={config}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>models/employee.model.js</b>
              <div style={titles}>
                <PrismCode
                  code={models}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>controllers/employee.controller.js</b>
              <div style={titles}>
                <PrismCode
                  code={controller}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>routes/employee.route.js</b>
              <div style={titles}>
                <PrismCode
                  code={routes}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>server.js</b>
              <div style={titles}>
                <PrismCode
                  code={server}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(MysqlCurd));
