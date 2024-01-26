function longestCommonSubsequenceRecursive(string1, string2, string1Length, string2Length) {
    //
    if (string1Length === 0 || string2Length === 0) {
      return 0;
    } else if (string1[string1Length - 1] === string2[string2Length - 1]) {
      return 1 + longestCommonSubsequenceRecursive( //if they are the same yield and converge
        string1,
        string2,
        string1Length - 1,
        string2Length - 1
      );
    } else {
      return Math.max(
        longestCommonSubsequenceRecursive(string1, string2, string1Length, string2Length - 1),//lesses
        //string1 and converge
        longestCommonSubsequenceRecursive(string1, string2, string1Length - 1, string2Length)//converge on string2
      );
    }
  }

  //Time complexity O(2^(n+m)) and space O(n) due to the recursive call stack

  function longestCommonSubsequenceDP(string1, string2) {
    //initialize the Dynamic programming array, it's an array
    const LCSTable = Array(string1.length + 1)
      .fill(null)
      .map(() => Array(string2.length + 1).fill(0));
  
    for (let i = 1; i<= string1.length; i++) {
      for (let j = 1; j <= string2.length; j++) {
        if (string1[i - 1] === string2[i - 1]) {
          LCSTable[i][j] =
            1 +
            LCSTable[i- 1][j- 1];
        } else {
          LCSTable[i][j] = Math.max(
            LCSTable[i - 1][j],
            LCSTable[i][j - 1]
          );
        }
      }
    }
  
    return longestCommonSubsequenceLengthTable[string1.length][string2.length];
  }
  