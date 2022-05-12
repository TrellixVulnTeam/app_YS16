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


const appending = `
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    const newNode = {value: value, next: null};
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }
  
  toArray(){
    const element = [];
    let curNode = this.head;
    while(curNode){
      element.push(curNode);
      curNode = curNode.next;
    }
    
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append('Hi');
LinkedList1.append('Max');
LinkedList1.append(true);
LinkedList1.append(18.51);

console.log(LinkedList1.toArray());
`.trim();

const prepend = `
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    const newNode = {value: value, next: null};
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }
  
  prepend(value){
    const newNode = { value: value, next: this.head};
    
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
  }
  
  toArray(){
    const element = [];
    let curNode = this.head;
    while(curNode){
      element.push(curNode);
      curNode = curNode.next;
    }
    
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append('Hi');
LinkedList1.append('Max');
LinkedList1.append(true);
LinkedList1.append(18.51);

LinkedList1.prepend('First Value');

console.log(LinkedList1.toArray());
`.trim();

const deleting = `
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    const newNode = {value: value, next: null};
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }
  
  prepend(value){
    const newNode = { value: value, next: this.head};
    
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
  }
  
  delete(value){
    if(!this.head){
      return;
    }
    
    while(this.head && this.head.value === value){
      this.head = this.head.next;
    }
    
    let curNode = this.head;
    while(curNode.next){
      if(curNode.next.value === value){
        curNode.next = curNode.next.next;
      }
      else{
        curNode = curNode.next;
      }
    }
    
    if(this.tail.value === value){
      this.tail = curNode;
    }
  }
  
  toArray(){
    const element = [];
    let curNode = this.head;
    while(curNode){
      element.push(curNode);
      curNode = curNode.next;
    }
    
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append('Hi');
LinkedList1.append('Max');
LinkedList1.append('Max');
LinkedList1.append(true);
LinkedList1.append(18.51);

LinkedList1.prepend('First Value');

console.log(LinkedList1.toArray());

LinkedList1.delete('Max');
LinkedList1.delete('First Value');
LinkedList1.delete(18.51);

console.log(LinkedList1.toArray());`.trim();

const finding = `
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    const newNode = {value: value, next: null};
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }
  
  prepend(value){
    const newNode = { value: value, next: this.head};
    
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
  }
  
  delete(value){
    if(!this.head){
      return;
    }
    
    while(this.head && this.head.value === value){
      this.head = this.head.next;
    }
    
    let curNode = this.head;
    while(curNode.next){
      if(curNode.next.value === value){
        curNode.next = curNode.next.next;
      }
      else{
        curNode = curNode.next;
      }
    }
    
    if(this.tail.value === value){
      this.tail = curNode;
    }
  }
  
  find(value){
    if(!this.head){
      return;
    }
    let curNode = this.head;
    
    while(curNode){
      if(curNode.value === value){
        return curNode;
      }
      curNode = curNode.next;
    }
    
    return null;
  }
  
  toArray(){
    const element = [];
    let curNode = this.head;
    while(curNode){
      element.push(curNode);
      curNode = curNode.next;
    }
    
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append('Hi');
LinkedList1.append('Max');
LinkedList1.append('Max');
LinkedList1.append(true);
LinkedList1.append(18.51);

LinkedList1.prepend('First Value');

console.log(LinkedList1.toArray());

LinkedList1.delete('Max');
LinkedList1.delete('First Value');
LinkedList1.delete(18.51);

console.log(LinkedList1.toArray());

console.log(LinkedList1.find('Max'));
console.log(LinkedList1.find('Hi'));`.trim();

const insertAfter = `
class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }
  
  append(value){
    const newNode = {value: value, next: null};
    
    if(this.tail){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head){
      this.head = newNode;
    }
  }
  
  prepend(value){
    const newNode = { value: value, next: this.head};
    
    this.head = newNode;
    if(!this.tail){
      this.tail = newNode;
    }
  }
  
  delete(value){
    if(!this.head){
      return;
    }
    
    while(this.head && this.head.value === value){
      this.head = this.head.next;
    }
    
    let curNode = this.head;
    while(curNode.next){
      if(curNode.next.value === value){
        curNode.next = curNode.next.next;
      }
      else{
        curNode = curNode.next;
      }
    }
    
    if(this.tail.value === value){
      this.tail = curNode;
    }
  }
  
  find(value){
    if(!this.head){
      return;
    }
    let curNode = this.head;
    
    while(curNode){
      if(curNode.value === value){
        return curNode;
      }
      curNode = curNode.next;
    }
    
    return null;
  }
  
  insertAfter(value, afterValue){
    const existingNode = this.find(afterValue);
    
    if(existingNode){
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }
  
  toArray(){
    const element = [];
    let curNode = this.head;
    while(curNode){
      element.push(curNode);
      curNode = curNode.next;
    }
    
    return element;
  }
}

const LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append('Hi');
LinkedList1.append('Max');
LinkedList1.append('Max');
LinkedList1.append(true);
LinkedList1.append(18.51);

LinkedList1.prepend('First Value');

console.log(LinkedList1.toArray());

LinkedList1.delete('Max');
LinkedList1.delete('First Value');
LinkedList1.delete(18.51);

console.log(LinkedList1.toArray());

console.log(LinkedList1.find('Max'));
console.log(LinkedList1.find('Hi'));

LinkedList1.insertAfter('new value 1', 1);
LinkedList1.insertAfter('new value 2', 'Hi');

console.log(LinkedList1.toArray());`.trim();



class LinkedList extends Component {
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
              <h3>Linked List</h3>
              <ol>
                <li>
                  Like arrays, Linked Lists store data elements in sequential order. Instead of keeping
                  indexes, linked lists hold pointers to other elements. The first node is called the
                  head while the last node is called the tail.
                </li>
                <br />

                <li>
                  Linked lists have constant-time insertions and deletions because we can just change the
                  pointers. To do the same operations in arrays requires linear time because subsequent
                  items need to be shifted over.
                </li>
                <br />

                <li>
                  Like arrays, linked lists can operate as stacks. It’s as simple as having the head be the
                  only place for insertion and removal.
                  <br />

                  Linked lists can also operate as queues with the help of doubly-linked list, where insertion occurs at the tail and removal
                  occurs at the head.
                </li>
                <br />

                <li>
                  Linked lists are useful on both the client and server.</li>
                <ul>
                  <li>On the client, state management libraries like Redux structure its middleware logic in a linked-list fashion. When
                    actions are dispatched, they are piped from one middleware to the next until all is visited before reaching the reducers.</li>
                  <li>On the server, web frameworks like Express also structure its middleware logic in a similar fashion. When a request is received,
                    it is piped from one middleware to the next until a response is issued.</li>
                </ul>
                <br />

                <li>Links in a linked list do not have indexes.</li>
                <li>A linked list grows and shrinks as it is edited. Do not need to predetermine it's size.</li>
              </ol>
              <br />

              <b>Functions -</b> add, remove, indexOf, elementAt, addAt, removeAt, view.
              <br />
              <h3>Append</h3>
              <div style={titles}>
                <PrismCode
                  code={appending}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>Prepend</h3>
              <div style={titles}>
                <PrismCode
                  code={prepend}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>Delete</h3>
              <div style={titles}>
                <PrismCode
                  code={deleting}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>Find</h3>
              <div style={titles}>
                <PrismCode
                  code={finding}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <h3>Insert After</h3>
              <div style={titles}>
                <PrismCode
                  code={insertAfter}
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

export default (withStyles(styles)(LinkedList));
