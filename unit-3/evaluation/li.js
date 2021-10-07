smallest = head; 
temp = head;
   prev = null;

  while(temp !== null) {
     if(temp.next !== null && temp.next.data < smallest.data){
       smallest = temp.next;
       prev = temp;
     }
    temp = temp.next;
  }

  if(smallest != head) { 
     prev.next = smallest.next;
  } else {
      head = head.next;
  }
  
  return head;