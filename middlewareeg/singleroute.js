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

app.get("/users", reqFilter, (req, res) => {
  res.send("Welcome to Users Page");
});

app.get("/about", reqFilter, (req, res) => {
  res.send("Welcome to About Page");
});
app.listen(5000);
