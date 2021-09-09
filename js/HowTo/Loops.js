// all the various loops we can make in javascript
// forward for loop

function forLoop(array) {
  let newArray = []
  for(let i = 0; i < array.length; i++){
    newArray.push(array[i])
    console.log(array[i], i)
  }
  return newArray
}

// to run forLoop() uncomment console.log below:
//console.log(forLoop(['a','b','c','d','e','f','g','h','i','j','k']))

function reverseFor(array) {
  let newArray = []
  for(let i = array.length - 1; i >= 0; i--) {
    //console.log(i)
    newArray.push(array[i])
  }
  return newArray
}
// to run reverseFor() uncomment console.log below:
//console.log(['a','b','c','d'])
//console.log(reverseFor(['a','b','c','d']))

//Double Four
//compare every 
// Given an array of strings regroup anagrams
// input strs = ["eat","tea","tan","ate","nat", "bat"]
// output [["bat"],["nat","tan"],["ate","eat","tea"]]

function
