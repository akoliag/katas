//Implement a Queue data structure using two stacks.
//Do not create an array inside of the 'Queue' class.
//Queue should implement methods 'add', 'remove' and 'peek'.

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }
}
