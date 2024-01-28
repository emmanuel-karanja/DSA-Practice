function searchRotatedSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      }
  
      // Check which side is sorted and proceed accordingly
      if (nums[mid] < nums[right]) {
        // Right side is sorted
        if (target > nums[mid] && target <= nums[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else {
        // Left side is sorted
        if (target >= nums[left] && target < nums[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
  
    return -1; // Target not found
  }
  
  // Driver code
  const nums = [4, 5, 6, 7, 0, 1, 2];
  const target = 0;
  const index = searchRotatedSortedArray(nums, target);
  console.log("Index of target:", index); // Output: 4
  