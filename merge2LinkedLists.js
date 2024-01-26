function mergeLinkedLists(list1, list2) {
    // Create a dummy head node to simplify the merging process
    const dummyHead = new Node(null);
    let current = dummyHead;
  
    while (list1 !== null && list2 !== null) {
      if (list1.data <= list2.data) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Append the remaining nodes from either list1 or list2
    current.next = list1 !== null ? list1 : list2;
  
    return dummyHead.next; // Return the merged list, skipping the dummy head
  }
  