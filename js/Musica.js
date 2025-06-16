// const wrapper = document.querySelector(".wrapper"),
// musicImg = wrapper.querySelector(".img-area img"),
// musicName = wrapper.querySelector(".song-details .name"),
// musicArtist = wrapper.querySelector(".song-details .artist"),
// playPauseBtn = wrapper.querySelector(".play-pause"),
// prevBtn = wrapper.querySelector("#prev"),
// nextBtn = wrapper.querySelector("#next"),
// mainAudio = wrapper.querySelector("#main-audio"),
// progressArea = wrapper.querySelector(".progress-area"),
// progressBar = progressArea.querySelector(".progress-bar"),
// musicList = wrapper.querySelector(".music-list"),
// moreMusicBtn = wrapper.querySelector("#more-music"),
// closemoreMusic = musicList.querySelector("#close");

// let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
// isMusicPaused = true;

// window.addEventListener("load", ()=>{
//   loadMusic(musicIndex);
//   playingSong(); 
// });

// function loadMusic(indexNumb){
//   musicName.innerText = allMusic[indexNumb - 1].name;
//   musicArtist.innerText = allMusic[indexNumb - 1].artist;
//   musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
//   mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
// }

// //play music function
// function playMusic(){
//   wrapper.classList.add("paused");
//   playPauseBtn.querySelector("i").innerText = "pause";
//   mainAudio.play();
// }

// //pause music function
// function pauseMusic(){
//   wrapper.classList.remove("paused");
//   playPauseBtn.querySelector("i").innerText = "play_arrow";
//   mainAudio.pause();
// }

// //prev music function
// function prevMusic(){
//   musicIndex--; //decrement of musicIndex by 1
//   //if musicIndex is less than 1 then musicIndex will be the array length so the last music play
//   musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
//   playingSong(); 
// }

// //next music function
// function nextMusic(){
//   musicIndex++; //increment of musicIndex by 1
//   //if musicIndex is greater than array length then musicIndex will be 1 so the first music play
//   musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
//   loadMusic(musicIndex);
//   playMusic();
//   playingSong(); 
// }

// // play or pause button event
// playPauseBtn.addEventListener("click", ()=>{
//   const isMusicPlay = wrapper.classList.contains("paused");
//   //if isPlayMusic is true then call pauseMusic else call playMusic
//   isMusicPlay ? pauseMusic() : playMusic();
//   playingSong();
// });

// //prev music button event
// prevBtn.addEventListener("click", ()=>{
//   prevMusic();
// });

// //next music button event
// nextBtn.addEventListener("click", ()=>{
//   nextMusic();
// });

// // update progress bar width according to music current time
// mainAudio.addEventListener("timeupdate", (e)=>{
//   const currentTime = e.target.currentTime; //getting playing song currentTime
//   const duration = e.target.duration; //getting playing song total duration
//   let progressWidth = (currentTime / duration) * 100;
//   progressBar.style.width = `${progressWidth}%`;

//   let musicCurrentTime = wrapper.querySelector(".current-time"),
//   musicDuartion = wrapper.querySelector(".max-duration");
//   mainAudio.addEventListener("loadeddata", ()=>{
//     // update song total duration
//     let mainAdDuration = mainAudio.duration;
//     let totalMin = Math.floor(mainAdDuration / 60);
//     let totalSec = Math.floor(mainAdDuration % 60);
//     if(totalSec < 10){ //if sec is less than 10 then add 0 before it
//       totalSec = `0${totalSec}`;
//     }
//     musicDuartion.innerText = `${totalMin}:${totalSec}`;
//   });
//   // update playing song current time
//   let currentMin = Math.floor(currentTime / 60);
//   let currentSec = Math.floor(currentTime % 60);
//   if(currentSec < 10){ //if sec is less than 10 then add 0 before it
//     currentSec = `0${currentSec}`;
//   }
//   musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
// });

// // update playing song currentTime on according to the progress bar width
// progressArea.addEventListener("click", (e)=>{
//   let progressWidth = progressArea.clientWidth; //getting width of progress bar
//   let clickedOffsetX = e.offsetX; //getting offset x value
//   let songDuration = mainAudio.duration; //getting song total duration
  
//   mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
//   playMusic(); //calling playMusic function
//   playingSong();
// });

// //change loop, shuffle, repeat icon onclick
// const repeatBtn = wrapper.querySelector("#repeat-plist");
// repeatBtn.addEventListener("click", ()=>{
//   let getText = repeatBtn.innerText; //getting this tag innerText
//   switch(getText){
//     case "repeat":
//       repeatBtn.innerText = "repeat_one";
//       repeatBtn.setAttribute("title", "Song looped");
//       break;
//     case "repeat_one":
//       repeatBtn.innerText = "shuffle";
//       repeatBtn.setAttribute("title", "Playback shuffled");
//       break;
//     case "shuffle":
//       repeatBtn.innerText = "repeat";
//       repeatBtn.setAttribute("title", "Playlist looped");
//       break;
//   }
// });

