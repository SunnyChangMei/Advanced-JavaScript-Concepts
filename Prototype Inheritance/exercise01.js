//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
/**
 * 1. create Date function lastYear in prototype
 * 2. use THIS keyword refer to Date(1900-10-10), the left side of the DOT.
 * 3. use the getFullYear() only get the year
 * !. remember we can't use arrow function for THIS
 */
Date.prototype.lastYear = function(){
  return this.getFullYear() - 1;
};
console.log(new Date('1900-10-10').lastYear());
//'1899'
console.log(new Date().lastYear());
//'2018'

//#Bonus
// Modify .map() to print '🗺' at the end of each item.
/**
 * 1. overwrite the original Map() method in the prototype
 * 2. create empty arr, Map() return array
 * 3. iterate through THIS => [1,2,3]
 * 4. use () will return 'string'. use (()) because its expression
 */
Array.prototype.map = function(){
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺'));
  }
  return arr;
};
console.log([1,2,3].map());
//1🗺, 2🗺, 3🗺
