// You are given a sorted array of integers in ascending order.
// Your task is to find the starting and ending positions of
// a given target value within the array.

// Implement a function findRange that takes in an array of integers
// nums and a target value target. The function should return an array
// containing the starting and ending positions of the target value
// within the array. If the target value is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5], target = 3
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 3, 3, 3, 5, 6,], target = 4
// Output: [-1, -1]

function findRange(nums, target) {
  let left = findLefttMostIndex(nums, target);
  let right = findRightMostIndex(nums, target);
  return [left, right];
}

function findRightMostIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let currentRightMost = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    
    if (nums[mid] <= target) {
      left = mid + 1;
      if (nums[mid] === target) {
        currentRightMost = mid;
      }
    } else {
      right = mid - 1;
    }
  }

  return currentRightMost;
}

function findLefttMostIndex(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  let currentLeftMost = -1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    
    if (nums[mid] >= target) {
      right = mid - 1;
      if (nums[mid] === target) {
        currentLeftMost = mid;
      }
    } else {
      left = mid + 1;
    }
  }

  return currentLeftMost;
}

let nums = [1, 2, 3, 3, 3, 3, 3, 4, 5];
let target = 3;

console.log(findRange(nums, target));
// Output: [2, 6]

nums = [1, 2, 3, 3, 3, 5, 6,]
target = 4
console.log(findRange(nums, target));
// Output: [-1, -1]