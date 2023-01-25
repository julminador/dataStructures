// Un graph o grago es una serie de nodos interconectados (edges)
// Existen dirigidos los cuales tienen un edge de un solo sentido
// y los NO dirigidos que tienen un edge de doble sentido
// existen tambien grafos ponderados que significa que su edge tiene un valor (peso, destancia, etc)
// y los NO ponderados en los que los edges no tienen valor
// @ejemplos
//    2 - 0
//   / \
//  1 - 3

// Edge List
const edgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List
//                     0      1        2         3
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

const objAdjacentList = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix
const adjacentMatrix = [
  [0, 0, 1, 0], // posicion 0 conecta con 2
  [0, 0, 1, 1], // posicion 1 conecta con 2 y 3
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];

const objAdjacentMatrix = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};

class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
}

const myGraph = new Graph();
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');

myGraph.addEdge('3','5');
myGraph.addEdge('6','3');
myGraph.addEdge('1','6');
myGraph.addEdge('1','3');
myGraph.addEdge('1','4');
myGraph.addEdge('4','5');
myGraph.addEdge('8','4');