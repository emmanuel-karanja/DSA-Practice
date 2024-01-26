function mergeSort(arr,start,end) {
    //ensure to check the base case
    //you use this style and you've to ensure that you return an array
    if (start===end) return [arr[start]]; // Base case: array of 1 or 0 elements is already sorted
  
    const mid = Math.floor((start+end) / 2);
    const left = mergeSort(arr,start,mid);
    const right = mergeSort(arr,mid+1,end);
  
    return merge(left, right);
  }

  function merge(arr1, arr2) {
    const mergedLength = arr1.length + arr2.length;
    const merged = new Array(mergedLength);
    let i = 0, j = 0, k = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged[k] = arr1[i];
        i++;
      } else {
        merged[k] = arr2[j];
        j++;
      }
      k++;
    }
  
    // Copy remaining elements from arr1
    //means that there are still items remaining in this arr
    while (i < arr1.length) {
      merged[k] = arr1[i];
      i++;
      k++;
    }
  
    // Copy remaining elements from arr2
    //means that there are still items remaining in this array
    while (j < arr2.length) {
      merged[k] = arr2[j];
      j++;
      k++;
    }
  
    return merged;
  }

  /**space time O(nlogn)  and space O(n)*/
  

  const arr=[7,3,2,9,11]

  console.log("sorted:",mergeSort(arr,0,arr.length-1))