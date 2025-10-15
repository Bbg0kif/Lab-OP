"use strict";
function store(value) {
  return function() {
    return value;
  };
}
const read = store(5);
const value = read();
console.log(value);
const user = { name: "John", age: 30 };
const readObject = store(user);
console.log(readObject());
module.exports = { store };