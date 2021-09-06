function compressString(string) {
  let nothing = ""
  if(isNaN(string)) {
    return nothing
  }
  let stringArray = []
  prevChar= 0;
  counter = 0;

  for(let char of string) {
    if(char === prevChar) {
      counter ++;
    } else if (char !== prevChar) {
      
    }
  }

}
console.log(compressString())
console.log(compressString("aaab"))
console.log(compressString("aaabbbcca"))