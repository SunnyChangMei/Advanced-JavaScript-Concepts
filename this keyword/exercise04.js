const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
//! use bind() method
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW());

/**
 * *solution#2 
 * const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
//! use arrow function
const giveMeTheCharacterNOW = () => {
  return character.getCharacter()
  };

 */
