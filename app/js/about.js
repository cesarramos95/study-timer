const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkClose = document.querySelector("#link-close");
let linkGithub = document.querySelector("#link-github");
let electronVersion = document.querySelector("#version-electron");

window.onload = function() {
  electronVersion.textContent = process.versions.electron;
}

linkClose.addEventListener('click', function() {
  ipcRenderer.send('close-about-window');
})

linkGithub.addEventListener('click', function() {
  shell.openExternal("https://github.com/cesarramos95");
})