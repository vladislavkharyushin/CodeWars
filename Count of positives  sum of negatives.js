//DESCRIPTION:
//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.

//SOLUTION:

function countPositivesSumNegatives(input) {
  if (!input || !input.length) {
    return [];
    }
  let a = 0;
  let b = 0;
  input.forEach(item => {
    if (item > 0) {
      a++;
    } else {
      b = b + item;
    }
  });
  return [a, b];
}