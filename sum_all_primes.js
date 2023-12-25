// Sum All Primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let totalPrime = 0
  const prime = Array.from({ length: num+1 }, (_, i) => true);
  for (let p = 2; p * p <= num; p++) {
    if (prime[p] === true) {
      for (let i = p * p; i <= num; i += p) {
        prime[i] = false;
      }
    }
  }
  for (let j = 2; j <= num; j++) {
    if (prime[j] === true) {
      totalPrime += j;
    }
  }
  return totalPrime
}

sumPrimes(977);
