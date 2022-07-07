const http = require('http');

const server = http.createServer((req,res) => {

    res.writeHead(200, {'Content-type':'text/http'});
    // res.write('<h1>Welcome to Node.js</h1>');
    res.end("<h1>Welcome to Node.js</h1>");

})
server.listen(3000, ()=>{
    console.log("http://localhost:3000");
})