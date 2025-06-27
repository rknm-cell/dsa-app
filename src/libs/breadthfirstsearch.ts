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

function breathFirstSearch(graph: Graph, startNode: string){
    
    
}