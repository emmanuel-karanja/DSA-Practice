/**Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

You must find a solution with a memory complexity better than O(n2).

APPROACH:

1. Kth smallest has an index of k-1
2. If a matrix has a colLength of n, then, Math.floor(n/k-1) would be the row, and col
   in that row would be n%k-1
   
   **GOT IT ON THE FIRST ATTMPT --> I got it EXCEPT THAT only each row is sorted
   
   If the matrix was unsorted, we'd do a quick select
   1. Collapse the matrix into an array use matrix.reduce((combined,arr)=>[...combined,...arr],[])
   2. do a quickSelect
   
   OR
   
   1. Iterate and merged sorted rows since each row is sorted, merge the rows one at a time
   2. Find the k-1 element in the new array*/

function kthSmallest(matrix,k){
    const kthIndex=k>0?k-1:0;
    const ROWS=matrix.length || 0;
    const COLS=matrix[0].length || 0;

    if(COLS >0 && ROWS >0 && kthIndex > COLS){
      //watch out for those divide by zero errors!
      const i=Math.floor(kthIndex/ROWS);
      const j=kthIndex%COLS;

      return matrix[i][j];
    }else if(COLS > 0){
       return kthIndex < COLS? matrix[0][kthIndex]:-1;
    }
    
}

//Time O(1) and Space O(1)
const matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8

const matrix2 = [[-5]], k2 = 1

console.log(k,"th Smallest:",kthSmallest(matrix,k))
console.log(k2,"th Smallest:",kthSmallest(matrix2,k2))

const joined=matrix.reduce((all,arr)=>[...all,...arr],[])
console.log("unjoined:",matrix,"joined:",joined)



function kthSmallestBetter(matrix, k) {
    const n = matrix.length;
    let left = matrix[0][0]; // Initialize search range with the smallest element
    let right = matrix[n - 1][n - 1]; // and the largest element
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      let count = 0;
  
      // Count elements less than or equal to mid in every row
      for (let i = 0; i < n; i++) {
        const row = matrix[i];
        while (row[0] <= mid) {
          count++;
          row.shift(); // Remove counted element from the current row
        }
      }
  
      if (count < k) {
        left = mid + 1; // If less than k elements found, search in the higher half
      } else {
        right = mid; // Otherwise, search in the lower half
      }
    }
  
    return left; // The kth smallest element will be the left pointer at the end
  }
  