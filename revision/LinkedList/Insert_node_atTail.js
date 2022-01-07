
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

////////////////////////////// Main ///////////////////

function insertNodeAtTail(head, data) {
  if (head == null) {
    head = new LinkedListNode(data);
  } else {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new LinkedListNode(data);
  }
  return head;
}

////////////////////////   Main   //////////////////////

let head = insertNodeAtTail(null, 1)
head = insertNodeAtTail(head, 2);
head = insertNodeAtTail(head, 3);

let printt=(head)=>{
  let str = ""
  while (head !== null) {
    str += head.data
    head=head.next
  }
  return str
}
console.log(printt(head));