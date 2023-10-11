//DESCRIPTION:
//Count the number of divisors of a positive integer n.
//Random tests go up to n = 500000.
//Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

//SOLUTION:

const getDivisorsCnt = n => {
  let count = 0
 for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === Math.sqrt(n)) {
        count++
      } else {
        count += 2
      }
    }
  }
return count
}