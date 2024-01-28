/** 1. For each domino, e.g. [1,4], 1 means that the domino has a starting Position of 1 and a length of
 *    4, if it topples, it will affect dominos in position 2,3,4,5 i.e. 
 *    currentReach=startingPosition+length
 *  2. Dominos are of different sizes
 *
 */

class Domino{
    constructor(startingPosition=null,length=null){
        this.startingPosition=startingPosition;
        this.length=length;
    }
}
function maxReachableCoordinates(dominoes) {
    const n = dominoes.length;
    const maxReach = Array(n).fill(0);
  
    // Traverse from left to right, tracking the maximum reachable coordinate
    let currentMax = 0;
    for (let i = 0; i < n; i++) {
      let currentDominoReach=dominoes[i][0] + dominoes[i][1]
      currentMax = Math.max(currentMax,currentDominoReach );
      maxReach[i] = currentMax;
    }

    console.log("LEFT TO RIGHT MAXREACH::")
    console.table(maxReach)
  
    // Traverse from right to left, updating maxReach with cascading effects
    currentMax = 0;
    for (let i = n - 1; i >= 0; i--) {
      let currentDominoReach= dominoes[i][0] + dominoes[i][1]
      currentMax = Math.max(currentMax,currentDominoReach);
      maxReach[i] = Math.max(maxReach[i], currentMax);
    }
  
    console.log("RIGHT TO LEFT MAXREACH::")
    console.table(maxReach)
    return maxReach;
  }
  
  // Example usage:
  const dominoes = [
    [1, 4], // Domino at position 1 with length 4
    [4, 1],
    [7, 3],
    [10, 2]
  ];
  const results = maxReachableCoordinates(dominoes);
  console.log(results); // Output: [14, 14, 13, 12]
  