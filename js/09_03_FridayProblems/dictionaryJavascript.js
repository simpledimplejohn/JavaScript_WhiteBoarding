function run(string) {
  dict = {};
  for(i = 0; i < string.length; i++) {
    dict[i] = string[i];
  }
  return dict
}
console.log(run("hello"))