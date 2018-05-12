let titulo = ''
let precio = 0
let imagen = ''
let productos = []


$('.product').on('click', function (){
  const producto = {
  	titulo: $(this).children('.title'),
    precio: $(this).children('.price'),
    imagen: $(this).children('.img'),
  };
  productos.push(producto)
  console.log(productos)
  localStorage.setItem('prod', JSON.stringify(productos))
})
