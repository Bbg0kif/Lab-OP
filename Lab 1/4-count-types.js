"use strict";
const myFunction = (arr) => {
  const counter = {};
  for (const value of arr) {
    const type = typeof value;
    const count = counter[type] || 0;
    counter[type] = count + 1;
  }
  return counter;
};
const array = [true, "hello", 5, 12, -200, false, false, "word"];
const result = myFunction(array);
console.log({ result });
module.exports = { myFunction };