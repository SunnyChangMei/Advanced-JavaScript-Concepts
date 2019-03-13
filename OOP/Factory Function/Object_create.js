// Factory Functions => create {object}
/**
 * 1. what if we need to create 1000 elf. It needs to store data on memory
 * 2. solution use Object.create() to create the link to prototype chain
 */
const elfAttack = {
  attack(){
    return 'attack with ' + this.weapon;
  }
};
function createElf(name, weapon) {
  const newElf = Object.create(elfAttack);
  console.log(newElf);
  //create two {} {} prototype chain
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
  // return {
  //   name,
  //   weapon,
    // attack(){
    //   return 'attack with ' + weapon;
    // }
  // };
}
const peter = createElf('Peter', 'Bow');
console.log(peter.attack());
//attack with Bow
//creat as many elf as you want
const sam = createElf('Sam', 'Long-Bow');
console.log(sam.attack());
//attack with Long-Bow
