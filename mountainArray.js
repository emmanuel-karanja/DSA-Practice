function findMinIndexInMountainArray(arr, X) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === X) {
        // Check if it's the first occurrence or there's a smaller index in the ascending part
        while (mid > 0 && arr[mid - 1] === X) {
          mid--;
        }
        return mid;
      }
  
      if (arr[mid] < X) {
        // X might be in the descending part
        low = mid + 1;
      } else {//arr[mid]>X
        // X might be in the ascending part
        high = mid - 1;
      }
    }
  
    return -1; // X not found
  }
  
  // Driver code
  const arr = [1, 2, 3, 4, 3, 2, 1];
  const X = 3;
  const result = findMinIndexInMountainArray(arr, X);
  console.log("Smallest index of X:", result); // Output: 2
  