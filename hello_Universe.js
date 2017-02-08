var http = require('http');

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h1>');
    res.write('Hey hey!\n');
    res.write('</h1>');
    res.end('Hello from my server');
}).listen(8088);

console.log('Server is running and listening on port 8088');