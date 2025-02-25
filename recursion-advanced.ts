// 9. Three-Sum Problem
// Write a recursive function to find all unique triplets in an array that sum to zero.
// You must return an array of arrays where each subarray contains a valid triplet.
//
// Example Test Cases:
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum([0, 1, 1])); // Output: []
// console.log(threeSum([0, 0, 0])); // Output: [[0, 0, 0]]

function threeSum(nums: number[], start: number = 0, results: number[][] = []): number[][] {
  if (start > nums.length - 3) return results;

  if (start === 0) nums.sort((a, b) => a - b);

  let target = -nums[start];
  let left = start + 1,
    right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      results.push([nums[start], nums[left], nums[right]]);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) left++;
      while (left < right && nums[right] === nums[right + 1]) right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return threeSum(nums, start + 1, results);
}

// 10. Rock, Paper, Scissors (Generate All Possible Outcomes)
// Write a recursive function that generates all possible outcomes of a game of Rock, Paper, Scissors for n rounds.
// Each round has three choices: "rock", "paper", or "scissors".
// The function should return an array of arrays, where each inner array represents a sequence of moves.
//
// Example Test Cases:
console.log(rockPaperScissors(2));
// Expected Output: [
//   ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
//   ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
//   ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
// ]
console.log(rockPaperScissors(1));
// Expected Output: [["rock"], ["paper"], ["scissors"]]

function rockPaperScissors(n, results: string[][] = [], current: string[] = []) {
  if (n === 0) {
    results.push([...current]); 
    return results;
  }

  for (const move of ["rock", "paper", "scissors"]) {
    current.push(move); 
    rockPaperScissors(n - 1, results, current); 
    current.pop(); 
  }

  return results;
}
