/**given an unsorted array of numbers, pick three numbers such that their sum is closest to a
 *  target number */

function threeSumClosest(arr,target){
    //sort the array in the ascending order
    arr.sort((a,b)=>a-b);

    let closestDiff=Infinity;//the difference between the sum and the target
    let closestSum=Infinity;
    
    let right=arr.length-1;

    for(let i=0;i<arr.length-2;i++){
       let left=i+1;//left and i can't point at the same position, i and left proceed together
       while(left<right){
        currentSum=arr[i]+arr[left]+arr[right];
        currentDiff=Math.abs(currentSum-target);
        //then what?
        
        if(currentDiff<closestDiff){//can we update our running closestDiff and closestSum?
            closestDiff=currentDiff;
            closestSum=currentSum;
        }

        if(closestSum < target){
            left++
        }else{
            right--;
        }
       }
    }

    return closestSum;
}

const nums = [-1, 2, 1, -4];
const target = 1;
const closest = threeSumClosest(nums, target);
console.log("closest sum:",closest)