//DESCRIPTION:
//The first input array is the key to the correct answers to an exam, like 
//["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//The two arrays are not empty and are the same length. Return the score for this 
//array of answers, giving +4 for each correct answer, -1 for each incorrect 
//answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//If the score < 0, return 0.

//SOLUTION:

const checkExam = (array1, array2) => Math.max(
  array1.reduce((acc, cur, i) => {
    if (cur === array2[i]) {
      return acc + 4;
    }
    if (!array2[i]) {
      return acc;
    }
    return acc - 1;
  }, 0),
  0,
);