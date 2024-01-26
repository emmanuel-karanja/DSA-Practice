function getKthLargestElement(arr,k){
    if(arr.length===0) return null;
    if(arr.length===1) return arr[0];

    const n=arr.length;
    const kth=n-k;

    return quickSelect(arr,0,n-1,kth);
}


function quickSelect(arr,start,end,kth){
    //base case
    if(start===end) return arr[start];

    let pivotalIndex=partition(arr,start,end,kth);

    if(kth===pivotalIndex) return arr[kth];
    else if(kth < pivotalIndex) return quickSelect(arr,start,pivotalIndex-1,kth);
    else if(kth > pivotalIndex) return quickSelect(arr,pivotalIndex+1,end,kth)

}

function partition(arr,left,right){
    if(left===right) return left;
    let i=left;
    let j=right;

    let localPivotIndex=Math.floor((left+right)/2);
    let pivot=arr[localPivotIndex];
    while(i<=j){
        //advance both
        while(arr[i]<pivot) i++;
        while(arr[j]>pivot) j--;

        //at this point we know what i points at is greater than what j points at so we swap
        if(i<=j){
            //swap
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
            j--;
        }
    }

    return i;
}


const arr=[3,2,1,5,9,8,11,7,6]

const k=1;
console.log("k:",k,"kth element",getKthLargestElement(arr,k))