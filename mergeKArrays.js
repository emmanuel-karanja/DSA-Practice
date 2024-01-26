class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(element) {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
  
    extractMin() {
      if (this.heap.length === 0) {
        return null;
      }
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  
    size() {
      return this.heap.length;
    }
  
    heapifyUp(index) {
      let currentIndex = index;
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
        if (this.heap[currentIndex].value < this.heap[parentIndex].value) {
          [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
          currentIndex = parentIndex;
        } else {
          break;
        }
      }
    }
  
    heapifyDown(index) {
      let currentIndex = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
  
      let smallest = currentIndex;
      if (left < this.heap.length && this.heap[left].value < this.heap[smallest].value) {
        smallest = left;
      }
  
      if (right < this.heap.length && this.heap[right].value < this.heap[smallest].value) {
        smallest = right;
      }
  
      if (smallest !== currentIndex) {
        [this.heap[currentIndex], this.heap[smallest]] = [this.heap[smallest], this.heap[currentIndex]];
        this.heapifyDown(smallest);
      }
    }
  }
  
  function mergeKArrays(arrays) {
    console.log("starting....",arrays)
    const minHeap = new MinHeap();
  
    // Insert the first element from each array into the heap
  for (let i = 0; i < arrays.length; i++) {
    console.log("start for loop...",i)
    if (arrays[i].length > 0) {
    
        let obj={ arrayIndex: i, elementIndex: 0, value: arrays[i][0] }
      // Corrected line: use arrays[i][0] for value
      console.log("inserting",obj)
      minHeap.insert(obj);
    }
  }
  
    const mergedArray = [];
  
    console.log("minimize..",minHeap.size())
    while (minHeap.size() > 0) {
      console.log("loop top")
      const min = minHeap.extractMin();
      const { arrayIndex, elementIndex, value } = min;
      console.log("after extractMin",min)
      mergedArray.push(value);
  
      // Add the next element from the same array, if available
      console.log("conditional test",elementIndex + 1 < arrays[arrayIndex].length)
      if (elementIndex + 1 < arrays[arrayIndex].length) {
        console.log("inserting again...")
        minHeap.insert({
          arrayIndex,
          elementIndex: elementIndex + 1,
          value: arrays[arrayIndex][elementIndex + 1]
        });
      }else{
        console.l
      }
    }
  
    return mergedArray;
  }
  
  // Driver code to test the implementation
  const array1 = [1, 4, 7];
  const array2 = [2, 5, 8];
  const array3 = [3, 6, 9];
  const mergedArray = mergeKArrays([array1, array2, array3]);
  console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  