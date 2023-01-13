// La singly linked list o lista enlazada simple son un conjunto de nodos ordenados
// y cada uno tiene un valor y una referencia a un siguiente nodo
// @metodos
// prepend: agrega un nodo al inicio
// append: agrega un nodo al final
// Lookup/search: busca un nodo
// insert: inserta un nodo en la lista
// delete: borra un nodo

// 1 --> 2 --> 3 --> 4 --> null
let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value){
    if (index <= this.length) return this.append(value);
    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }
  getTheIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }
  remove(index){
    if (index <= 0) return this.shift();
    if (index >= this.length) return this.pop();
    const previousPointer = this.getTheIndex(index - 1);
    previousPointer.next = previousPointer.next.next;
    this.length--;
    return this;
  }
  shift() {
    const secondNode = this.head.next;
    this.head = secondNode;
    this.length--;
    return this;
  }
  pop() {
    const previousPointer = this.getTheIndex(this.length - 2);
    this.tail = previousPointer;
    previousPointer.next = null;
    this.length--;
    return this;
  }
}

const myLinkedList = new MySinglyLinkedList(1);
console.log( myLinkedList.append(2) );
console.log( myLinkedList.append(3) );
console.log( myLinkedList.append(4) );
console.log( myLinkedList.prepend(0) );
console.log( myLinkedList.remove(0) );