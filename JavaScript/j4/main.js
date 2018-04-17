/*
// que la base se multiplque la cantidad veces que indica el exponente
function potencia(base, exponente)  {
  var resultado = 1  
  for (var i = 0; i < exponente; i++) {
  	resultado = resultado * base
  }
  return resultado
}

potencia(2, 3)
*/

// scope de variables
//var c = "chau"
//function a() {
//	var b = "hola"
//	console.log(c);
//}
//a()
//console.log(c);
//console.log(b);


//Crear una función que identifique las tildes en las palabras

function tieneTilde(palabra) {
	var vocales = ["á", "é", "í", "ó", "ú"]
  var tilde = false

	for (var i = 0; i < palabra.lenght; i++) {
	  for (var z = 0; z < vocales.lenght; z++) {
	    if (palabra[i] = vocales[z]) {
	  	  tilde = true
	    }  
	  }  
	}
  
  if (tilde == true) {
  	console.log("Tiene tilde")
  } else {
  	console.log("No tiene tilde")
  }
}

tieneTilde("cacá")


//Crear una función para validar passwords con +6 carácteres 
//por lo menos 1 número & 1 letra


//Si la suma de 2 elementos de un array ordenado
// es igual a 8 tiene que decir "si" si no se cumple "no"