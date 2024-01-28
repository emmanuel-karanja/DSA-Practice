/** LIS is the Longest Increasing Subsequence, and we are talking about the length
 *  i.e. starting at this position, the length is already 1 i.e.
 * 
 *  1. If I am at position n-1, the last one, the numbers coming before that are part of this
 *     are that satisfy this condition are those such that the current one i.e. A[n-1]> A[j]
 *     where j is any position that's less than n-1. To get the longest increasing subsequence,
 *     if we find such a number, then, we know the LIS, the LIS upto that number +1, since
 *     we'll add the current one we are standing at.
 *  2. Instead of recalculating the LIS for number at j, seeing we'll be using it often for all
 *     numbers after j, we calculate it once and store it.
 */

function longestIncreasingSubsequenceDP(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1); // Base case: all elements have a subsequence of length 1
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {//Increasing condition is met.
            //maximuise e.g. the current dp[i] which is 1 at first and then
            //subsequently updated at earlier values of j and the 1+dp[j] which is the LIS at
            //j
          dp[i] = Math.max(dp[i], 1 + dp[j]);
        }
      }
    }
  
    return Math.max(...dp);
  }
  
  // Driver code
  const nums = [4, 2, 3, 6, 10, 1, 12];
  
  
  const lisDP = longestIncreasingSubsequenceDP(nums);
  console.log("LIS length (DP):", lisDP);
  