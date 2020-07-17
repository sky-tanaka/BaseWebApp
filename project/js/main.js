// $(document).ready(function(){
//   getWeather();
// })

function getWeather(searchQuery) {
  var url ="https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&appid=395fd614c8f087ab244c1102bef0dc59"


  $(".city").text("");
  $(".temp").text("");
  $(".error-message").text("");
  
  $.ajax(url,{success: function(data){
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }, error: function(error){
    $(".error-message").text("An error occured");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}