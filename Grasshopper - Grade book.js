//DESCRIPTION:
//Complete the function so that it finds the average of the three scores 
//passed to it and returns the letter value associated with that grade.
//Tested values are all between 0 and 100. Theres is no need to check for 
//negative values or values greater than 100.

//SOLUTION:

function getGrade (s1, s2, s3) {
  let q = (s1 + s2 + s3) / 3;
  if (q >= 90) {
    return 'A'; 
  } else if (q >= 80) {
    return 'B';
  } else if (q >= 70) {
    return 'C';
  } else if (q >= 60) {
    return 'D';
  } else if (q >= 0) {
    return 'F';
    }
}