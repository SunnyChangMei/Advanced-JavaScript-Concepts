//! What is Pure Function
/** Two Main
 * 1. a function has always return the same output given the same input
 * 2. function cannot. modify outside of itself => no side effects.
 */

//* Has side effects
// Example #1 pop()
const array = [1, 2, 3];
function mutateArray(arr) {
  const copyNewArr = [].concat(arr);
  //!avoid side effect we make copy of array
  copyNewArr.pop();
  //don't use return here
  console.log(copyNewArr);
  // [1, 2]
  return copyNewArr;
  //copyNewArr => [1, 2], array is unchanged
}
console.log(mutateArray(array));
// [1, 2]
console.log(array);
//[1,2,3]

/** 
 * 1. log [1,2] even though mutateArray() didn't return anything
 * 2. this function has what we call side effects
 * 3. if we call mutateArray() again. It log out [1]
 */

// Example #2 forEach()
const array2 = [1, 2, 3];
function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(1);
  });
  //don't use return here
}
mutateArray2(array2);
console.log(array2);
//! log [ 1, 2, 3, 1, 1, 1 ] => push(1) three times
