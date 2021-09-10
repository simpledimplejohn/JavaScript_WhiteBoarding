// https://leetcode.com/problems/move-zeroes/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]

function moveZeros(array) {
  let zerosCount = 0;
  for(i = 0; i < array.length; i++) {
    if(array[i] === 0) {               // [0,0] 
      array.splice(i, 1)
      zerosCount ++                    // [] zerosCount 2
    }
  }
  for(i = 0; i < zerosCount; i++) {            // add back my two zeros
    array.push(0)
  }
  return array  
}

nums array [1,3,12,0,0]