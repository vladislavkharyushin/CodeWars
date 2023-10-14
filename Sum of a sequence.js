//DESCRIPTION:
//Your task is to write a function which returns the sum of a sequence of integers.
//The sequence is defined by 3 non-negative values: begin, end, step.
//If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

//SOLUTION:

const sequenceSum = (begin, end, step) => {
  let result = 0;
  for (let i = begin; i <= end; i += step) {
    result += i;
  }
  return result
};