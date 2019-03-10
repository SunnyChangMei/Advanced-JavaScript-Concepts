const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function(num1, num2) {
    this.health += num1 + num2;
  }
};

const archer = {
  name: 'Robin Hood',
  health: 50
};

//! heal function with two parameters num1 and num2
//? inherit heal function from wizard => Robin Hood health 50 + 60 + 70 = 180
wizard.heal.call(archer, 60, 70);
//{ name: 'Robin Hood', health: 180 }

//? inherit heal function from wizard => Robin Hood health 50 + 20 + 30 = 100
wizard.heal.apply(archer, [20, 30]); //! array
archer;
//! invoked immediately with call() or apply()
// function borrowing
const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer); 
healArcher();
//! bind() call LATER after use call/apply
//? with call() => health is 180 + 110 = 290 
//? with apply() => health is 100 + 110 = 210
console.log(archer);
