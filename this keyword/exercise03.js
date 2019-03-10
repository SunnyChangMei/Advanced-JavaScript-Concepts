const b = {
  name: 'jay',
  say() {console.log(this);}
};
//b => {name: "jay", say: ƒ}

const c = {
  name: 'jay',
  say() {return function() {console.log(this);};}
};
//! c.say() => f() {console.log(this)}
//! c.say()() => window object

const d = {
  name: 'jay',
  say() {return () => console.log(this);}
};
//! c.say() => f() {console.log(this)}
//! c.say()() => {name: "jay", say: ƒ} the THIS keyword is lexically scope inside this function
