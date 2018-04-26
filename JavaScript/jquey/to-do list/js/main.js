const list = $("#list")

function add() {
	const inputValue = $("#action").val()
	//list.append(inputValue)
	//list.append('<li>' + inputValue + '</li>')
  const listItem = "<li>" + inputValue  + "</li><button>Borrar</button>"

  list.append(listItem)
  $("#action").val("")
}

$(document).on("click", "ul button", function() {
  console.log(123)
	const index = $("ul button").index(this)

	console.log(index)
	$("ul li")[index].remove()
	$("ul button")[index].remove()
});

$("#action").on("keypress", function(e) {
  if (e.keyCode == 13) {
    add()

	}
});

