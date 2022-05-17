let Mic = require("./Mic");
let mic = new Mic();
const fs = require("fs");
var player = require("play-sound")((opts = {}));

let micStream = mic.startRecording();

var myWritableStream = fs.WriteStream("output.raw");

micStream.pipe(myWritableStream);
mic.on("info", (info) => {
  console.log(info);
});
mic.on("error", (error) => {
  console.log(error);
});
const audio = "masa_ward.mp3";

setTimeout(() => {
  try {
    mic.stopRecording();
    player.play(audio, function (err) {
      if (err) throw err;
    });
  } catch (e) {}

  // $ mplayer foo.mp3

  // access the node child_process in case you need to kill it on demand
}, 5000);
