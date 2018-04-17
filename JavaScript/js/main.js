/*
var nombre= "Juani";
var edad= 24; 
--------------------*/
/*
console.log(nombre, edad);
nombre= "Carlos";
console.log(nombre);
--------------*/
/*
console.log(edad);
edad= edad+1;
-------------------*/
/*
console.log(edad);
-------*/
/*
var hola;
console.log(hola);*/
/*
console.log(nombre+" tiene "+edad+" años");
*/
/*
var edad= -20;
if (edad<=17) {
	console.log("Menor de edad");
}
else if (edad<0) {
	console.log("Indefinido");
}
else{
	console.log("Mayor de edad");
}
*/
/*
var semaforo= "verde"
if (semaforo=="verde") {
	console.log("verde");
	semaforo="rojo";
	if (semaforo=="rojo") {
		console.log("rojo");
		semaforo="verde";
	}
} 
-------------------------*/
/*
var humanos=["h1","h2","h3","h23"];
console.log(humanos[0]); 
-------------------*/
/*
humanos[10]="no hacer";
console.log(humanos); 
humanos.push("h24");
console.log(humanos);
---------------- */
/*
var edad= 68
if(edad>18&&edad<65){
	console.log("pasa");
}
else{
	console.log("no pasa");
}
-------------- */
/*var ruedas=4 
var longitud= 5
var conductor= "juani"
----variables usadas en los dos ejemplos de abajo */
/*
if(rueda==4&&longitud<2) {
	console.log("auto");
	if (rueda==4&&longitud>3) {
		console.log("camioneta");
		if (rueda==2&&(longitud<2||longitud>3)) {
			console.log("moto")
		}
	}
} 
else{
	console.log("no es vehículo válido")
} -intento de resolución------------*/
/*
if (ruedas==2||ruedas==4){
	if (ruedas==2) {
	console.log("moto");
  } else if ((ruedas==4&&longitud<2)||(conductor=="juani"&&longitud<2)) {
	  console.log("auto");
  } else if (ruedas==4&&longitud>3) {
	  console.log("camioneta");
  } else {
	  console.log("no es vehículo válido de 4 ruedas");
  }
} else {
	console.log("no es vehículo válido de 2 rudas");
} -----------------usa las variables de arriba */

/*
for(var i=0; i<10; i+1){
	console.log(i);
} */
/*
var arr=[1,2,3]
console.log(arr);
console.log(arr.length);
  arr.push(4);
  console.log(arr.length);
*/
/*
var humanos= ["juan","pedro","carlos"]
 for (var i = 0; i < humanos.length; i ++) {
	console.log(humanos [i] );
}
*/
/*
var izquierda= ["rojo","rojo"]
var derecha= ["verde","verde"]
 for (var i = 0; i < izquierda.length; i ++) {
	console.log(izquierda [i]);
	console.log(derecha [i]);
}
---------------- */
var randomIzq = Math.ceil(Math.random() * 100)
var randomAbajo = Math.ceil(Math.random() * 100)

var izq = []
var aba = []

for (var i = 0; i < randomIzq; i++) {
 izq.push("verde")
}

for (var i = 0; i < randomAbajo; i++) {
 aba.push("rojo")
}

var grande

console.log(izq.length)
console.log(aba.length)

if (izq.length > aba.length) {
	grande = izq
} else {
	grande = aba
}

for (var i = 0; i < grande.length; i++) {
	if (izq.length > i) {
		console.log(izq[i])
	}

	if (aba.length > i) {
		console.log(aba[i])
	}
}
