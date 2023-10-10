//DESCRIPTION:
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

//SOLUTION:

function findShort(s){
  let result = s.split(' ').map(word => word.length).sort ((a, b) => a - b);
  return result[0];
}