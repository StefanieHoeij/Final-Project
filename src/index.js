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
//display the city as H1
function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city");
  let h1 = document.querySelector("#city-name");
  h1.innerHTML = city.value;
}

let currentTime = document.querySelector("#current");
currentTime.innerHTML = formatDate(date);

let form = document.querySelector("#search-city");
form.addEventListener("submit", displayCity);
