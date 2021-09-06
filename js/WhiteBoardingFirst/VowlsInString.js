// return vowels in a string


let vowelArray = [ "a", "e", "i", "o", "u" ]
let count = 0

function vowelCounter (inputString) {
  for(let i = 0; i < inputString.length; i ++) {
    console.log(inputString[i])
    if (inputString.includes(vowelArray)) {
      count += 1
      console.log("count is ", count)
    }
  }
}

vowelCounter("abcdefjkiou")