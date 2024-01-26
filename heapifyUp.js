//iteratively update the parents given an index

function heapifyUp(arr){
    let index=arr.length-1;
    while(index>0){
        //calculate the parent index, 2i-1 or 2i-2
        let parentIndex=Math.floor((index-1)/2);
        //check if heap property is violated
        if(arr[parentIndex]<=arr[index]){
            break;
        }//else
        //swap
        [arr[parentIndex],arr[index]]=[arr[index],arr[parentIndex]]
        index=parentIndex;
    }
    return arr;
}