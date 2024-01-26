function hasCycle(head) {
    if (!head || !head.next) {
      return false; // Empty or single-node list has no cycle
    }
  
    let slow = head;
    let fast = head.next;
  
    while (slow !== fast) {
      if (!fast || !fast.next) {
        return false; // Reached end without a cycle
      }
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return true; // Cycle detected
  }
  