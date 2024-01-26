
function shortestDistance(graph,source,target){

    //early exit
    if(!graph) return -1;
    if(source===target) return 0;

    const visited=new Set();
    const distances={};
    const queue=[];

    //initialize the distances to infinity
    for(let node in graph){
        distances[node]=Infinity;
    }

    distances[source]=0;
    queue.push([0,source]);

    while(queue.length>0){
        
        let [currentDistance, currentNode]=queue.shift();
        //is this the target?
        if(currentNode===target){
            return currentDistance;
        }

        if(visited.has(currentNode)) continue;

        visited.add(currentNode);

        //we using an object of objects
        for(let neighbour in graph[currentNode]){
            //calculate new weights
            let edgeWeight=graph[currentNode][neighbour];
            let newDistance=edgeWeight+currentDistance;

            if(newDistance < distances[neighbour]){
                distances[neighbour]=newDistance;
                queue.push([newDistance, neighbour]);
            }
        }
    }

    //we got here, so there is no path between source and distance
    //only diff with Djikstra's is that you return distances here
    return -1;
}