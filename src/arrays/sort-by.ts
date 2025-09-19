/**
 ### - Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

### - Solution Description - there is my easy and clean solution below.

### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/sort-by/submissions/1775551863/)
 */
const sortBy = function (arr: any[], fn: (val: any) => number): any[] {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// Test - 1
console.log(sortBy([5, 4, 1, 2, 3], (x) => x));

// Test -2
console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x));
// Test - 3
console.log(
  sortBy(
    [
      [3, 4],
      [5, 2],
      [10, 1],
    ],
    (x) => x[1]
  )
);
