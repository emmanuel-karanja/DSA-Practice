/**
 *  Letters of the alphabet can be encoded using a single digit number or a two digit number as follows
 *  A->1, B->,...Z->26. Given a number that represents an encoded into a number, find ways in which
 * it can be decoded into a valid alphabetical plain text. e.g. 11021 
 *  can be 1,10,2,1 or 1,10,21 etc 
 * 
 *  APPROACH:
 * 
 * 1. count the number of ways to decode it into one digit numbers
 * 2. count the number of ways to decode it tinot a two digit number such that num>10 and num<=26
 * 3. Sum the three together.
 * 
 *  Use Recursion
 *  Use recursion with memo
 *  Use dynamic programming
 */

function numDecodingsRecursion(s) {
    if (s === "") return 1; // Base case: empty string has one way to decode
    if (s[0] === '0') return 0; // Base case: can't decode strings starting with '0'
  
    let ways = 0;
  
    // Decode one digit, notice that slicing(1) removes one digit from the left
    ways += numDecodingsRecursion(s.slice(1));
  
    // Decode two digits if valid
    if (s.length >= 2 && parseInt(s.slice(0, 2)) >= 10 && parseInt(s.slice(0, 2)) <= 26) {
        //you are basically slicing to reduce the string
        let subString=s.slice(2)
      ways += numDecodingsRecursion(subString);
    }
  
    return ways;
  }

  const s="11106";
  console.log("ways:",numDecodingsRecursion(s))


  /**the string is the key,  */
  function numDecodingsMemo(s, memo = {}) {
    if (s === "") return 1; // Base case: empty string has one way to decode
    if (s[0] === '0') return 0; // Base case: can't decode strings starting with '0'
  
    if (memo[s] !== undefined) {
      return memo[s]; // Return cached result if available
    }
  
    let ways = 0;
  
    // Decode one digit
    ways += numDecodingsMemo(s.slice(1), memo);
  
    // Decode two digits if valid
    if (s.length >= 2 && parseInt(s.slice(0, 2)) >= 10 && parseInt(s.slice(0, 2)) <= 26) {
      ways += numDecodingsMemo(s.slice(2), memo);
    }
  
    memo[s] = ways; // Store results in memo for future use
  
    return ways;
  }
  

  function numDecodings(s) {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1; // Empty string has one way to decode (empty string)
    dp[1] = s[0] !== '0' ? 1 : 0; // Single digit has one way if not '0'
  
    for (let i = 2; i <= s.length; i++) {

        //find ways for 1 digit
        const oneDigit = parseInt(s[i - 1]);
        if (oneDigit !== 0) {
          dp[i] += dp[i - 1]; // Add ways from decoding one digit
        }

        //find ways for 2 digits
      const twoDigits = parseInt(s.slice(i - 2, i));
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i - 2]; // Add ways from decoding two digits
      }
     
    }
  
    return dp[s.length];
  }
  