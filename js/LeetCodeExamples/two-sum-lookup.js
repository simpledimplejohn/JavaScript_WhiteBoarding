/*
https://leetcode.com/problems/two-sum/
This time with a lookup 
if (key in obj) // is my key in object?


for (const key in obj/ARRAY) // looping through
for (const value of ARRAY) // loop through values

*/

var twoSum = function(nums, target) {
  const obj = {};
  const outputArray = [];

  for (let i = 0; i < nums.length; i++) { 
    if ((target - nums[i]) in obj) { 
      console.log("Look Here! ",target ," - ", nums[i], " in the obj: ", " ",target-nums[i]," ", obj[target-nums[i]])
      outputArray.push( obj[target - nums[i]], i )
    }
    obj[nums[i]] = i
  }
  return outputArray
}

// O(N) 1000 operations 1000 size array
// hash table = O(1)
// 
// O(n^2) 1,000,000 operations

/*
{
  2: anything
}
if ((target - myNum) in obj)
add num to the obj
*/

//test
// default solution, no complication
console.log(twoSum([2, 7, 11, 15], 9), "[0, 1]")

// number that can be added to itself for solution, incorrectly
//console.log(twoSum([3,2,4], 6), "[1, 2]")
// number that can be added to itself, but in different places so that's okay
//console.log(twoSum([3,3], 6), "[0, 1]")
// adding up to 0
//console.log(twoSum([0,0], 0), "[0, 1]")
// all negatives, negative target
//console.log(twoSum([-2, -5, -3], -7 ), "[0, 1]")
// mixed negative/positive for negative target
//console.log(twoSum([-2, 1, -3], -1 ), "[0, 1]")

//console.log(twoSum([2, 7, 11, 8, 5, 3], 8), "[4, 5]")