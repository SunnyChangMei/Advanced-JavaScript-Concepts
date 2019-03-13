//! ES6 Class + constructor + new keyword + instanceof
/** Syntactic Sugar
 * 1. an instance happens when we call this class and create an object out of this
 * 2. instanceof => we are creating instance of class
 * 3. Class constructor cannot be invoked without 'new'
 */

class Elf {
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}
//? why put attack() outside of constructor
/**
 * 1. constructor function needs to get run because each elf has unique name or weapon
 * 2. attack() is shared by all instances of the class
 * 3. if we moved attack() to constructor. it take up memory
 * 4. one function one location
 */

const peter = new Elf('Peter', 'Bow');
console.log(peter instanceof Elf);
//true

console.log(peter.name);
console.log(peter.attack());
//Peter, attack with Bow

const sam = new Elf('Sam', 'Long-Bow');
console.log(sam instanceof Elf);
//true

console.log(sam.name);
console.log(sam.attack());
//Sam, attack with Long-Bow

