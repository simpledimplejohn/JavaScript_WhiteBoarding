/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

/*
inputs: two three digit numbers
multiplied together
find which ones are a palindrome


step one, whats the largest number of three digits multiplied:
999 * 999
largest number possible = 998001
100 * 100
smallest number possible = 10000

step two, find out if a number = a palindrome
899998 is probably the highest
900009 a palindrome
990099 a palindrome
997799 highest palindrome?
998001 highest number

step three, first operation attempt
count backwards from 999 - 100 and see if the number is a palindrome
*/

//console.log(999*999)
//console.log(100*100)

/*
how to see if its a palindrome
take the number, reverse it into a new number
compare to the old number, if true return
*/

function palindromeFind1() {
  let high = 999
  let low = 100
  let multiple = 0
  let revMultiple = 0
  for (let i = high; i >= low; i --) {
    for (let j = high; j >= low; j --) {
      multiple = i * j
      revMultiple = parseInt(multiple.toString().split('').reverse().join(''))
      if(multiple === revMultiple) {
        console.log("works")
        return multiple
      }
    }
  }
}
console.log(palindromeFind1())






