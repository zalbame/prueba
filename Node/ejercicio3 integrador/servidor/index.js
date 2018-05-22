const http = require('http');

http.createServer(function(req, res) {
	const endpoint = req.url

	//res.writeHead(200,{'Content-Type':'application/json'});
	res.write('Hola mundo'); 
	res.end();
}).listen(2020);