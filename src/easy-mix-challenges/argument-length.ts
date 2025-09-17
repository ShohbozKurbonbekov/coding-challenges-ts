/**
 ### - Problem description -
 *  Write a function argumentsLength that returns the count of arguments passed to it.
### -  Here is the link to my solution in Leetcode platform - 
(https://leetcode.com/problems/return-length-of-arguments-passed/submissions/1774406631/)

 */
const argumentsLength = function (...args: any[]) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3
