function fibonacciDP(n, memo={}){
    if(n<=1){
        return n;
    }

    if(memo[n]){
        return memo[n];
    }

    memo[n]=fibonacciDP(n-1,memo)+fibonacciDP(n-2,memo);
    return memo[n];
}

//O(N) time and O(N) space


function fibonacciDPSpaceOptimized(n) {
    if (n <= 1) {
      return n;
    }
  
    let fibCurrent = 0;  // Initialize the first two terms
    let fibNext = 1;
    
  
    for (let i = 2; i <= n; i++) {
      let temp = fibCurrent + fibNext;
      fibCurrent= fibNext;
      fibNext=temp;
    }
  
    return fibNext;
  }

  //O(N) time and O(1) space


  console.log(fibonacciDP(8))
  console.log(fibonacciDPSpaceOptimized(8))