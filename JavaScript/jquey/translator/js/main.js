//$("div").data("nombre")
  //$("div").eq(i).data("nombre")

//console.log($("div").data("nombre"))

/*
traducir código -- español

general_error -- "soy un error"
todo_piola --  "todo good"
hola -- "chau"
lo demás -- "no es un código válido"
 hay que usar objetos, no data. a los objetos se puede acceder de 
 maneras: ___.edad o ___["edad"]*/

//concatenar objetos
/*const translate = {
	es: {
    general_error: "Soy un error",
    todo_piola: "Todo good",
    hola: "Chau",
	},
	en: {
		general_error: "I´m an error",
		todo_piola: "All good",
		hola: "Bye",
	}
}
*/
/*
const list = $("#main-container")

$("#trad").on("click", function() {
  const inputValue = $("#newImput").val()
  const newIncome = $("#newIncome")

if (translate[inputValue]) {
	newIncome.append(translate[inputValue])
} else {
	newIncome.append("No es código válido!")
}

})
*/

/*
function traducir(){
var texto = $('.palabra').val()
    if (traduccion['espanol'][texto]) {
        $('.resultado-espanol').html(traduccion['espanol'][texto])
        }else{
        $('.resultado-espanol').html('esa palabra no existe')
    }

    if (traduccion['ingles'][texto]) {
        $('.resultado-ingles').html(traduccion['ingles'][texto])
        }else{
        $('.resultado-ingles').html('esa palabra no existe')
    }
}

$('.palabra').on('keypress', function(e){
    if (e.keyCode==13) {
        traducir()
        }
})
*/
const claveToTranslate = {
	es: {
		hola: "chau",
		general_error: "soy un error",
	},
	en: {
		hola: "bye",
		general_error: "I´m an error",
	}
}

const idioma = $("#uno").data("idioma")
const clave = $("#uno").data("clave")

$("#uno").html(claveToTranslate[idioma][clave])
console.log(clave, idioma)