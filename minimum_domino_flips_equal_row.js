function minDominoFlips(A, B) {
  //key learning on this is how to deal with the nullity i.e.
  // counts.get(A[i] || 0), it's shorthand it's very clear
    const counts = new Map();
    const topCounts = new Map();
    const bottomCounts = new Map();
  
    for (let i = 0; i < A.length; i++) {
      if (A[i] === B[i]) {
        // If both halves are already equal, track only once
        counts.set(A[i], (counts.get(A[i]) || 0) + 1);
      } else {
        counts.set(A[i], (counts.get(A[i]) || 0) + 1);
        counts.set(B[i], (counts.get(B[i]) || 0) + 1);
        topCounts.set(A[i], (topCounts.get(A[i]) || 0) + 1);
        bottomCounts.set(B[i], (bottomCounts.get(B[i]) || 0) + 1);
      }
    }
  
    for (const [val, count] of counts.entries()) {
        //for them to be the same, we know they must all add to the length of either of the arrays
      if (count === A.length) {
        //we know that value is on both of the dominos, so we pick the minimum
        return Math.min(topCounts.get(val) || 0, bottomCounts.get(val) || 0);
      }
    }
  
    return -1; // Not possible
  }
  
  
  // O(N) for time and O(1) for space since a domino has values 0 to 6, and hence the size
  //the hashamp doesn't depend on data size only the constant value of dominos from 0 to 6.


  const A=[3,5,1,2,3]
  const B=[3,6,3,3,4]

  console.log(minDominoFlips(A,B))