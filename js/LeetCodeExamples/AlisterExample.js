/** Maximum Number of Words You Can Type
 *  https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 * 
 * Edited problem, can I type all of the words?
 * Given a string of broken letters
 * Can I type the provided text/sentence at all?
 * string into object with { char, possition }
 * for loop
 * for 0 if broken letter is in there
 * false
 * else 
 * 
 */

/** 
 * function canTypeSentence()
 * Input: text = "hello world", brokenLetters = "ad"
 * Output: false
 * 
 * Input: text = "hello there", brokenLetters = "ad"
 * Output: true
 * 
 * Input: text = "abc", brokenLetters = "d"
 * Output: true
 * 
 * Input: text = "abc", brokenLetters = "b"
 * Output: false
 * 
 * Constraints:
 * brokenLetters can contain up to every english letter
 * no uppercase character anywhere
 */

var brokenKeys = function (text, brokenLetters) {
  const obj = {}

  for(let i = 0; i < brokenLetters.length; i++) {
    obj[brokenLetters[i]] = i
    // {b:0}
  }

  // text = "abc", brokenLetters "b"
  for(let i = 0; i < text.length; i++) { // a, b, c
    if(text[i] in obj) {
      return false
    }
  }
  return true
}

// example using .includes
// includes says whether value exists anywhere in string/array
// performance impact, it's like a for loop!
var brokenKeysAlt2 = function (text, brokenLetters) {
  for (let i = 0; i < text.length; i++) {
    if (brokenLetters.includes(text[i])) return false
  }

  return true
}

// functional version!
var brokenKeysAlt3 = function (text, brokenLetters) {
  // takes a first argument, known as accumulator
  // this is passed between every sucessive call in the inner function
  // then, do whatever you like, and return an updated version of that
  const obj = brokenLetters.split('').reduce((obj, letter, i) => {
    return {
      ...obj,
      [letter]: i,
    }
  }, {})

  // every is a array helper method that'll run the given function on every value
  // as long as every function returns true, it's true!
  // if any return false, it's false

  // if letter is NOT in object, return true
  return text.split('').every((letter) => !(letter in obj))
}

console.log(brokenKeys("hello world", "ad"), "[false]")
console.log(brokenKeys("hello there", "ad"), "[true]")
console.log(brokenKeys("abc", "d"), "[true]")
console.log(brokenKeys("abc", "b"), "[false]")

