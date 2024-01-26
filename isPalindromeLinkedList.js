
/**1. Find the middle of the linked list by using fast and slow pointer, slow will point to
 *    the middle when fast is pointing at the end.
 * 2. Reverse the second half using the linked list reversal algorithm.
 * 3. Iterate over the two lists at the same pace, using the two pointers i.e. left
 *     which points at the head of the first half and right which points at the
 *     head of the of the reversed second half. Compare the values, if they are not the same,
 *     return false else, return true.
 */
function isPalindrome(head) {
    // Find the middle node using two pointers
    //we check fast.next too because the fast pointer will advance .next.next
    let slow = fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the list
    let prev = null;
    while (slow) {
      // Declare curr here
      let curr = slow; //next
      slow = slow.next;
      curr.next = prev;
      prev = curr;
    }
  
    // Compare the two halves
    let left = head;
    let right = prev;
    while (left && right) {
      if (left.val !== right.val) {
        return false;
      }
      //increment
      left = left.next;
      right = right.next;
    }
  
    return true;
  }
  
  
  // Example usage
  const head = { val: 1, next: { val: 2, next: { val: 2, next: { val: 1, next: null } } } };
  const isPalin= isPalindrome(head);
  console.log(isPalin); // Output: true
  