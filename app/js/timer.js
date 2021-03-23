const moment = require('moment');
let seconds;
let timer;

module.exports = {
  start(e) {
    let time = moment.duration(e.textContent);
    seconds = time.asSeconds();
    clearInterval(timer);
    timer = setInterval(() => {
      seconds++;
      e.textContent = this.convertSecondsToHourFormat(seconds);
    }, 1000);
  },

  stop() {
    clearInterval(timer);
  },

  convertSecondsToHourFormat(seconds) {
    return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
  }
}