/*
Question #3: Compressing Strings
Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example

Input: "aaabccdddda"

Output: "a3b2c4da"
*/

function compress(string) {
  stringArray = []
  compressArray = []
  counter = 0
  for (i = 0; i < string.length; i ++) {
    stringArray.push(string[i])
  }
  for(j =0; j < stringArray.length; j ++) {
    if(stringArray[j] === stringArray[j+1]) {
      counter += 1
      console.log(stringArray[j], " ", counter)  
    } else {
        compressArray.push(stringArray[j])
        compressArray.push(counter)
        counter = 0
    }
  }
  return compressArray.join('')
}

console.log(compress("aaabccdddda"))