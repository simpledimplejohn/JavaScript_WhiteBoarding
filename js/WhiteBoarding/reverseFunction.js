// how to reverse a number in javascript

function testing(multiple) {
  console.log(multiple)
  let revMultiple = parseFloat(multiple.toString().split('').reverse().join(''))
  console.log(revMultiple)
}
testing(987654321)