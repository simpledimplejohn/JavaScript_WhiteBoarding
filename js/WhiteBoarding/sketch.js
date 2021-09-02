function palindromeFind1() {
  let high = 999
  let low = 100
  let multiple = 0
  let revMultiple = 0
  for (let i = high; i >= low; i --) {
    for (let j = high; j >= low; j --) {
      multiple = i * j
      revMultiple = parseInt(multiple.toString().split('').reverse().join(''))
      // console.log(multiple)
      // console.log(revMultiple)

      if(multiple === revMultiple) {
        console.log("works")
        return multiple

      } else {
        //console.log("there is none")
      }
    }
  }
}
console.log(palindromeFind1())