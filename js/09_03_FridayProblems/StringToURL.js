/*
Question #1: Turning Strings to URLs
URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example

Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"
*/


//SOLVED
function url(string) {
  let stringArray = []

  
  for(i = 0; i < string.length; i ++) {
    if(string[i] !== " ") {
      stringArray.push(string[i])
    }
    else {
      stringArray.push("%20")
    }
  }

  return stringArray.join('')
}

console.log(url("Jasmine Ann Jones"), "['Jasmine%20Ann%20Jones']")
