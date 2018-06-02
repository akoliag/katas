/*
1. Implement a 'peek' method in this Queue class.Peek should return the last
element (the next one to be returned) from the queue *without* removing it.
2. Implement the 'weave' function. Weave receives 2 queues as arguments
and combines the contents of each into a new, third queue.
The third queue should contain the *alterating* content of the 2 queues.
The function should handle queues of diffrent lengths without inserting
'undefined' into the new one.

*Do not* access the array inside of any queue, only use the 'add', 'remove',
and 'peek' functions.

*/
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
