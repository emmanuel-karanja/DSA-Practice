const Steps = [  [-1, 0], // Up 
  [0, 1],  // Right 
  [1, 0],  // Bottom 
  [0, -1]  // Left 
]; 
  
function withinLimits(row_num, col_num, total_rows, total_cols) { 
  return row_num >= 0 && row_num < total_rows && col_num >= 0 &&  
         col_num < total_cols; 
} 
  
function waterSlope(oceanMatrix, matrix, row, col) { 
  const nrows = matrix.length, ncols = matrix[0].length; 
  for (const [r, c] of Steps) { 
    if (withinLimits(row+r, col+c, nrows, ncols)) { 
      if (matrix[row+r][col+c] >= matrix[row][col] &&  
          !oceanMatrix[row+r][col+c]) { 
        oceanMatrix[row+r][col+c] = true; 
        waterSlope(oceanMatrix, matrix, row+r, col+c);  
      } 
    } 
  } 
} 
  
function commonWaterFlow(matrix) { 
  const matrix_rows = matrix.length, matrix_cols = matrix[0].length; 
  const pacificMatrix = Array.from({length: matrix_rows},  
                        () => Array(matrix_cols).fill(false)); 
  const atlanticMatrix = Array.from({length: matrix_rows},  
                        () => Array(matrix_cols).fill(false)); 
    
  pacificMatrix[0][1] = true; 
  pacificMatrix[0][2] = true; 
    
  for (let i = 0; i < matrix_cols; i++) { 
    pacificMatrix[0][i] = true; 
    atlanticMatrix[(matrix_rows-1)][i] = true; 
  } 
    
  for (let i = 0; i < matrix_rows; i++) { 
    pacificMatrix[i][0] = true; 
    atlanticMatrix[i][(matrix_cols-1)] = true; 
  } 
    
  for (let i = 0; i < matrix_cols; i++) { 
    waterSlope(pacificMatrix, matrix, 0, i); 
    waterSlope(atlanticMatrix, matrix, matrix_rows-1, i); 
  } 
    
  for (let i = 0; i < matrix_rows; i++) { 
    waterSlope(pacificMatrix, matrix, i, 0); 
    waterSlope(atlanticMatrix, matrix, i, matrix_cols-1); 
  } 
    
  let Count = 0; 
    
  for (let i = 0; i < matrix_rows; i++) { 
    for (let j = 0; j < matrix_cols; j++) { 
      if (pacificMatrix[i][j] && atlanticMatrix[i][j]) { 
        Count++; 
      } 
    } 
  } 
    
  return Count; 
} 
  
const mat = [  [1, 2, 2, 3, 5],  // T-T-T-T-T     F-F-F-F-T 
  [3, 2, 3, 4, 4],  // T-T-T-T-T     F-F-F-T-T 
  [2, 4, 5, 3, 1],  // T-T-T-F-F     F-F-T-T-T 
  [6, 7, 1, 4, 5],  // T-T-F-F-F     T-T-T-T-T 
  [5, 1, 1, 2, 4]   // T-F-F-F-F     T-T-T-T-T 
]; 
console.log(commonWaterFlow(mat));