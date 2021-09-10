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

function reverseFor(string) {
  let newArray = []
  for(let i = string.length - 1; i >= 0; i--) {
    //console.log(i)
    newArray.push(string[i])
  }
  return newArray
}
// to run reverseFor() uncomment console.log below:
//console.log(reverseFor("abcde"), "['abcde']")

//The double for THREE examples
//FIRST--ALL 
function doubleForAll(string) {
  for(i=0; i < string.length; i ++) {
    for(j = 0; j < string.length; j ++) {
      console.log(i,j)
    }
  }
  return string
}
console.log(doubleForAll("abc"))

//SECOND--NOT SAME INITIAL, but REVERSES TRUE
function doubleForAllNoDup(string) {
  for(i=0; i < string.length; i ++) {
    for(j = 0; j < string.length; j ++) {
      if(i !== j){
        console.log(i,j)
      }
      
    }
  }
  return string
}
console.log(doubleForAllNoDup("abc"))

//THIRD
// this loop compares all elements in an array 
// without duplicating the initial element
// or without duplicating the reverse
function specialDoubleFor(string){
  for(let i = 0; i < string.length; i++){
    for(let j= i + 1; j < string.length; j++){
      console.log(i,j)
    }
  }
  return string
}
console.log(specialDoubleFor("abc"))

