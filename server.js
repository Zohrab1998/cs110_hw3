const http = require ('http');

const server = http.createServer(function(req, res) {

    if(req.url === '/hi') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('hello world\n');
    }

    if(req.url === '/wow') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Cs110\n');
    }

    if(req.url === '/name') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('AUA\n');
    }

    if(req.url === '/doo') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('moo\n');
    }

    if(req.url === '/code') {

        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('js\n');
    }


    else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('WRONG!')
    }

});

server.listen(3001);