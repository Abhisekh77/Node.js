//synchronous programming:
/*
console.log("start execution");
console.log("execute execution");
console.log("end execution");
//lagatar execute hunxa
*/

//asynchronous programming : pipelining concept, eeuta nakuri arko execute hunxa
/*
console.log("start execution");

setTimeout(() => {
  console.log("execute execution");
}, 3000);
//3 second = 3000ms

console.log("end execution");
*/

//tricky program
/*
let a = 10;
let b = 5;

setTimeout(() => {
  b = 20; //output will be 15, since it will override later
}, 3000);
console.log(a + b); //o/p 30 naaera 15 aayo, so it is drawback of asynchronous programming
//solution for handling to get actual output are by promises and call back method and async await method
*/

//handling asynchronous programming using promises
let a = 10;
let b = 5;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
