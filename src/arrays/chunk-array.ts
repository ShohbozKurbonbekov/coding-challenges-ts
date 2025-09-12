/**
 ### - Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.

### - Solution Description - there is my easy and clean solution below.

### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/chunk-array/submissions/1768024315/)
 */

const chunk = (arr: number[], size: number): number[][] => {
  const chunkedArr: number[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

// test 1
console.log(chunk([1, 2, 3, 4, 5], 1));

// test 2
console.log(chunk([1, 9, 6, 3, 2], 3));

// test 3
console.log(chunk([8, 5, 3, 2, 6], 6));

// test  4
console.log(chunk([], 1));
