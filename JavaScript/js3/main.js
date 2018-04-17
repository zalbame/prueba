/*
var a = [1, 2, 4, 8, 10, 15, 20, 23, 76, 102]
var numberToFind = 15

for (var i = 0; i < a.length; i++) {
	console.log(i);
	if(numberToFind == a[i]) {
		console.log("Wiii!");
		break;
	}
} -----*/

/*function hola(nombre) {
	console.log("Hello World " + nombre);
}

hola("Roberto")
*/ 

/*
//calculadora
function suma(a, b) {
	//console.log(numero + numero1);
	if ((a >= 0 || a < 0) && (b >= 0 || b < 0)) {
		console.log(a + b);
	} else {
		console.log("Hubo un error");
	}
}

function resta(numero, numero1) { 
  console.log(numero - numero1);
}

function multiplicacion(numero, numero1) {
	console.log(numero * numero1);
}

function division(numero, numero1) {
	console.log(numero / numero1);
}

suma("a", "b")
*/
/*
function suma(a, b) {
	var ret 
	if ((a >= 0 || a < 0) && (b >= 0 || b < 0)) {
		ret = a + b
	} else {
		ret = "Hubo un error"
	}
	return ret
}

var sum = suma(2, 3)

console.log(sum)

*/

/*
function ordenar(arr) { 
  for (var i = 0; i < arr.length; i++) {
  	for (var z = 0; z < arr.length - i - 1; z++) {
  		if (arr[z] > arr[z + 1]) {
  			var temp = arr[z]
  			arr[z] = arr[z + 1]
  			arr[z + 1] = temp
  		}
  	}
  }

	return arr
}

var arr = [1, 4, 3, 23, 80]

console.log(ordenar(arr))
*/
//función Binary Search
var array = [0, 2, 10, 12, 20, 50]

binarySearch(50, array)

function binarySearch(numberToFind, arrOfNumbers) {
	var mid = Math.floor((arrOfNumbers.length / 2));
	var min = arrOfNumbers[0];
	var max = arrOfNumbers[arrOfNumbers.length - 1];

	if (numberToFind < arrOfNumbers[mid]) {
		arrOfNumbers = arrOfNumbers.splice(0, mid);
		binarySearch(numberToFind, arrOfNumbers);
	} else if (numberToFind > arrOfNumbers[mid]) {
		arrOfNumbers = arrOfNumbers.splice(mid, max);
		binarySearch(numberToFind, arrOfNumbers);
	} else {
		console.log("Número encontrado!");
		return
	}
}