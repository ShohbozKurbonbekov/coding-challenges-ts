/**
 ### - Problem description -
 * Given an integer n, return a counter function. This      counter function initially returns n and then returns 1    more than the previous value every subsequent time it is   called (n, n + 1, n + 2, etc).


### - Solution Description - 
* So there I used closure to keep the initial value (n). And it stays across all function calls because it is held in the returned function


### -  Here is the link to my solution in Leetcode platform - 
(https://leetcode.com/problems/counter/submissions/1748420633/)

 */

const createCounter = (n: number): (() => number) => {
  let counter = n;
  return () => counter++;
};

const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
