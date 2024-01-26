function knapsackRecursive(W, wt, val, n) {
    if (n === 0 || W === 0) { //Base case
      return 0;
    }
  
    if (wt[n - 1] > W) { //current item wright is greater than remaining weight
      return knapsackRecursive(W, wt, val, n - 1); //skip to the next item
    } else {
      return Math.max(
        val[n - 1] + knapsackRecursive(W - wt[n - 1], wt, val, n - 1),//get the current item's profits,
        //reduce the remaining weight by the current item's weight
        knapsackRecursive(W, wt, val, n - 1) //or skip to the lower weight
      );
    }
  }

  //Space complexity O(n) due to the recursive call stack and O(2^n) time complexity

  function knapsackDP(W, wt, val, n) {
    const K = Array(n + 1).fill(null).map(() => Array(W + 1).fill(0));
  
    for (let i = 0; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
        if (i === 0 || w === 0) {
          K[i][w] = 0;
        } else if (wt[i - 1] > w) {
            K[i][w] = K[i - 1][w];//skip case
        } else {
        
          K[i][w] = Math.max(
            val[i - 1] + K[i - 1][w - wt[i - 1]],//yield and lower 
            K[i - 1][w]
          );
        }
      }
    }
  
    return K[n][W];
  }
  
  
  //O(n*w) space and O(n*w) time complexity