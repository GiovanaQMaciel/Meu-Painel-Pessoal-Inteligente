const formBusca = document.getElementById('formBusca');
  const inputBusca = document.getElementById('inputBusca');
  const resultadosEl = document.getElementById('resultados');

  formBusca.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = inputBusca.value.trim();
    if (!query) return;

    resultadosEl.innerHTML = 'Carregando...';

    try {
      // Requisição para Google Books API
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=10`);
      if (!response.ok) throw new Error('Erro na busca');

      const data = await response.json();

      if (!data.items || data.items.length === 0) {
        resultadosEl.innerHTML = '<p>Nenhum livro encontrado.</p>';
        return;
      }

      // Construir resultados
      resultadosEl.innerHTML = '';
      data.items.forEach(item => {
        const info = item.volumeInfo;
        const access = item.accessInfo;

        const titulo = info.title || 'Sem título';
        const autores = info.authors ? info.authors.join(', ') : 'Autor desconhecido';
        const thumbnail = info.imageLinks ? info.imageLinks.thumbnail : '';
        const leituraLink = access.pdf && access.pdf.isAvailable ? access.pdf.acsTokenLink || access.pdf.downloadLink || info.previewLink : info.previewLink || null;

        const livroDiv = document.createElement('div');
        livroDiv.className = 'livro';

        livroDiv.innerHTML = `
          ${thumbnail ? `<img src="${thumbnail}" alt="Capa de ${titulo}" style="float:left; margin-right:10px; max-height:100px;">` : ''}
          <div>
            <div class="titulok">${titulo}</div>
            <div class="autor">Por: ${autores}</div>
          </div>
          <div style="clear:both;"></div>
        `;

        if (leituraLink) {
          const linkLeitura = document.createElement('a');
          linkLeitura.href = leituraLink;
          linkLeitura.target = '_blank';
          linkLeitura.rel = 'noopener noreferrer';
          linkLeitura.className = 'btn-leitura';
          linkLeitura.textContent = 'Ler PDF / Preview';
          livroDiv.appendChild(linkLeitura);
        }

        resultadosEl.appendChild(livroDiv);
      });
    } catch (error) {
      resultadosEl.innerHTML = `<p>Erro ao carregar livros: ${error.message}</p>`;
      console.error(error);
    }
  });