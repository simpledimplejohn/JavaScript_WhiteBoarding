/*
Question #2: Array Deduping
Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example

Input: [7, 9, "hi", 12, "hi" 7, 53]

Output: [7, 9, "hi", 12, 53]
*/

function deDupArray(array) {
  let obj = {};

  let outPutArray = [];

  for(let index of array) {
    if (!obj[index]) {
      obj[index] = 1
    } else {
      obj[index] ++
    }
  }
  
  for(let key in obj) {
    if(key > 1) {
      outPutArray.push(key)
    }
  }

  return outPutArray
}

console.log(deDupArray([7, 9, "hi", 12, "hi", 7, 53]))
console.log(deDupArray([5, 5, "hi", 5, "hi", 7, 53, 53, 1]))
