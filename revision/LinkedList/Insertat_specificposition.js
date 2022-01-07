class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}
let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);
///////////////////////////////    Main ////////////////////////

function Insertatspe(head, position, data) {
  if (position == 0) {
    let node = new LinkedListNode(data);
    node.next = head;
    head = node;
  } else if (head == null && position == 0) {
    head.data = data;
  } else if (head == null) {
    return;
  } else {
    let current = head;
    let prev = null;
    let i = 0;
    let node = new LinkedListNode(data);
    while (i < position) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = node;
    node.next = current;
  }
  return head;
}
Insertatspe(head,1,4)
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

console.log(PrintData(head));
