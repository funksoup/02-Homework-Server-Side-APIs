
var APIKey = "166a433c57516f51dfab1f7edaed8413";

var getHistory = JSON.parse(window.localStorage.getItem("userCityOld"));

var userCityArray = getHistory || [];


$("#button-submit").on("click", function(event) {

	event.preventDefault();

	var userCity = $("#input-city").val();

	// $("#input-city").val("");

	console.log(userCity);


    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + APIKey + "&units=imperial";

    // get queryURL for 5-day forecast
    var queryURLForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&appid=" + APIKey + "&units=imperial";

  	// AJAX call
    $.when(
  	// Get the HTML
 	 $.get(queryURL, function(response) {
   		console.log(response);
   		$("#current-city").append(userCity);
		$("#current-city-temp").append("Temperature: ",response.main.temp);
		$("#current-city-humid").append("Humidity: ",response.main.humidity,"%");
		$("#current-city-wind").append("Wind Speed: ",response.wind.speed, " MPH");
		// $("#current-city-uv").append("UV Index: ",response.main...);

 	 }),

 	 $.get(queryURLForecast, function(responseForecast) {
   		console.log(responseForecast);
 	 }),


		).then(function(response) {	


	


	});

	userCityArray.push(userCity);
	console.log("userCityArray: ", userCityArray);

	// getHistory.push(userCity);

	
	localStorage.setItem("userCityOld", JSON.stringify(userCityArray));

	// var userCities = localStorage.getItem("userCityOld");

	console.log("line 78: " + getHistory);




	});
