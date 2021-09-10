// how to use a lookup table in javascript
// first step-
//  what should be your KEY?
//  what should be your Variable?

// ADD TO A LOOKUP TABLE:

// FIRST EXAMPLE FOR LOOP
// KEY = Num, Int = string char
function stringToObj(string){
  obj = {}
  for(i = 0; i < string.length; i++) {
    obj[i] = string[i]
  }
  return obj
}
console.log(stringToObj("abc"))

// SECOND EXAMPLE FOR OF
function forOfLoo(string) {
  let obj = {}
  for (let char of string) {
    
  }
}

