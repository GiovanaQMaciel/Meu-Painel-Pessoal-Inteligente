function init(SeletorFrase, seletorAutor, seletorBtn) {
    // Selecionando elementos do DOM
    const frase = document.querySelector(SeletorFrase);
    const autor = document.querySelector(seletorAutor);
    const btn = document.querySelector(seletorBtn);

    // Tratativa de erro
    if (frase && autor && btn) {
        // Função Assincrona puxando a frase da API
        async function activeApp() {
            try {
                // Frase API

                // Faz um fetch na url
                const dadosResponse = await (fetch('./phrases.json'));
                // Aguarda o retorno do Fetch e transforma em JSON
                const dadosJSON = await (await dadosResponse).json();
                // Puxando as frases de forma aleatoria
                const aleatorio = dadosJSON[Math.floor(Math.random() * 2)];

                // Insere os dados no DOM
                frase.innerText = aleatorio.quote;
                autor.innerText = aleatorio.author;
        

            } catch (erro) {
                console.log(erro);
            }

        }

    

        // Evento do botão
        btn.addEventListener('click', activeApp);

        // Ativando a função quando entra no site
        activeApp();
    }


}
// Chamando a função geral para inicar o codigo
init('p.frase', 'cite.autor', '.btn-novo');