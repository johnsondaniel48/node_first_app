const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

//module export
// logger("hello");

// Built in Path Module
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// Built in OS Module
// var freeMemory = os.freemem();
// var totalMemory = os.totalmem();
// var hostName = os.hostname();
// var platform = os.platform();
// var uptime = os.uptime();
// var release = os.release();
// console.log(`free memory is : ${freeMemory}`);
// console.log(`total memory is : ${totalMemory}`);
// console.log(`the hostname is :${hostName}`);
// console.log(`the platform is :${platform}`);
// console.log(`uptime is:${uptime}`);
// console.log(`release : ${release}`);

// Built in FileSystem Module
// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./", function(err, files) {
//   if (err) console.log(`error is :${err}`);
//   else console.log(`result is : ${files}`);
// });

// fs.readdir("$", function(err, files) {
//   if (err) console.log(`error is :${err}`);
//   else console.log(`result is : ${files}`);
// });

// // events
// const emitter = new EventEmitter();

// //Register the event
// emitter.on("messageRaised", function(arg) {
//   console.log(`listening started! name: ${arg.name} age: ${arg.age}`);
// });
// //Raise an event
// emitter.emit("messageRaised", { name: "John", age: 32 });

// emitter.on("messageRaised2", function() {
//   console.log(`listening to messageRaised2`);
// });

// emitter.emit("messageRaised2");

// const eventNames = emitter.eventNames();

// console.log(`eventNames: ${eventNames}`);

// //testing events with object in the Logger file
// emitter.on("Transmitted", function() {
//   console.log(`listening started!`);
// });

// logger("logging");

//Events Logger Class
// const Logger = require("./logger");
// const loggerobj = new Logger();

// loggerobj.on("Transmitted", args => {
//   console.log(`values are ${args.day} , ${args.month}`);
// });

// loggerobj.log("new Message - Events Logger Class");

//http - create server
const http = require("http");
const server = http.createServer();

server.on("connection", socket => {
  console.log("new connection");
});

server.listen(3302);

console.log("listening on port 3000");
