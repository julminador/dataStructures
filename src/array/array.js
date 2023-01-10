// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length -1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length -1];
    return this.length--;
  }
  unshift(item) {
    if (!item) return this.length
    if (this.length !== 0) {
      for (let i = this.length - 1; i >= 0; i--) {
        this.data[i + 1] = this.data[i];
      }
    }

    this.data[0] = item;
    this.length++;
    return this.length
  }
  shift() {
    if (this.length === 0) return undefined;
    const shiftedItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return shiftedItem;
  }
}

const myArray = new MyArray();

console.log( myArray.push('Jose') );
console.log( myArray.push('Adriana') );
console.log( myArray.push('Oscar') );

console.log( myArray.get(1) );
// console.log( myArray.pop() );
// console.log( myArray.delete(0) );
console.log( myArray.unshift('Adriana') );
console.log( myArray );