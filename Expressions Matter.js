//DESCRIPTION:
//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
//Notes
//The numbers are always positive.
//The numbers are in the range (1? ?? a,?b,?c? ?? 10).
//You can use the same operation more than once.
//It's not necessary to place all the signs and brackets.
//Repetition in numbers may occur .
//You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.

//SOLUTION:

function expressionMatter(a, b, c) {
  let results = [];
  results.push(a + b + c);
  results.push(a * b * c);
  results.push(a + b * c);
  results.push((a + b) * c);
  results.push(a * b + c);
  results.push(a * (b + c));
  return Math.max(...results);
}