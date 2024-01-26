function minWindow(s, t) {
    // Initialize variables to track character counts, window boundaries, and the minimum window
    const tFreq = {}; // Frequency map for characters in t
    const sFreq = {}; // Frequency map for characters in the current window
    let required = 0; // Number of unique characters to match from t
    let formed = 0; // Number of unique characters matched so far
    let left = 0; // Left pointer for the window
    let right = 0; // Right pointer for the window
    let minWindow = ""; // Stores the minimum window substring
    let minWindowLength = Infinity; // Length of the minimum window
  
    // Pre-process t to count character frequencies
    for (const char of t) {
      tFreq[char] = (tFreq[char] || 0) + 1;
      required++; // Increment required for each unique character
    }
  
    // Iterate through s with two pointers
    while (right < s.length) {
        //for each character we keep track of the number of occurrences
      const char = s[right];
      sFreq[char] = (sFreq[char] || 0) + 1; // Increment character count in the current window
  
      // If the character is in t and its frequency now matches t's frequency
      //if the character is in both t and s and it matches
      if (tFreq[char] && sFreq[char] === tFreq[char]) {
        formed++; // Increment formed count
      }
  
      // Contract the window while all required characters are present
     
      while (left <= right && formed === required) {
        const currentWindowLength = right - left + 1;
  
        // Update minimum window if found a smaller one
        if (currentWindowLength < minWindowLength) {
          minWindow = s.substring(left, right + 1);
          minWindowLength = currentWindowLength;
        }
  
        const leftChar = s[left];
        sFreq[leftChar]--; // Decrement character count as we move the left pointer
  
        // If the left character is in t and its frequency is now less than required
        if (tFreq[leftChar] && sFreq[leftChar] < tFreq[leftChar]) {
          formed--; // Decrement formed count as we might be missing a required character
        }
  
        left++; // Move the left pointer to shrink the window
      }
  
      right++; // Move the right pointer to expand the window
    }
  
    return minWindow; // Return the minimum window substring
  }
  
  // Example usage
  const s = "ADOBECODEBANC";
  const t = "ABC";
  const minSubstring = minWindow(s, t);
  console.log(minSubstring); // Output: "BANC"
  
  //Time O(m+n) space O(min(m,n)) 