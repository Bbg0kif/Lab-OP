"use strict";
const fn = () => {
  const constobj = {
    name: "Sasha",
  };
  let letobj = {
    name: "Bbg",
  };
  constobj.name = "Bbg";
  letobj.name = "Sasha";
  letobj = { name : "Oleksandra" };
  console.dir ({constobj, letobj});
};
fn();
module.exports = {fn};