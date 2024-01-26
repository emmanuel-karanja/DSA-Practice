/**
 * 
 *You've a selection of elements e.g. [A,B] permutations are [A,B], [B,A]
 *Rules are:
    1. No letter must be repeated.
    2. A valid result must have length=A.length

    How do you arrive at above?
    1. Start with an empty result
    2. Pick one letter from the Array to create a candidate
    3. Test the candidate if it passed the above rules
    5. Add it to result else, add another character and repeat
 */
function permutation(choices){
  if(choices.length===0) return [];
  if(choices.length===1) return arr;

  let result=[];

  function permutate(candidate,choices){
    if(candidate.length===choices.length){
     //   console.log("result:",result)
        result.push([...candidate]);
        return;
    }//else

    for(let choice of choices){
        //validate choice
        if(candidate.includes(choice)) continue; 
        //else
        candidate.push(choice);
        permutate(candidate,choices);
        candidate.pop();//remove the choice
    }

  }

  permutate([],choices);
  return result;
    
}

const test=["A","B","C"]

console.log("permutations",permutation(test))

//Time  O(n) due to the loop and space O(n*n!), it's no joke on the extra space