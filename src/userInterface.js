export default function userInterface() {
  const weatherInfo = document.createElement('div');
  weatherInfo.classList.add('weather-info');

  const cityNameHtml = document.createElement('p');
  cityNameHtml.classList.add('city-name');

  const tempHtml = document.createElement('p');

  return { weatherInfo, cityNameHtml, tempHtml };
}
