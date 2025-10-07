"use strict";
const compose = (...fns) => {
  for (const f of fns) {
    if (typeof f !== "function") 
    throw new Error("All arguments must be functions");
  }
  const errorHandler = [];
  const composed = (x) => {
    try {
      return fns.reduceRight ((result, fn) => fn(result), x);
    } catch (error) {
      errorHandler.forEach (handler => handler(error));
      return undefined;
    }
  };
  composed.on = (event, handler) => {
    if (event === "error") errorHandler.push(handler);
  };
  return composed;
};
module.exports = { compose };