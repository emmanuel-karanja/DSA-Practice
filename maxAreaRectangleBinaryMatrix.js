
  
    /**Or for each row, construct a second matrix  where each row is a histogram constructed from the previous
     * one and then use maxAreaHistogram to find that area
     */
    function calculateArea(heights=[], start,end){
       if(start>end) return 0;
      let minHeightIndex=start;

      //find minHeightIndex
      for(let i=start;i<=end;i++){
        if(heights[i]<heights[minHeightIndex]){
            minHeightIndex=i;
        }
      }

      //get width and height
      let height=heights[minHeightIndex];
      let width=(end-start)+1;
      let boundedArea=width*height;
      let rightArea=  calculateArea(heights,minHeightIndex+1,end);
      let leftArea= calculateArea(heights,start,minHeightIndex-1);
      return Math.max(boundedArea,rightArea,leftArea);
    }

    function maxAreaHistogram(heights){
        if(heights.length===0) return 0;
        if(heights.length===1) return heights[0];

        const start=0;
        const end=heights.length-1;
        return calculateArea(heights,start,end);

    }

    

    //now for the matrix, traverse row by row and find the maximum area histogram of that

    function maxAreaRectangle(matrix){
        const COLS=matrix[0].length;
        //get each row and construct the matrix starting with first row, our matrix is an array of
        //arrays and simply get the first one
        let currentHistogram=matrix[0];
        let maxArea=maxAreaHistogram(currentHistogram);
       
        for(let i=1;i<COLS-1;i++){
          currentHistogram=combineRows(currentHistogram,matrix[i]);
          let localMaxArea=maxAreaHistogram(currentHistogram)
          maxArea=Math.max(maxArea,localMaxArea);
        }

        return maxArea;
    }

    function combineRows(row1=[],row2=[]){
        let sum=[];
        for(let i=0;i<row1.length;i++){
            //if row2[i] is 0, the height is for that is 0
             sum[i]=row2[i]===0?0:row1[i]+row2[i];
        }
        return sum;
    }

    const testMatrix=[[0,1,1,0,1,0],[1,1,1,1,1,1],[0,1,1,1,0,1],[1,1,1,1,1,1],[1,0,1,1,1,1]];

   console.log("maxArea:",maxAreaRectangle(testMatrix))


   /**Using a stack */
   function largestRectangleArea(matrix) {
    const ROWS = matrix.length;
    const  COLS = matrix[0].length;
    let maxArea = 0;

    //store heights for each column
    const heights = new Array(COLS).fill(0); // Array to store heights for each column
  
    for (let i = 0; i < ROWS ; i++) {
      const stack = []; // Stack to track potential rectangle boundaries
  
      for (let j = 0; j <= COLS; j++) { // Iterate through each column, including an extra 0 at the end
        //get the current height
        const currentHeight = (j === COLS) ? 0 : matrix[i][j];
  
        // Maintain the stack in increasing order of heights
        while (stack.length > 0 && currentHeight <= heights[stack[stack.length - 1]]) {
          const height = heights[stack.pop()];
          const width = j - (stack.length > 0 ? stack[stack.length - 1] : -1);
          maxArea = Math.max(maxArea, height * width);
        }
  
        stack.push(j); // Push the current index onto the stack
        heights[j] = currentHeight; // Update the height for the next row
      }
    }


  
    return maxArea;
  }
  
  //space O(m) and time O(nm)