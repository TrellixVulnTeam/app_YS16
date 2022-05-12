import React, { Component } from 'react';
import Prism from "prismjs"
import { Grid, Paper, withStyles, List } from "@material-ui/core";

import '../ReactJs/styles.css'
import Sidebar from './sidebar';
import PrismCode from '../ReactJs/prismCode';


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


const consoles = `
debugger;

console.log(Math.random());                           //give line number in file
console.warn(Math.random(3));
console.error(Math.random(4>5));

console.table([
        {id:1, name:'Apple'},
        {id:2, name:'Book'},
        {id:3, name:'Cat'},
    ]);

console.group('label');
    console.info('One');
    console.info('Two');
    console.info('Three');
console.group('label');

custom:
  console.log('%s', 'custom');
  console.log('%d', '1');
  console.log('%cHi', 'font-size:20px');
  
  console.clear();`.trim();

const Verbose = `
Violatin is dissable: Default levels => Verbose, enable
console.debug('Hi')        //console.debug is Verbose

XHR/fetch break point => url cointain localhost:5000; => enter`.trim();

const elements = `
ctrl+f = enter text which inspect
write on inspect elemets than, enter

in console, $0.innerText
            $0.innerText = 'cool'`.trim();

// const consoles = ``.trim();


class DevTools extends Component {
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
              <h3>1. Console</h3>
              <div style={titles}>
                <PrismCode
                  code={consoles}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>2. Verbose</h3>
              <div style={titles}>
                <PrismCode
                  code={Verbose}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>3. Network</h3>
              <ol>
                <li><b>show disable: </b>setting than, click on show overview</li>
                <li>Top left red circle stop n/w requet in n/w tab</li>
                <li><b>Response Headers: </b>Values sends by remote server</li>
                <li><b>Request Handlers: </b>Request made by developers</li>
                <li><b>Initiator: </b>Tab show requests made to which side and order also.</li>
              </ol>
              Check webside performance in low internet: Select(No throtting) Fast 3G, Slow 3G from second row below n/w.
              web socket are not throtting.
              <br />
              <br />
              <b>n/w than, right click on url than, copy than, inside console paste than, enter than, again made request in n/w.</b>
              <h3>4. Elemets</h3>
              <div style={titles}>
                <PrismCode
                  code={elements}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <h3>Memory</h3>
              <b>Heap snapshort: </b>delete  than, select Heap snapshort than, start tab below
              window after that click stop btn.
              <br />

              <h3>Basic Linux CLI Commands</h3>
              <ul>
                <li><b>ls:</b> List the directory (folder) system.</li>
                <li><b>mv:</b> Move a file to another folder.</li>
                <li><b>mkdir:</b> Creates a new directory (folder).</li>
                <li><b>rmdir:</b> Remove a directory (folder).</li>
                <li><b>exit:</b> Closes the CLI window.</li>
              </ul>
              <br />

              <h3>Basic Windows CLI Commands</h3>
              <ul>
                <li><b>dir:</b> List the directory (folder) system.</li>
                <li><b>copy:</b> Copy a file to another folder.</li>
                <li><b>move:</b>Move a file to another folder.</li>
                <li><b>mkdir or md:</b>Creates a new directory (folder).</li>
                <li><b>rmdir or rd:</b>Removes a directory (folder).</li>
              </ul>
            </List>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(DevTools));
