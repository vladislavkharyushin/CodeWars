//DESCRIPTION:
//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//SOLUTION:

function solution(str, ending){
  if (ending.length == 0) {
    return true;
  }
  return str.substr(-(ending.length)) == ending;
}