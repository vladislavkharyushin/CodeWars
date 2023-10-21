//DESCRIPTION:
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//SOLUTION:

function doubleChar(str) {
  let result = '';
  for (let char of str) {
    result += char + char;
  }
  return result;
}