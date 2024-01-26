/**
 * 
 * What we do here is that we begin with two pointers to provide a sliding window
 * and we maintain a set that contains already encountered characters
 * 
 *  Iterate over the string and consider the current character
 * 1. If we have not encountered the current character:
 *       - add it to the set
 *       - increment the pointer
 *       - update the maxLength for the string, if the currentLength is greater than maxLength 
 *       - update the maxSubstring if the right-left is equal to the maxLength only if the maxLength
 *        is equal to current length
 * 2. WE have encountered it before:
 *      - delete the current character in the set pointed to by left.
 *      -increment left
 */

function longestSubstringWithoutRepeatingCharacters(str) {
    let left= 0;
    let right = 0;
    let seen = new Set();
    let maxLength = 0;
    let maxSubstring = "";
  
    while (right < str.length) {
        
        //if we haven't
      if (!seen.has(str[right])) {
        seen.add(str[right]);
        right++;
        let currentLength=right-left;

        maxLength = Math.max(maxLength, currentLength);
        maxSubstring = (maxLength === currentLength) ? str.substring(left, right) : maxSubstring;
      } else {
        let char=str[left]
        seen.delete(char);
        left++;
      }
    }
  
    return maxSubstring;
  }
  

  const testStr="thequickbrownfox";

  console.log("Longest With Non Repeating Chars:",longestSubstringWithoutRepeatingCharacters(testStr))