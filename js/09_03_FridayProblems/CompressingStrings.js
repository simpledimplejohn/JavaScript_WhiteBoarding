/*
Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example

Input: "aaabccdddda"

Output: "a3b2c4da"
*/

function compress(string) {
  let obj = {};
  let outPutString = "";
  let outPutArray = [];

  for(let char of string) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char] ++
    }
  }
  for(let key in obj) {
    outPutArray.push(key);
    outPutArray.push(obj[key])
  }
  outPutString = outPutArray.join('')
  return outPutString
}

console.log(compress("aaabccdddda"))
console.log(compress("aabccddda"))