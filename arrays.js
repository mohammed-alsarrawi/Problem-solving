// Q1: Reverse an array using Stack
function reverseArray(arr) {
  let stack = [];
  for (let num of arr) {
    stack.push(num);
  }
  let reversedArr = [];
  while (stack.length > 0) {
    reversedArr.push(stack.pop());
  }
  return reversedArr;
}
console.log("Q1 Output:", reverseArray([1, 2, 3, 4, 5]));

// Q2: Implement Queue using Two Stacks
class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop() || "Queue is empty";
  }
}
let queue = new QueueUsingStacks();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Q2 Output:", queue.dequeue(), queue.dequeue(), queue.dequeue());

// Q3: Sum of an array using recursion
function sumArray(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}
console.log("Q3 Output:", sumArray([1, 2, 3, 4, 5]));

// Q4: Reverse a LinkedList
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }
  return prev;
}
// Example LinkedList: 1 -> 2 -> 3 -> 4
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
let reversedHead = reverseLinkedList(head);
console.log(
  "Q4 Output:",
  reversedHead.value,
  reversedHead.next.value,
  reversedHead.next.next.value,
  reversedHead.next.next.next.value
);

// Q5: Delete middle node from a LinkedList
function deleteMiddleNode(head) {
  if (!head || !head.next) return null;
  let slow = head,
    fast = head;
  let prev = null;
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = slow.next;
  return head;
}
// Example LinkedList: 1 -> 2 -> 3 -> 4 -> 5
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);
deleteMiddleNode(head2);
console.log(
  "Q5 Output:",
  head2.value,
  head2.next.value,
  head2.next.next.value,
  head2.next.next.next.value
);
