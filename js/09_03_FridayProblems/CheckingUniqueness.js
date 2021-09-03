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
  
  dict = {};
  
  for(let i = 0; i < string.length; i++) {
    dict[string[i]] = 1;
  }
  
  console.log(dict)

  for (let property in dict) {
    console.log(`${property}: ${dict[property]}`)
  }

}
run("hello")
