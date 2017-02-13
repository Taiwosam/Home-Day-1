var getPrimes = require('../app/getPrimes.js');

describe("Array containing a list of prime numbers generated from 0 to n ", function() {

  describe("getPrimes should throw an error for negative and non-number values", function() {
    it("should throw error for getPrimes('taiwo')", function() {
      expect(function() { getPrimes('taiwo'); }).toThrow(new Error("The getPrimes function only takes numbers"));
    });

    it("should throw error for getPrimes('10')", function() {
      expect(function() { getPrimes('10'); }).toThrow(new Error("The getPrimes function only takes numbers"));
    });

    it("should throw error for getPrimes(-1)", function() {
      expect(function() { getPrimes(-1); }).toThrow(new Error("getPrimes only takes numbers greater than 0"));
    });

    it("should throw error for getPrimes(0)", function() {
      expect(function() { getPrimes(0); }).toThrow(new Error("getPrimes only takes numbers greater than 0"));
    });

  });

  describe("Return an array of consecutive prime numbers from 0 to getPrimes' argument", function() {

    it("should return an empty array for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });

    it("should return [2, 3] for 3 or 4", function() {
      expect(getPrimes(3)).toEqual([2, 3]);
      expect(getPrimes(4)).toEqual([2, 3]);
    });

    it("should return [2, 3, 5] for 5 or 6", function() {
      expect(getPrimes(5)).toEqual([2, 3, 5]);
      expect(getPrimes(6)).toEqual([2, 3, 5]);
    });

    it("should return [2, 3, 5, 7] for 7", function() {
      expect(getPrimes(7)).toEqual([2, 3, 5, 7]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 25", function() {
      expect(getPrimes(25)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 50", function() {
      expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, \
        43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {

      expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
                43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, \
      61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, \
      139, 149, 151, 157, 163, 167, 173, 179, 181, 187, 191, 193, 197, 199 ] for 200", function() {

      expect(getPrimes(200)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
        71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
        139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
    });

    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, \
      83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197,\
         199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293 ] for 300", function() {

           expect(getPrimes(300)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89,
             97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193,
             197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293 ]);
    });

  });

});
