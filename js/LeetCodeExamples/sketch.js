function findNumbers(nums) {
  let counter = 0;
  numsString = nums.toString();
  for(let num of numsString) {
    if (num.length % 2 === 0) {
      counter ++
    }
  }
  return counter;
}
console.log(findNumbers([1234,4567,9999,11]))