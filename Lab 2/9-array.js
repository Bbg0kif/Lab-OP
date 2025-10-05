"use strict";
const phonebook = [
  { name : "Sasha", phone: "+9876543210" },
  { name : "Bbg", phone: "+1234567890" },
];
const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
  return 'Name not found';
};
console.log(findPhoneByName("Sasha"))
module.exports = { phonebook, findPhoneByName };