const http = require('http')

const server = http.createServer((req,res) => {

    res.writeHead(200, {'Content-type':'text/html'});

    if (req.url === '/get') {
        res.write('This is GET request page');
        if(req.method === 'GET'){
            res.end('GET');
        }
    }

    else if (req.url === '/post'){
        res.write('This is POST request page');
        if(req.method === 'POST'){
            res.end('POST');
        }
    }

    else if (req.url === '/put'){
        res.write('This is PUT request page');
        if(req.method === 'PUT'){
            res.end('PUT');
        }
    }

    else if (req.url === '/delete'){
        res.write('This is DELETE request page');
        if(req.method === 'DELETE'){
            res.end('DELETE');
        }
    }

    else{
        res.end('Wrong Request!');
    }

});

server.listen(3000, ()=> {
    console.log('http://localhost:3000');
});
