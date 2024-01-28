
function connectedComponents(graph){
    //model the graph as an object of object ala NodeA:{NodeB:1,etc}
    const visited=new Set();//use a set
    const components=[];
    //use in not of
    for(let node in graph){
        //if it's not visited do a dfs
        const component=[];
        if(!visited.has(node)){
            dfs(graph,node, visited,component);
            
            components.push(component);
        }
      
    }

    function dfs(graph,node, visited, component){
        visited.add(node);//mark as visited
        component.push(node);
        //visit the neighbours depth first, again we are using ín'.
        for(let neighbour in graph[node]){
            if(!visited.has(neighbour)){
                dfs(graph,neighbour,visited,component);
            }
        }
    }
    return components;
}

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