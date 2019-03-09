//* littleBrother is already defined
//* littleBrother(it is me) gets hoisted => undefined
//* bigBrother() invoked last littleBrother() return 'no me!'

/**
 * how this function executed
 * 1. console.log(bigBrother()); 
 * 2. call bigBrother (this: global)
 * 3. line 18 executed return littleBrother();
 * 4. line 21 return value: 'no me!'
 * 5. back to 18 executed return littleBrother();
 * ! 6. littleBrother is already defined = 'no me!'
 * ! 7. done and exit the function
 */
// debugger;
function bigBrother(){
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
