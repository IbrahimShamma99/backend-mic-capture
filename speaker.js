const fs = require("fs");
const lame = require("lame");
const Speaker = require("speaker");

const audio = "masa_ward.mp3";

fs.createReadStream(audio)
  .pipe(new lame.Decoder())
  .on("format", (format) => {
    this.pipe(new Speaker(format));
  });
