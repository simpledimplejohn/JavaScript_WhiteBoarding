/*
https://leetcode.com/problems/two-sum/
Easy
Find out which two numbers in an array add up to the target
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

@param {number[]} nums
@param {number} target
@return {number[]}
*/

var twoSum = function(nums, target) {

  let newArray = []

  for(let i = 0; i < nums.length; i ++) {

    for(let j = 0; j < nums.length; j ++) {
      //console.log(nums[i], " + ", nums[j])
      if(i !== j) {
        if(nums[i] + nums[j] === target) {
          //newArray.push(i)
          //console.log(i, nums[i],j,nums[j])
          newArray.push(i)
        }
  
      }


    
    }
  }

  return newArray
};

// O(N^2) double for loop
// O(N) single for loop

//test
console.log(twoSum([2, 7, 11, 15], 9), "[0, 1]")
console.log(twoSum([3,2,4], 6), "[1, 2]")
console.log(twoSum([3,3], 6), "[0, 1]")


//double for loop
var doubleFor = function(nums, target) {

  let number = []

  for(let i = 0; i < nums.length; i ++) {

    for(let j = 0; j < nums.length; j ++) {
      console.log(nums[i], " + ", nums[j])
      if(nums[i] + nums[j] === target && i !== j) {
        number.push(i, j)       
      }

    
    }
  }

  return number
};