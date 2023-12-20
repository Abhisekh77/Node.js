const os = require("os");

//sabai infomration ko lagi
// console.log(os);

//RAM ko lagi
console.log(os.totalmem()); // in terms of bytes
//Total memory IN GB
console.log(os.totalmem() / (1024 * 1024 * 1024));

//Free memory in GB
console.log(os.freemem() / (1024 * 1024 * 1024));

//for host name
console.log(os.hostname());

//for platform
console.log(os.platform());

//user info
console.log(os.userInfo());
