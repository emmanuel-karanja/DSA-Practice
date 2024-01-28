/**There is an N x M rectangular island that borders both the Pacific Ocean and the Atlantic Ocean. 
 * The Pacific Ocean touches the island’s left and top edges, and the Atlantic Ocean touches the 
 * island’s right and bottom edges.

The island is partitioned into a grid of square cells. 
The island receives a lot of rain, and the rainwater can flow to neighboring cells directly north,
 south, east, and west if the neighboring cell’s height is less than or equal to the current cell’s
  height. Water can flow from any cell adjacent to an ocean into the ocean.

Given a matrix mat[][] having N rows and M columns where mat[x][y] represents the 
height above sea level of the cell at coordinate (x, y), the task is to find the number 
of coordinates (x, y) such that the rainwater can flow from the cell (x, y) to both 
the Pacific and Atlantic oceans. */


function pacificAtlantic(heights) {
    // Dimensions of the grid
    const ROWS = heights.length;
    const COLS = heights[0].length;
  
    // Arrays to track cells reachable from each ocean
    const pacificReachable = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));
    const atlanticReachable = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));
  
    // Directions for DFS exploration
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
    // utility function to check if a given point is within the bounds
    function withinLimits(row,col){
        return row>=0 && row<ROWS && col>=0 && col<COLS;
    }
    function dfs(reachable, row, col) {  
        //generate new row and col
        for (const [dr, dc] of directions) { 
            const newRow=row+dr;
            const newCol=col+dc;
          if (withinLimits(newRow, newCol) 
              && heights[newRow][newCol] >= heights[row][col] 
              &&!reachable[newRow][newCol]) { 
              reachable[newRow][newCol] = true; 
              dfs(reachable,newRow, newCol);  
            } 
         } 
    } 
      

    //fill out the edge cells since we know they are guaranteed to touch either oceans
    //right and left
    for (let i = 0; i < ROWS; i++) { 
        pacificReachable[i][0] = true; 
        atlanticReachable[i][(COLS-1)] = true; 
      } 
  
      //bottom and top
    for (let i = 0; i < COLS; i++) { 
        pacificReachable[0][i] = true; 
        atlanticReachable[(ROWS-1)][i] = true; 
      } 
        
      
    // Start DFS from Pacific and Atlantic boundaries

    for (let i = 0; i < ROWS; i++) {
      dfs(pacificReachable, i, 0); // Start from Pacific left edge
      dfs(atlanticReachable, i, COLS - 1); // Start from Atlantic right edge
    }
  
    for (let j = 0; j < COLS; j++) {
      dfs(pacificReachable, 0, j); // Start from Pacific top edge
      dfs(atlanticReachable,ROWS - 1, j); // Start from Atlantic bottom edge
    }
  
   
    // Find cells reachable by both oceans
    const result = [];
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (pacificReachable[i][j] && atlanticReachable[i][j]) {
          result.push([i, j]);
        }
      }
    }

    console.log("PACIFIC::")
    console.table(pacificReachable);
    console.log("ATLANTIC::")
    console.table(atlanticReachable)
    console.log("HEIGHTS::")
    console.table(heights)
  
    return result;
  }
  
  // Driver code to test the implementation
  const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ];
  const result = pacificAtlantic(heights);
  console.log(result); // Output: [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
  