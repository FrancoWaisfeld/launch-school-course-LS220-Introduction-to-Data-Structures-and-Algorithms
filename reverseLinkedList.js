class Node {
  constructor(data, next) {
    this.val = data === undefined ? 0 : data;
    this.next = next === undefined ? null : next;
  }
}

function reverseLinkedList(head) {
  if (!head) {
    return head;
  }

  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);

console.log("Input: 1 -> 2 -> 3 -> 4 -> null");
console.log("Output:", printList(reverseLinkedList(head1)));
// Output: 4 -> 3 -> 2 -> 1 -> null
