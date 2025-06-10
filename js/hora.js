const horaEl = document.getElementById("hora-atual");
const dataEl = document.getElementById("data");
const fusoEl = document.getElementById("fuso");
const diaAnoEl = document.getElementById("dia-ano");

function atualizarRelogio() {
    const agora = new Date();
    horaEl.textContent = agora.toLocaleTimeString('pt-BR');
    dataEl.textContent = agora.toLocaleDateString('pt-BR');
    fusoEl.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
    diaAnoEl.textContent = Math.floor((agora - new Date(agora.getFullYear(), 0, 0)) / 86400000);
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

