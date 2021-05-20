const fs = require("fs");
const cron = require("node-cron");
cron.schedule("* * * * *", () => {
  fs.appendFile("./file.txt", "\n", function (err) {
    if (err) throw err;
  });
  var current = new Date();
  var lyrics = "Current local time is:" + current.toLocaleTimeString();
  console.log(lyrics);
  fs.appendFile("./file.txt", lyrics, function (err) {
    if (err) throw err;
  });
});