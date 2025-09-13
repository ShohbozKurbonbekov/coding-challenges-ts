/**
 ### - Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

### - Solution Description - there is my easy and clean solution below. 
### - Here is the link to my solution in Leetcode platform - (https://leetcode.com/problems/check-if-object-instance-of-class/submissions/1769091336/)
 */

const checkIfInstanceOf = (value: any, Class: any): boolean => {
  if (
    value === null ||
    value === undefined ||
    Class === null ||
    Class === undefined
  )
    return false;

  if (typeof value !== "object" && typeof value !== "function") {
    value = Object(value); // Object(number or string)
  }

  let proto = Object.getPrototypeOf(value); // Dog.prototype => Animal.prototype

  while (proto !== null) {
    if (proto === Class.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

// Test 1
class Date {}
console.log(checkIfInstanceOf(new Date(), Date));

// Test 2
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));

// Test  3
class Date2 {}
console.log("---------------");
console.log(checkIfInstanceOf(Date2, Date2));

// Test 4
console.log(checkIfInstanceOf(5, Number));
console.log(checkIfInstanceOf("hello world", String));
