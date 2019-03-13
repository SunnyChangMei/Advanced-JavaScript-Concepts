/* eslint-disable prefer-const */
/**
 *1. The object used in Object.create actually forms the prototype of the new object, where as in the new Function() form the declared properties/functions do not form the prototype.
* 2. Yes, Object.create builds an object that inherits directly from the one passed as its first argument.
* 3. With constructor functions, the newly created object inherits from the constructor's prototype, e.g.: var o = new SomeConstructor();
 */

//! Object.create will not execute the constructor code.
//! must use the NEW Keyword to execute the constructor code
// Create our own prototypes:
const human = {
  mortal: true
};
const socrates = Object.create(human);
socrates.age = 25;

console.log(human.isPrototypeOf(socrates));
//! true
