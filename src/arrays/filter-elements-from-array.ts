/**
 ### - Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
1. arr[i] - number from the arr
2. i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

! Please solve it without the built-in Array.filter method.

### - Solution Description - there is my easy and clean solution below. So as you can see,  i am using this "!" to tell typscript  this value is not gonna be undefined out there.
*
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/filter-elements-from-array/submissions/1753124728/)
 */

const filter = function (
  arr: number[],
  fn: (n: number, i: number) => boolean | number
): number[] {
  const newArray: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]!, i)) newArray.push(arr[i]!);
  }
  return newArray;
};

console.log(filter([0, 10, 20, 30, 40], (n) => n > 10));
console.log(filter([1, 2, 3], (n, i) => i === 0));
console.log(filter([-2, -1, 0, 1, 2], (n, i) => n + 1));
