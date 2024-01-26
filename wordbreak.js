function wordBreakRecursionNoMemo(str, wordDict) {

    function breakWord(start) {
     //we are at the end, that's the base case
      if (start === str.length) {
        return true; // Base case: entire string processed
      }
  
      
      for (let i = start + 1; i <= str.length; i++) {//because of how slice works, the first
        //argument will be 1
        //1. form a word
        const word = str.slice(start, i);

        //2. check if it's in the dictionary and then recursively check
        if (wordDict.has(word) && breakWord(i)) {
          return true; // Word found and remaining section is valid
        }
      }
  
      return false; // No valid segmentation found for this starting point
    }
  
    return breakWord(0); // Start recursion from the beginning of the string
  }
  