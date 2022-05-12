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


const todoList = `
//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const app = express();

mongoose.connect("mongodb://localhost:27017/todoListDB", { useNewUrlParser: true });

// 1. Schema
const itemsSchema = new mongoose.Schema({
  name: String
});

// 2. Model
const Item = mongoose.model("Item", itemsSchema);

// 3. Documents
const todoItemOne = new Item({
  name: "Welcome to your todolist!"
});

const todoItemTwo = new Item({
  name: "Hit the + button to add a new item."
});

const todoItemThree = new Item({
  name: "<-- Hit this to delete an item."
});

const defaultItems = [todoItemOne, todoItemTwo, todoItemThree]

// 1. Schema
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

// 2. Model
const List = mongoose.model("List", listSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

  Item.find({}, function (err, foundItems) {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved the documents");
        }
      });

      res.redirect("/");
    }

    res.render("list", {
      listTitle: "Today",
      listItems: foundItems
    });
  });
});

app.get("/:customListName", function (req, res) {
  const customListName = _.startCase(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (!err) {
      if (!foundList) {
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();

        res.redirect("/" + customListName);
      } else {
        // Show an existing list

        res.render("list", {
          listTitle: foundList.name,
          listItems: foundList.items
        });
      }
    }
  });
});

app.post("/", function (req, res) {

  const listName = req.body.listSubmit;
  const itemName = req.body.newTodo;

  const newItem = new Item({
    name: itemName
  });

  if (listName === "Today") {
    newItem.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      if (!err) {
        if (foundList) {
          foundList.items.push(newItem);
          foundList.save();

          res.redirect("/" + listName);
        }
      }
    });
  }

});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  // Home Route
  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function (err) {
      if (err) {
        console.log("Error deleting item");
      } else {
        console.log("Successfully deleted the item");
      }
    });

    res.redirect("/");
  } else {
    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkedItemId } } }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }

});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);




//date.js
exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: 'long'
  };

  return today.toLocaleDateString("en-US", options);
}



//index.html
<body>
    <h1>It's the weekend!</h1>
  </body>
`.trim();

const todoListEjs = `
//views/header.ejs
<head>
  <meta charset="utf-8">
  <title>To Do List</title>
  <link rel="stylesheet" href="css/styles.css">
</head>


//views/footer.ejs
<footer>
  Anand Batjargal 2019
</footer>


//views/list.ejs

<%- include("header") -%>

<body>

  <div class="box" id="heading">
    <h1>
      <%= listTitle %>
    </h1>
  </div>

  <div class="box">
    <% for(var i = 0; i < listItems.length; i++){ %>
    <div class="item">
      <input type="checkbox">
      <p>
        <%= listItems[i] %>
      </p>
    </div>
    <% } %>

    <form class="item" action="/" method="post">
      <input type="text" name="newTodo" placeholder="New Item" autocomplete="off">
      <button type="submit" name="listSubmit" value=<%= listTitle %>>+</button>
    </form>
  </div>

</body>

<%- include("footer") -%>
`.trim();

const blogWebsite = `
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const kebabCase = require('lodash/kebabCase');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser:true} );

const homeStartingContent = "Home Starting Content.";
const aboutContent = "About Content.";
const contactContent = "Contact Content";

const app = express();

const postSchema = new mongoose.Schema({
  title: String,
  body: String
});

const Post = mongoose.model("Post", postSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  Post.find(function(err, posts){
    if(err){
      console.log(err);
    }else{
      res.render("home", {
        homeStartingContent: homeStartingContent,
        posts: posts
      });
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    aboutContent: aboutContent
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    contactContent: contactContent
  });
});

app.get("/compose", function(req, res) {
  res.render("compose");
});

app.get("/posts/:postId", function(req, res) {
  const postId = req.params.postId;

  Post.findById(postId, function(err, post){
    if(err){
      console.log(err);
    }else{
      res.render("post", {
        postTitle : post.title,
        postBody : post.body
      });
    }
  });
});

app.post("/", function(req, res) {
  console.log(req.body.journalEntry);
});

app.post("/compose", function(req, res) {
  const post = new Post({
    title: req.body.postTitle,
    body: req.body.postBody
  });

  post.save(function(err){
    if(!err){
      res.redirect("/");
    }
  });
});


app.listen(3000, function() {console.log("Server started on port 3000")});
`.trim();

