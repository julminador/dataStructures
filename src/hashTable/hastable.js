// Las Hash Tables son similares a los objetos ya que manejan key, value
// pero genera un hash del key que corresponde al address donde se guarda
// @metodos
// insert: inserta un elemento en la tabla
// search: budca un elemento por key
// delete: borra un elemento
// @colisiones: Un key diferente pueden tener el mismo hash ya que depende de la cantidad de
// buckets(espacios) libres
// Pero para tratar esta colision podemos hacer uso de la Key
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  remove(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const deletedValue = this.data[address][i];
          this.data[address].splice(i, 1);
          return deletedValue;
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const data = this.data;
    let keys = [];
    data.forEach(item => {
      item.forEach(key => keys.push(key[0]))
    })
    return keys;
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Alejandra", 2000);

console.log(
  myHashTable.get("Mariana"),
  myHashTable.remove("Mariana"),
  myHashTable.getAllKeys(),
);