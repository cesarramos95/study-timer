const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkAbout = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.button-play');
let time = document.querySelector('.count');

linkAbout.addEventListener('click', function(){
  ipcRenderer.send('open-about-window');
});

let images = ['img/play-button.svg', 'img/stop-button.svg'];
buttonPlay.addEventListener('click', function() {
  images = images.reverse();
  timer.start(time);
  buttonPlay.src = images[0];
})