function cloneLinkedList(head) {
    if (!head) return null; // Handle empty list
  
    let current = head;
    let cloneHead = new Node(current.data); // Create head of cloned list
    let cloneCurrent = cloneHead;
  
    while (current.next) {
      cloneCurrent.next = new Node(current.next.data);
      //point to next for both
      current = current.next;
      cloneCurrent = cloneCurrent.next;
    }
  
    return cloneHead;
  }
  