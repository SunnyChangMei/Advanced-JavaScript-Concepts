function callMeMaybe() {
  const callMe = 'Hi! I am now HERE!';
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
}
callMeMaybe();
//! get undefined => 4s later => Hi! I am now HERE!

function callMeMaybe() {
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi! I am now LATER!';

}
callMeMaybe();
// get undefined => 4s later => Hi! I am now LATER!
//! We don't care about hoisting or const. setTimeOut set in API store in memory. const callMe already created. It still run after 4s inside the block and invoked 
