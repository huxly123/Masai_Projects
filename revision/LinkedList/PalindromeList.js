class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(1);

////////////////////////////Main///////////////////

function midNode(head) {
    let slow_pointer = head;
    let fast_pointer = head;
    
    while (fast_pointer !== null && fast_pointer.next !== null) {
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next.next
       
    }
    //  console.log(slow_pointer.next);
    return slow_pointer.next
   
}
let mid = midNode(head)

/////////////////////////////////////////////////////
function revv(mid) {
    let prev = null;
    let next = null;
    let current = mid
    while (current !== null) {
        next = current.next
        current.next = prev
        prev = current
        current=next
    }
    return prev
}
let revList = revv(mid)
//////////////////////////////////////////////////
function pal(head, revList) {
    let l1 = head;
    let l2=revList
    while (l2 !== null) {
        if (l2.data !== l1.data) {
            return false
        }
        l1 = l1.next
        l2=l2.next
    }
    return true
}
console.log(pal(head,revList));
//////////////////////////////////////////////////

let PrintData = (head) => {
  let str = "";
  let current = head;
  while (current !== null) {
    str += current.data;
    current = current.next;
  }
  return str;
};

// console.log(PrintData(head));
