function dfs(graph,startNode){
    let stack=[];
    stack.push(startNode);
    const visited=new Set();
    while(stack.length>0){
        //is it visited
        let currentNode=stack.pop();
        if(!visited.has(currentNode)){
        //visit
         visited.add(currentNode)
          let neighbours=graph.get(currentNode);
          for(let neighbour of neighbours){
            if(!visited.has(neighbour)){
                //dfs
                stack.push(neighbour);
            }
          }
        }
    }
}

function bfs(graph,startNode){
    let queue=[];
    queue.push(startNode);
    const visited=new Set();
    while(queue.length > 0){
        //is it visited
        let currentNode=queue.shift();
        if(!visited.has(currentNode)){
            //visit
            visited.add(currentNode)
          let neighbours=graph.get(currentNode);
          for(let neighbour of neighbours){
            if(!visited.has(neighbour)){
                //dfs
                queue.push(neighbour);
            }
          }
        }
    }
}