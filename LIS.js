function longestIncreasingSubsequenceRecursive(arr, n) {
    if (n === 1) {
      return 1;
    }
  
    let maxLis = 1;
    for (let i = 1; i < n; i++) {
      const currentLis = 1 + longestIncreasingSubsequenceRecursive(arr, i);
      if (arr[n - 1] > arr[i - 1] && currentLis > maxLis) {
        maxLis = currentLis;
      }
    }
  
    return maxLis;
  }
  

  function longestIncreasingSubsequenceDP(arr) {
    const lis = Array(arr.length).fill(1); //initialise the dp array
  
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
          lis[i] = lis[j] + 1;
        }
      }
    }
  
    return Math.max(...lis);
  }
  