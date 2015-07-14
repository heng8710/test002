var http = require('http')
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('hellllllllllooooooooooooooooooo')
}).listen(3141);
console.log('server started.')
