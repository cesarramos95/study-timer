const { ipcRenderer } = require('electron');
const timer = require('./timer');

let linkAbout = document.querySelector('#link-about');
let buttonPlay = document.querySelector('.button-play');
let counter = document.querySelector('.counter');
let course = document.querySelector('.course');

linkAbout.addEventListener('click', function(){
  ipcRenderer.send('open-about-window');
});

let images = ['img/play-button.svg', 'img/stop-button.svg'];
let isCounting = false;

buttonPlay.addEventListener('click', function() {
  if (isCounting) {
    timer.stop(course.textContent);
    isCounting = false;
  } else {
    timer.start(counter);
    isCounting = true;
  }

  images = images.reverse();
  buttonPlay.src = images[0];
})