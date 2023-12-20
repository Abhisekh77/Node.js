const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "forfile");
//to see file address
// console.log(dirPath);

//to  create  file
fs.writeFileSync("helloabhi.txt", "a single hello abhi text  file is here");

//to create 5 files at same time
// for (i = 0; i < 5; i++) {
//   fs.writeFileSync("hello" + i + ".txt", "A simple text file is created here");
// }

//to create 5 file at required folder directory
for (i = 0; i < 5; i++) {
  fs.writeFileSync(
    dirPath + "hello" + i + ".txt",
    "A simple text file is created here"
  );
}
