const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
  var list = new ListNode(0);
  var current = list;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    sum = carry;
    carry = 0;
  }
  //   printList(list.next);
  return list.next;
};
