//DESCRIPTION:
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//don't worry about uppercase vowels
//y is not considered a vowel for this kata

//SOLUTION:

function shortcut (string) {
  return string.replace(/[aeiou]/gi, '');
}