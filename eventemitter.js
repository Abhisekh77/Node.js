// const express = require("express");
// const EventEmitter = require("events");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("api called");
// });

// app.get("/search", (req, res) => {
//   res.send("search api called");
// });

// app.get("/update", (req, res) => {
//   res.send("update api called");
// });

// app.listen(5000);

const express = require("express");
const EventEmitter = require("events");
const app = express();
const event = new EventEmitter();

//for event handling
let count = 0;
event.on("countAPI", () => {
  count++;
  console.log("event Called", count);
});

app.get("/", (req, res) => {
  res.send("api called");
  event.emit("countAPI"); //event lai generate garxa
});

app.get("/search", (req, res) => {
  res.send("search api called");
  event.emit("countAPI");
});

app.get("/update", (req, res) => {
  res.send("update api called");
  event.emit("countAPI");
});

app.listen(5000);
