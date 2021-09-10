/*
MOVE ZEROS
https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
*/

//STEPS
//input an array
//output an array

// function MoveZeros(array) {
//   let zeroCount = 0
//   for(i = 0; i < array.length; i++){
//     if(array[i] === 0) {
//       array.splice(i,1)
//       zeroCount ++
//       console.log('check', i, zeroCount)
//     } else {
//       console.log("else!!",i)
//     }
//     console.log(i)
//   }
//   for(i=0; i<zeroCount; i++){
//     array.push(0)
//   }
//   return array
// }

function MoveZeros(array) {
  let zeroCount = 0
  array.forEach(function(element) {
    if(element === 0) {
      array.splice(array[element],1)
      zeroCount ++
    }
  })
  return array
}

console.log(MoveZeros([0,1,0,3,12]))
console.log(MoveZeros([0,0,1]))