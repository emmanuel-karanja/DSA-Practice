const arr=[[1,2],[3,7],[1,5],[2,4]];

//[1,2],[1,5],[2,4],[3,7]
//[1,5],[2,7]
//[1,7]
/**Intervals overlap when? 
 *  1. sort them in ascending order based on their starting time
 *  2. compare two at a rime if A.end > B.start, we can merge them.
 *  3. Merging intervals means creating a new interval such that New.start=min(A.start,b.start),New
 *     .end=Max(A.end,B.end)
 */

function hasOverlapping(intervalArr){
    //sort them first
    
    const arr=[...intervalArr]
    //sort ascending
    intervalArr.sort((a,b)=>a[0]-b[0]);

    let prevInterval=intervalArr[0];
    if(!intervalArr.length>1) return false;
    for(let i=1;i < intervalArr.length;i++){
       
         let currentInterval=intervalArr[i];
         console.log("prevInterval:",prevInterval,"currInterval:",currentInterval)
         if(prevInterval[1]>=currentInterval[0]){
            console.log("overlap:",prevInterval,currentInterval)
            return true;
         }
         //update the prev interval
         prevInterval=currentInterval;
    }

    return false
}

function mergeIntervals(intervals){
    //sort 
   intervals.sort((a,b)=>a[0]-b[0]);
   //a stack
   let stack=[];
   //push the first intervals
   stack.push(intervals[0]);
   for(let i=1;i<intervals.length;i++){
     //get the top
     let top=stack[stack.length-1];//peek

     let current=intervals[i]
     let [currentStart,currentEnd]=current;
     let [prevStart,prevEnd]=top;
     //if it's not overlapping add it to the top
     if(prevEnd<currentStart){
        stack.push(current);
     
     } else if (prevEnd> currentStart) {//there is an overlap
        //we only need to update the end since we've sorted this thing.
        let mergedInterval=[Math.min(prevStart,currentStart),Math.max(prevEnd,currentEnd)]
   
        stack.pop();//remove the old top and return it
        stack.push(mergedInterval);
    }
         
   }

   return stack;
}

/**Above works perfectly with O(n) space, and O(nlogn) due to the sorting you can do it insitu though*/



console.log("hasOverlap:",hasOverlapping(arr));
console.log("merged:",mergeIntervals(arr))



