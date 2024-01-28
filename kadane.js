/**This is what I had ERRONEOUSLY taken to be LIS! Hahaha */

function maxSubarraySum(nums) {
    let maxEndingHere = nums[0];
    let maxSoFar = nums[0];
  //currentSum is the sum at i-1 i.e. 
    for (let i = 1; i < nums.length; i++) {
        //prevMaximumEndingHere+currentNum,
      maxEndingHere = Math.max(nums[i], maxEndingHere+ nums[i]); // Choose between starting a new subarray or extending the current one
      maxSoFar = Math.max(maxSoFar, maxEndingHere); // Track the overall maximum sum
    }
  
    return maxSoFar;
  }


  
  // Driver code
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const maxSum = maxSubarraySum(nums);
  console.log("Maximum subarray sum:", maxSum); // Output: 6
  