// 10001st prime
// Problem 7
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?


function nthPrime(n){
  var primes = [2];
  var curr = 3;
  // var i = 0;
  // var root = Math.floor(Math.sqrt(nthPrime));

  while (primes.length < n){
    curr += 2;
    if (curr % 2 === 0){ continue;}

  var isPrime = true;
  for (var element in primes){
    if(curr % primes[element] === 0){
      isPrime = false;
      break;
    }
  }

    if (isPrime){
      primes.push(curr);
    }
  }

  return primes[primes.length-1];
}
