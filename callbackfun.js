const calculate = (a, b, operation) => {
  return operation(a, b);
};

//type 1
const add = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});

console.log(add);

//type 2
const subtract = (a, b) => a - b;
const subresult = calculate(10, 9, subtract);
console.log(subresult);

//type 3
function multiply(a, b) {
  return a * b;
}
const multipres = calculate(5, 4, multiply);
console.log(multipres);
