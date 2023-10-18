//DESCRIPTION:
//Given a set of numbers, return the additive inverse of each. 
//Each positive becomes negatives, and the negatives become positives.
//You can assume that all values are integers. Do not mutate the input array/list.

//SOLUTION:

function invert(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * -1);
  }
  return result;
}