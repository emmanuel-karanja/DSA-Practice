function Djikstras(graph,source, target){
    const visited=new Set();
    const queue=[];
    const distances={};

    //initialize
    for(let node in graph){
        distances[node]=Infinity;
    }

    distances[source]=0; //source to itself is 0

    queue.push([0,source]); //we keep track of the current cost and the current node

    while(queue.length >0){
        let [currentDistance,currentNode]=queue.shift();//get the current node
        if(currentNode===target){
            return currentDistance;
        }

        //is it visited
        if(visited.has(currentNode)) continue;

        //mark as visited
        visited.add(currentNode)

        for(let neighbour in graph[currentNode]){
            //calculate new distances
            let edgeWeight=graph[currentNode][neighbour];
            let newDistance=edgeWeight+currentDistance;
            //relax the cost
            if(newDistance < distances[neighbour]){
                distances[neighbour]=newDistance;
                queue.push([newDistance,neighbour])
            }
        }

    }

    //if there is no path from source to target, the only difference with the other one is
    //we return distances here
    return -1;
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
  const distance=Djikstras(graph,source,target)
  console.log("Shortest distances from node", source, ": to node",target, distance);