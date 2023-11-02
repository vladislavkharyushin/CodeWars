//DESCRIPTION:
//Given a list of digits, return the smallest number that could be formed 
//from these digits, using the digits only once (ignore duplicates).
//Notes:
//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

//SOLUTION:

function minValue(values){
  return +(Array.from(new Set(values)))
    .sort((a, b) => a - b)
    .join('');
}