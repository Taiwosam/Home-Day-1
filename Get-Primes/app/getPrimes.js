/**
	The getPrimes function returns an array containing the list of prime numbers between 0 and
	the number supplied to it as an argument.

	In the best-case scenario, i.e. when the provided argument is less than 11, the algorithm for the
	getPrimes function runs in O(1) because the only thing happening is pushing a preset list of numbers
	into an empty array.

	However, when the number is larger than, or equal to, 11, the following operations are performed:
		1. A push operation -- 1
		2. A for loop that starts at 11 until the number and goes in steps of 2, so that only odd numbers
			 are tested -- (Math.floor((n - 11) / 2) + 1. E.g., for 25 and 26, only 8 (11, 13, 15, 17, 19, 21, 23, 25) numbers
			 are looped over.

		The function, at this point, grows at:
			1 + ( (Math.floor((n - 11) / 2) + 1) ) This is the worst-case scenario.

		Disregarding the constants and only taking the part of the equation that grows most as n (size of input) tends
		towards infinity, we say:
			The getPrimes function's order of growth is O(n) i.e. linear growth
*/

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

  listOfPrimes = [];

/**
 For any number less than 11, there are only 4 (2, 3, 5, 7) prime numbers.
 If we're supplied with such a number, we just produce [2], [2, 3], [2, 3, 5] or [2, 3, 5, 7],
 depending on the size of the number as thus:
*/
  if (number === 2) {
  	listOfPrimes.push(2);
  }

  else if (number > 2 && number < 5 ) {
  	listOfPrimes.push(2, 3);
  }

  else if (number >= 5 && number < 7) {
  	listOfPrimes.push(2, 3, 5);
  }

  else if (number >= 7) {
  	listOfPrimes.push(2, 3, 5, 7);

		/**
		 However, for a number that's greater than, or equal to, 11, a loop is started from 11 until that number
		 and it goes in steps of 2 so as to test for odd numbers only. For each odd number, we test if it is divisible
		 by either of 2, 3, 5, 7 and 9 and also if its square root is an integer, e.g. 121. If it doesn't satisfy any of
		 these conditions, it is a prime number and is pushed into listOfPrimes.
		*/
	  for (var i = 11; i <= number; i += 2) {
	  		if (i % 2 !== 0
	          && i % 3 !== 0
						&& i % 5 !== 0
						&& i % 7 !== 0
						&& i % 9 !== 0
	          && Math.sqrt(i) % 1 !== 0) {
	  			listOfPrimes.push(i);
	  		}
	  	}
  }

  return listOfPrimes;
}

module.exports = getPrimes;
