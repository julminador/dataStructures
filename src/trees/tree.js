// Un tree o arbol es una ramificacion de datos que parte de un nodo principal (root)
// Se van categorizando como parent, child, leaf, siblibg o sub tree
// existen varios tipos de tree
// * Perfect binary tree son arboles que con la misma cantidad de nodos hijo que su antecesor
// * Binary search tree funcionan igual que los perfect pero los nodos que aumentan descienden 
// por la rama derecha y los que disminuyen por la rama izquierda
// ej:
//  -         101           +
//  -    33         105     +
//  -  9   39    104   144  +
// @metodos
// search: busca por nodo
// insert: inserta un nodo
// delete: borra un nodo
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value, tree = this.root) {
    if (tree == null) return false;
    else if(value > tree.value) return this.search(value, tree.right);
    else if(value < tree.value) return this.search(value, tree.left);
    else return true;
  }
}

const myTree = new BinarySearchTree();
console.log( myTree.insert(10) );
console.log( myTree.insert(4) );
console.log( myTree.insert(20) );
console.log( myTree.insert(2) );
console.log( myTree.insert(8) );
console.log( myTree.insert(17) );
console.log( myTree.insert(170) );
console.log( myTree );

console.log( myTree.search(8) );
console.log( myTree.search(200) );