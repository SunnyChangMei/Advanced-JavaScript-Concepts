/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/**
 * 1. base array or function => prototype => __proto__
 * 2. link up to Array.prototype/Function.prototype => __proto__
 * 3. link up to Object prototype {hasOwnProperty fn()} => __proto__ => NULL
 * *(prototype => __proto__) upper-chain (prototype => __proto__ ) upper-chain => 
 * *(prototype: {hasOwnProperty fn()} => __proto__ => NULL)
 */
const obj = {
  name: 'dragon'
};

obj.hasOwnProperty('name');
//! true
obj.hasOwnProperty('dragon');
//! false 'dragon' is NOT the property in the prototype chain

//! hasOwnProperty returns true even if the value of the property is null or undefined.
o = new Object();
o.propOne = null;
o.hasOwnProperty('propOne'); //! returns true
o.propTwo = undefined;
o.hasOwnProperty('propTwo'); //! returns true

//! Remember Array and Function ara special type of Object in JS
const array = [];
[].hasOwnProperty('map'); //?
//! false
[].__proto__.hasOwnProperty('map'); //?
//! true because arry.__proto__ is pointing to Array.prototype function 'map' prototype chain
