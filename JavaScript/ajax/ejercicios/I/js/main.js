$.ajax({
  url: "https://api.github.com/users/zalbame",
}).done(function( data ){
  $('#name').html(data.name)
  $("#avatar").attr('src',data.avatar_url )

  $('#bio').html(data.bio)
  $("#following").html(data.following)
  $("#followers").html(data.followers)
  $("#repos").html(data.repos_url)
  
  $("#repos").html("<a href='" + data.html_url + 
  	"?tab=repositories'>Repos</a")
})

