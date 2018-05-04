
//resuelto Juani
const list = $('ul')
let tareasTotales = 0
let tareasResueltas = 0

$('#textito').on('keypress' , function(e) {
  if (e.keyCode == 13) {
    tareasTotales = $('ul li').length + 1
    const currentValue = '<li>' + $('#textito').val() + '</li><input class="modificar-inp ocultar" type="text" /><button class="boton-modificar">Modificar</button>'
    list.append(currentValue)
    $('#y').html(tareasTotales)
    $('#textito').val('')
  }
})

$(document).on("keypress", '.modificar-inp', function(e) {
  if (e.keyCode == 13) {
    const pepe = $('ul input').index(this)
    const valorActual = $('ul input').eq(pepe).val()
    console.log(valorActual)
    $('ul li').eq(pepe).html(valorActual)
    $('ul li').eq(pepe).removeClass('ocultar')
    $('ul button').eq(pepe).removeClass('ocultar')
    $('ul input').eq(pepe).addClass('ocultar')
  }
})

$(document).on('click', '.boton-modificar', function() {
  const pepe = $('ul button').index(this)
  const valorActual = $('ul li').eq(pepe).html()
  console.log(valorActual)
  $('ul li').eq(pepe).addClass('ocultar')
  $('ul button').eq(pepe).addClass('ocultar')
  $('ul input').eq(pepe).removeClass('ocultar')
  $('ul input').eq(pepe).val(valorActual)
})

$(document).on('click', 'ul li', function(e) {
  const index = $('ul li').index(this)

  if ($('ul li').eq(index).hasClass('tachado')) {
    $('ul li').eq(index).removeClass('tachado')
    tareasResueltas--
    $('#x').html(tareasResueltas)
  } else {
    $('ul li').eq(index).addClass('tachado')
    tareasResueltas++
    $('#x').html(tareasResueltas)
  }

  console.log(this)
})

//