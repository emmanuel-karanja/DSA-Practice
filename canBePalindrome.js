function canBePalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) {
        // Check if possible to make a palindrome by removing one character
        //'delete' character from left or from right
        return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
      }
      left++;
      right--;
    }
    return true; // Already a palindrome or a single-character string
  }
  
  function isPalindrome(s, left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) return false;
    }
    return true;
  }
  
  // Driver code to test the implementation
  const str1 = "abca";
  console.log(canBePalindrome(str1)); // Output: true
  
  const str2 = "abc";
  console.log(canBePalindrome(str2)); // Output: false
  
  const str3 = "racecar";
  console.log(canBePalindrome(str3)); // Output: true
  
  const str4 = "abcba";
  console.log(canBePalindrome(str4)); // Output: true (already a palindrome)
  