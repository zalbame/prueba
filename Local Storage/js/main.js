//localStorage.setItem('hola', 'chau');

//const saludo = localStorage.getItem('hola');
//console.log(saludo);

localStorage.setItem('hola', 'juani');
//console.log(saludo); 
//las variables no se actualizan solas 

let saludo = localStorage.getItem('hola');
console.log(saludo);

localStorage.setItem('hola', 'juani');
saludo = localStorage.getItem('hola');
console.log(saludo); 

localStorage.removeItem('hola');
saludo = localStorage.getItem('hola');
console.log(saludo);

//No se puede guardar un objeto en el local storage
//hay que transformarlo en un string usando JSON.stringify(..)

const humano = {
	nombre: 'juani',
	edad: 23,
}

a = JSON.stringify(humano)
localStorage.setItem('humano', a)
console.log(a);

//Es lo opuesto al stringify, para que el string vuelva a 
// ser un objeto

b = localStorage.getItem('humano');
JSON.parse(b);
console.log(b);