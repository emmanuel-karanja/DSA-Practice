/**Calculate the amount of water trapped at each block and sum them up.
 *   1. Calculate the water trapped at each block.
 *        - We know that to get that the water trapped is bounded by the minimum of the max heights
 *          of the towers
 *          to the left and to the right of the current block
 *         i.e.  water=Math.min(leftMax,rightMax) - currentHeight
 *    So, for each element i, we traverse right and left to find the max and then find the min of
 *    these two and then execute the above formulae.
 * 
 *    forEach block i
 *        leftMax=getMaxLeft(heights,0,i-1);
 *        maxRight=getMaxRight(heights,i+1,heights.length-1);
 *        waterTrapped=Math.min(leftMax,rightMax)-heights[i];
 */

function trappedWaterBruteForce1(heights=[]){
    if(heights.length <2 ) return 0;//water is only trapped by 3 blocks or more
   
   let trappedWater=0;

    for(let i=0;i<heights.length;i++){
        let leftMax=0;
        for(let j=i;j>=0;j--){
            leftMax=Math.max(leftMax,heights[j]);
        }

        let rightMax=0;
        for(let j=i;j<heights.length;j++){
            rightMax=Math.max(rightMax,heights[j]);
        }
    
        let waterAtBlock=Math.min(leftMax,rightMax)-heights[i];
        trappedWater=trappedWater+waterAtBlock;
    }

    return trappedWater;
}


const test=[3,1,4,6,7,4,1,8];

console.log("water_trapped:",trappedWaterBruteForce1(test))


//basically pre-compute the leftMaxes and rightMaxes and then do a single iteration
//over the heights and calculate the water trapped.
function trapWaterBruteForce(height) {
    const n = height.length;
    if (n <= 2) return 0; // No water can be trapped if there are less than 3 elements
  
    let leftMax = Array(n).fill(0);
    let rightMax = Array(n).fill(0);
    let totalWater = 0;
  
    // Calculate left and right maximums for each element
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
  
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
  
    // Calculate trapped water for each element
    for (let i = 1; i < n - 1; i++) {
      const minHeight = Math.min(leftMax[i], rightMax[i]);
      totalWater += (minHeight - height[i]) > 0 ? (minHeight - height[i]) : 0;
    }
  
    return totalWater;
  }
  


  console.log("water_trapped:",trapWaterBruteForce(test))

  /**Using Two Pointers:
   *  The logic is still the same, we find the water for the current block using the
   *  same approach but now, we don't find the max every time. We have two pointers on
   *   the left; left and leftMax and two pointers on the right; right and rightMax.
   * 
   *   we move the left pointer if the leftHeight is less than or equal to the rightHeight
   *      - we update leftMax if the currentHeight is greater than leftMax,
   *        or we update the water held. At the current block, leftMax-currentHeight is the one
   *        at block and therefore.
   *      -update the left pointer
   *   else
   *      -we update rightMax if the currentHeight is greater than rightMax or we update the
   *       water held
   *      -update the right pointer
   * 
   *   i.e. 
   *   while(left<right){
   *     if(heights[left]<=heights[right]){
   *       //update from left
   *       if(heights[left]>leftMax){
   *           leftMax=heights[left];
   *         }else{//calculate water
   *           let waterAtBlock=leftMax-heights[left]
   *           waterTrapped=waterTrapped+waterAtBlock;
   *         }
   *       //update left pointer
   *       left++;
   *     }//else heights[right]<heights[left]
   *     if(rightMax < heights[right]){
   *        rightMax=heights[right]
   *     }else{
   *         let waterAtBlock=rightMax-heights[right];
   *         waterTrapped=waterTrapped+waterAtBlock
   *     }
   *     right--;
   *   }
   * 
   * 
   *  With two pointers: 
   *     1. Determine if they start on the same side or opposite sides.
   *     2. When to update each.
   */

  function trapTwoPointers(height) {
    const n = height.length;
    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;
  
    while (left < right) {
        //we only update the left pointers if the h[left]>=h[right]
      if (height[left] <= height[right]) {//why? Because at this point we are guaranteed
        //that leftMax is the lesser of the two with rightMax
        // Move left pointer and update leftMax
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          let waterAtBlock=leftMax-height[left];

          totalWater += waterAtBlock;
        }
        left++;
      } else {//h[left]>h[right]
        // Move right pointer and update rightMax
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          let waterAtBlock=rightMax=height[right];
          totalWater += waterAtBlock;
        }
        right--;
      }
    }
  
    return totalWater;
  }
  