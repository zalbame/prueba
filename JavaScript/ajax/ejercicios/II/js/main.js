$ajax({
	url: "https://api.github.com/users/J-Gallo/repos"
}).done(function (data) {
	$('#getRepos').on('click', function(){
    const getNames = data.name
    const getDescription = data.description 
    const getOwner = data.owner
	
	  $('.repositories-section').append('<div class="repositories">' 
	  	+ getNames + getOwner + getDescription + '</div>')
	  // agregar la clase al css
	}) 
})


// .html para cambiar
// .append para agregar