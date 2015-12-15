$(function() {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);  
});

function locationSuccess(position) {
       var weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
                                    '&lon='+position.coords.longitude+'&APPID=564e6427a7bad514b5ee92929da67f3d&callback=?';
   $.getJSON(weatherAPI, function(response) {
       console.log(response);
       $('#loc').html(response.city.name);
       $('#temp').html(Math.floor(response.list[0].main.temp - 273.15));
   });
}
             
function locationError(error) {
   console.warn('Error:' + error.message);
}