// Un stack o pila es una lista ordenada s que permite almacenar y recuperar datos
// el modo de acceso a sus elementos es LIFO (Last In First Out)
// @metodos
// pop: remueve el ultimo elemento
// push: agrega un elemento al final
// peek: toma al ultimo elemento de la linea

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0 ) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return console.error("There is no nodes in the stack.");
    const topNode = this.top;
    if (this.length === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.next;
    }
    this.length--;
    return topNode
  }
}

const myStack = new Stack();
console.log( myStack.push('6') );
console.log( myStack.push('5') );
console.log( myStack.push('4') );
console.log( myStack.push('3') );
console.log( myStack.push('2') );
console.log( myStack.push('1') );
console.log( myStack );