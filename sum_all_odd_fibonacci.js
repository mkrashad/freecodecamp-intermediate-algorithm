// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let n1 = 0;
  let n2 = 1;
  let total = 0;
  if (num !== 1 || num !== 0) {
    for (let i = 0; i <= num; i++) {
      if (n1 % 2 === 1 && n1 <= num) {
        total += n1;
      }
      let temp = n1 + n2;
      n1 = n2;
      n2 = temp;
    }
    return total;
  }
  return num;
}

console.log(sumFibs(1000));
