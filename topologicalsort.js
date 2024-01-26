

function topologicalSort(graph){
    const sorted=[];
    const visited=new Set();

    function dfs(node,graph,visited,sorted){
      //visit
      if(visited.has(node)) return;
        visited.add(node);
        for(const neighbour of graph[node]){
            if(!visited.has(neighbour)){
              dfs(neighbour,graph,visited,sorted);
            }
        }
        //add to the sorted list
         sorted.unshift(node);
         
      }


    for(const vertex in graph){
        dfs(vertex,graph,visited,sorted);
      }
    
    return sorted;
    }

    const graph = {
      A: ["B", "C"],
      B: ["D", "E"],
      C: ["C", "D"],
      D: ["E"],
      E: []
    };

  console.log(topologicalSort(graph))
    
