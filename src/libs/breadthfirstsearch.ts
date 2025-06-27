const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
};
type Graph = {
    [key: string]: string[]
}

function breadthFirstSearch(graph: Graph, startNode: string){
  
  // create a queue
  // add the start node to the queue
  // while the queue is not empty
  // remove the first node from the queue
  // if the node has not been visited
  // mark the node as visited
  // add the node's neighbors to the queue
  // return the visited nodes
    
}


