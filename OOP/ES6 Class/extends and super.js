//! ES6 Class => extends => super
//! use instanceof to check prototype chain
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack(){
    return 'attack with ' + this.weapon;
  }
}

//! extends => super()
/**
 * 1. extends and set prototype point to Character
 * 2. now Elf has prototype chain up to Character
 * 3. Elf constructor is only gets to run with Elf sub class. Not Character!
 */
class Elf extends Character {
  constructor(name, weapon, type){
    // console.log(this);
    //! ERROR => Must call super constructor
    super(name, weapon);
    this.type = type;
    //! THIS gets run after we call super()
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
      this.color = color;
  }
  makeFort() {
    return 'strongest fort in the world made';
  }
}

const fiona = new Elf('Fiona', 'Ninja Stars', 'house');
console.log(fiona);
//Elf { name: 'Fiona', weapon: 'Ninja Stars', type: 'house' }
console.log(fiona.attack());
//attack with Ninja Stars

const shrek = new Ogre('Shrek', 'club', 'green');
console.log(shrek);
//Ogre { name: 'Shrek', weapon: 'club', color: 'green' }
console.log(shrek.makeFort());
//strongest fort in the world made
//! we should use instanceof to check
console.log(shrek instanceof Ogre);
//true
console.log(shrek instanceof Character);
//true
console.log(fiona instanceof Elf);
//true
console.log(fiona instanceof Character);
//true

console.log(Ogre.isPrototypeOf(shrek));
//! false
console.log(Ogre.prototype.isPrototypeOf(shrek));
//! true
