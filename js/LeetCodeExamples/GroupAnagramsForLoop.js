
//compare every 
// Given an array of strings regroup anagrams
// input strs = ["eat","tea","tan","ate","nat", "bat"]
// output [["bat"],["nat","tan"],["ate","eat","tea"]]

function doubleFor(array) {
  let newArray = []
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      console.log(i, j)
      
    }
  }
  return newArray
  
}

console.log(doubleFor(["eat","tea","tan","ate","nat", "bat"]))