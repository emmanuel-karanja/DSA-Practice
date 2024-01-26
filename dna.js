function findRepeatedDnaSubsequences(s) {
    const result = [];
    const counts = new Map();
  
    //look at where you stop
    for (let i = 0; i < s.length - 9; i++) {
        //get subsequence by considering the sliding window
      const subsequence = s.slice(i, i + 10);
    
      //add to map
      if(!counts.has(subsequence)){
          counts.set(subsequence,(counts.get(subsequence)|| 0)+1)
      }else{//it exists 
        result.push(subsequence)
      }
    }
  
    return result;
  }
  
  // Example usage
  const s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
  const repeatedSequences = findRepeatedDnaSubsequences(s);
  console.log(repeatedSequences);
  