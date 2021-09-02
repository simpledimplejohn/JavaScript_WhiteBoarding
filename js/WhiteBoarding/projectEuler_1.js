/*
https://www.learnhowtoprogram.com/react/functional-programming-with-javascript/whiteboard-practice-project-euler

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

/*
Steps
find multiples of three
push into an array
find multiples of five
push these into the same array
loop through the array and sum all the integers
return the value
*/

console.log("array added")
function add1(num) {
  let numAdded = 0
  // console.log("runs")
  let thousandArray = []
  for (let i = 1; i <= num; i ++) {
    if(i % 5 === 0) {
      thousandArray.push(i)
    } else if (i % 3 === 0) {
      thousandArray.push(i)
    } else {
      thousandArray.push(0)
    }
  } 

  for (let j = 0; j < thousandArray.length; j ++) {
    numAdded += thousandArray[j]
  }
  console.log(thousandArray)
  return numAdded

}
console.log("add array add1(10)", add1(10), "[23]")

// simpler way, just count if and add


console.log("no array")
function add2(num) {
  let numAdded = 0
  // console.log("runs")
  //let thousandArray = []
  for (let i = 0; i < num; i ++) {
    if(i % 3 === 0) {
      numAdded += i
    } else if (i % 5 === 0) {
      numAdded += i
    }
  }
  return numAdded

}
console.log("add(1000)", add2(1000), "[233169]")
console.log("add(10)", add2(10), "[23]")