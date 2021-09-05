// jens answer

function checkUnique(string) {
  const obj = {};
  let bool = true;

  for (let char of string) {
    if (!obj[char]) {
      obj[char] = 1;
    }
    else obj[char]++
  }

  for(let key in obj) {
    if(obj[key] > 1) {
      bool = false
    }
  }
  return bool
}

console.log(checkUnique("hello"))