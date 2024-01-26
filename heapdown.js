

function heapdown(arr,parentIndex){
    const length=arr.length;

    let leftChildIndex=2*parentIndex +1;
    let rightChildIndex=2*parentIndex+2;

    let swapIndex=parentIndex;//initialize it to this
    if(leftChildIndex < length && arr[leftChildIndex]< arr[swapIndex]){
        swapIndex=leftChildIndex;
    }

    if(rightChildIndex < length && arr[rightChildIndex] < arr[swapIndex]){
        swapIndex=rightChildIndex;
    }

    if(swapIndex !=parentIndex){
        //swap
        [arr[swapIndex],arr[parentIndex]]=[arr[[parentIndex],arr[swapIndex]]];

        //recurse
        heapdown(arr,swapIndex);
    }
}