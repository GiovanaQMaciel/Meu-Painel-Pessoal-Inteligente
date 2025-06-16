const latEl = document.getElementById('lat');
const lonEl = document.getElementById('lon');
const mapaEl = document.getElementById('mapa');

// Função para atualizar lat/lon e mapa com base nas coordenadas
function atualizarLocalizacao() {
  if (!navigator.geolocation) {
    latEl.textContent = 'Não suportado';
    lonEl.textContent = 'Não suportado';
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    // Atualiza no DOM
    latEl.textContent = latitude.toFixed(6);
    lonEl.textContent = longitude.toFixed(6);

    // Atualiza mapa OpenStreetMap com marcador (leaflet preview map)
    const zoom = 14;
    mapaEl.src = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`;
  }, () => {
    latEl.textContent = 'Permissão negada';
    lonEl.textContent = 'Permissão negada';
  });
}

// Rodar assim que carregar
atualizarLocalizacao();
atualizarLocalizacao();
