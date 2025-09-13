const checkIfInstanceOf = (value, Class) => {
  if (value === null || value === undefined) return false;

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
