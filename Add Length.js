//DESCRIPTION:
//What if we need the length of the words separated by a space to be added 
//at the end of that same word and have it returned as an array?
//Your task is to write a function that takes a String and returns an Array/list 
//with the length of each word added to each element.
//Note: String will have at least one element; words will always be separated by a space.

//SOLUTION:

function addLength(str) {
  return str.split(' ').map(word => `${word} ${word.length}`);
}