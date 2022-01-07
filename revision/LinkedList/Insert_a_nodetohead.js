class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}
/////////////////////    Main  ///////////////////
function insertt(head, data) {
  if (head == null) {
    head = new LinkedListNode(data)
  }
  else {
    let node = new LinkedListNode(data)
    let current = head
    node.next = current
    head=node
   
  }
return head
}


///////////////// /////////////////////////////////


let head=insertt(null, 1)
head = insertt(head, 2)
  head = insertt(head, 3);

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
