const multiplyBy = num1 => num2 => num1 * num2;
multiplyBy(4)(6);//24

// const multiplyByTwo = multiplyBy(2);
// const multiplyByFive = multiplyBy(5);
// multiplyByTwo(4); //?
// multiplyByFive(10); //?

//! Closure => lexical scoping where it has access to.
// function a() {
//   const grandpa = 'grandpa';
//   return function b() {
//     const father = 'father';
//     return function c() {
//       const son = 'son';
//       return `${grandpa} > ${father} > ${son}`;
//     };
//   };
// }
//grandpa > father > son

const boo = name => name1 => name2 => `${name} > ${name1} > ${name2}`;
boo('grandpa')('father')('son'); //?
//grandpa > father > son
//! a() => grandpa remains in the closure, next b() invoked father also remain in closure, finally c()//! invoked its look in closure scope chain => find father and grandpa.
