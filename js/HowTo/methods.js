// .includes()
// .search()
// forEach()
// .split()
// .sort()
// .join()
// .push()
// .concat
// .pop
// .splice
// .filter

//Learn these methods today

//includes works on a string, returns a bool
function stringInclude(string) {
  return string.includes("world")
}
console.log(stringInclude("Hello world, welcome to the universe."), "[true]")

//search works on strings returns a number for location
function searchString(string) {
  return string.search("w")
}
console.log(searchString("Hello world, welcome to the universe."), "[6]")

//split returns an array split by spaces, commas, or another character
//spaces split
function splitSpaces(string) {
  let stringArray = string.split(" ")
  return stringArray
}
console.log(splitSpaces("how are you doing today"))

//char split
function splitChar(string) {
  let charArray = string.split("")
  return charArray
}
console.log(splitChar("foxbat"))

//sort Array.prototype.sort()
function sortArray(array) {
  array.sort();
  return array
}

console.log(['z','c','x','a','d'])
console.log(sortArray(['z','c','x','a','d']))

//join an array into a string
function joinArraySpaces(array) {
  return(array.join(" "))
}
console.log(['a', 'b', 'c','d'])
console.log(joinArraySpaces(['a', 'b', 'c','d']), 'join(" ")')

function joinArray(array) {
  return(array.join())
}
console.log(joinArray(['aa', 'bb', 'cc','dd']), "join()")

function joinArrayEmpty(array) {
  return(array.join(''))
}
console.log(joinArrayEmpty(['a', 'b', 'c','d']), '("")')

function joinArrayComma(array) {
  return(array.join(','))
}
console.log(joinArrayComma(['a', 'b', 'c','d']), '(",")')

//push adds to an array
function pushStringToArray(string) {
  let array = []
  for(let i = 0; i < string.length; i++) {
    array.push(string[i])
  }
  return array
}
console.log(pushStringToArray("abcde"), "abcde")

//Concat() add's one array to the end of another array
function concatArrays(array, array2) {
  return array.concat(array2)
}

console.log(concatArrays([1,2,3],[0,0,0]), "concat two arrays")

//.splice() REMOVE OR REPLACE property at a location

//Insert at location
function spliceInsert(array, num, char) {
  array.splice(num, 1, char)
  return array
}
console.log(spliceInsert(['a','b','c','d'], 1, 'x'))

//Replace splice(start, removeCount, what to replace with)
function spliceReplace(array, char) {
  array.splice(3, 1, char)
  return array
}
console.log(spliceReplace(['a','b','c','d'], 'x'))

//REMOVE
function spliceRemove(array, loc) {
  array.splice(loc, 1)
  return array
}
console.log(spliceRemove(['a','b','c','d'], 1))

