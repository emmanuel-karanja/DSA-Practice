/**Given an array of positive integers nums and a positive integer target, 
 *  return the minimal length of a subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead. 
 
  APPROACH
  1. Two pointers starting from the same side
  2. We sum the number and if we find that the running sum exceeds the target,
        - We exclude the left one and test again*/

function minSubArraySum(arr,target){
    //early exit

    let left=0;
    let right=0;
    let runningSum=0;
    let minLength=Infinity;

    while(right < arr.length){
        runningSum+=arr[right];

        while(runningSum >= target){
            let currentLength=right-left+1;
            minLength=Math.min(minLength,currentLength)
            //remove the left number
            runningSum-=arr[left];
            left++;
        }

        right++;
    }

    return minLength;
}

const nums = [2,3,1,2,4,3] 
const target=7;

console.log("minSizeL",minSubArraySum(nums,target))


//Did it on a first attempt and got it.