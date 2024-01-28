function minJumps(nums) {
    // Initialize variables
    let jumps = 0;
    let currentReach = 0;
    let nextReach = 0;
  
    // Iterate through the array
    for (let i = 0; i < nums.length - 1; i++) { // Note: iterate until the second last index
      // Update the next reachable index based on the current jump and position
      nextReach = Math.max(nextReach, i + nums[i]);
  
      // Check if we can reach the last index from the current position
      if (currentReach >= nums.length - 1) {
        return jumps;
      }
  
      // If we've reached the current reach limit, increment the jump count and update
      if (i === currentReach) {
        jumps++;
        currentReach = nextReach;
      }
    }
  
    // If we reach here, it means we've made a jump to the second last index, and one more jump is needed
    return jumps + 1;
  }
  
  // Example usage
  const nums = [2, 3, 1, 1, 4];
  const minJumpsCount = minJumps(nums);
  console.log(minJumpsCount); // Output: 2
  