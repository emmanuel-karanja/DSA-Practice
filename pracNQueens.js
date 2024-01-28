
/**place N queens on a board such that none of the chess queen's rules are violated:
 *    1. No queens on this column
 *    2. No queens diagonally
 * 
 * APPROACH :
 *   1. Backtrack starting row 0 and place a queen there.
 *   2. Proceed to the next one and place a queen at a given col and see if conflict those rules
 *      i.e. you try to select a col and backtrack
 *   3. WE only need to check the PREVIOUSLY FILLED ROWS
 */

 function placeNQueens(n){
    const board=new Array(n).fill(null);
    const solutions=[]
    function backtrack(row){
        //evaluate the solution, if we've made it this far, then we have not violated any of the rules
        if(row===n){
             solutions.push([...board])//deep copy
             return;
        }
        for(let selectedCol=0;selectedCol<n;selectedCol++){
            if(isValidPlacement(board,row,selectedCol)){
                board[row]=selectedCol; //select it
                backtrack(row+1);//bactrack
                board[row]=null; //unselect
            }
        }
    }

    function isValidPlacement(board,row,selectedCol){
        /**check two things:
         * 1. we don't have an existing queen at that col 
         * 2. We don't violate the diagonal rule
         */

        //check for existing quee
        for(let i=0;i<row;i++){
            let existingQueenCol=board[i];
            if(existingQueenCol===selectedCol){
                return false;
            }
        }

        //check for the diagonal rule
        for(let i=0;i<row;i++){
            let existingQueenCol=board[i];
            let distanceInRows=Math.abs(row-i);
            let distanceInCols=Math.abs(existingQueenCol-selectedCol)

            if(distanceInCols===distanceInRows){
                return false;
            }
        }

        return true;
    }

    //backtrack
    backtrack(0);

    return solutions;
 }

 // Driver code
const n = 4; // Number of queens
const solutions = placeNQueens(n);

if (solutions.length > 0) {
  console.log("Found", solutions.length, "solutions for", n, "queens:");
  for (const solution of solutions) {
    console.log(solution.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1)).join("\n"));
  }
} else {
  console.log("No solutions found for", n, "queens.");
}