/**You are given a string s and an integer k. You can choose any character of the string and 
 * change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after 
performing the above operations.

Approach:
  1. Create a character frequency map, and pick the character with the most frequency
     from the map, if more than have the same frequency, pick any of them. The most frequent
     character will give us the character to change it into.
  2. We are talking about a substring

  **My approach was actually quite

*/

function characterReplacement(s, k) {
    let maxLength = 0;
    let left = 0;
    let maxFreq = 0;
    const charCount = new Map(); // Store character frequencies within the current window
  
    for (let right = 0; right < s.length; right++) {
      const char = s[right];
      charCount[char] = (charCount[char] || 0) + 1;
      let currentCharFreq=charCount[char];
      maxFreq = Math.max(maxFreq, currentCharFreq);
      
    //how many characters we can actually change given then we don't want to change the one
    //with maxFreq
      let currentWindow=right-left+1;
      let replaceableCharsCount=currentWindow-maxFreq; 
      
      while (replaceableCharsCount > k) {
        //shorten the window
        const leftChar = s[left];
        charCount[leftChar]--;
        left++; // Shrink the window from the left
      }
  
      maxLength = Math.max(maxLength, right - left + 1); // Update maximum length
    }
  
    return maxLength;
  }
  
  // Example usage
  const s = "ABAB";
  const k = 2;
  const longestSubstring = characterReplacement(s, k);
  console.log(longestSubstring); // Output: 4
  