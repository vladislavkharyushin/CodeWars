//DESCRIPTION:
//You will be given an array of numbers. You have to sort the odd numbers 
//in ascending order while leaving the even numbers at their original positions.

//SOLUTION:

function sortArray(array) {
  let oddSort = array.filter(e => e % 2).sort((a, b) => a - b);
  return array.map(e => e % 2 ? oddSort.shift() : e);
}