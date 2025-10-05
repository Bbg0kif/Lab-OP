'use strict';
const phonebook = {
  Sasha: '+9876543210',
  Bbg: '+1234567890',
};
const findPhoneByName = (name) => phonebook[name];
console.log(findPhoneByName('Sasha'))
module.exports = { phonebook, findPhoneByName };