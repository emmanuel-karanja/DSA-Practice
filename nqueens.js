function solveNQueens(n) {
    const board = Array(n).fill(null);//it will become an array of arrays
    const solutions = [];
  
    function backtrack(row) {
      if (row === n) {//ending condition, we've made it to the final row
        solutions.push([...board]); // Deep copy the board
        return;
      }
  
      for (let selectedCol = 0; selectedCol < n; selectedCol++) {
        if (isValidPlacement(board, row, selectedCol)) {
           board[row] = selectedCol; //make choice i.e. select the placement on the row
           backtrack(row + 1); //
           board[row] = null; // unmake choice
        }
      }
    }
  
    function isValidPlacement(board, row, selectedCol) {
        // Check for queens in the same column
        for (let i = 0; i < row; i++) {
          if (board[i] === selectedCol) {
            return false; // Same column, queen present
          }
        }
      
        // Check for queens on diagonals
        for (let i = 0; i < row; i++) {
          const existingQueenCol = board[i];
          const distanceInRows = Math.abs(row - i);
          const distanceInCols = Math.abs(existingQueenCol - selectedCol);
      
          // Diagonal conflict if distances are equal
          if (distanceInRows === distanceInCols) {
            return false;
          }
        }
      
        // No conflicts found, placement is valid
        return true;
      }
  
    backtrack(0);
    return solutions;
  }
  
  // Driver code
  const n = 8; // Number of queens
  const solutions = solveNQueens(n);
  
  if (solutions.length > 0) {
    console.log("Found", solutions.length, "solutions for", n, "queens:");
    for (const solution of solutions) {
      console.log(solution.map(col => ".".repeat(col) + "Q" + ".".repeat(n - col - 1)).join("\n"));
    }

  } else {
    console.log("No solutions found for", n, "queens.");
  }
  