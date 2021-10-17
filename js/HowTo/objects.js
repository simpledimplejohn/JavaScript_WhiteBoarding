//ES6 Class with constructor
class PotatoClass {
  constructor(name, eyes, color) {
    this.name = name;
    this.eyes = eyes;
    this.color = color;
    this.addEyes = function () {
      return ++this.eyes;
    };
  }
}
let newPotatoClass = new PotatoClass("Mrs Potato",5,"very brown");


//object constructors
function Potato(name, eyes, color) {
  this.name= name;
  this.eyes = eyes;
  this.color = color;
  this.addEyes = function() {
    return ++this.eyes;
  }
}

let newPotato = new Potato("Mr Potato", 9, "brown");

console.log(newPotato.eyes)
newPotato.addEyes();
console.log(newPotato.eyes)

// short form of making an object

let shortPotato = {
  eyes: 3,
  color: "brown",
  addEyes: function() {
    return ++this.eyes;
  }
}

console.log(shortPotato)

//long form to make an object

let longPotato = new Object();

longPotato.cooked = true;
longPotato.eyes = 3;
longPotato.color = "brown";
longPotato.addEyes = function() {
  return ++longPotato.eyes;
}

console.log(longPotato.eyes);
longPotato.addEyes();
console.log(longPotato.eyes);



