// warm up exercises 
// Write an array
// forward and backward for loops through an array
// push to a lookup table and search
// 

// count array--count the number of items in this array lookup table!

let charArray = ['a', 'b', 'a', 'c', 'a', 'a', 'b', 'b']

let countObject = {
  'a':0,
  'b':0,
  'c':0
}

let a = 0
let b = 0
let c = 0

for(let char of charArray) {
  if(char === 'a') {
    a ++
  }
  if (char === 'b') {
    b ++
  }
  if (char === 'c') {
    c ++
  }
}

console.log((a/8)*100,(b/8)*100,(c/8)*100)