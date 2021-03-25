const { ipcRenderer } = require('electron');
const moment = require('moment');

let seconds;
let timer;
let durationCourse;

module.exports = {
  start(e) {
    durationCourse = moment.duration(e.textContent);
    seconds = durationCourse.asSeconds();
    clearInterval(timer);
    timer = setInterval(() => {
      seconds++;
      e.textContent = this.convertSecondsToHourFormat(seconds);
    }, 1000);
  },

  stop(course) {
    clearInterval(timer);
    let studyDuration = this.convertSecondsToHourFormat(seconds);

    ipcRenderer.send('stopped-course', course, studyDuration);
  },

  convertSecondsToHourFormat(seconds) {
    return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
  }
}