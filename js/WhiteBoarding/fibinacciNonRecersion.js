function fib(n) {
  array = []
  if( n<=0) {
    return [];
  } else if (n ===1) {
    return [0]
  }
  else if (n ==2) {
    return [0,1]
  }
  else {
    array = [0,1]
    for(let i=2; i<n; i++) {
      array.push(array[i-1] + array[i-2]) //!!!!
    }
    return array
  }
}
console.log(fib(9))