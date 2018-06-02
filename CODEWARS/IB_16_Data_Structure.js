/*Data Structure - ways of organizing information with optimal 'runtime
complexity' for adding or editing or removing records.

a queue may be thought of as a conatainer of source where records or pieces of
data enter on one end of this container and then exit on the other. A queue is
like waiting in line to do sth.

Enqueuing (adding) - the process of adding a record into a queue
Dequeuing (removing) - taking sth out the queue

Queue follows First-in-First out principle (F-I-F-O).

Task:
Create a queue data structure. The queue should be a class with methods 'add'
and 'remove'. Adding to the queue should store an element until it is removed.

---Examples---
const q = new Queue();
q.add(1);
q.remove(); //returns 1;

*/
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);//adding elem at the beginning of the queue
  }
  
  remove() {
    return this.data.pop();
  }
}
