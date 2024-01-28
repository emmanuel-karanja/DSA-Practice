function canJump(nums) {
    // Initialize the furthest reachable index
    let furthestReach = 0;
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // Check if the current position can reach the furthest reachable index
      if (i <= furthestReach) {
        // Update the furthest reachable index based on the current jump
        //furthest reach is given where we are e.g. index 0, and we find the value there
        //is 5, the  furthestReachFromHere is 0+5, if we were at index 3 and found 5, furthestReachFromHere
        //reach would be 3+5
        let reachFromHere=i+nums[i];
        furthestReach = Math.max(furthestReach, reachFromHere);
  
        // If the furthest reachable index now goes beyond the last index, we can reach it
        if (furthestReach >= nums.length - 1) {
          return true;
        }
      }
    }
  
    // If we've reached this point, it means we couldn't reach the last index
    return false;
  }
  
  // Example usage
  const nums = [2, 3, 1, 1, 4];
  const canReachEnd = canJump(nums);
  console.log(canReachEnd); // Output: true
  