const wapiKey = 'dc61fdb15f261b6b811938ba060cca5e';

const locationEl = document.getElementById('location');
const temperatureEl = document.getElementById('temperature');
const conditionEl = document.getElementById('condition');
const refreshBtn = document.getElementById('refreshWeather');

async function carregarClima() {
  if (!navigator.geolocation) {
    locationEl.textContent = 'Geolocalização não suportada';
    conditionEl.textContent = '--';
    temperatureEl.textContent = '--°C';
    return;
  }

  locationEl.textContent = 'Localizando...';
  conditionEl.textContent = 'Carregando...';
  temperatureEl.textContent = '--°C';

  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${wapiKey}&lang=pt_br&units=metric`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Erro ao buscar clima');

      const data = await response.json();

      locationEl.textContent = `${data.name}, ${data.sys.country}`;
      temperatureEl.textContent = `${Math.round(data.main.temp)}°C`;
      conditionEl.textContent = data.weather[0].description;

    } catch (error) {
      locationEl.textContent = 'Erro ao carregar';
      conditionEl.textContent = 'Erro';
      temperatureEl.textContent = '--°C';
      console.error(error);
    }
  }, (error) => {
    if (error.code === error.PERMISSION_DENIED) {
      locationEl.textContent = 'Permissão negada';
    } else {
      locationEl.textContent = 'Erro ao obter localização';
    }
    conditionEl.textContent = '--';
    temperatureEl.textContent = '--°C';
  });
}

if (refreshBtn) {
  refreshBtn.addEventListener('click', carregarClima);
}

carregarClima();

