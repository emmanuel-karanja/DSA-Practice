function cloneGraph(graph) {
    if (!graph) return null; // Handle empty graph
  
    const visited = new Set();
    const clone = {};
  
    function dfs(node) {
      if (visited.has(node)) return clone[node]; // Already cloned
  
      visited.add(node);
      //clone the currentNode
      clone[node] = []; // Create empty neighbor list for clone
  
      for (const neighbor of graph[node]) {
        clone[node].push(dfs(neighbor)); // Clone neighbors recursively
      }
  
      return clone[node]; // Return the cloned node's neighbor list
    }
  
    // Start cloning from an arbitrary node
    dfs(Object.keys(graph)[0]);
    return clone;
  }
  
  
  
  const graph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["C", "D"],
    D: ["E"],
    E: []
  };

  console.log("A",graph["A"])


  let clone={...graph}


  let cloned=cloneGraph(graph)
  console.log(clone)