// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let desenhando = false;
// let ultimaPos = { x: 0, y: 0 };
// let usandoBorracha = false;

// const corFundo = 'white';  
// const corPincel = getComputedStyle(document.documentElement).getPropertyValue('--texto').trim() || '#1565c0';

// function getPosicaoMouse(event) {
//   const rect = canvas.getBoundingClientRect();
//   return {
//     x: event.clientX - rect.left,
//     y: event.clientY - rect.top
//   };
// }

// canvas.addEventListener('mousedown', (event) => {
//   desenhando = true;
//   ultimaPos = getPosicaoMouse(event);
// });

// canvas.addEventListener('mouseup', () => {
//   desenhando = false;
// });

// canvas.addEventListener('mouseout', () => {
//   desenhando = false;
// });

// canvas.addEventListener('mousemove', (event) => {
//   if (!desenhando) return;

//   const pos = getPosicaoMouse(event);

//   ctx.strokeStyle = usandoBorracha ? corFundo : corPincel;
//   ctx.lineWidth = usandoBorracha ? 20 : 2; 
//   ctx.lineCap = 'round';

//   ctx.beginPath();
//   ctx.moveTo(ultimaPos.x, ultimaPos.y);
//   ctx.lineTo(pos.x, pos.y);
//   ctx.stroke();

//   ultimaPos = pos;
// });


// const botaoBorracha = document.getElementById('toggle-eraser');
// botaoBorracha.addEventListener('click', () => {
//   usandoBorracha = !usandoBorracha;
//   botaoBorracha.textContent = usandoBorracha ? 'Usar Pincel' : 'Usar Borracha';
// });

const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let desenhando = false;
  let ultimaPos = { x: 0, y: 0 };
  let usandoBorracha = false;

  const corFundo = 'white';
  const corPincel = getComputedStyle(document.documentElement).getPropertyValue('--texto').trim() || '#1565c0';

  // Ajustar o tamanho real do canvas conforme CSS para evitar distorção
  function ajustarTamanhoCanvas() {
    // Pega tamanho atual CSS do canvas
    const style = getComputedStyle(canvas);
    const width = parseInt(style.width);
    const height = parseInt(style.height);

    // Ajusta largura e altura reais do canvas
    canvas.width = width;
    canvas.height = height;

    // Limpa fundo para branco ao redimensionar
    ctx.fillStyle = corFundo;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Função para pegar posição do mouse relativa ao canvas
  function getPosicaoMouse(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  // Eventos de desenho
  canvas.addEventListener('mousedown', (event) => {
    desenhando = true;
    ultimaPos = getPosicaoMouse(event);
  });

  canvas.addEventListener('mouseup', () => {
    desenhando = false;
  });

  canvas.addEventListener('mouseout', () => {
    desenhando = false;
  });

  canvas.addEventListener('mousemove', (event) => {
    if (!desenhando) return;

    const pos = getPosicaoMouse(event);

    ctx.strokeStyle = usandoBorracha ? corFundo : corPincel;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.lineWidth = usandoBorracha ? 20 : 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Desenha linha do último ponto para o atual
    ctx.beginPath();
    ctx.moveTo(ultimaPos.x, ultimaPos.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();

    // Desenha ponto para evitar buracos
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();

    ultimaPos = pos;
  });

  // Botão para alternar entre pincel e borracha
  const botaoBorracha = document.getElementById('toggle-eraser');
  botaoBorracha.addEventListener('click', () => {
    usandoBorracha = !usandoBorracha;
    botaoBorracha.textContent = usandoBorracha ? 'Usar Pincel' : 'Usar Borracha';
  });

  // Botão para limpar o canvas
  const botaoLimpar = document.getElementById('btn-clear');
  botaoLimpar.addEventListener('click', () => {
    ctx.fillStyle = corFundo;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  });

  // Ajusta canvas ao carregar e ao redimensionar a janela
  function onResize() {
    ajustarTamanhoCanvas();
  }

  window.addEventListener('resize', onResize);

  // Inicializa o canvas
  ajustarTamanhoCanvas();