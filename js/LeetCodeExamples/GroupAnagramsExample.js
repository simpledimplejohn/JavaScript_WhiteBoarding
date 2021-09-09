// Given an array of strings regroup anagrams
// input strs = ["eat","tea","tan","ate","nat", "bat"]
// output [["bat"],["nat","tan"],["ate","eat","tea"]]

//put in an object 

var groupAnagrams = function(strs) {
  const output = []
  for(let i=0; i<strs.length; i++) {
    for(let j=i+1; j < strs.length; j++) {
      
      let element1 = strs[i].split("").sort().join("")
      let element2 = strs[j].split("").sort().join("")
      console.log(element1, element2)
      if (element1 === element2) {
        output.push([strs[i], strs[j]])
      }else {
        output.push([strs[i]])
      }
      
    }
  }
  return output
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat", "bat"]))