/* eslint-disable no-var */
/**
 * var favoriteFood = 'grapes' gets hoisted => var favoriteFood = undefined
 * var foodThoughts (fn name) also gets hoisted => var foodThoughts = undefined
 * creation phrase is done
 * now, start execution code foodThoughts();
 * new execution created
 * the 2nd favoriteFood sushi gets hoisted
 * var favoriteFood = 'sushi' => var favoriteFood = undefined => favoriteFood = 'sushi'
 * log New favorite food: sushi at the end
 */
 /**
  * P.s. when you change the 'var' to 'const' technically there is still hoisting happening. That is why you get a reference error (favoriteFood is not defined) instead of looking at the global favoriteFood variable. let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So the engine says, "ya there is a favoriteFood variable here but you can't access it yet"
  */
var favoriteFood = 'grapes';

var foodThoughts = function () {
  console.log('Original favorite food: ' + favoriteFood);
  //! Original favorite food: undefined ?why get undefined

  var favoriteFood = 'sushi';

  console.log('New favorite food: ' + favoriteFood);
  //! New favorite food: sushi
};

foodThoughts();
