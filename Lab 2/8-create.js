"use strict";
const createUser = (name, city) => ({
  name,
  city,
});
console.log(createUser ("Marcus Aurelius", "Roma"));
module.exports = { createUser };
