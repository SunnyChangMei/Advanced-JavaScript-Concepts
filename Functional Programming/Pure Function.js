//! What is Pure Function
//! Can Everything be pure?
/** Two Main Purposes
 * 1. a function has always return the same output given the same input, no matter how many we call it.
 * 2. function cannot modify outside of itself => no side effects.
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

//! No side effect
const array3 = [1, 2, 3];

function removeLastItem(arr) {
  const copyNewArr = [].concat(arr);
  copyNewArr.pop();
  return copyNewArr;
}

function multiplyByTwo(arr) {
  return arr.map(item => item * 2);
}
//The order of the function calls will matter.
console.log(removeLastItem(array));
// [1, 2]
console.log(multiplyByTwo(array));
// [2, 4, 6]
console.log(array3);
// [1, 2, 3]
// map and concat methods can fix this issue of mutation
