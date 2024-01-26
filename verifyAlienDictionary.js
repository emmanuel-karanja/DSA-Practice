function verifyWordOrder(word1, word2, order) {
    const minLength = Math.min(word1.length, word2.length);
    for (let i = 0; i < minLength; i++) {
      const firstChar = order.indexOf(word1[i]);
      const secondChar = order.indexOf(word2[i]);
  
      if (firstChar < secondChar) {
        return true; // Word1 comes before word2
      } else if (firstChar > secondChar) {
        return false; // Word1 comes after word2
      }
    }
  
    // If all characters match, the shorter word comes first
    return word1.length < word2.length;
  }
  
  function verifyDictionary(words, order) {
    for (let i = 0; i < words.length - 1; i++) {
      if (!verifyWordOrder(words[i], words[i + 1], order)) {
        return false; // Invalid dictionary order
      }
    }
  
    return true; // Valid dictionary order
  }
  
  // Driver Code
  const words = ["wrt", "wrf", "er", "ett", "rftt"];
  const order = "wertf";
  
  const isValid = verifyDictionary(words, order);
  console.log("Is the dictionary valid? " + isValid); // Output: true
  