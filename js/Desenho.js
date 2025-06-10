const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let desenhando = false;
let ultimaPos = { x: 0, y: 0 };
let usandoBorracha = false;

const corFundo = 'white';  
const corPincel = getComputedStyle(document.documentElement).getPropertyValue('--texto').trim() || '#1565c0';

function getPosicaoMouse(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

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
  ctx.lineWidth = usandoBorracha ? 20 : 2; 
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(ultimaPos.x, ultimaPos.y);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();

  ultimaPos = pos;
});


const botaoBorracha = document.getElementById('toggle-eraser');
botaoBorracha.addEventListener('click', () => {
  usandoBorracha = !usandoBorracha;
  botaoBorracha.textContent = usandoBorracha ? 'Usar Pincel' : 'Usar Borracha';
});
