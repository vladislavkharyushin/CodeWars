//DESCRIPTION:
//Create a method to see whether the string is ALL CAPS.
//In this Kata, a string is said to be in ALL CAPS whenever it does not contain any 
//lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

//SOLUTION:

String.prototype.isUpperCase = function() {
  return this == this.toUpperCase();
}