/*
Question #4: Checking for Uniqueness
Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

Example

Input: "hello"

Output: false

Input: "copyright"

Output: true
*/

function run(string) {
  
  let dict = {};
  let count = 0;
  let bool = false 
  for (let char of string) {
    if(dict[char] !== 1) {
    dict[char] = 1
    } else if (dict[char] === 1) {
      dict[char] +=1
    }
  }
  
  console.log(dict)

  for (let char in dict) {
    if(dict[char] > 1) {
      bool = true
    } 

    //console.log(`${property}: ${dict[property]}`)
    
  }
  return bool
}
console.log(run("helo"), "[false]")
console.log(run("hello"), "[true]")
