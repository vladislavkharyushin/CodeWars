//DESCRIPTION:
//Write a function that returns a string in which firstname is swapped with last name.

//SOLUTION:

function nameShuffler(str){
  return str.split(" ").reverse().join(" ");
}