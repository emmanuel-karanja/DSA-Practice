function hasCycle(graph) {
  const visited = new Set();
  const currentPath = new Set();

  for (const node in graph) {
    if (!visited.has(node)) {
      if (dfs(graph, node, visited, currentPath)) {
        return true; // Cycle detected
      }
    }
  }

  return false; // No cycles found
}

function dfs(graph, node, visited, currentPath) {
  visited.add(node);
  currentPath.add(node);

  for (const neighbor of graph[node]) {
    if (currentPath.has(neighbor)) {
      return true; // Cycle detected
      //continue
    } else if (!visited.has(neighbor)) {
      if (dfs(graph, neighbor, visited, currentPath)) {
        return true; // Cycle detected
      }
    }
  }

  //we've reached a path's end to the end without any cycles
  currentPath.delete(node);
  return false;
}

// Sample test code
const graphWithCycle = {
  0: [1, 2],
  1: [2],
  2: [0],
};

const graphWithoutCycle = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: [],
};

console.log(hasCycle(graphWithCycle)); // Output: true
console.log(hasCycle(graphWithoutCycle)); // Output: false
