function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      const current = arr[i];
      let j = i - 1;
  
      // Shift elements larger than `current` to the right
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert `current` in its correct position
      arr[j + 1] = current;
    }
  
    return arr;
  }
  