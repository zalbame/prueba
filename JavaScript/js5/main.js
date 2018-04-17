// En un club tienen derecho a admision los que miden hasta 40cm
// Con una edad de 18 a 20 años
// Tiene que tener mas 3 piernas o mas de 4 brazos
/*
var personas = [{
	nombre: "Carla",
	edad: 17,
	altura: 30,
	brazos: 5,
	piernas: 2,
	plata: 200,
	pagarCoima: function(){
		// console.log(this.plata)
	    if (this.plata >= 200) {
	    	this.plata = this.plata - 200;
	    	console.log(this.plata); 
	    }	
	} 
}, 
{
	nombre:"Juani",
	edad: 19,
	altura: 39,
	brazos: 4,
	piernas: 3,
	plata: 100,
	pagarCoima: function(){
   // console.log(this.plata)
    var pagaCoima = false;
	    if (this.plata >= 200) {
	    	this.plata = this.plata - 200;
	    	console.log(this.plata); 
	    }	
	}
},
{
	nombre:"Marta",
	edad: 21,
	altura: 39,
	brazos: 4,
	piernas: 3,
	plata: 500,
	pagarCoima: function() {
   // console.log(this.plata)
	  var pagaCoima = false;
	    if (this.plata >= 200) {
	    	this.plata = this.plata - 200;
	    	console.log(this.plata);
	    	pagaCoima = true; 
	    }	
	return pagaCoima    
	}
}]

//personas[0].pagarCoima();
console.log(personas[2].pagarCoima());


for (var i = 0; i < personas.length; i++) {
  if (personas[i].altura < 40 && (personas[i].brazos >= 4 || personas[i].piernas >= 3)) {
      if (personas[i].nombre == "Carla" && personas[i].edad == 17) {
        personas[i].edad = 18
      }
      
      if (personas[i].edad >= 18 && personas[i].edad <= 20) {
        console.log(personas[i].nombre + ' fue admitido al club')            
      }
  }
}
*/

//Crear un enemigo que tiene nombre, vida & ataque
//Crear 5 enemigos
//PJ es nuestro personaje, tiene nobre, vida & ataque
//Cuando alguien llega a vida 0 pierde, si PJ pierde sigue el juego 
//Tiene que decir hasta que ronda llegamos

function Char(nombre, vida, ataque, experiencia) {
	this.name = nombre
	this.life = vida
	this.attack = ataque
	this.experience = experiencia
}

var enemigo1 = new Char("a", 100, 25)
var enemigo2 = new Char("b", 100, 10)
var enemigo3 = new Char("c", 100, 15)
var enemigo4 = new Char("d", 100, 5)
var enemigo5 = new Char("e", 100, 27)

var personaje = new Char("pj", 100, 20)
var enemigos = [enemigo1, enemigo2, enemigo3, enemigo4, enemigo5]
var turno = 0

for (var i = 0; i < enemigos.length; i++) {
	while (personaje.life > 0 && enemigos[i].life > 0) {
		if (tueno == 0) {
			
		}
	}
}
