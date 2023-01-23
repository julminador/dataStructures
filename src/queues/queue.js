// Un queue o cola es una lista ordenada s que permite almacenar y recuperar datos
// el modo de acceso a sus elementos es FIFO (First In First Out)
// @metodos
// enqueue: agrega un elemento al final
// dequeue: remueve el primer elemento
// peek: toma al primer elemento de la linea
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return console.error('There is no nodes in the queue.');
    if(this.length === 1) {
      this.first = null;
      this.last = null
    } else {
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);