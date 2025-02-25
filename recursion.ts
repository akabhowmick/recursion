// 1. Factorial of a Number
// Write a recursive function to compute the factorial of a given number n.
// Factorial of n (denoted as n!) is defined as: n! = n * (n-1) * (n-2) * ... * 1
// Base case: 0! = 1
//
// Example Test Cases:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

// 2. Sum of an Array
// Write a recursive function to calculate the sum of all numbers in an array.
//
// Example Test Cases:
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5

function sumArray(arr) {
  if (arr.length === 0) return 0;
  else return arr[0] + sumArray(arr.slice(1));
}

// 3. Reverse a String
// Write a recursive function that reverses a given string.
//
// Example Test Cases:
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

function reverseString(str) {
  if(str.length === 0) return "";
  else return reverseString(str.slice(1)) + str[0];
}

// 4. Check if a String is a Palindrome
// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).
//
// Example Test Cases:
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("a"));       // Output: true

function isPalindrome(str) {
  if(str.length === 0 || str.length === 1) return true;
  if(str[0]!== str[str.length - 1]) return false;
  else return isPalindrome(str.slice(1, -1));
}

// 5. Compute the N-th Fibonacci Number
// Write a recursive function to compute the nth Fibonacci number.
// The Fibonacci sequence is defined as:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
//
// Example Test Cases:
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1

function fibonacci(num, memo = {}){
  if(num in memo) return memo[num];
  if(num <= 1) return num;
  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
}

// 6. Flatten a Nested Array
// Write a recursive function to flatten an array that contains nested arrays into a single-level array.
//
// Example Test Cases:
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []

function flattenArray(arr) {
  // Your code here
}

// 7. Count the Number of Occurrences of a Value in an Array
// Write a recursive function that counts how many times a given value appears in an array.
//
// Example Test Cases:
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

function countOccurrences(arr, value) {
  // Your code here
}

// 8. Find the Maximum Number in an Array
// Write a recursive function that finds and returns the maximum value in an array.
//
// Example Test Cases:
// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// console.log(findMax([7, 7, 7, 7])); // Output: 7
// console.log(findMax([-1, -2, -3, -4])); // Output: -1

function findMax(arr) {
  // Your code here
}
