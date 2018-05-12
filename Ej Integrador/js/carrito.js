let productos = localStorage.getItem('prod')
console.log(productos)

productos = JSON.parse(productos)
console.log(productos)

$('.selected-productos').append(productos)