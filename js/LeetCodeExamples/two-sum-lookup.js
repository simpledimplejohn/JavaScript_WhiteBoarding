/*
https://leetcode.com/problems/two-sum/
This time with a lookup 

NOTE 
i = 0
j = 1
fixes duplication
*/

var twoSum = function(nums, target) {
  let number = []
  for(let i = 0; i < nums.length; i ++) {
    for(let j = 0; j < nums.length; j ++) {
      console.log(nums[i], " + ", nums[j])
      if(nums[i] + nums[j] === target && nums[i] != nums[j]) {
        number.push(i, j)

        
      }
    }
  }

  return number
};

//test
console.log(twoSum([2, 7, 11, 15], 9), "[0, 1]")
console.log(twoSum([3,2,4], 6), "[1, 2]")
console.log(twoSum([3,3], 6), "[0, 1]")