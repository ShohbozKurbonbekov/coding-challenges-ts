/**
 ### - Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
1. When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
2. When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

### - Solution Description - there is my easy and clean solution below.

### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/array-wrapper/submissions/1773190545/)
 */

class ArrayWrapper {
  #nums: number[];
  constructor(nums: number[]) {
    this.#nums = nums;
  }

  public valueOf(): number {
    return this.#nums.reduce((acc: number, val: number) => acc + val, 0);
  }
  public toString(): string {
    return `[${this.#nums.join(",")}]`;
  }
}

const ob1 = new ArrayWrapper([1, 2]);
const ob2 = new ArrayWrapper([2, 3]);
const ob3 = new ArrayWrapper([]);
const result = (ob1 as any) + (ob2 as any);
console.log(result);
console.log(String(ob1));
