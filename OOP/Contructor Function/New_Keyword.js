//! Constructor Functions => New Keyword
//! Cap the first letter indicated use New
//! Every Function in JS gets automatically a prototype property
/**
 * 1. the used the NEW keyword it automatically returns an new Elf object
 * 2. it create THIS elf constructor
 * 3. when function is called, new execution context is created
 * 4. THIS variable attached to arguments
 * 5. NEW keyword change THIS is pointing to when new execution context is created
 * 6. without NEW! we are not created new object, not return new object, not assigning THIS to the object that calls us
 */

function Elf(name, weapon) {
  console.log('this', this);
  //return Elf{} Elf{} they are empty without property
  this.name = name;
  this.weapon = weapon;
  console.log('this', this);
  //return Elf {name: 'peter', weapon: 'Bow'}
}
//* create attack or ANY new function in prototype chain for Elf
//! because this is a constructor function => this prototype property we can attach things to
//! CANNOT use arrow function => lexical scope
//! regular function => dynamic scope => who calls the function
Elf.prototype.attack = function  (){
  return 'attack with ' + this.weapon;
};

//! peter or sam didn't have the attack function
//! they will look up the chain __proto__ => prototype

const peter = new Elf('Peter', 'Bow');
console.log(peter.name);
console.log(peter.attack());
//Peter attack with Bow

console.log(peter.__proto__);
//! return Elf {attack: [function]};

console.log(peter.prototype);
//! return undefined => because peter is not a function. peter is only an object. Only function has access to prototype

//* creat as many Elf as you want
const sam = new Elf('Sam', 'Long-Bow');
console.log(sam.name);
console.log(sam.attack());
//Sam attack with Long-Bow

//! Problem with function inside function
Elf.prototype.build = function () {
  const self = this;//create reference with THIS
  function building () {
    return self.name + ' builds a house';
  }
  return building();
};

console.log(peter.build());
//! return undefined => function inside of methods THIS is not assign to Elf object.
/** solution
 * 1. const self = this;//create reference with THIS
 * 2. or use building.bind(this) return peter.build()()
 */

