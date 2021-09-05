/*
https://leetcode.com/problems/reverse-integer/

x = 123
output = 321

edge cases, handle negative number

*/

reverseInt = function(x) {
  let string = x.toString()
  let storeNeg = ""
  let stringArray = []
  for(let i = string.length -1; i >= 0; i --) {
    if (string[i] === "-" ) {
      storeNeg = "-"
    } else {
    stringArray.push(string[i])
    }
  }
  newInt = stringArray.join('')
  let newNewInt = parseInt(newInt)
  newNewInt = storeNeg + newNewInt
  if(newNewInt >= 2147483647 || newNewInt <= -2147483648) {
    newNewInt = 0;
  }
  return newNewInt

};

console.log(reverseInt(123), "[321]")
console.log(reverseInt(1471), "[1741]")
console.log(reverseInt(-1471), "[-1741]")
console.log(reverseInt(-1563847412), "[0]")
console.log(Math.pow(-2, 32), 2 ** 31 -1)