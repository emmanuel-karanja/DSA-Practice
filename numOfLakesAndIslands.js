function countLandAndLakes(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visisted=new Array(m).fill(null).map(()=>new Array(n).fill(false));
    let islandCount = 0;
    let lakeCount = 0;
  
    function dfs(i, j) {
    
      if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === -1) return;
  
      if (grid[i][j] === 1) {
        islandCount++;
        grid[i][j] = -1; // Mark visited land cell
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      } else if (grid[i][j] === 0) {
        lakeCount++;
        grid[i][j] = -1; // Mark visited water cell
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
      }
    }
  
    // Iterate through each cell
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] !== -1) {
          dfs(i, j);
        }
      }
    }
  
    return { islands: islandCount, lakes: lakeCount };
  }
  
  // Example usage
  const grid = [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 0],
  ];
  
  const result = countLandAndLakes(grid);
  console.log(`Islands: ${result.islands}, Lakes: ${result.lakes}`);
  