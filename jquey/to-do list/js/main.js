const list = $("#list")

function add() {
	const inputValue = $("#action").val()
	//list.append(inputValue)
	list.append('<li>' + inputValue + '</li>')

  $("#action").val("")
}