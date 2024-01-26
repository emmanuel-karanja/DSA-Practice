function numIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    //in our im
    const visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    let numIslands = 0;
  
    function dfs(r, c) {
        //is it a valid position?
      if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c] || grid[r][c] === '0') {
        return;
      }
  
      visited[r][c] = true; 
      //explore neighbours
      dfs(r - 1, c); // Explore up
      dfs(r + 1, c); // Explore down
      dfs(r, c - 1); // Explore left
      dfs(r, c + 1); // Explore right
    }
  
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '1' && !visited[r][c]) {
        //every time the dfs returns we increment the number of islands.
          dfs(r, c);
          numIslands++;
        }
      }
    }
  
    return numIslands;
  }
  

  //Time O(M*N) and space O(M*N) due to the visisted matrix
//improve it to O(M*N) time and O(1) use something like -1 for a cell to mark it as visited and 