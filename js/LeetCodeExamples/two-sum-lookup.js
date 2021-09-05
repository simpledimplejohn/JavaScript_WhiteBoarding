/*
https://leetcode.com/problems/two-sum/
This time with a lookup 

NOTE 
i = 0
j = 1
fixes duplication
*/

var twoSum = function(nums, target) {
  const obj = {};
  let outputArray = [];
  for(let i = 0; i < nums.length; i ++) {
    for(let j = 0; j < nums.length; j ++ ) {
      if(nums[i] !== nums[j]) {
        console.log(i, nums[i], j, nums[j])
      }
    }
  }

  

  return outputArray
}

//test
console.log(twoSum([2, 7, 11, 15], 9), "[0, 1]")
console.log(twoSum([3,2,4], 6), "[1, 2]")
console.log(twoSum([3,3], 6), "[0, 1]")