/**
 ### - Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable..


### - Solution Description - 
* In my solution for this problem, i have used new Promise() to wrap it so that there is a waiting moment in the task. 


### -  Here is the link to my solution in Leetcode platform - 
(https://leetcode.com/problems/sleep/submissions/1750809554/)

 */

async function sleep(millis: number) {
  return new Promise((resolve, reject) => {
    if (millis < 0) {
      reject("Please insert a positive number");
    } else {
      setTimeout(resolve, millis);
    }
  });
}
let t = Date.now();

// test 1
sleep(100)
  .then(() => console.log(Date.now() - t))
  .catch((error) => {
    console.log(error);
  }); // 100

// test 2
sleep(200)
  .then(() => console.log(Date.now() - t))
  .catch((error) => {
    console.log(error);
  }); // 200

// test 3
sleep(-500)
  .then(() => console.log(Date.now() - t))
  .catch((error) => {
    console.log(error);
  }); // 200
