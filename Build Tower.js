//DESCRIPTION:
//Build a pyramid-shaped tower, as an array/list of strings, given a 
//positive integer number of floors. A tower block is represented with "*" character.
//For example, a tower with 3 floors looks like this:
//[
//  "  *  ",
//  " *** ", 
//  "*****"
//]

//SOLUTION:

function towerBuilder(nFloors) {
  return [...Array(nFloors)]
    .map((_, a) => " "
         .repeat(nFloors - 1 - a) + "*"
         .repeat(a * 2 + 1) + " "
         .repeat(nFloors - 1 - a));
}