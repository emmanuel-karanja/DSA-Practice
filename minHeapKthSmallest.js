function findKthSmallest(arr, k) {
    if (k <= 0 || k > arr.length) {
      throw new Error("Invalid k value");
    }
  
    const heap = new MinHeap(); // Use your existing MinHeap implementation
  
    // Build the min-heap with all elements
    for (const element of arr) {
      heap.insert(element);
    }
  
    // Extract and return the kth smallest element
    for (let i = 1; i < k; i++) {
      heap.removeMin(); // Discard the already found smaller elements
    }
  
    return heap.getMin(); // The remaining top element is the kth smallest
  }
  
  class MinHeap {
    constructor() {
      this.data = [];
    }
  
    insert(element) {
      this.data.push(element);
      this.heapifyUp(this.data.length - 1); // Maintain min-heap property after insertion
    }
  
    removeMin() {
      if (this.data.length === 0) {
        throw new Error("Heap is empty");
      }
  
      //swap the first and the last why?
      [this.data[0], this.data[this.data.length - 1]] = [this.data[this.data.length - 1], this.data[0]];
      this.data.pop();
      this.heapifyDown(0); // Maintain min-heap property after removal
    }
  
    getMin() {
      return this.data[0];//minimum is at the front of the array
    }
  
    heapifyUp(index) {
      //iteratively update the parent
      while (index > 0) {
        //calculate the parent index
        const parentIndex = Math.floor((index - 1) / 2);
        //obeys the heap rule
        if (this.data[parentIndex] <= this.data[index]) {
          break;
        }
        //else
  
        [this.data[parentIndex], this.data[index]] = [this.data[index], this.data[parentIndex]];
        index = parentIndex;
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
  
      let swapIndex = index;
  
      if (leftChildIndex < this.data.length && this.data[leftChildIndex] < this.data[swapIndex]) {
        swapIndex = leftChildIndex;
      }
      if (rightChildIndex < this.data.length && this.data[rightChildIndex] < this.data[swapIndex]) {
        swapIndex = rightChildIndex;
      }
  
      if (swapIndex !== index) {
        [this.data[swapIndex], this.data[index]] = [this.data[index], this.data[swapIndex]];
        this.heapifyDown(swapIndex);
      }
    }
  }
  
  // Example usage
  const arr = [5, 2, 8, 1, 7, 3];
  const k = 3;
  
  const kthSmallest = findKthSmallest(arr, k);
  console.log(`The ${k}th smallest element is: ${kthSmallest}`);
  