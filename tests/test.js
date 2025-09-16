const ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, val) => acc + val, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.join(",")}]`;
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
const obj3 = new ArrayWrapper([23, 98, 42, 70]);
const obj4 = new ArrayWrapper([]);
const ob5 = new ArrayWrapper([]);
console.log(obj1 + obj2);
console.log(String(obj3));
console.log(obj4 + ob5);
