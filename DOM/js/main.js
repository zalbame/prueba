//Crear un archivo vacío de HTML
// document.querySelector("body");
//Crear un h1 con "Esto es dinámico"
//Crear un p con "Este documento"
//  Se crea utilizando ECMAScrip
//Insertar el elemento título y párrafo dentro del body

//var body = document.querySelector ("body");
//var parrafo = document.createElement("p");
//parrafo.textContent = "Este documento se crea utilizando ECMAscript";
//var titulo = document.createElement("h1");
//titulo.innerHTML = "Esto es dinámico";
//body.appendChild(titulo);
//body.appendChild(parrafo);

/* //ejemplo para explicar, poner antes que los ejercicios
var cajaDiv = document.getElementById("principalCaja");

cajaDiv.setAttribute('class','naranja');
//(nombreAtributo,valor);

var section = document.getElementById('principal');
var parrafo = document.createElement('p');
parrafo.textContent = "Esto es un parrafo";
var titulo = document.createElement('h6');
titulo.innerHTML = "<h6>ESto es un encabezado</h6>"
section.appendChild(parrafo);
section.appendChild(titulo);

*/

//Seleccionar el elemento body
//Crear un array 10 nombres
//Crear un elemento ul
//Recorrer el array nombres  y por cada uno crear un elemento li y
//asiganr el texto correspondiente
//Ir insertando cada elemento li dentro de la lista ul
//Insertar el elemento dentro del body
/*
var nombres = ["Agustina", "Ana", "Gabriela", "Eugenia", "Camila", "Ayelen", "Belén", "Antonia", "Melisa", "Juana"];
var body = document.querySelector("body");
  var ul = document.createElement("ul");

  for (var i = 0; i < nombres.length; i++) {
	  var li = document.createElement("li");
	    li.textContent = nombres[i];
	    ul.appendChild(li);
  }
    body.appendChild(ul);
    console.log(ul); // no es necesario que vaya
*/


//12/04/18

//function saludo() {
//  console.log("Hola Juani")
//}

//var a = document.getElementById("bicho")
//  console.log(a)
//  console.log(a.value)

//Crear un input & button(que diga proba).Si en el imput le escribimos
// 23 tiene que decir "Juani", de lo contrario "No Juani"

//var a = document.getElementById("write")

//function proba() {
//	if (a.value == 23) {
//    console.log("Juani")
//	} else {
//		console.log("No Juani")
//	}
//}

//function limpiar() {
//  a.value ="" 
//}

//calculadora

var firstNumber = ""
var secondNumber = ""
var lastOp = ""

function getNumber(number) {
  if (lastOp == "") {
    firstNumber = firstNumber + number
    console.log(firstNumber)
  } else {
    secondNumber = secondNumber + number
    console.log(secondNumber)
  }
}


function result() {
  var resultado = document.getElementById('result')
  calculate()
  resultado.value = firstNumber
}

function calculate() {
  switch (lastOp) {
    case "sum":
      firstNumber = parseInt(firstNumber) + parseInt(secondNumber)
      console.log(firstNumber)
      lastOp = ""
      secondNumber = ""
      break;
    case "resta"
      firstNumber = parseInt(firstNumber) - parseInt(secondNumber)
      console.log(firstNumber)
      lastOp = ""
      secondNumber = ""
    default:

  }
}

function sum() {
  if (lastOp == "") {
    lastOp = "sum"
  } else {
    calculate()
  }
}

function substraction() {
  if (lastOp == "") {
  	lastOp = "resta"
  } else {
  	calculate()
  	lastOp = "resta"
  }
}

function div() {

}

function mul() {

}

