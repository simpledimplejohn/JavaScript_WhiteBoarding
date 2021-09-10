// More important loops besides the for loop

//foreach works with Arrays
function forEachArray(array) {
  array.forEach(function(element) {
    if (array.includes('c')){
      console.log(element)
    }
  })
  return array
}

console.log(forEachArray(['a','b','c','d']))
