var citySearch;
var APIkey = '&appid=713c348493c88760b9f54828487c650d';
var weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?';
var uviAPI = 'https://api.openweathermap.org/data/2.5/uvi?lat=';
var forecastAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=';
var geoAPI = navigator.geolocation;
var units = '&units=imperial';
var getWeatherIcon = 'http://openweathermap.org/img/wn/';
var searchHistoryArr = [];

$(document).ready(function(){
    $("#submit").click(function(){
        return getWeather();
    });

const apiKey= "&appid=713c348493c88760b9f54828487c650d"    
$("searchbtn").on("click", function(){
    var city = $(this).attr("submit");
 
//Api Calls
function APIcalls(){
    
    url = "https://api.openweathermap.org/data/2.5/forecast?q=";    
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
    APIkey = "&appid=713c348493c88760b9f54828487c650d";
    queryurl = url + city + APIkey;
    current_weather_url = currenturl + city + APIkey; 
    
    $("#name_of_city").text("Today's Weather in " + city);
    $.ajax({
        url: queryurl,
        method: "GET",
        
    }).then(function(response){
        let day_number = 0; 
        
        
    for(let i=0; i< response.list.length; i++){
            
    
        var currCard = $("<div>").attr("class", "card bg-light");
        $("#earthforecast").append(currCard);

        //add location to card header
        var currCardHead = $("<div>").attr("class", "card-header").text("Current weather for " + response.name);
        currCard.append(currCardHead);

        var cardRow = $("<div>").attr("class", "row no-gutters");
        currCard.append(cardRow);

        //get icon for weather conditions
        var iconURL = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";

        var imgDiv = $("<div>").attr("class", "col-md-4").append($("<img>").attr("src", iconURL).attr("class", "card-img"));
        cardRow.append(imgDiv);

        var textDiv = $("<div>").attr("class", "col-md-8");
        var cardBody = $("<div>").attr("class", "card-body");
        textDiv.append(cardBody);
        //display city name
        cardBody.append($("<h3>").attr("class", "card-title").text(response.name));
        //display last updated
        var currdate = moment(response.dt, "X").format("dddd, MMMM Do YYYY, h:mm a");
        cardBody.append($("<p>").attr("class", "card-text").append($("<small>").attr("class", "text-muted").text("Last updated: " + currdate)));
        //display Temperature
        cardBody.append($("<p>").attr("class", "card-text").html("Temperature: " + response.main.temp + " &#8457;"));
        //display Humidity
        cardBody.append($("<p>").attr("class", "card-text").text("Humidity: " + response.main.humidity + "%"));
        //display Wind Speed
        cardBody.append($("<p>").attr("class", "card-text").text("Wind Speed: " + response.wind.speed + " MPH"));

//Use AJAX to display the information 
$.ajax({
    url:current_weather_url,
    method: "GET", 
}).then(function(current_data){
    console.log(current_data);
    let temp = Math.round(((current_data.main.temp - 273.15) * 9/5 + 32))
    console.log("The temperature in " + city + " is: " + temp);
    $("#today_temp").text("Temperature: " + temp + String.fromCharCode(176)+"F");
    $("#today_humidity").text("Humidity: " + current_data.main.humidity);
    $("#today_wind_speed").text("Wind Speed: " + current_data.wind.speed);
    $("#today_icon_div").attr({"src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
    "height": "100px", "width":"100px"});
     })
    
}


    if(city != ''){
        $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forcast?q=" + city + apiKey,
        method: "GET" 
        }).then(function (response){
            console.log(Response)
            console.log(Response.data)
            console.log(Response.data.results)
        });
    };
});    
