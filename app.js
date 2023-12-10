const http = require("http");

const server = http.createServer((req, res) => {
  res.write("welcome to our homepage");
  res.end();
});

server.listen(5000);
