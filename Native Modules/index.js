const fs = require("fs");

fs.writeFile("message.txt", "Hello from prabhakar", (err) => {
  if (err) throw err;
  console.log("THis file has been saved!.");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
