function reverseWordsWithoutReverse(s) {
    const words = s.trim().split(/\s+/); // Split by one or more spaces, trim leading/trailing spaces
    let output = "";
  
    for (let i = words.length - 1; i >= 0; i--) {
      output += words[i] + " ";
    }
  
    return output.trim(); // Remove trailing space from the final string
  }
  
  // Driver code to test the implementation
  const str1 = "  hello world  ";
  console.log(reverseWordsWithoutReverse(str1)); // Output: "world hello"
  
  const str2 = "a good   example";
  console.log(reverseWordsWithoutReverse(str2)); // Output: "example good a"
  
  const str3 = "  Bob    Loves  Alice   ";
  console.log(reverseWordsWithoutReverse(str3)); // Output: "Alice Loves Bob"
  

 