import $ from 'jquery'

// Weather api key
const Key = "889d7651f6bba9ad7eb1edd6142f0cbf"

// Geolocalisation Html Api
if(namespace.geolocation) {
    // Take the getWeather callback
 	navigator.geolocation.getCurrentPosition(getWeather);
} else {
 	// In case of deny
    console.log("Can't get GEO")
 }

function getWeather(position) {
    console.log(position)
    // Bring Lat and Lon from the Browser
    const lat = position.coords.latitude ;    
    const lon = position.coords.longitude;

    // Get the Data from the Server
    $.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat +'&lon=' + lon +'&appid=' + Key)
        .done(function (res) {
            //Parse the Response here
            console.log(res)
        })   
        .fail(function (err) {
            // Fire exception error
            console.log(err)
        })
}

