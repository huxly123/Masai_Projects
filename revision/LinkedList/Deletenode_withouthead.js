class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);


////////////////////////Main////
 function deleteNode(node) {
   node.data = node.next.data;
   node.next = node.next.next;
   return node;
}
 
///////////////////////////////////

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
