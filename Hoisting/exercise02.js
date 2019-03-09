function bigBrother(){
debugger;

  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());
//! print out no me! why?