const viewEjs = `
//views/about.ejs
<%- include("partials/header") -%>

<h1>About</h1>
<p><%= aboutContent %></p>
<%- include("partials/footer") -%>


//views/compose.ejs
<%- include("partials/header") -%>

<h1>Compose</h1>

<form class="form-group" action="/compose" method="post">
  <div class="form-group">
    <label>Title</label>
    <input class="form-control" type="text" name="postTitle">
    <label>Post</label>
    <textarea class="form-control" name="postBody" rows="5" cols="30"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Publish</button>
</form>
<%- include("partials/footer") -%>


//views/contact.ejs
<%- include("partials/header") -%>

<h1>Contact</h1>

<p> <%= contactContent %></p>
<%- include("partials/footer") -%>


//views/home.ejs
<%- include("partials/header") -%>
<h1>Home</h1>

<p><%= homeStartingContent %></p>

<% posts.forEach(function(post){ %>
<h1><%= post.title %></h1>
<p>
  <%= post.body.substring(0, 100) + "..." %>
  <a href="<%= "/posts/" + post.title %>">Read More</a>
</p>
<% });%>
<%- include("partials/footer") -%>


//views/post.ejs
<%- include("partials/header") -%>

<h1><%=postTitle%></h1>
<p><%=postBody%></p>

<%- include("partials/footer") -%>
`.trim();

const partials = `
//views/partials/header.ejs
<head>
  <meta charset="utf-8">
  <title>Daily Journal</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/styles.css">
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <p class="navbar-brand">DAILY JOURNAL</p>
      </div>
        <ul class="nav navbar-nav navbar-right">
          <!-- 6 -->
          <li id="home"><a href="/">HOME</a></li>
          <li id="about"><a href="/about">ABOUT</a></li>
          <li id="contact"><a href="/contact">CONTACT</a></li>
        </ul>
    </div>
  </nav>

  <body>
    <div class="container">

    
//views/partials/footer.ejs
</div>
<div class="footer-padding"></div>
  <div class="footer">
    <p>Anand Batjargal 2019</p>
  </div>
</div>
</body>
`.trim();


const fruitsProject = `
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "What's the name of the fruit?"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

// First Parm: String, singular, name of collection,
// in MongoDB it will be saved all lower case
// Second Parm: Scheme
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit."
});

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

//personJohn.save();

const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "Weird texture."
});

const person = new Person({
  name: "Kevin",
  age: 25,
  favoriteFruit: banana
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Tastes great."
});

// person.save();
Person.updateOne({ name: "John" }, { favoriteFruit: orange }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Success");
  }
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 4,
  review: "Too sweet for me."
});

Fruit.insertMany([banana, kiwi, orange], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits");
  }
});

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});
`.trim();


class Ejs extends Component {
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
              <h3>1. ToDo List</h3>
              <div style={titles}>
                <PrismCode
                  code={todoList}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />
              <b>ejs</b>
              <div style={titles}>
                <PrismCode
                  code={todoListEjs}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>2. Blog-website</h3>
              <div style={titles}>
                <PrismCode
                  code={blogWebsite}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>views/</b>
              <div style={titles}>
                <PrismCode
                  code={viewEjs}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />
              <br />

              <b>views/partials</b>
              <div style={titles}>
                <PrismCode
                  code={partials}
                  language="js"
                  plugins={["line-numbers"]}
                />
              </div>
              <br />

              <h3>3. Fruits</h3>
              <div style={titles}>
                <PrismCode
                  code={fruitsProject}
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

export default (withStyles(styles)(Ejs));
