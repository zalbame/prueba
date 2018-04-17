var entrada = document.getElementById('input');
var agregar = document.getElementById('agregar');
var lista = document.getElementById('list');

function newItem() {
  var li = document.createElement('li');
  if (entrada.value != '') {
    li.textContent = entrada.value;
    lista.appendChild(li);
  }
  else {
    alert('No escribiste nada')
  }
entrada.value = '';
  }


function todoList(){
    var tarea = document.getElementById('todo-input').value;
    //console.log(tarea);
    var texto = document.createTextNode(tarea);
    var tareaLi = document.createElement('li');
    tareaLi.appendChild(texto);
    document.getElementById('todo-list').appendChild(tareaLi);
    document.getElementById('todo-input').value = "";
    console.log(tarea);
}

