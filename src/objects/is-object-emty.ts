/**
 ### - Given an object or an array, return if it is empty.
# An empty object contains no key-value pairs.
# An empty array contains no elements.
# You may assume the object or array is the output of JSON.parse.

### - Solution Description - there is my easy and clean solution below.

### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/is-object-empty/submissions/1775779715/)
 */

const isEmpty = function (obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
};
console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
