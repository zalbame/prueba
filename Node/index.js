const http = require('http')
http.createServer(function(req, res) {
  const endpoint = req.url

  res.writeHead(200, {"Content-Type": "application/json"});
  let pepe
  if (endpoint == '/juani') {
    pepe = {
      nombre: 'Juani',
      edad: 23
    }
  } else if (endpoint == '/productos'){
    pepe = [{
      id: 1,
      name: 'A'
    },
    {
      id: 2,
      name: 'B'
    }]
  } else {
    pepe = {
      err: 'Hubo un error'
    }
  }

  pepe = JSON.stringify(pepe)
  res.end(pepe)
}).listen(8080)