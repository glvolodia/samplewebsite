 $(function() {
     navigator.geolocation.getCurrentPosition(locationSuccess, locationError);  
});

 function locationSuccess(position) {
var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+
                                            '&lon='+position.coords.longitude+'&units=metric&APPID=564e6427a7bad514b5ee92929da67f3d&callback=?';
$.getJSON(weatherAPI, function(response) {
    console.log(response);
    $('#loc').html(response.name);
    $('#temp').html(Math.floor(response.main.temp) + '&deg;C');
    });
}
    
function locationError(error) {
    console.warn('Error:' + error.message);
}