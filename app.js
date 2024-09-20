const ApiKey = "6263facbdebdbf64ab367b07c6413cb2";
const ApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
var searchbox = document.querySelector(".search input");
var searchbtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humu").innerHTML = data.main.humidity + "%";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
}
searchbtn.addEventListener("click", function () {
  document.querySelector(".weather").style.display = "flex";
  document.querySelector(".bottom").style.display = "flex";
  checkWeather(searchbox.value);
});