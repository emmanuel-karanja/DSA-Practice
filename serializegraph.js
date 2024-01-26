function serializeGraph(graph) {
    //how you serialize a graph depends on how it's represented/modeled in your code
    const serialized = [];//it's an array and we'll do a join at the end
  
    for (const node in graph) {

      let neighbours=[];
      for(let neighbour in graph[node]){
       //  for a weighted graph, you need to get both the key and the value of the graph
         let neighbourValue=graph[node][neighbour];
         //pick a separator character
         let nodeStr=neighbour+":"+neighbourValue;
         //add the neighbour
        neighbours.push(nodeStr)
      }
      //store it as comma separated string
      serialized.push(`${node}->${neighbours.join(',')}`);
    }
  
    return serialized.join('\n');//join with a newline character
  }
  

  const graph = {
    A: { B: 5, C: 2 },
    B: { D: 4, E: 2 },
    C: { B: 8, D: 7 },
    D: { E: 6 },
    E: {}
  };
  

  const serial=serializeGraph(graph)
  console.log(serial)

  console.log(deserializeGraph(serial))

  function deserializeGraph(serialized) {
    const graph = new Map();
    const lines = serialized.split('\n');
    for (const line of lines) {
        //this a pretty neat array trick
      const [node, neighborsNodeString] = line.split('->');
      if(neighborsNodeString.trim().length >0){
        const neighbours = neighborsNodeString.split(',');//we have an array
        let neighbourMap={};
        for(let neighbour of neighbours){
           const[key,value]=neighbour.split(':')
            neighbourMap[key]=parseInt(value);
        }
        graph[node]=neighbourMap;
      }else{
        graph[node]={};
      }
      
    }
  
    console.log('::DESERIALIZED::')

    return graph;
  }
  