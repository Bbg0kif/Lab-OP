"use strict";
const range = (start = 15, end = 30) => {
  const length = end - start;
  if (length < 0) return;
  const arr = [];
  for (let i = start; i <= end; i++){
    arr.push(i);
  }
return arr;
};
const array = range(15, 30);
console.log(array);
module.exports = {range};