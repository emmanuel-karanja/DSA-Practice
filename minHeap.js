/**A min heap is basically an array that obeys the min heap property i.e. given index i, the children 
 * will be found at  2i+1 and 2i+2 position and the root is always less than the children, and
 * the left child is less than the right child
 */

function heapify(arr, startIndex = 0) {
    const length = arr.length;
    //you can do this const {length}=arr;
    const midPoint=Math.floor(length / 2) - 1
    for (let i = midPoint; i >= startIndex; i--) {
      heapifyDown(arr, i); // Call heapifyDown for each parent node starting from the bottom half
    }
  }
  
  function heapifyDown(arr, parentIndex) {
    const { length } = arr;
   
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;
  
    let swapIndex = parentIndex; // Assume parent is the smallest
  
    if (leftChildIndex < length && arr[leftChildIndex] < arr[swapIndex]) {
      swapIndex = leftChildIndex;
    }
    if (rightChildIndex < length && arr[rightChildIndex] < arr[swapIndex]) {
      swapIndex = rightChildIndex;
    }
  
    if (swapIndex !== parentIndex) {
        //swap
      [arr[swapIndex], arr[parentIndex]] = [arr[parentIndex], arr[swapIndex]];
      //recurse
      heapifyDown(arr, swapIndex); // Recursively heapifyDown the swapped element
    }
  }
  
  
  function heapifyUp(arr){
    let index=arr.length-1;
    while(index>0){
      //calculate the parent index
      let parentIndex=Math.floor((index-1)/2);
      if(arr[index]<arr[parentIndex]){
        //sawap
        [arr[index],arr[parentIndex]]=[arr[parentIndex],arr[index]];
        index=parentIndex;
      }else{
        break;
      }
    }
  }

  const array = [12, 7, 1, 3, 10, 17, 19];
console.log("UnHeapified Array:", array);

const array2 = [12, 7, 1, 3, 10, 17, 19];
heapify(array);
console.log("Min-Heap after heapifyDown:", array);
heapifyUp(array2)
console.log("Min-heap after heapifyUp",array2)

/**Both the HeapifyUp and HeapifyDown yield the same result, and they both have O(logn)
 *  time complexity and O(1) space since the array is heapified in place */