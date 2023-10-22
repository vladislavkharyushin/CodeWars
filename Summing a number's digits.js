//DESCRIPTION:
//Write a function named sumDigits which takes a number as input and returns the sum 
//of the absolute value of each of the number's decimal digits.

//SOLUTION:

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce((input, output) => input + Number(output), 0);
}
