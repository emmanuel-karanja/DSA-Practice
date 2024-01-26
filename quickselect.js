function findKthLargest(arr, k) {
    const n = arr.length;
    const kthSmallest = n - k; // Convert to finding the kth smallest for QuickSelect
    //we can use this for finding the median of an unsorted array
  
    return quickSelect(arr, 0, n - 1, kthSmallest);
  }
  
  function quickSelect(arr, start, end, kth) {

    //base case
    if (start === end) return arr[start]; // Base case: single element
  
    const pivotIndex = getPivotIndex(arr, start, end);
  
    if (kth === pivotIndex) 
       return arr[kth]; // Found the kth smallest
    else if (kth < pivotIndex) 
       return quickSelect(arr, start, pivotIndex - 1, kth);
    else ///kth is greater
       return quickSelect(arr, pivotIndex + 1,end, kth);
  }
  
  //all we really want is for all elements all elements less than pivot to be to the left
  //and all the greater ones to be the right
  function getPivotIndex(arr, left, right) {
    //calculate a pivot
    const localPivotIndex=Math.floor((left + right) / 2)
    const pivot = arr[localPivotIndex];
    let i = left;
    let j = right;
  
    while (i <= j) {
      while (arr[i] < pivot) i++; //increment the left index until you find an element larger or equal to pivot
      while (arr[j] > pivot) j--;//decrement right index until you find an element smaller or equal pivot
      
      if (i <= j) { //if left is equal or less than right, swap the elements and progress both
        
        //at this point we know that j points to a value less than pivot and i points to a value
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
  
    return i;
  }
  
  const arr=[3,2,1,5,9,8,11,7,6]

const k=1;
console.log("k:",k,"kth element",findKthLargest(arr,k))