// //code for what to do after song ended
// mainAudio.addEventListener("ended", ()=>{
//   // we'll do according to the icon means if user has set icon to
//   // loop song then we'll repeat the current song and will do accordingly
//   let getText = repeatBtn.innerText; //getting this tag innerText
//   switch(getText){
//     case "repeat":
//       nextMusic(); //calling nextMusic function
//       break;
//     case "repeat_one":
//       mainAudio.currentTime = 0; //setting audio current time to 0
//       loadMusic(musicIndex); //calling loadMusic function with argument, in the argument there is a index of current song
//       playMusic(); //calling playMusic function
//       break;
//     case "shuffle":
//       let randIndex = Math.floor((Math.random() * allMusic.length) + 1); //genereting random index/numb with max range of array length
//       do{
//         randIndex = Math.floor((Math.random() * allMusic.length) + 1);
//       }while(musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
//       musicIndex = randIndex; //passing randomIndex to musicIndex
//       loadMusic(musicIndex);
//       playMusic();
//       playingSong();
//       break;
//   }
// });

// //show music list onclick of music icon
// moreMusicBtn.addEventListener("click", ()=>{
//   musicList.classList.toggle("show");
// });
// closemoreMusic.addEventListener("click", ()=>{
//   moreMusicBtn.click();
// });

// const ulTag = wrapper.querySelector("ul");
// // let create li tags according to array length for list
// for (let i = 0; i < allMusic.length; i++) {
//   //let's pass the song name, artist from the array
//   let liTag = `<li li-index="${i + 1}">
//                 <div class="row">
//                   <span>${allMusic[i].name}</span>
//                   <p>${allMusic[i].artist}</p>
//                 </div>
//                 <span id="${allMusic[i].src}" class="audio-duration">3:40</span>
//                 <audio class="${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
//               </li>`;
//   ulTag.insertAdjacentHTML("beforeend", liTag); //inserting the li inside ul tag

//   let liAudioDuartionTag = ulTag.querySelector(`#${allMusic[i].src}`);
//   let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
//   liAudioTag.addEventListener("loadeddata", ()=>{
//     let duration = liAudioTag.duration;
//     let totalMin = Math.floor(duration / 60);
//     let totalSec = Math.floor(duration % 60);
//     if(totalSec < 10){ //if sec is less than 10 then add 0 before it
//       totalSec = `0${totalSec}`;
//     };
//     liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`; //passing total duation of song
//     liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`); //adding t-duration attribute with total duration value
//   });
// }

// //play particular song from the list onclick of li tag
// function playingSong(){
//   const allLiTag = ulTag.querySelectorAll("li");
  
//   for (let j = 0; j < allLiTag.length; j++) {
//     let audioTag = allLiTag[j].querySelector(".audio-duration");
    
//     if(allLiTag[j].classList.contains("playing")){
//       allLiTag[j].classList.remove("playing");
//       let adDuration = audioTag.getAttribute("t-duration");
//       audioTag.innerText = adDuration;
//     }

//     //if the li tag index is equal to the musicIndex then add playing class in it
//     if(allLiTag[j].getAttribute("li-index") == musicIndex){
//       allLiTag[j].classList.add("playing");
//       audioTag.innerText = "Playing";
//     }

//     allLiTag[j].setAttribute("onclick", "clicked(this)");
//   }
// }

// //particular li clicked function
// function clicked(element){
//   let getLiIndex = element.getAttribute("li-index");
//   musicIndex = getLiIndex; //updating current song index with clicked li index
//   loadMusic(musicIndex);
//   playMusic();
//   playingSong();
// }



// Seletores principais
const wrapper = document.querySelector('.wrapper');
const musicImg = wrapper.querySelector('.img-area img');
const musicName = wrapper.querySelector('.song-details .name');
const musicArtist = wrapper.querySelector('.song-details .artist');
const mainAudio = wrapper.querySelector('#main-audio');

const playPauseBtn = wrapper.querySelector('.play-pause i');
const prevBtn = wrapper.querySelector('#prev');
const nextBtn = wrapper.querySelector('#next');

const progressArea = wrapper.querySelector('.progress-area');
const progressBar = wrapper.querySelector('.progress-bar');
const currentTimeEl = wrapper.querySelector('.current-time');
const maxDurationEl = wrapper.querySelector('.max-duration');

const musicList = wrapper.querySelector('.music-list');
const musicListUl = musicList.querySelector('ul');
const moreMusicBtn = wrapper.querySelector('#more-music');
const closeMusicListBtn = musicList.querySelector('#close');

