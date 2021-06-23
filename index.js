const httpServer= require(‘http’);

const hostname = ‘localhost’;

const port = 8084;

const server = httpServer.createServer((req, res) => {

 res.statusCode = 200;

 res.end(‘<html><body><h1>Hello World to , Nodejs Lovers !!</h1></body></html>’);
})

server.listen(port, hostname);

console.log("Nodejs Tutorials - http://localhost:%d", port);
