/**
 ### - Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map



### - Solution Description - there is my easy and clean solution below. 
So, i am using fn callback function to iterate each of the array elements.  while looping over the array, the function is getting the indexes and the elements of the array as args,   the returned result is being stored in the new array.
*
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/1755623498/)
 */

const map = function (
  arr: number[],
  fn: (n: number, i: number) => number
): number[] {
  const newArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]!, i));
  }

  return newArr;
};

console.log(map([1, 2, 3], (n, i) => n + 1));
console.log(map([1, 2, 3], (n, i) => n + i));
console.log(map([10, 20, 30], (n, i) => 42));
