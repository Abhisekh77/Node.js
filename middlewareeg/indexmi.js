/*

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to users page");
});

app.listen(5000);

*/

//http://localhost:5000/
//http://localhost:5000/users

//now using a middleware
/*
const express = require(express);
const app = express();

const reqFilter = (req, res, next) => {
    // yetikai load hudaina next lai call garauna parxa
    //see next example
  console.log("reqFilter");
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.listen(5000);
*/

//solution
/*
const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  console.log("reqFilter");
  next();
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/users", (req, res) => {
  res.send("Welcome to User Page");
});
app.listen(5000); 

*/

//In case of checking for age
const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else {
    next();
  } //http://localhost:5000/?age=20
  //http://localhost:5000
};
app.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/users", (req, res) => {
  res.send("Welcome to User Page");
});

app.listen(5000);
