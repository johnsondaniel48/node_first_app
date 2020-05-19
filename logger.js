var url = "http://mylogger.io/log";
const EventEmitter = require("events");
//logger with basic features
// const emitter = new EventEmitter();
// function log(message) {
//   console.log(message);
//   emitter.emit("Transmitted");
// }
// module.exports = log;

//Logger with event
class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("Transmitted", { day: "19", month: "May" });
  }
}

module.exports = Logger;
