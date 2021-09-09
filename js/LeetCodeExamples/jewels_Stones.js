/*
https://leetcode.com/problems/jewels-and-stones/
*/

function jewelFinder(jewels, stones) {
  let output = 0;
  const jewelArray = jewels.split("");
  const stonesArray = stones.split("");
  jewelArray.forEach(function(stone) {
    if (jewelArray.includes(stone)) {
      output++
    }
  })
  return output;

}

console.log(jewelFinder("Aa", "aAAbbbb"))