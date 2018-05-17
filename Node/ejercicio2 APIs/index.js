const http = require('http')
const user = require('./controllers/userController.js')
const product = require('./controllers/productController.js')

http.createServer(function(req, res) {
  const endpoint = req.url

  res.writeHead(200, {"Content-Type": "application/json"});
  let pepe
  if (endpoint == '/juani') {
    pepe = user()
  } else if (endpoint == '/productos'){
    pepe = product()
  } else {
    pepe = {
      err: 'Hubo un error'
    }
  }

  pepe = JSON.stringify(pepe)
  res.end(pepe)
}).listen(8080)

