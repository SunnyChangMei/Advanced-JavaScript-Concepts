//! Idempotence

function notGood(num) {
  return Math.random();
}
notGood(5);
//unpredictable output

Math.abs(Math.abs(-50));
//always return 50. It's predictable

//! Imperative vs Declarative
/**
 * *Imperative => code that tells machine what to do and how to do it
 * 1. computer is better at being imperative. It needs to know how to do things
 * 2. jQuery => tell it exactly what to do and how to do it
*/ 
//Example 
for (let i = 0; i < 1000; i++) {
  console.log(i);
}

/**
 * *Declarative => code that tells machine what to do and what should happen
 * 1. human is better at being declarative.
 * 2. React is declarative.
 *
*/
//Example 
[1,2,3].forEach(item => console.log(item));

//! Immutability
//* Not changing the data/state
//* make copy of object/array
const obj = { name: 'John'};
function clone(obj){
  return {...obj}; //this is pure
}
obj.name = 'Nana';//it mutate the data 
//* we should create another function updateName that clone the obj. Maintain immutability.
function updateName(obj){
  const cloneObj = clone(obj);
  cloneObj.name = 'Mana';
  return cloneObj;
}

