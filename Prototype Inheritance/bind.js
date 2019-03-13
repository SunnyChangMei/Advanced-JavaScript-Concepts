//How would you be able to create your own .bind() method using call or apply. 
/**
 * 1. use THIS keyword
 * 2. return function this.call or this.apply
 */

Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};

//stackoverflow
let name = 'globalName';

const obj = {
  name: 'myName',
  sayName: function () {
    console.log(this.name);
  }
};

const say = obj.sayName; // we are merely storing the function the value of this isn't magically transferred

say(); // now because this function is executed in global scope this will refer to the global var
//! return globalName

const boundSay = obj.sayName.bind(obj); // now the value of this is bound to the obj object

boundSay(); // Now this will refer to the name in the obj object: 'myName'
//! return myName
