let Mic = require('./Mic');
let mic = new Mic();
const fs = require("fs")
let micStream = mic.startRecording();

var myWritableStream = fs.WriteStream('output.raw');


micStream.pipe( myWritableStream );
mic.on('info', (info) => {
	console.log(info);
});
mic.on('error', (error) => {
	console.log(error);
});

 setTimeout(() => {
     mic.stopRecording();
}, 10000);