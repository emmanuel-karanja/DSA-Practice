function quickSort(arr) {
    //base case
    if (arr.length <= 1) return arr; // Base case: empty or single-element array
  
    //pick the pivot at random.
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];//pick the middle element
  
    const left = [];
    const right = [];
  
    //divide the array into parts around the index,
    for (let i = 0; i < arr.length; i++) {
        //
      if (i !== pivotIndex) {
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  

  const test=[6,3,1,3,5,7,7,9]

  console.log("sorted:",quickSort(test))