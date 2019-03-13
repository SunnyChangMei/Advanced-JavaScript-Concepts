// Constructor Functions => New Keyword
/**
 * 
 */

function elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}
const peter = new elf('Peter', 'Bow');
console.log(peter.name);
// console.log(peter.attack());
//attack with Bow
//creat as many elf as you want
const sam = new elf('Sam', 'Long-Bow');
console.log(sam.name);
// console.log(sam.attack());
//attack with Long-Bow
