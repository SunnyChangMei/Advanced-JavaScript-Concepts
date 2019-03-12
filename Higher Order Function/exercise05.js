// Make it so that the initialize function can only be called once!
let view;

function initialize() {
  view = '🏔';
  console.log('view has been set!');
  return function () {
    return view;
  }
}

initialize();
initialize();
initialize();

console.log(view);

//! solution
function initialize() {
  let called = 0;
  return function () {
    if (called > 0 || called === 1) {
      return;
    } else {
      view = '🏔';
      called++;
      console.log('view has been set!');
    }
  }
}
const callOnce = initialize();
callOnce();
callOnce();
callOnce();
console.log(view);
