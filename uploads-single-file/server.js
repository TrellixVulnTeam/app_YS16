const express = require("express");
var path = require("path");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "uploads")));

var URIstring = "mongodb://localhost:27017/recordStore";

app.use("/galleries", require("./routes/gallery"));

mongoose.connect(URIstring, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("./uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, () => {
  console.log("Server listening in port:" + PORT);
});
