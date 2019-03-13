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
