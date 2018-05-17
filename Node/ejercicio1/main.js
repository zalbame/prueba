//console.log('holamundo')

//for (var i = 0; i <= 10; i++) {
//	console.log(i);
//}

//const nombre = 'greta'
//const edad = 23

//if (edad >= 18) {
//	console.log('soy ' + nombre + ' tengo ' + edad 
//		+' mayor de edad')
//} else{
//	console.log('tengo ' + edad + ' soy menor de edad')
//}


//console.log(Soy juani, tengo 23 años y soy mayor de edad)

//  const http = require('http')
//  //console.log(http)
//  http.createServer(function(req, res) {
//	  const endpoint = req.url
  
//    console.log(endpoint)
  
//    if (endpoint == '/holajuani') {
//  	  res.write('hola juani')
//    } else {
//  	  res.write('hola mundo')
//    }
//	  //res.write('hola mundo')
//	  res.end()
//  }).listen(8080)


// ejercicio
const http = require('http')
http.createServer(function(req, res) {
	const endpoint = req.url

	console.log(endpoint)

	if (endpoint == '/juani') {
		res.write('hola juani')
	} else if (endpoint == '/doble/3') {
		res.write('6')
	} else if (endpoint == '/doble/10'){
		res.write('20')
	}
}).listen(8080) 
