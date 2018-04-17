/*
var nombre = "juan"

switch(nombre) {
	case "pedro":
	  console.log("soy pedro");
	  break;
	case "juan":
	  console.log("soy juan");
	  break;
  default:
    console.log("no sé quién soy");
} -------------- */
/*
var dia = 6;

switch (dia) {
	case 0:
	  console.log("Domingo");
	  break;
	case 1:
	  console.log("Lunes");
	  break;
  case 2:
	  console.log("Martes");
	  break;
	case 3:
	  console.log("Miércoles");
	  break;
	case 4:
	  console.log("Jueves");
	  break;
	case 5:
	  console.log("Viernes");
	  break;
	case 6:
	  console.log("Sábado");
	  break;  
	default:
	  console.log("Hubo un error");            
} ----------------- */
/*
var i = 0;

while (i <10) {
	console.log(i);

	i++
} ---------- */

/*
var i = 100;

while (i >= 0) {
  if (i < 23) {
   break;
  }
  console.log(i);
i--
} ------ */

var numero = 3;
for (var numero = 0; numero <= 100; numero++) { 
	if ((numero % 1 == numero) && (numero % numero == 1)) {
		console.log("Primo");
	} else {
		console.log("No primo");
	}
 }

/*

var monto = 43;
 if	((monto == 2) || (monto == 3) || (monto == 5)) {
 	console.log("primo", monto);
 }	else ...
*/ 

/*
var numero = 4513;
var esPrimo = "Es primo";

for (var i = 2; i < numero; i++) {
	if(numero % 1 === 0) {
	esPrimo = "No es primo";
	  break;
	}
}  
console.log("Es primo")
*/