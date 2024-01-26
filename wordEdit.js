//Given two strings word1 and word2, 
//return the minimum number of operations required to convert word1 to word2

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Base cases:
    if (m === 0) return n; // Empty word1, need to insert all characters of word2
    if (n === 0) return m; // Empty word2, need to delete all characters of word1
  
    // Recursive calls to explore options: key note is the application of the slice Array function

    const insertChar = minDistance(word1, word2.slice(1)) + 1; // Insert into word1
    const deleteChar = minDistance(word1.slice(1), word2) + 1; // Delete from word1
    const replaceChar =
      word1[0] === word2[0]
        ? minDistance(word1.slice(1), word2.slice(1))//they are the same no yield of value
        : minDistance(word1.slice(1), word2.slice(1)) + 1; // Replace they are not the same,
        //so yield a value and 
  
    //(i,j-1) (i-1,j) or (i-1,j-1)
    // Return the minimum of the three options:
    return Math.min(insertChar, deleteChar, replaceChar);
  }

  
  //iterative version using dynamic programming

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  
    // Base cases: fill the first row and column:
    //when Word1 is empty
    for (let i = 0; i <= m; i++) {
      dp[i][0] = i;
    }

    //when Word2 is empty
    for (let j = 0; j <= n; j++) {
      dp[0][j] = j;
    }
  
    // Fill the DP table, we start with 1 since we've already filled the entire first row and col
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // No operation needed if characters match
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1, // Insert
            dp[i][j - 1] + 1, // Delete
            dp[i - 1][j - 1] + 1 // Replace
          );
        }
      }
    }
  
    return dp[m][n]; // Minimum edit distance is at the bottom-right corner
  }
  