

/**Only two things:
 * 
 * 1. Is the current index reachable from a previous position i.e. i<=furthestReach
 * 2. Can be reach from the furthest index from the current one?
 */

function canJump(nums=[]){
    let furthestReach=0;
    let ways=0;
    for(let i=0;i<nums.length;i++){
        console.log("furthestReach:",furthestReach,"currentIndex:",i)
        //from the current position, where is the furthest we can go? i.e. if we are at index 1,
        //which has the value 4, we can reach 1+5
        if(i<=furthestReach){ //is the current index reachable from a previous position?
            let furthestReachFromHere=i+nums[i];
            furthestReach=Math.max(furthestReach,furthestReachFromHere);
    
            //can we reach the last index?
            if(furthestReach >=nums.length-1){
                return true;
            }//if not we proceed to the next one
        }
       
    }

    return false;
}

//what if you get asked, how many ways can we reach the end? We'd simply add a counter instead of return true
//in that last conditional

//const test1=[3,2,1,0,4]
const test2= [2, 3, 1, 1, 4];

console.log("canJump test2:",canJump(test2))