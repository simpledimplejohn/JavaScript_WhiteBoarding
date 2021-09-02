/*
REMEMBER OBO

IF YOU ARE LOOPING THROUGH AN ARRAY
USE i = 0; i < array.length; i ++

IF YOU ARE LOOPING THROUGH A INTEGER
USE i = 1; i <= num; i ++

*/

//this script is to test for OBO erros
// regular integers and arrays need a different for loop because arrays start at zero and integers start at 1

// testing i < 10
function forLoop1(num) {
  let numArray = []
  for (i = 0; i < num; i ++) {
    console.log(i)

  }
}

console.log("using i <= 10 gives:")
console.log(forLoop1(10))
//returns 0 - 9 or 10 numbers

function forLoop2(num) {
  let numArray = []
  for (i = 0; i <= num; i ++) {
    console.log(i)

  }
}

console.log("using i <= 10 gives:")
console.log(forLoop2(10))
// returns 0 - 10 or 11 numbers

//Now push 10 numbers to an array
//using i < 10

function forLoop3(num) {
  let numArray = []
  for (i = 0; i < num; i ++) {
    numArray += i

  }
  return numArray
}

console.log("using i <=10 gives:")
console.log(forLoop3(10))

