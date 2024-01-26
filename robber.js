/**MAximize the profit where the robber cannot rob two consecutive houses that are in a row */

function robber(houses){
    if(!houses) return 0;
    if(houses.length==1) return houses[0];

    const ROB=[];
    //initialize
    ROB[0]=houses[0]; //rob the first house
    ROB[1]=Math.max(houses[0],houses[1]);//he can either rob house 0 or 1 and the second one is that
    
    for(let i=2;i<houses.length;i++){
        //either  the  current house and the one two houses before or the prev one
        let robbedTwoDownAndCurrent=ROB[i-2]+houses[i];
        let robbedPrevNoCurrent=ROB[i-1]
        ROB[i]=Math.max(robbedTwoDownAndCurrent,robbedPrevNoCurrent);
    } 

    return ROB[ROB.length-1]
}


function robberEfficient(houses){
    if (!houses) {
        return 0;
      }
    
      let robbedTwoDown = 0;
      let robbedPrev = houses[0];
      for (let i = 1; i < houses.length; i++) {
        let currNoRob = Math.max(robbedTwoDown, robbedPrev);
        //we don't rob the current house
        robbedPrev = robbedPrev + houses[i];
        robbedTwoDown = currNoRob;
      }
    
      return Math.max(robbedTwoDown, robbedPrev);
}

function robCircular(houses) {
    if (houses.length === 1) return houses[0];
  
    let prevNoRob = 0;
    let prevRob = houses[0];
    let currNoRob;
  
    for (let i = 1; i < houses.length; i++) {
      currNoRob = Math.max(prevNoRob, prevRob); // Store current no-rob value
      prevRob = prevNoRob + houses[i];
      prevNoRob = currNoRob;
    }
  
    // Handle circularity: compare no-rob of last house with robbing first and last
    return Math.max(prevNoRob, prevRob);
  }
  
  // Driver code to test the implementation
  const nums1 = [2, 3, 2];
  const nums2 = [1, 2, 3, 1];
  
  console.log(robCircularO1(nums1)); // Output: 3
  console.log(robCircularO1(nums2)); // Output: 4
  