const apiKey = 'b271895befc8c6dcafd8fb8bf26d920d';

async function getWeather() {
  const city = document.getElementById('city').value;
  const todayUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(todayUrl);
    const todayData = await response.json();

    if(todayData.cod !== 200){
      alert('City not found');
      return;
    }

    document.getElementById('weather-info').classList.add('show');

    // === TODAY ===
    document.getElementById('today-temp').innerText = `🌡️ Temp: ${todayData.main.temp} °C`;
    document.getElementById('today-feels').innerText = `🤗 Feels like: ${todayData.main.feels_like} °C`;
    document.getElementById('today-minmax').innerText = `🔻 ${todayData.main.temp_min}°C / 🔺 ${todayData.main.temp_max}°C`;
    document.getElementById('today-desc').innerText = `📝 ${todayData.weather[0].description}`;
    document.getElementById('today-humidity').innerText = `💧 Humidity: ${todayData.main.humidity}%`;
    document.getElementById('today-wind').innerText = `🌬️ Wind: ${todayData.wind.speed} m/s`;
    document.getElementById('today-pressure').innerText = `🛡️ Pressure: ${todayData.main.pressure} hPa`;
    // document.getElementById('today-visibility').innerText = `👁️ Visibility: ${todayData.visibility/1000} km`;
    document.getElementById('today-clouds').innerText = `☁️ Clouds: ${todayData.clouds.all}%`;
    // document.getElementById('today-rain').innerText = `🌧️ Rain: ${todayData.rain?.['1h'] || 0} mm`;
    // document.getElementById('today-snow').innerText = `❄️ Snow: ${todayData.snow?.['1h'] || 0} mm`;
    document.getElementById('today-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${todayData.weather[0].icon}@2x.png">`;

    // === YESTERDAY (simulated) ===
    const yTemp = Math.round(todayData.main.temp - 1);
    document.getElementById('yesterday-temp').innerText = `🌡️ Temp: ${yTemp} °C`;
    document.getElementById('yesterday-feels').innerText = `🤗 Feels like: ${yTemp-1} °C`;
    document.getElementById('yesterday-minmax').innerText = `🔻 ${yTemp-2}°C / 🔺 ${yTemp+1}°C`;
    document.getElementById('yesterday-desc').innerText = `📝 Slightly cooler than today`;
    document.getElementById('yesterday-humidity').innerText = `💧 Humidity: ${todayData.main.humidity-5}%`;
    document.getElementById('yesterday-wind').innerText = `🌬️ Wind: ${todayData.wind.speed-0.5} m/s`;
    document.getElementById('yesterday-pressure').innerText = `🛡️ Pressure: ${todayData.main.pressure-3} hPa`;
    // document.getElementById('yesterday-visibility').innerText = `👁️ Visibility: ${(todayData.visibility/1000)-1} km`;
    document.getElementById('yesterday-clouds').innerText = `☁️ Clouds: ${todayData.clouds.all-10}%`;
    document.getElementById('yesterday-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/03d@2x.png">`;

    // === TOMORROW (simulated) ===
    const tTemp = Math.round(todayData.main.temp + 2);
    document.getElementById('tomorrow-temp').innerText = `🌡️ Temp: ${tTemp} °C`;
    document.getElementById('tomorrow-feels').innerText = `🤗 Feels like: ${tTemp+1} °C`;
    document.getElementById('tomorrow-minmax').innerText = `🔻 ${tTemp-1}°C / 🔺 ${tTemp+3}°C`;
    document.getElementById('tomorrow-desc').innerText = `📝 Slightly warmer than today`;
    document.getElementById('tomorrow-humidity').innerText = `💧 Humidity: ${todayData.main.humidity+5}%`;
    document.getElementById('tomorrow-wind').innerText = `🌬️ Wind: ${todayData.wind.speed+0.5} m/s`;
    document.getElementById('tomorrow-pressure').innerText = `🛡️ Pressure: ${todayData.main.pressure+3} hPa`;
    document.getElementById('tomorrow-clouds').innerText = `☁️ Clouds: ${todayData.clouds.all+10}%`;
    document.getElementById('tomorrow-icon').innerHTML = `<img src="https://openweathermap.org/img/wn/01d@2x.png">`;

  } catch(error) {
    alert('Error fetching data');
    console.log(error);
  }
}
