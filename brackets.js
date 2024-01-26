/**Begin with the a simple case you want 1 pair of brackets
 *  () it means
 * 
 *  (())
 * ()()
 * choices: ()
 * rules:
 *    1. The last one must be a closing bracket 
 *    2. The number of opening brackets must be equal to the number of closing brackets
 *    3. The length of the resulting string must be equal to pairs * 2
 *    4. First bracket must be an opening bracket and the last one must be a closing bracket
 * 
 * 
 */

function generateParenthesis(n) {
    const result = [];
  
    function backtrack(currentString = "", openCount = 0, closeCount = 0) {
      if (currentString.length === 2 * n) {
        result.push(currentString);
        return; // Base case: Found a valid combination
      }
  
      // If we can add an opening bracket, add it and recurse
      if (openCount < n) {
        backtrack(currentString + "(", openCount + 1, closeCount);
      }
  
      // If we can add a closing bracket, add it and recurse
      if (closeCount < openCount) {
        backtrack(currentString + ")", openCount, closeCount + 1);
      }
    }
  
    backtrack();
    return result;
  }
  
  // Example usage:
  const n = 3;
  const combinations = generateParenthesis(n);
  console.log(combinations); // Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
  