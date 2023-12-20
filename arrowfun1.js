/* syntax:
//1.
() => expression
//2.
(param1,paramN) => expression
//3.
() => {
  statements
}
//4.
(param1,paramN) => {
  statements
}
*/

//codes:
//normal func
// function abhi() {}

//simple arrow fun syntax
//remove function abhi and add => in between braces
/*
() => {
  console.log("Hi hello");
};
*/

//assign with other
// const abhi = () => {
//   console.log("HEllo hi");
// };
// abhi();

const square = (num) => num * num;
console.log(square(4));

//OR BY
const cube = (number) => {
  return number * number;
};
console.log(cube(5));
