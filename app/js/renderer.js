const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkAbout = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.button-play');
let time = document.querySelector('.count');

linkAbout.addEventListener('click', function(){
  ipcRenderer.send('open-about-window');
});

let images = ['img/play-button.svg', 'img/stop-button.svg'];
let isCounting = false;

buttonPlay.addEventListener('click', function() {
  if (isCounting) {
    timer.stop();
    isCounting = false;
  } else {
    timer.start(time);
    isCounting = true;
  }

  images = images.reverse();
  timer.start(time);
  buttonPlay.src = images[0];
})