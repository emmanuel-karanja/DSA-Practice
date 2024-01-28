// Function to check if a domino can connect to a chain
function canConnect(domino, chain) {
    if (chain.length === 0) {
      return true; // First domino can start a chain
    }
    return domino[0] === chain[chain.length - 1][1] || domino[1] === chain[chain.length - 1][1];
   }
   
   // Backtracking solution
   function longestChainBacktracking(dominoes) {
    const n = dominoes.length;
    const used = Array(n).fill(false);
    let longestChain = 0;
   
    function backtrack(currentChain) {
      longestChain = Math.max(longestChain, currentChain.length); // Update longest chain
   
      for (let i = 0; i < n; i++) {
        if (!used[i] && canConnect(dominoes[i], currentChain)) {
          used[i] = true;
          backtrack([...currentChain, dominoes[i]]); // Explore extending the chain
          used[i] = false; // Backtrack to explore other possibilities
        }
      }
    }
   
    backtrack([]); // Start backtracking with an empty chain
    return longestChain;
   }
   
   // Dynamic programming solution
   function longestChainDP(dominoes) {
    const n = dominoes.length;
    const dp = Array(n).fill(0);
   
    dp[0] = 1; // First domino can start a chain of length 1
   
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (canConnect(dominoes[i], dominoes[j])) {
          dp[i] = Math.max(dp[i], dp[j] + 1); // Update chain length if a longer one is found
        }
      }
    }
   
    return Math.max(...dp); // Return the longest chain length
   }
   
   // Driver code
   const dominoes = [
    [1, 2],
    [2, 3],
    [3, 1],
    [5, 2],
    [2, 4]
   ];
   
   const longestChainBacktrack = longestChainBacktracking(dominoes.slice()); // Use a copy for backtracking
   const longestChainDPResult = longestChainDP(dominoes);
   
   console.log("Longest chain (backtracking):", longestChainBacktrack);
   console.log("Longest chain (DP):", longestChainDPResult);
   