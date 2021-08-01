// Display current time
let date = new Date();
function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${day}, ${hour}:${minutes}`;
}
//display the city name as H1
function displayCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city-name");
  let city = document.querySelector("#input-city");
  h1.innerHTML = city.value;

  getWeather(city.value);
}
//get weather for the searched city
function getWeather(city) {
  let apiKey = "bc964bce7673159981cbd9d3c7760ee6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}
//display the current weather for that city
function showWeather(response) {
  console.log(response);
  let currentTemp = Math.round(response.data.main.temp);
  let displayTemp = document.querySelector("#current-temp");
  displayTemp.innerHTML = `${currentTemp}℃`;

  let description = response.data.weather[0].description;
  let displayDescription = document.querySelector("#weather-description");
  displayDescription.innerHTML = description;

  let humidity = response.data.main.humidity;
  let displayHumidity = document.querySelector("#current-humidity");
  displayHumidity.innerHTML = humidity;

  let speed = response.data.wind.speed;
  let displaySpeed = document.querySelector("#current-speed");
  displaySpeed.innerHTML = speed;
}

let currentTime = document.querySelector("#current");
currentTime.innerHTML = formatDate(date);

let form = document.querySelector("#search-city");
form.addEventListener("submit", displayCity);

let locationButton = document.querySelector(".location");
locationButton.addEventListener("click", getPosition);

function getPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
function getLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "bc964bce7673159981cbd9d3c7760ee6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showLocation);
}

function showLocation(response) {
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${response.data.name}`;
  showWeather(response);
}
