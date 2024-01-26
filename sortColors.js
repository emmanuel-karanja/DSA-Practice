function sortColors(nums) {
    //blue and red point to the respective colors indices on the array
    //red and blue are the limits of the array, i.e. red points to the last red color
    //blue points to the first blue color and together they frame the window and it'll keep
    //reducing, now the roving pointer here is i
    let red = 0, blue = nums.length - 1;
    let i = 0;
  
    while (i <= blue) {
      if (nums[i] === 0) {
        // Swap with the first red element
        [nums[i], nums[red]] = [nums[red], nums[i]];
        red++;
        i++;
      } else if (nums[i] === 2) {
        // Swap with the last blue element
        [nums[i], nums[blue]] = [nums[blue], nums[i]];
        blue--;
      } else {
        // If it's white, move to the next element
        i++;
      }
    }
  }
  
  // Driver code to test the implementation
  const nums1 = [2, 0, 2, 1, 1, 0];
  sortColors(nums1);
  console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]
  
  const nums2 = [1, 2, 0];
  sortColors(nums2);
  console.log(nums2); // Output: [0, 1, 2]
  

  /**Or push the zeros to one side  and then use two pointers to swap the remaining */

  function zerosToOneSize(colors){
    let counter=0;
    for(let i=0;i<colors.length;i++){

    }
  }