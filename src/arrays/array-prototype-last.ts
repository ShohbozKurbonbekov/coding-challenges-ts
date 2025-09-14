/**
 ### - Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
You may assume the array is the output of JSON.parse.

### - Solution Description - there is my easy and clean solution below. 
So, in order to make last() method work in any array elements, and to make sure there is no type error, I am making a change into the global type scope, by saying  I want to extend Array's built-in type so that all the array elements can use it. 
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/array-prototype-last/submissions/1770154811/)
 */

declare global {
  interface Array<T> {
    last(): number;
  }
}

Array.prototype.last = function (): number {
  return this.length > 0 ? this.at(-1) : -1;
};

console.log([1, 2, 3, 4].last());
console.log([].last());
