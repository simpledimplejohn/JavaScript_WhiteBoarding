function test (string) {
  for(let i = 0; i < string.length; i ++) {
    for(let j= 0; j < string.length; j ++) {
      //console.log(j)
      if(i !== j){
        console.log( i, j)
      } 

    }

  }
  return string

}

console.log(test("this long"))