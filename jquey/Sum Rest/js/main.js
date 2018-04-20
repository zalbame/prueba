$("#suma").on("click", mas);

function mas() {
  var numeroString = $("#cero").html()
  var numero = parseInt(numeroString)
  
  numero = numero + 1
  $("#cero").html(numero)
  console.log(numero)

  if (numero > 10) {
  	//$("#texto").css("background-color", "green")
  	$(".container").addClass("verde")
  }
  if (numero >= -10) {
  	$(".pum").hide()
  }
}  

$("#resta").on("click", menos)

function menos() {
  var numeroString = $("#cero").html()
  var numero = parseInt(numeroString)

  numero = numero - 1
  $("#cero").html(numero)
  console.log(numero)

  if (numero <= -10)
  	$(".pum").show()
}
