"use strict";
const ipToNumber = (ip = '127.0.0.1') => {
  const bytes = ip.split ('.').map (Number);
  return bytes.reduce ((total, byte, index) => {
    const shifts = 3 - index;
    return total + (byte << (shifts * 8));
  }, 0);
  };
  console.log (ipToNumber ('127.0.0.1'));
  console.log (ipToNumber ('10.0.0.1'));
  console.log (ipToNumber ('192.168.1.1.0'));
  console.log (ipToNumber ());
  module.exports  (ipToNumber );