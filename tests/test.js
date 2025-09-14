Array.prototype.last = function () {
  return this.length > 0 ? this.at(-1) : -1;
};

console.log([1, 2, 3, 4].last());
console.log([].last());
