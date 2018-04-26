
//resuelto Juani
const list = $("ul")
let tareasTotales = 0
let tareasResueltas = 0

$("#textito").on("keypress", function() {
  if (e.keyCode == 13) {
  	tareasTotales = $("ul li").length +1
  	const currentValue = "<li>" + $("#textito").val()
  	list.append(currentValue)
  	$("#y").html(tareasTotales)
  	$("#textito").val("")
  }
})



$(document).on("click", "ul li", function() {
	const index = $("ul li").index(this)
	console.log($("ul li")[index])
	console.log($("ul li").eq(index))
  
  
})


//