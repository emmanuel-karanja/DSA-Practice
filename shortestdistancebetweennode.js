function shortestDistanceBetweenNodes(graph, source, target) {
    const distances = {}; //key value pair where key is the node and the value is the distance
    const visited = {};//we could easily use a Set but we use this
    const queue = [];
  
    for (let node in graph) {
        //very important so that every other weight is less than it.
      distances[node] = Infinity;
      visited[node] = false;
    }
  
    distances[source] = 0;//initialize source to 0.
    //so we are pushing a tuple for the queue. i.e. currentDistance and the node
    //for weighted graphs, we always queue the weight and node tuple
    queue.push([0, source]);
  
    while (queue.length > 0) {
      const [currentDistance, currentNode] = queue.shift();
  
      //early exit when we reach the target
      if (currentNode === target) {
        return currentDistance; // Found the shortest distance to the target
      }
  
      if (visited[currentNode]) continue;
  
      visited[currentNode] = true;
  
      for (let neighbor in graph[currentNode]) {
        //calculate the new weight called relaxation.
        //GRaph is an object of objects this is the ideal model for weighted graphs
        const edgeWeight = graph[currentNode][neighbor];
        const newDistance = currentDistance + edgeWeight;
  
        //Update the relaxed cost if the current cost is less than the relaxed cost
        if (newDistance < distances[neighbor]) {//relaxation step
          distances[neighbor] = newDistance;
          queue.push([newDistance, neighbor]);
        }
      }
    }
  
    return -1; // No path found between source and target
  }
  
  const graph = {
    A: { B: 5, C: 2 },
    B: { D: 4, E: 2 },
    C: { B: 8, D: 7 },
    D: { E: 6 },
    E: {}
  };
  
  const source = "A";
  const target="E";
  const distance=shortestDistanceBetweenNodes(graph,source,target)
  console.log("Shortest distances from node", source, ": to node",target, distance);
  