// Scope:
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    // console.log(c) //! C ReferenceError: c is not defined, done and exit function. printName() never called. If console.log(c) is removed printName will call and return 'Andrei Neagoie'.
    return function printName() {
      var c = 'c';
      return 'Andrei Neagoie'
    }
  }
}

sayMyName()()() //! need to add three ()()() to call each function. else it just return the function name without output.

function findName() {
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c'
  return 'Andrei Neagoie'
}

function sayMyName() {
  var a = 'a';
  return findName()
}

sayMyName()
//! print out 'Andrei Neagoie'
