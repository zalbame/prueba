console.log('Hola')

$.ajax({
	//url: "https://jsonplaceholder.typicode.com/posts/1",
  url: "https://jsonplaceholder.typicode.com/posts"
}).done(function( msg ) {
   for (var i = 0; i < msg.length; i++) {
   	//console.log(msg[i])
   	const container = '<div id="" class="container">' +
   	                    '<p>' + msg[i].title + '</p>' +
   	                    '<p>' + msg[i].body + '</p>' +
   	                  '</div>'
    $('.main-container').append(container)
   };
});

console.log('Chau')


