//DESCRIPTION:
//In this Kata, you will be given a string that may have mixed uppercase and 
//lowercase letters and your task is to convert that string to either lowercase 
//only or uppercase only based on:
//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert 
//the string to lowercase.

//SOLUTION:

function solve(s){
  let up = s
  .split('')
  .filter(i => i.match(/[A-Z]/))
  .length;
  let down = s
  .split('')
  .filter(j => j.match(/[a-z]/))
  .length
  return down >= up ? s.toLowerCase() : s.toUpperCase();
}