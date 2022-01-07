class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
// head.next.next = new LinkedListNode(3);


///////////////////Main//////
function MiddleNode(head) {
    let slow_pointer = head;
    let fast_pointer = head;
    if (head.next == null) {
        return head.data
    } else {
        while (fast_pointer!==null&& fast_pointer.next !== null) {


            slow_pointer = slow_pointer.next;
            fast_pointer = fast_pointer.next.next
        }
     return slow_pointer.data
    }
}


console.log(MiddleNode(head));
//////////////////////////////////////////////
let PrintData = (head) => {
  let str = "";
  let current = head;
  while (current !== null) {
    str += current.data;
    current = current.next;
  }
  return str;
};

console.log(PrintData(head));
