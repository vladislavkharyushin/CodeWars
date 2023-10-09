//DESCRIPTION:
//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//SOLUTION:

function isTriangle(a,b,c) {
  return a+b > c && a+c > b && b+c > a;
}