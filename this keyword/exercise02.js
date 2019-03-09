//JS is weird:
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this); // in this case, it's a method on an object.
    var anotherFunc = function () {
      console.log('b', this); // this points to windows!
    };
  }
};
//a {name: "Billy", sing: ƒ}
//! b = undefined, this => window object

//! Solution 1 fix anotherFunc issue using arrow function, add call antherFunc()
const obj = {
  name: 'Billy',
  sing: function () {
    console.log('a', this); //! converted to arrow function
    var anotherFunc = () => {
      console.log('b', this);
    };
    anotherFunc(); //! invoked this
  }
};
//a {name: "Billy", sing: ƒ}
//b {name: "Billy", sing: ƒ}

//! Solution 2 declare var here = this inside method;
const obj = {
  name: 'Billy',
  sing: function () {
    var here = this; //! declared here
    console.log('a', here); //! change this to here
    var anotherFunc = function () {
      console.log('b', here); //! change this to here
    };
    anotherFunc(); //! invoked here
  }
};
//a {name: "Billy", sing: ƒ}
//b {name: "Billy", sing: ƒ}
