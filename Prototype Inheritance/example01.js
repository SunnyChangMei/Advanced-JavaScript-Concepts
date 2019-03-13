const dragon = {
  name: 'Tanya',
  fire: true,
  fight(){
    return 5;
  },
  sing(){
    return `I am ${this.name}. The breather of fire!`;
  }
};

const lizard = {
  name: 'Tofu',
  fight(){
    return 1;
  }
};

// Don't do this, bad performance. Show with bind.
// inherit methods from dragon object
lizard.__proto__ = dragon;
//! NEVER use __proto__

console.log(lizard.name);
//Tofu
console.log(lizard.sing());
//I am Tofu. The breather of fire! Method from dragon object
// console.log(lizard.dance());
//lizard.dance is not a function it search up the prototype chain.

//! Always use bind() method to borrow method from upper prototype chain
const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());
//? I am Tofu. The breather of fire!

console.log(dragon.isPrototypeOf(lizard));
//! dragon is the upper prototype chain of lizard
//? true
console.log(lizard.isPrototypeOf(dragon));
//? false

lizard.antherFunc();//will get type error, its not a function
//! undefined

for (const prop in lizard) {
  console.log(prop);
  //list all properties name, fight, fire, sing because lizard inherit from dragon
}

for (const prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
    //? It only return name and fight of its own property
  }
}
