import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../ReactJs/styles.css'
import Sidebar from './sidebar';
import PrismCode from '../ReactJs/prismCode';

import Browser from '../../assets/css1.PNG';


const titles = {backgroundColor:'#F0F8FF', padding:'1px', fontSize:'16px'}

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


const webservices = ``.trim();


class Jest extends Component {
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
      <h3>Jest Features:</h3>
      <ul>
        <li><b>zero config:</b> As we will see later in this article, close to none configuration is required to get started with writing tests and deploying them. However, a config file can be supplied to the test suite as well.</li>
        <li><b>snapshots:</b> Jest has the ability to enable snapshot testing as well. Essentially, the snapshots are matched with the saved snapshot and check for matching functionality.</li>
        <li><b>isolated tests:</b> Jest tests are run parallely to improve run time.</li>
      </ul>
      <br/>
      
      <h3>Whenever possible, use TDD</h3>
      TDD is a design process, not a testing process. TDD is a robust way of designing software components ("units") interactively so that their behaviour is specified through unit tests.
      <br/>
      <br/>
      <b>Test-first cycle:</b>
      <br/>
      <ul>
        <li>Write a simple failing test</li>
        <li>Make the test pass by writing the minimum amount of code, don't bother with code quality</li>
        <li>Refactor the code by applying design principles/patterns</li>
      </ul>
      <br/>
      
      <h3>Importance of Test-Driven Development (TDD)</h3>
      Using TDD provides the following benefits:
      <br/>
      <ul>
        <li>You have a clear picture of what you are trying to build before you write the actual code</li>
        <li>High test coverage;</li>
        <li>Bug-free code;</li>
        <li>Easy refactoring of the code;</li>
        <li>It enables developers to write small test codes which are easy to debug.</li>
      </ul>
      <br/>
      
      <h3>Why Should You Use Test-Driven Development (TDD) for ReactJS?</h3>
      If you have worked with ReactJS, then you probably know that code grows really fast in ReactJS. The code gets filled up with a lot of complex conditions due to service calls and change of state.
<br/>
<br/>
Every component of your React application that lacks unit tests becomes a legacy code which is very difficult to maintain. Although we can add unit tests after we create the production code, it will be very risky as some scenarios can get overlooked which will cause the issue at the production stage.
<br/>

<h3>Tell me about Unit Testing in brief.</h3>    
Unit Testing is used to check the independent modules of a software app during the development phase. An independent module can be anything like procedure, function, etc. Unit testing is done by developers and testers together before the integration testing. They have to write unit test cases as well if needed.
<br/>

<h3> What is the total number of phases in a Unit Test Case?</h3>
The working of a unit test case can be divided into 3 phases. At the first stage, it will initialize the specific module of a software app that you want to test. In the second stage, it will execute the test case. In the end, it will analyze the final output.
<br/>

<h3>What are the various types of Unit Testing for a software app?</h3>
     <br/>
     
     <h3>What do you know about state-based Unit Testing?</h3>
     If you want to check if the final output is right or not, then it becomes state-based.
     <br/>
     
     <h3>For QA, what is the right time to start with Unit Testing?</h3>
     Starting testing at the last phase is not effective but it should be performed day by day. Mostly, Unit testing starts at the development phase continues until the deployment. When testing is not performed from the very first stage, it saves your time, efforts, and investments too.
     <br/>
     
     <h3>What is the purpose of Unit testing for a software app?</h3>
     It acts like documentation where the functionality of each individual component is recorded. Also, you can track quickly, what to test, and when.
     <br/>
     
     <h3>What can be avoided using Unit test cases?</h3>
     When you are working with unit test cases, it helps to avoid long classes, functions, procedures, etc. There is no need to write lengthy code but focus on testing functionality of each small component step by step. It will make the development of large apps easy.
     <br/>
     
     <h3>What is Mocking?</h3>
     It is a class that is suitable for exceptional handling, and it will give you a detailed idea of when a particular method was called. In case a method was not called by this class then you will be notified for the same.
     <br/>
     
     <h3>What is Stubbing?</h3>
     Stubs can set dynamic values when exceptions are thrown by methods. It works similar to mock classes but does not give any idea of either methods were called or not.
     <br/>
     
     <h3>Highlight any two or three features of mocking.</h3>
     It helps in working on interactions how different modules are connected to each other. Also, it tests the particular block of the code in isolation.
     <br/>
     
     <h3>How to design a good unit test case? Share your past experiences or strategies you have used during your work.</h3>
     <ul>
       <li>A test case is easy to code, and developers or testers don’t have to put more time or efforts.</li>
       <li>It is easy to read, more reliable, and can be executed much faster than your expectations.</li>
       <li>It can interact with other test cases quickly and creates a suitable testing environment too.</li>
       <li>Unit test cases have to satisfy certain conditions like it will not access network resources, any database, or file systems. It is completely free of external factors.</li>
     </ul>
     <br/>
     
     <h3>What are the best practices to perform Unit Testing?</h3>
     Here are the steps that you should follow while performing the Unit Testing.
     <br/>
     <ul>
       <li>A developer will write or design test cases at the first stage that will help to check the functionality of each module independently.</li>
       <li>The best unit testing practice is to copy and paste the code in the testing environment instead of using the natural environment.</li>
       <li>You can use a unit test framework like Junit and TestNG for automating the testing process. These frameworks will help you verify either all test cases are written well or not. It will speed up the testing process to a larger extent.</li>
       <li>So, the testing process can be divided into three categories broadly, designing test cases, reviewing, and executing test cases.</li>
     </ul>
     <br/>
     
     <h3>What is Code Coverage?</h3>
     It will give you a complete idea of which extent an application has been tested. It will highlight the area of the code that has not been entertained by test cases yet. You can quickly take actions on the highlighted area and make your application more suitable for the deployment.
     <br/>
     <br/>
     <b>What Are the various code coverage techniques in software testing?</b>
     <br/>
     <ul>
       <li>Statement Coverage</li>
       <li>Decision Coverage</li>
       <li>Branch Coverage</li>
       <li>Condition Coverage</li>
       <li>Finite State Machine Coveragea</li>
     </ul>
     <br/>
     
     <h3>What are the different unit testing techniques in QA?</h3>
     <ul>
       <li>White Box Testing</li>
       <li>Black Box Testing</li>
       <li>Grey Box Testing</li>
     </ul>
     <br/>
     
     <h3>Why did unit testing need to perform with other testing types?</h3>
     It is not expected to highlight each error in the software program. Also, it cannot work on integration errors but check independent units. This is the reason why unit testing needs to combine with other testing types like integration or performance testing.
      <div style={titles}>
      <PrismCode
        code={webservices}
        language="js"
        plugins={["line-numbers"]}
      />
      </div>
      <br/>
      
      <h3></h3>
      
      <br/>
      </List>
      </Paper>
      </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(Jest));
