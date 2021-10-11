//Leet code sort without using sort
// https://leetcode.com/problems/sort-colors/

function sortColors(nums) {
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i]
    let j = i - 1
    while(j > 0) {
      if(num < nums[j]) {
        nums[j+1] = nums[j]
        nums[j] = num
      } 
      j--
    }
  }
  return nums
}

console.log(sortColors([1,3,2,1,0,3]))