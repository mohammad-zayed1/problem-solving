// // Q-1

// let stack = [-6, 8, 2, 3, 0, 4, -1, 1, 5, 6, 7];
// let num = stack.pop();

// stack.forEach((e) => {
//   if (num > e) {
//     num = e;
//     stack.pop();
//     console.log(stack);
//   } else num = num;
// });

// console.log(num); // output min = -1

// Q-2

// function reverseQueue(queue) {
//     const stack = [];

//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }

//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }

//     return queue;
//   }

// Q-3

//   class Queue {
//     constructor() {
//       this.s1 = [];
//       this.s2 = [];
//     }

//     enqueue(val) {
//       this.s1.push(val);
//     }

//     dequeue() {
//       if (this.s2.length === 0) {
//         // Move elements from s1 to s2 in reverse order
//         while (this.s1.length > 0) {
//           this.s2.push(this.s1.pop());
//         }
//       }

//       // Pop element from s2 if it has any elements
//       if (this.s2.length > 0) {
//         return this.s2.pop();
//       } else {
//         return null;
//       }
//     }
//   }


// Q-4 
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   add(value) {
//     this.length++;
//     let newNode = new Node(value);
  
//     if (this.tail) {
//       this.tail.next = newNode;
//       this.tail = newNode;
//       return newNode;
//     }
  
//     this.head = this.tail = newNode;
//     return newNode;
//   }

//   deleteMiddleNode() {
//     if (!this.head || !this.head.next) {
//       // Linked list is empty or has only one node
//       return null;
//     }

//     let slow = this.head; // 1
//     let fast = this.head; // 1
//     let prev = null;

//     // Move fast pointer two nodes at a time
//     while (fast && fast.next) {
//       prev = slow; // 1  2
//       slow = slow.next; // 2   3
//       fast = fast.next.next; // 3  5
//     }

//     // Delete the middle node
//     prev.next = slow.next; // 4

//     console.log(prev)
//     console.log(fast)
//     return slow;
//   }
// }



// let list = new Linkedlist();
// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4)
// list.add(5)


// console.log( list.deleteMiddleNode())

// Q-5
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   add(value) {
//     this.length++;
//     let newNode = new Node(value);
  
//     if (this.tail) {
//       this.tail.next = newNode;
//       this.tail = newNode;
//       return newNode;
//     }
  
//     this.head = this.tail = newNode;
//     return newNode;
//   }

//   reverse() {
//     let prev = null;
//     let current = this.head;
  
//     while (current) {
//       const next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
  
//     return prev;
//   }
// }



// let list = new Linkedlist();
// list.add(1)
// list.add(2)
// list.add(3)
// list.add(4)
// list.add(5)

// // console.log(list);
// console.log(list.reverse());




