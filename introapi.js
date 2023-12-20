const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-Type": "applicationjson" });
    res.write(JSON.stringify({ name: "abhi khanal", email: "abhi@gmail.com" }));
    res.end();
  })
  .listen(5000);
