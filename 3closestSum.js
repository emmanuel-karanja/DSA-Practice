function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
  
    let closestSum = Infinity;
    let closestDiff = Infinity;
  
    let right = nums.length - 1;//start at the very end
  
    //check if we have any right values greater than the target and reduce the size of the array
    while(arr[right]> target && right >=0){
        right--;
    }

    //we want it to point right-1,  use right-1
    for (let i = 0; i < nums.length - 2; i++) {
        
      let left = i + 1;//ensure that i and left are not pointing at the same thing
    
      while (left < right) {
        const currentSum = nums[i] + nums[left] + nums[right];
        const currentDiff = Math.abs(currentSum - target);
  
        if (currentDiff < closestDiff) {
          closestSum = currentSum;
          closestDiff = currentDiff;
        }
  
        //make it smaller
        if (currentSum < target) {
          left++;
        } else {//the bigger number is to the right, so move one place to the right
            //to reduce the sum
          right--;
        }
      }
    }
  
    return closestSum;
  }
  