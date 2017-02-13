// The getPrimes function returns an array containing the list of prime numbers between 0 and
// the number supplied to it as an argument.

function getPrimes(number) {
	if (typeof(number) !== 'number') {
		throw new Error ('The getPrimes function only takes numbers');
	}

	else if (number <= 0) {
		throw new Error ('getPrimes only takes numbers greater than 0');
	}

	if (number < 2) {
		return [];
	}

  var listOfPrimes = [2];

	// This loop runs in O(n/2) because it only loops over odd numbers on its way to number.
	// For 21, that's [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]. No need to test for even numbers above 3.
	// They're definitely not prime
	for (var i = 3; i <= number; i += 2){
			var isPrime = true;
			var squareRootOfI = Math.sqrt(i);

			// To avoid looping all the way to i and dividing it with the numbers on the way to it, e.g. for 9,
			// instead of looping from 2 or 3 to 9 and dividing it by [2, 3, 4, 5, 6, 7, 8], we just test for its square root.
			// For 9, it is 3, for 121, it is 11, for 221, it is 14.8. If no number before it's square root can divide it, then it
			// is a prime number.
			// To make the algorithm even faster, we only loop on odd numbers on the way to the square root of i.
			// So, for 121, j below is [3, 5, 7, 9, 11, 13].
			for (var j = 3; j <= squareRootOfI; j += 2) {
				
				// This inner loop runs in (n ^ 0.5)/2
				// The two loops therefore run in n/2 * (n ^ 0.5)/2
				// Disregarding constants, the two loops run in O(n^2)
				if(i % j === 0) {
					isPrime = false;
				}
			}

		if (isPrime) {
			listOfPrimes.push(i);
		}
	}
	return listOfPrimes;
}

// All other operations apart from the loops run in O(1), so we say this
// algorithm runs in O(n^2) i.e. quadratic time
module.exports = getPrimes;
