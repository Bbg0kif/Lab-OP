"use strict";
const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === "function") {
       names.push ([name, fn.length]);
  }
}
return names;
};
const obj = {
  m1: (x) => [x],
  m2: function (x, y) {
    return [x, y];
   },
   m3(x, y, z) {
    return [x, y, z];
  },
property: "not a function",
};
console.log (methods (obj));
module.exports = { methods };