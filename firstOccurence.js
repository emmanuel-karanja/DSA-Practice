function firstOccurence(arr,target){
    //do a binary search on the array, and once we find the element, we return the index
    //then expand
    let left=0;
    let right=arr.length-1;
    //binary search
    let localRight=-1; 
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]===target){//we found it
            localRight=mid;
            while(localRight >=left){
                if(arr[localRight]===target){
                    localRight--;
                }else{
                    break;
                }
            }
            break;
        }else if(target > arr[mid]){//we search the right side
          left=mid+1; //we update the left pointer
        }else{ //target < arr[mid]
           right=mid-1;
        }
    }

    return localRight !=-1? [localRight,arr[localRight]]: -1;
}





//CORRECT ONE!
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1; // Initialize to not found
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        firstOccurrence = mid; // Potential first occurrence found
        right = mid - 1; // Continue searching to the left for earlier occurrences
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return firstOccurrence;
  }
  
  const test=[1,1,2,2,2,3,3,4,5]


console.log("firstO:",findFirstOccurrence(test,2))