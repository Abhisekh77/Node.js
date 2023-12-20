const arr = [10, 4, 7, 3, 2, 34, 6, 3];

let result = arr.filter((item) => {
  //   return item === 3;
  return item >= 7;
});
console.log(result);
