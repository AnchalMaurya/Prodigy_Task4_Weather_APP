const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'];
const weathers = ['Sunny', 'Cloudy', 'Rainy', 'Windy'];
const weatherCard = document.getElementById('weatherCard');
const temperatureSpan = document.getElementById('temperature');
const weatherSpan = document.getElementById('weather');
const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.addEventListener('click', () => {
    updateWeather();
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateWeather() {
    const randomCity = cities[getRandomNumber(0, cities.length - 1)];
    const randomTemperature = getRandomNumber(10, 35);
    const randomWeather = weathers[getRandomNumber(0, weathers.length - 1)];

    weatherCard.querySelector('h2').textContent = `City: ${randomCity}`;
    temperatureSpan.textContent = `${randomTemperature}°C`;
    weatherSpan.textContent = randomWeather;
}

// Initial weather update
updateWeather();