/*
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var b = [2, 4, 6, 8]

for (var i = 0; i < a.length; i++) {
	for (var z = 0; z < b.length; z++) {
		// console.log(a[i], b[z]);
	  if (a[i] == b[z]) {
      console.log(a[i], "Está repetido");
	  } // else {
	  	// console.log(a[i], b[z], "No son iguales");
	  // }
	}
} ---------- */

/* var palabra = "juani"
var reverse = ""

for (var i = palabra.length; i > 0; i--) {
  console.log(palabra[i - 1]);
  reverse = reverse + palabra[i]
}

console.log(reverse);

----------------- */
// imprimir loa 2 números más grandes dentro del arra-y
var arr = [2, 4, 1, 8, 16, 3, 23]
var masgrande = 0
var grande = 0

for (var i = 0; i < arr.length; i++) {
	if (masgrande < arr[i]) {
		grande = masgrande
		masgrande = arr[i]
	} else {
		// grande = math.max(grande, arr[i])
		if (grande < arr[i]) {
			grande = arr[i]
		}
	}
}

console.log(masgrande, grande);