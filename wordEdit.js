function minDistanceRecursive(word1, word2, memo = new Map()) {
  //notice how you do this
  const key = `${word1},${word2}`;
  if (key in memo) {
    return memo[key];
  }

  if (word1 === "") {
    return word2.length;
  }
  if (word2 === "") {
    return word1.length;
  }

  if (word1[0] === word2[0]) {//if their first character is the same, we don't do any operation
    return minDistanceRecursive(word1.slice(1), word2.slice(1), memo);
  }

  const insertChar = 1 + minDistanceRecursive(word1, word2.slice(1), memo);
  const deleteChar = 1 + minDistanceRecursive(word1.slice(1), word2, memo);
  const replaceChar = 1 + minDistanceRecursive(word1.slice(1), word2.slice(1), memo);

  memo[key] = Math.min(insertChar, deleteChar, replaceChar);
  return memo[key];
}

// Driver code
const word1 = "horse";
const word2 = "ros";
const distance = minDistanceRecursive(word1, word2);
console.log("Minimum edit distance:", distance); // Output: 3

/**Time(3^m+n) space O(mn) */

function minDistanceDP(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

  // Base cases:
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // Insert
          dp[i][j - 1] + 1, // Delete
          dp[i - 1][j - 1] + 1 // Replace
        );
      }
    }
  }
 
  console.log("DP Table:")
  console.table(dp)

  return dp[m][n];
}


const distance1 = minDistanceDP(word1, word2);
console.log("Minimum edit distance:", distance1); // Output: 3
