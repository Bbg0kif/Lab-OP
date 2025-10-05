"use strict";
const range0dd = (start, end) => {
  const lenght = end - start;
  if (lenght < 0) return;
  const arr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0){
      arr.push(i);
    }
    }
return arr;
};
const array = range0dd(15, 30);
console.log(array);
module.exports = range0dd;