/**You are given an array people where people[i] is
 *  the weight of the ith person, and an infinite number of boats
 *  where each boat can carry a maximum weight of limit. Each boat carries
 *  at most two people at the same time, provided the sum of the weight of those 
 * people is at most limit.

Return the minimum number of boats to carry every given person.
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
APPROACH:

  In the above case, we can insert all the above into map, and then iterate,
 if we can find the complement i.e. limit-A[i], we'll use one boat for both,
 why 
*/
/** sort it so that we can pair the heaviest people with the lightest people */

function numRescueBoats(people, limit) {
    // Sort people in ascending order of weight
    people.sort((a, b) => a - b);
  
    let boats = 0;
    let left = 0;
    let right = people.length - 1;
  
    while (left<= right) {
      // If two people can fit in a boat, put them together
      if (people[left] + people[right] <= limit) {
        left++;
        right--;
      } else {
        // Otherwise, only the heavier person can go in a boat
        right--;
      }
      boats++;
    }
  
    return boats;
  }
  
  // Driver code to test the function
  const people = [3, 2, 2, 1];
  const limit = 3;
  const result = numRescueBoats(people, limit);
  console.log(result); // Output: 3
  