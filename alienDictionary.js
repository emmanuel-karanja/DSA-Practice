function buildGraph(words) {
    const graph = {};
  /**Nodes: Each node represents a character in the alien alphabet.
     Edges: An edge from node A to node B indicates that 
            character A must come before character B in a valid alien word. */
    for (let i = 0; i < words.length - 1; i++) {
      const word1 = words[i];
      const word2 = words[i + 1];
  
      const length=Math.min(word1.length,word2.length)
      for (let j = 0; j < length; j++) {
        //get a character from each word
        const char1 = word1[j];
        const char2 = word2[j];
  
        if (char1 !== char2) {
          //if they are not the same character
          //add a node for char one
          graph[char1] = graph[char1] || {}; //means we get what's assigned to char or create a new node
          graph[char1][char2] = true;
          break; // Move to the next word pair
        }
      }
    }
  
    return graph;
  }
  

  function topologicalSort(graph) {
    const visited = new Set();
    const sorted = [];

  
    for (const char in graph) {
      if (!visited.has(char)) {
        dfs(char);
      }
    }
  
    return sorted;
  
    function dfs(node) {
        //visit
     if(visited.has(node)) return;

      visited.add(node)
  
      for (const neighbor in graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
  
      sorted.unshift(node);
    }
  }
  
const words = ["wrt", "wrf", "er", "ett", "rftt"];
const graph = buildGraph(words);
console.log("char graph:",graph)
const sortedChars = topologicalSort(graph);

console.log("sorted chars:",sortedChars)

if (sortedChars) {
  console.log("Alien alphabet:", sortedChars.join(""));
} else {
  console.log("Invalid alien dictionary");
}
