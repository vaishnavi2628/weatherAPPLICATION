const API_KEY = "81b7a9ada5a80f0c43e5755ebaed8cc9";

function renderWeatherData(data) {
  let cityName = data.city ? data.city.name : data.name;
  let description = data.list 
      ? data.list[0].weather[0].description 
      : data.weather[0].description;
  let temp = data.list 
      ? data.list[0].main.temp 
      : data.main.temp;

  let newPara = document.createElement("p");
  newPara.textContent = `${cityName} Weather: ${description}, Temp: ${temp}°C`;
  document.body.appendChild(newPara);
}

async function showWeather() {
  try {
    let lat = 15.9716;
    let lon = 77.5946;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    console.log("weather data", data);

    renderWeatherData(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
showWeather();


async function getCustomWeatherDetails() {
  try {
    let city = "Mumbai";

    let result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    let data = await result.json();
    console.log("custom weather data", data);

    renderWeatherData(data);

  } catch (error) {
    console.error("Error fetching custom weather data:", error);
  }
}

getCustomWeatherDetails();

function getLocation(){
    if(navigator.geolocation){ 
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Geolocation is not supported by this browser.");
    }

}
function showPosition(position){
  let lat=position.coords.latitude;
  let longi=    position.coords.longitude;
  console.log("Latitude: " , lat );
  console.log("Longitude: " , longi );


}