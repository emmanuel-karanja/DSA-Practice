/**int largestRectangleArea(vector < int > & heights) {
  int max_area = 0;
  for (size_t i = 0; i < heights.size(); i++) {
    for (size_t j = i; j < heights.size(); j++) {
      int min_height = INT_MAX;
      for (size_t k = i; k <= j; k++) {
        min_height = min(min_height, heights[k]);
      }
      max_area = max(max_area, min_height * (j - i + 1));
    }
  }
  return max_area;
} */

function maxAreaHistogram(arr=[]){
    if(arr.length===0) return 0;
    if(arr.length===1) return 1;

   let maxArea=0;
   for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let minHeight=Infinity;
        for(let k=i;k<=j;k++){
            minHeight=Math.min(minHeight,arr[k]);
        }
        maxArea=Math.max(maxArea, minHeight *(j-i+1));
    }
   }

   return maxArea;
}

//Time O(N^3) space O(1)

/**We get the minimum index for a given set of bars, and then find the area bounded by that
 * and then to the left and to the right of that bar
 *  DIVIDE AND CONQUER i.e. 
 * int calculateArea(vector < int > & heights, int start, int end) {
  if (start > end) {
    return 0;
  }
  int min_index = start;
  for (int i = start; i <= end; i++) {
    if (heights[min_index] > heights[i]) {
      min_index = i;
    }
  }
  return max({
    heights[min_index] * (end - start + 1),
    calculateArea(heights, start, min_index - 1),
    calculateArea(heights, min_index + 1, end)
  });
}
 
int largestRectangleArea(vector < int > & heights) {
  return calculateArea(heights, 0, heights.size() - 1);
} */

function calculateArea(arr=[],start,end){
    if(start>end) return 0;
    //find minimum index
    let minHeightIndex=start;
    for(let i=start;i<=end;i++){
        if(arr[i]<arr[minHeightIndex]) {
            minHeightIndex=i;
        }
    }

    let minHeight=arr[minHeightIndex];
    let width=(end-start)+1;

    return Math.max(minHeight*width,//find area bounded by the minimum height
           calculateArea(arr,start,minHeightIndex-1), //find left area
           calculateArea(arr,minHeightIndex+1,end)//find right area
    )
}

function dcMaxAreaHistogram(arr=[]){
    if(arr.length===0) return 0;
    if(arr.length===1) return 1;

    const start=0;
    const end=arr.length-1;

    return calculateArea(arr,start,end);
}

//Time O(NlogN) and Space O(N) , everyime you see dividing an array into 2 along something, just know
//logN is involved somewhere. It's log to base 2.



/**
 * 
 *  Using a STACK:
 * 
 *  1. Initialize a stack by pushing an initial index of -1
 *  2. Traverse the array and:
 *        -if the current element A[i]> A[stack.top()] and stack is not empty, push it onto the stack and maximize area
 *           width=i-A[stack[stack.length-1]]-1;
 *           height=A[stack[stack.length-1]]
 *        -if A[i]<A[stack.top()], pop the stack until A[i]>=A[stack.top()]
 *       
 * 
 *  3. Maximize the area by popping the heights off the stack
 *       height=A[stack.top()]
 *       stack.pop();
 *       width=A.length-A[stack.top()]-1;
 *       height=
 *  
 * int largestRectangleArea(vector < int > & heights) {
  stack < int > stk;
  stk.push(-1);
  int max_area = 0;
  for (size_t i = 0; i < heights.size(); i++) {
    while (stk.top() != -1 and heights[stk.top()] >= heights[i]) {
      int current_height = heights[stk.top()];
      stk.pop();
      int current_width = i - stk.top() - 1;
      max_area = max(max_area, current_height * current_width);
    }
    stk.push(i);
  }
  while (stk.top() != -1) {
    int current_height = heights[stk.top()];
    stk.pop();
    int current_width = heights.size() - stk.top() - 1;
    max_area = max(max_area, current_height * current_width);
  }
  return max_area;
}
 * 
 */

function stackMaxAreaHistogram(arr=[]){

    if(arr.length===0) return 0;
    if(arr.length===1) return 1;

    let maxArea=0;
    let stack=[];
    stack.push(-1);//initialize the stack

    //ITERATE AND MAXIMIZE
    for(let i=0;i<arr.length;i++){
        //in Javascript, the top is the last element
        while(stack[stack.length-1]!=-1 && arr[stack[stack.length-1]]>=arr[i]){
         let currentHeight=arr[stack[stack.length-1]];
         stack.pop();
         let currentWidth=i-stack[stack.length-1]-1;
         maxArea=Math.max(maxArea,currentHeight*currentWidth);
        }//else
        stack.push(i);
    }

    while(stack[stack.length-1]!=-1){
        let currentHeight=arr[stack[stack.length-1]];
        stack.pop();
        //only difference is is the calculation of width
        let currentWidth=arr.length-stack[stack.length-1]-1;
        maxArea=Math.max(maxArea,currentHeight*currentWidth);
    }
    return maxArea;
}

//time O(N) and space O(N) due to the stack

const test=[1,3,2,5,2,4]

console.log("maxAreaHistogram:",stackMaxAreaHistogram(test))