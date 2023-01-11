import userInterface from './userInterface.js';
import search from './search.js';

const apiKey = '215b0b355728137e0938ebde2ea7b344';
const cityNameHtml = userInterface().cityNameHtml;
const tempHtml = userInterface().tempHtml;
const mainDisplay = document.querySelector('.main-display');
const weatherInfoHtml = userInterface().weatherInfo;
const searchBar = search().searchBar;

mainDisplay.appendChild(searchBar);

async function getData(city) {
  try {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
    );
    const data = await api.json();
    const tempk = data.main.temp;
    const cityName = data.name;
    const tempC = Math.round(tempk - 273);

    cityNameHtml.textContent = cityName.toUpperCase();
    tempHtml.textContent = `${tempC} °C`;

    weatherInfoHtml.appendChild(cityNameHtml);
    weatherInfoHtml.appendChild(tempHtml);

    mainDisplay.appendChild(weatherInfoHtml);

    console.log(`${cityName} : ${tempC} C - ${tempk} k`);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getData('london');

searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getData(searchBar.value);
    searchBar.textContent = '';
  }
});
