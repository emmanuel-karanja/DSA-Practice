/**APPROACH:
 * 
 * 1. An empty string returns true because it can always be broke down
 * 2. Break the word into a prefix and a suffix
 * 3. If the prefix is in the dictionary, recursively break the suffix
 */

function wordBreakRecursive(s, wordDict, memo = {}) {
  if (s in memo) {
    return memo[s]; // Memoization to avoid redundant calculations
  }

  if (s === "") {
    return true; // Base case: empty string can always be segmented
  }

  for (let i = 1; i <= s.length; i++) {
    const prefix = s.slice(0, i);
    const suffix = s.slice(i);
    if (wordDict.includes(prefix) && wordBreakRecursive(suffix, wordDict, memo)) {
      memo[s] = true; // Store result in memo for future calls
      return true;
    }
  }

  memo[s] = false; // Store negative result to avoid redundant checks
  return false;
}

/**Space O(n) and Time (n^2) the recursive function is O(2^n) time and O(n) due to the
 * stack space used in recursion with the added disadvantage of running into stack overflow issues
 */
  // Driver code
  const s = "leetcode";
  const wordDict = ["leet", "code"];
  const canBreak = wordBreakRecursive(s, wordDict);
  console.log("Can be segmented:", canBreak); // Output: true
  

  function wordBreak(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: empty string can always be segmented
  
    // Iterate through substrings of increasing length
    for (let i = 1; i <= s.length; i++) {
      // Iterate through possible prefixes ending at index i
      for (let j = 0; j < i; j++) {
        if (dp[j] && wordDict.includes(s.slice(j, i))) {
          dp[i] = true; // Word found, mark substring as segmentable
          break; // No need to check further prefixes for this i
        }
      }
    }
  
    console.log("DP Table:",dp)
    return dp[s.length]; // Final result indicates if the entire string can be segmented
  }
  

  
  console.log("Can be segmented:",  wordBreak(s, wordDict)); // Output: true
  