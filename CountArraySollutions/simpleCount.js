let answersArray = ['a', 'b', 'b', 'b', 'c', 'c']

let a = 0;
let b = 0;
let c = 0;

for (let i =0; i < answersArray.length; i ++){
  if (answersArray[i] === 'a') {
    a ++;
  }
  if (answersArray[i] === 'b') {
    b ++;
  }
  if (answersArray[i] === 'c') {
    c ++;
  }
}


console.log(a,b,c)