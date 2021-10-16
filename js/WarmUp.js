// warm up exercises 
// Write an array
// forward and backward for loops through an array
// push to a lookup table and search
// 

// count array--count the number of items in this array lookup table!




function arrayCount(newArray) {
  let a = 0;
  let b = 0;
  let c = 0;
  newArray.forEach(function(element) {
    if(newArray[element] === 'a') {
      a ++;
    }
    console.log(a);
  })
}


console.log(arrayCount(['a','a','a','b','c','c']))