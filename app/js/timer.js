const moment = require('moment');
let seconds;

module.exports = {
  start(e) {
    let time = moment.duration(e.textContent);
    seconds = time.asSeconds();
    setInterval(() => {
      seconds++;
      e.textContent = this.convertSecondsToHourFormat(seconds);
    }, 1000);
  },

  convertSecondsToHourFormat(seconds) {
    return moment().startOf('day').seconds(seconds).format("HH:mm:ss");
  }
}