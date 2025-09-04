/**
 ### - Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

1.increment() increases the current value by 1 and then returns it.
2.decrement() reduces the current value by 1 and then returns it.
3.reset() sets the current value to init and then returns it.

### - Solution Description - there is my easy and clean solution below. well, for this problem, as you can see there are two solutions, first one is made by creating a function, in the second one, class is used to give a easy and simple solution. And the second solution must be a better one for this issue. Therefor, it is both clear and easy to read
*
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/counter-ii/submissions/1759253803/)
 */

interface creatCounterValueType {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
}

const createCounter = function (init: number): creatCounterValueType {
  let counter = init;

  const reset = () => {
    counter = init;
    return counter;
  };

  const increment = () => {
    counter++;
    return counter;
  };
  const decrement = () => {
    counter--;
    return counter;
  };
  return {
    reset,
    increment,
    decrement,
  };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());

// class CreateCounter {
//   private counter: number;
//   private readonly initialValue: number;
//   constructor(init: number) {
//     this.counter = init;
//     this.initialValue = init;
//   }

//   public reset() {
//     this.counter = this.initialValue;
//     return this.counter;
//   }

//   public increment() {
//     this.counter++;
//     return this.counter;
//   }

//   public decrement() {
//     this.counter--;
//     return this.counter;
//   }

//   public get value() {
//     return this.counter;
//   }
// }

// const counter = new CreateCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// // test - 2
// const counter2 = new CreateCounter(0);
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.decrement());
// console.log(counter2.reset());
// console.log(counter2.reset());
// console.log(counter2.value);
