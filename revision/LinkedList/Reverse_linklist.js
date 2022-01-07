class LinkedListNode {
  constructor(value) {
    (this.data = value), (this.next = null);
  }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);

////////////////////Main ///////////////
function rev(head) {
    let current = head;
    let prev = null;
    let next=null
    if (head == null) {
        return ""

    }
    else {
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
    return prev
}



console.log(rev(head));

/////////////////////////////////////



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
