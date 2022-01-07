class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);

let head1 = new LinkedListNode(1);
head1.next = new LinkedListNode(2);
head1.next.next = new LinkedListNode(3);

//////////////////////////////Main////////////////
function mer(l1, l2) {
    let dummy = new LinkedListNode(0);
    let head = dummy
    while (l1 !== null && l2 !== null) {
        if (l1.data < l2.data) {
            dummy.next = l1
            l1=l1.next
        }
         else if (l2.data < l1.data) {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy=dummy.next
    }
    if (l2) {
        dummy.next=l2
    } else {
        dummy.next=l1
    }
    return head.next
}
/////////////////////////////////////////////////////


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
