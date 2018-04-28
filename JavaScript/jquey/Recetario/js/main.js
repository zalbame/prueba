let recetas = []

function buscar(){
	for (var i = 0; i <=recetas.length-1; i++) {
		if ($('#loQueBusque').val() == recetas[i].nombre){
			$('.contenido').hide()
			let nombre = recetas[i].nombre
			let ponerNombre = '<h1>'+ nombre + '</h1>'
			let precio = recetas[i].precio
			let ponerPrecio = '<h2>'+ precio + '</h2>'
			let ingredientes = recetas[i].ingredientes
			let ponerIngredientes = '<p>'+ ingredientes + '</p>'
			$('.mostrarRecetas').append(ponerNombre)
			$('.mostrarRecetas').append(ponerPrecio)
			$('.mostrarRecetas').append(ponerIngredientes)
		} else { 
			$('.contenido').hide()
			let noExiste = '<h1>'+ 'Esa receta no existe' + '</h1>'
			$('.mostrarRecetas').append(noExiste)
			
		}
	}
}

function otroIngrediente(){
	let ingredienteNuevo = '<input class="ingredientes" type="text" name="">'
	$('.listaDeIngredientes').append(ingredienteNuevo)
}

function guardar(){
	let todosLosIngredientes = []
	for (var i =0 ; i<= $('.ingredientes').length-1; i++) {
		let ing = $('.ingredientes').eq(i).val()
		todosLosIngredientes.push(ing)
	}
	recetas.push({
	nombre:$('.nombre').val(),
	precio:$('.precio').val(),
  ingredientes:todosLosIngredientes 
	})
	$('input').val('')
}

function limpiar(){
	$('input').val('')
}