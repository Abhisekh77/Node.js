const a = [2, 5, 1, 6, 4, -4, -6, -3, 9.5];

const firstNeg = (num) => {
  return num < 0;
};

// 1.find
// const result = a.find(firstNeg);
// console.log(result);

//2. findIndex
// const result = a.findIndex(firstNeg);
// console.log(result);

//3. filter
// const result = a.filter(firstNeg);
// console.log(result);

//4. Foreach

a.forEach((num) => {
  console.log("array num", num);
});
