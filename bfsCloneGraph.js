class GraphNode{
    constructor(val){
        this.val=val!=null?val:"";
        this.neighbours=[];
    }
}

// DFS approach
function cloneGraph(graph) {
    if(!graph) return null;
    // Nodes we have already copied
    const visited = {};

    // DFS function to copy graph
    const dfs = (node) => {
        if (!node) return node;
        // If we have seen this node before, return it
        if (visited[node.val]!=null) return visited[node.val];

        // Create base for copied node
        const root = new GraphNode(node.val);
        // Add this copied node to group of nodes we hav copied
        visited[node.val] = root;

        // Add copied neighbors to the current copied node
        for(let neighbour of node.neighbours){
            root.neighbours.push(dfs(neighbour));
        }
       // node.neighbors.forEach(n => root.neighbors.push(dfs(n)))
        return root;
    }

    // Return new copied graph
    
    return dfs(node);
};

/** const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["C", "D"],
    D: ["E"],
    E: []
  }; */

  const graph=[];

  const A=new GraphNode("A"); 
  const B=new GraphNode("B");
   const C=new GraphNode("C");
   const D=new GraphNode("D")
   const E=new GraphNode("E");

   A.neighbours.push(B); A.neighbours.push(C)
   B.neighbours.push(D);B.neighbours.push(E);


   graph.push(A);graph.push(B)
   const cloned=cloneGraph(A);

   console.log("original",A)
   console.log("clone",cloned)
