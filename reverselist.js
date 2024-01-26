function reverseList(list) {
    if (list.isEmpty()) {
      return [];
    } else {
      const head = list.head();
      const tail = list.tail();
      return reverseList(tail).concat([head]); // Tail call is the last operation
    }
  }

  //using recursion

  function reverseListIterative(head){
   let prev=null;
   let current=head;
   let next;
   while(current.next!=null){
       next=current.next;
       current.next=prev;
       prev=current;
       current=next;
   }

   return prev;
    
  }