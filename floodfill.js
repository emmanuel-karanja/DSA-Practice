function floodFill(grid, startRow, startCol, newColor) {
    const rows = grid.length;
    const cols = grid[0].length;
    const originalColor = grid[startRow][startCol];
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  
    const queue = [[startRow, startCol]];
    grid[startRow][startCol] = newColor; // Fill starting cell
  
    while (queue.length > 0) {
      const [row, col] = queue.shift();
  
      //we omitted where we check if the current position has been  updated or not.
      //generate the neighbours
      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;
  
        //validate them
        if (0 <= newRow && newRow < rows &&0 <= newCol && newCol < cols &&  grid[newRow][newCol] === originalColor) {
          queue.push([newRow, newCol]);
          //visit
          grid[newRow][newCol] = newColor; // Fill the neighbor/visit the pixel
        }
      }
    }
  }
  
  // Example usage:
  const grid = [
    ["O", "O", "O"],
    ["O", "X", "O"],
    ["O", "O", "O"],
  ];
  floodFill(grid, 1, 1, "F");
  console.log(grid); // Output: [["O", "O", "O"], ["O", "F", "F"], ["O", "F", "O"]]
  

  