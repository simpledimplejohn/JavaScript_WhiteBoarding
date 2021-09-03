function fub(n) {
  array = [];
  if(n === 0) {
    return []
  }
  else {
    for(let i = 1; i<n; i++) {
      array.push(getFibNum(i))
    }
  }

  function getFibNum(num) {
    if (n === 1) {
      return 1
    }
    else if (n === 2) {
      return 1
    } else {
      array.push (getFibNum(n-1) + getFibNum(n-2))
    }    
  }

  //needs two values to start the equation

}

