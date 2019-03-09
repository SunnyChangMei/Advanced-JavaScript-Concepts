//Exercise:
/**
 * 1. a() => window object
 * 2. b() => window object
 * 3. c.hi() => {hi: f()} this refers to c object
 */
const a = function() {
  console.log(this);
  const b = function() {
    console.log(this);
    const c = {
      hi: function() {
     console.log(this);
    }};
    c.hi();
  };
  b();
};
a();
