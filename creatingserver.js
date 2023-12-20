const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Hello this is abhisekh</h1>");
    res.end();
  })
  .listen(4500);
