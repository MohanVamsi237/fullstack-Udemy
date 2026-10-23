const fs = require("fs");
const path = require("path");
const messageFilePath = path.join(__dirname, "msg.text");

fs.writeFileSync(messageFilePath, "hello world");
const data = fs.readFileSync(messageFilePath, "utf8");
console.log(data);
console.log("file created");