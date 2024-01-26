function dijkstra(graph, source) {
    // Initialize variables
    const distances = {};  // Store shortest distances from source to each node
    const visited = {};   // Track visited nodes
    const queue = [];      // Priority queue to process nodes in order of distance
  
    // Set initial distances and add source to queue
    for (let node in graph) {
      distances[node] = Infinity; // Set all distances to infinity initially
      visited[node] = false;     // Mark all nodes as unvisited
    }
    distances[source] = 0;     // Distance to source itself is 0
    queue.push([0, source]);   // Add source to queue with priority 0
  
    // Process nodes in the queue
    while (queue.length > 0) {
      // Get the node with the shortest distance from the queue
      const [currentDistance, currentNode] = queue.shift();
  
      // If the node has already been visited, skip it
      if (visited[currentNode]) continue;
  
      // Mark the node as visited
      visited[currentNode] = true;
  
      // Update distances for neighbors of the current node
      for (let neighbor in graph[currentNode]) {
        //this is how you update the distance
        const edgeWeight = graph[currentNode][neighbor];
        const newDistance = currentDistance + edgeWeight;
  
        // If the new distance is shorter, update it and add the neighbor to the queue
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          queue.push([newDistance, neighbor]);
        }
      }
    }
  
    // Return the shortest distances from the source to all nodes
    return distances;
  }
  
  // Sample driver code
  const graph = {
    A: { B: 5, C: 2 },
    B: { D: 4, E: 2 },
    C: { B: 8, D: 7 },
    D: { E: 6 },
    E: {}
  };
  
  const source = "A";
  const distances = dijkstra(graph, source);
  console.log("Shortest distances from node", source, ":", distances);
  