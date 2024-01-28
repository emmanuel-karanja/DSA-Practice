function longestCommonSubstringRecursive(str1, str2, i = 0, j = 0) {
    if (i === str1.length || j === str2.length) {
      return 0; // Base case: end of either string
    }
  
    if (str1[i] === str2[j]) {
      return 1 + longestCommonSubstringRecursive(str1, str2, i + 1, j + 1); // Match, extend
    } else {
      return Math.max(
        longestCommonSubstringRecursive(str1, str2, i + 1, j), // Skip char in str1
        longestCommonSubstringRecursive(str1, str2, i, j + 1) // Skip char in str2
      );
    }
  }

function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
    let maxLen = 0;
    let endPos = 0;
  //we keep track of maximum length because the max could be anywhere in the matrix not necessarily
  //at the corner
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
            ///update the current dp
          dp[i][j] = dp[i - 1][j - 1] + 1;
          //increase the max len, we keep track of it because it won't be found at dp[m][n]
          if (dp[i][j] > maxLen) {
            maxLen = dp[i][j];
            endPos = i - 1;
          }
        } else {
            dp[i][j] = 0;
        }
      }
    }

    console.table(dp)
  
    const start=endPos - maxLen + 1;
    const end=endPos+1;
    return str1.substring(start, end); // Extract the substring
  }
  
  // Driver code
  const str1 = "helloworld";
  const str2 = "low";
  const lcs = longestCommonSubstring(str1, str2);
  const lcs1=longestCommonSubstringRecursive(str1,str2)
  console.log("Longest common substring DP:", lcs); // Output: "low"
  
  console.log("Longest common substring recursive:", lcs1); // Output: "low"
  