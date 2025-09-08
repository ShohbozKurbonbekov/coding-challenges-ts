/**
 ### - Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 
### - Solution Description - there is my easy and clean solution below. 
Well, so that the returned function  can accept as many as arguments, there i am using rest "..." operator. In addition to that, i am making types safety as well for better perfermance and readability.
*
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/apply-transform-over-each-element-in-array/submissions/1755623498/)
 */

const createHelloWorld =
  (): ((...args: any[]) => string) =>
  (...args: any[]) => {
    return "Hello World";
  };

const f = createHelloWorld();
console.log(f([]));

const f2 = createHelloWorld();
console.log(f2({}, null, 42));
