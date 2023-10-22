//DESCRIPTION:
//You will be given a number and you will need to return it as a string in Expanded Form. For example:
//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
//NOTE: All numbers will be whole numbers greater than 0.

//SOLUTION:

function expandedForm(num) {
  num = num.toString();
  let result = [];
  let multiplier = 1;
  for (let i = 1; i <= num.length; i++) {
    let digit = num[num.length - i]
    digit > 0 && result.unshift(digit * multiplier)
    multiplier *= 10
  }
  return result.join(' + ');
}