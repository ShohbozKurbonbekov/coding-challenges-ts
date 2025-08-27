/**
 ### - Problem description -
 * Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

- If the length of the array is 0, the function should return init.

- Please solve it without using the built-in Array.reduce method.


### - Solution Description - 
*  using reduce() method would be a great solution, but according to what we are instructed, we need another solid way to implement the challenge.

- see the  technique below ↓


### -  Here is the link to my solution in Leetcode platform - 
(https://leetcode.com/problems/array-reduce-transformation/submissions/1749695486/)

 */

// const nums = [1, 2, 3, 4];
// const init = 0;
// const sum = (init: number) => {
//   let accumulator = 0;

//   for (const num of nums) {
//     accumulator += num;
//   }
//   return accumulator;
// };
// console.log(sum(init));

const reduce = (
  arr: number[],
  fn: (acc: number, curr: number) => number,
  init: number
): number => {
  let accumulator: number = init; // 0 => 1 => 3 => 6 =>

  arr.forEach((num: number) => {
    accumulator = fn(accumulator, num);
  });
  return accumulator;
};

console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0));
console.log(reduce([], (acc, curr) => acc + curr, 25));

console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr * curr, 100));
