const array = [1,2,3];
// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr){
  return Math.max.apply(null, arr);//! use null to place value
}

console.log(getMaxNumber(array));
//? 3

//! use spread operator
function getMaxNumber(arr){
  return Math.max(...arr);  
}
