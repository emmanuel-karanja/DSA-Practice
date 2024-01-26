function connectedComponents(graph) {
    const visited = new Set();
    const components = [];
  
    for (let node in graph) {

        //check if the current node is something we've visited already
      if (!visited.has(node)) {
        const component = [];
        dfs(node, graph, visited, component);
        //we add that component to the array of components
        components.push(component);
      }
    }
  
    return components;
  }
  
  function dfs(node, graph, visited, component) {
    //visit
    visited.add(node)
    component.push(node);
  
    for (let neighbor in graph[node]) {
        //visit children
      if (!visited[neighbor]) {
        dfs(neighbor, graph, visited, component);
      }
    }
  }

  


  //Notice the similarity between hasCycles(we use recStack),topological sort, and 
  //connected components algorithm are all slight variations of the DFS algorithm.
  //while Djikstra's and floodfill are all slight variations of the BFS algorithm.
  

  const graph = {
    A: { B: 1, C: 1 },
    B: { A: 1, D: 1 },
    C: { A: 1, E: 1 },
    D: { B: 1 },
    E: { C: 1, F: 1 },
    F: { E: 1 },
    G:{H:1}
  };

  const components=connectedComponents(graph)
  console.log(components)