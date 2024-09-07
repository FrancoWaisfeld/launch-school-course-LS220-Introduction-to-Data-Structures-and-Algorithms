// Write a function named findInsertPosition that takes in a
// sorted numbers of distinct integers and a target value as input.
// The function should return the index where the target value is
// found in the array, or the index where it would be inserted if
// it were not found.

// If the target value is found in the array, the function should
// return the index of the target value. If the target value is not found,
// the function should return the index where it would be inserted
// while maintaining the sorted order of the array.

// Example:
// Input: nums = [3, 5, 7, 9, 11], target = 9
// Output: 3

// Example:
// Input: nums = [3, 5, 7, 9, 11], target = 2
// Output: 0

function findInsertPosition(nums, target) {
   let left = 0;
   let right = nums.length - 1;
   let mid;
   while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
   }

   return left;
}

console.log(findInsertPosition([3, 5, 7, 9, 11], 9)); // 3
console.log(findInsertPosition([3, 5, 7, 9, 11], 2)); // 0
console.log(findInsertPosition([3, 5, 7, 9, 11], 12)); // 5