let musicIndex = 0;
let isPlaying = false;
let musicData = []; // Array para guardar músicas da API

// Função para formatar tempo em mm:ss
function formatTime(seconds) {
  const min = Math.floor(seconds / 60) || 0;
  const sec = Math.floor(seconds % 60) || 0;
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Função para carregar a música no player
function loadMusic(index) {
  const music = musicData[index];
  if (!music) return;
  musicName.textContent = music.title;
  musicArtist.textContent = music.artist.name;
  musicImg.src = music.album.cover_medium;
  mainAudio.src = music.preview;

  currentTimeEl.textContent = '0:00';
  maxDurationEl.textContent = '--:--';

  // Quando metadata carregar atualiza duração
  mainAudio.addEventListener('loadedmetadata', () => {
    maxDurationEl.textContent = formatTime(mainAudio.duration);
  });

  // Atualiza progresso e tempo
  mainAudio.addEventListener('timeupdate', updateProgress);

  // Quando terminar música toca próxima
  mainAudio.addEventListener('ended', () => {
    nextMusic();
  });

  highlightPlayingSong();
}

// Atualiza barra de progresso e tempo atual
function updateProgress() {
  if (!mainAudio.duration) return;

  const progressPercent = (mainAudio.currentTime / mainAudio.duration) * 100;
  progressBar.style.width = progressPercent + '%';
  currentTimeEl.textContent = formatTime(mainAudio.currentTime);
}

// Tocar / pausar música
function playMusic() {
  isPlaying = true;
  wrapper.classList.add('paused');
  playPauseBtn.textContent = 'pause';
  mainAudio.play();
}

function pauseMusic() {
  isPlaying = false;
  wrapper.classList.remove('paused');
  playPauseBtn.textContent = 'play_arrow';
  mainAudio.pause();
}

// Alternar play/pause
playPauseBtn.addEventListener('click', () => {
  isPlaying ? pauseMusic() : playMusic();
});

// Próxima música
function nextMusic() {
  musicIndex = (musicIndex + 1) % musicData.length;
  loadMusic(musicIndex);
  playMusic();
}

// Música anterior
function prevMusic() {
  musicIndex = (musicIndex - 1 + musicData.length) % musicData.length;
  loadMusic(musicIndex);
  playMusic();
}

nextBtn.addEventListener('click', nextMusic);
prevBtn.addEventListener('click', prevMusic);

// Clicar na barra de progresso para buscar tempo
progressArea.addEventListener('click', e => {
  const width = progressArea.clientWidth;
  const clickX = e.offsetX;
  if (!mainAudio.duration) return;
  mainAudio.currentTime = (clickX / width) * mainAudio.duration;
});

// Mostrar / esconder lista de músicas
moreMusicBtn.addEventListener('click', () => {
  musicList.classList.add('show');
});
closeMusicListBtn.addEventListener('click', () => {
  musicList.classList.remove('show');
});

// Preencher lista de músicas com dados da API
function populateMusicList() {
  musicListUl.innerHTML = '';
  musicData.forEach((music, index) => {
    const li = document.createElement('li');
    li.className = index === musicIndex ? 'playing' : '';
    li.innerHTML = `
      <span>${music.title}</span>
      <p>${music.artist.name}</p>
      <span class="audio-duration">30s</span>
    `;
    li.addEventListener('click', () => {
      musicIndex = index;
      loadMusic(musicIndex);
      playMusic();
      musicList.classList.remove('show');
    });
    musicListUl.appendChild(li);
  });
}

// Destaca a música que está tocando na lista
function highlightPlayingSong() {
  musicListUl.querySelectorAll('li').forEach((li, index) => {
    li.classList.toggle('playing', index === musicIndex);
  });
}

// Função para buscar músicas da API Deezer pública - Exemplo: top 10 do Brasil
async function fetchMusic() {
  try {
    const response = await fetch('https://api.deezer.com/chart/0/tracks?limit=10&output=jsonp', {
      method: 'GET',
      mode: 'cors',
    });
    // Deezer usa JSONP por padrão e não aceita CORS diretamente.
    // Então precisamos usar outro endpoint proxy ou outra API.
    // Como alternativa, usar api.allorigins.win para contornar CORS:
    const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.deezer.com/chart/0/tracks?limit=10');
    const proxyResponse = await fetch(proxyUrl);
    const proxyData = await proxyResponse.json();
    const jsonData = JSON.parse(proxyData.contents);
    musicData = jsonData.data;
    populateMusicList();
    loadMusic(musicIndex);
  } catch (error) {
    console.error('Erro ao buscar músicas:', error);
  }
}

// Iniciar tudo
fetchMusic();
