// hämta väder-container
const weatherContainer = document.getElementById("weather-container");

// hämta användarens plats
navigator.geolocation.getCurrentPosition(async (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  // open weather api url
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=c96864520cf70729ddfc3b4cb69414f5`;

  try {
    const weather = await getWeather(weatherUrl);

    // skapa ett kort för att visa väder
    const weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";
    weatherContainer.appendChild(weatherCard);

    // skapa 2 divvar för att visa infon i
    const weatherDiv1 = document.createElement("div");
    weatherDiv1.className = "weather-div1";
    weatherCard.appendChild(weatherDiv1);
    const weatherDiv2 = document.createElement("div");
    weatherDiv2.className = "weather-div2";
    weatherCard.appendChild(weatherDiv2);

    // titel för platsen
    const wTitle = document.createElement("h3");
    wTitle.className = "weather-title";
    wTitle.textContent = weather.name;
    weatherDiv1.appendChild(wTitle);

    // visa temperatur
    const temperature = document.createElement("div");
    temperature.className = "weather-temp";
    temperature.textContent = `${Math.trunc(weather.main.temp)}°C`;
    weatherDiv1.appendChild(temperature);

    // visa ikon
    const wIcon = document.createElement("i");
    wIcon.className = "fa-solid";
    wIcon.classList.add("w-icon");
    weatherDiv2.appendChild(wIcon);

    // visa rätt ikon baserat på vilket väder
    if (weather.weather[0].id >= 200 && weather.weather[0].id <= 232) {
      wIcon.classList.add("fa-bolt");
    } else if (weather.weather[0].id >= 300 && weather.weather[0].id <= 321) {
      wIcon.classList.add("fa-cloud-showers-heavy");
    } else if (weather.weather[0].id >= 500 && weather.weather[0].id <= 531) {
      wIcon.classList.add("fa-cloud-rain");
    } else if (weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
      wIcon.classList.add("fa-snowflake");
    } else if (weather.weather[0].id >= 701 && weather.weather[0].id <= 781) {
      wIcon.classList.add("fa-mist");
    } else if (weather.weather[0].id === 801 || weather.weather[0].id === 802) {
      wIcon.classList.add("fa-cloud");
    } else if (weather.weather[0].id === 803 || weather.weather[0].id === 804) {
      wIcon.classList.add("fa-cloud-sun");
    } else {
      wIcon.classList.add("fa-sun");
    }

    // visa väderbeskrivning
    const wDesc = document.createElement("div");
    wDesc.className = "weather-desc";
    wDesc.textContent = weather.weather[0].description;
    weatherDiv2.appendChild(wDesc);
  } catch (error) {
    console.error("Error fetching", error);
  }
});

// fetch api
async function getWeather(url) {
  const response = await fetch(url);
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(`Error fetching weather data: ${response.statusText}`);
  }
}
