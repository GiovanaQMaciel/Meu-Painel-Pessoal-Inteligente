const apiKey = 'aab7ab59c3d913baeda61289be793949'; 
    const filmesContainer = document.getElementById('filmes');

    async function buscarFilmesEmAlta() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&language=pt-BR`);
        if (!response.ok) throw new Error('Erro na requisição');

        const data = await response.json();
        const filmes = data.results.slice(0, 10);

        filmesContainer.innerHTML = filmes.map(filme => `
          <div class="filme" onclick="window.open('https://www.themoviedb.org/movie/${filme.id}', '_blank')">
            <img
              class="poster"
              src="https://image.tmdb.org/t/p/w300${filme.poster_path}"
              alt="Poster de ${filme.title}"
              onerror="this.src='https://via.placeholder.com/300x450?text=Sem+Imagem';"
            />
            <div class="info">
              <h2 class="titulo">${filme.title}</h2>
              <div class="lancamento">${filme.release_date || 'Data indisponível'}</div>
              <p class="sinopse">${filme.overview || 'Sem sinopse disponível'}</p>
            </div>
          </div>
        `).join('');
      } catch (error) {
        filmesContainer.innerHTML = `<p>Erro ao carregar filmes: ${error.message}</p>`;
      }
    }

    buscarFilmesEmAlta();