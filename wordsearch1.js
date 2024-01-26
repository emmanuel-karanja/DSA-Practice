function findWordBFS(grid, word) {
    // Get grid dimensions
    const m = grid.length;
    const n = grid[0].length;
  
    // Queue for BFS traversal
    const queue = [];
  
    // Set to track visited cells
    const visited = new Set();
  
    // Enqueue starting cells matching the first letter
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === word[0]) {
          queue.push([i, j, 1]); // Enqueue with index 1
          visited.add(`${i},${j}`);
        }
      }
    }
  
    // Directions for adjacent cells
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
    // BFS loop
    while (queue.length > 0) {
      const [row, col, index] = queue.shift();
  
      // If the word is found
      if (index === word.length) {
        return true;
      }
  
      // Explore adjacent cells
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
        const key = `${newRow},${newCol}`;
  
        // Ensure valid cell, not visited, and matches next letter
        if (
          0 <= newRow && newRow < m &&
          0 <= newCol && newCol < n &&
          !visited.has(key) &&
          grid[newRow][newCol] === word[index]
        ) {
          queue.push([newRow, newCol, index + 1]);
          visited.add(key);
        }
      }
    }
  
    // Word not found
    return false;
  }
  
  // Driver code
  const grid = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ];
  const word = "ABCF";
  
  console.log(findWordBFS(grid, word)); // Output: true
  