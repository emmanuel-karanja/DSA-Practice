/**Compute a way to order a given set of dominoes in such a way that they form a correct domino chain 
 * (the dots on one half of a stone match the dots on the neighboring half of an adjacent stone) 
 * and that dots on the halves of the stones which don't have a neighbor (the first and last stone)
 *  match each other.

For example given the stones [2|1], [2|3] and [1|3] you should compute something like
 [1|2] [2|3] [3|1] or [3|2] [2|1] [1|3] or [1|3] [3|2] [2|1] etc, where the first and last
  numbers are the same.

For stones [1|2], [4|1] and [2|3] the resulting chain is not valid: [4|1] [1|2] [2|3]'s first 
and last numbers are not the same. 4 != 3

Some test cases may use duplicate stones in a chain solution, assume that multiple 
Domino sets are being used. */

function chainDominoesBacktracking(dominoes) {
    function backtrack(chain) {
      if (chain.length === dominoes.length && chain[0][0] === chain[chain.length - 1][1]) {
        return chain; // Successful chain found
      }
  
      for (let i = 0; i < dominoes.length; i++) {
        const domino = dominoes[i];
  
        // Check if domino can connect to the end of the current chain
        if (canConnect(domino, chain) && !chain.includes(domino)) {
            //add it to the chain
            //first test if you need to flip it
            let candidateDomino=domino;
            if(chain.length>0){
                let lastOnChain=chain[chain.length-1];
                if(lastOnChain[1]!==domino[0]){
                   candidateDomino =flipDomino(domino)
                }
            }
          const newChain = [...chain, candidateDomino];
          const result = backtrack(newChain); //test
          if (result) {
            return result;
          }
        }
      }
  
      return null; // No valid chain found
    }
    // Function to check if a domino can connect to a chain
    function flipDomino(domino){
        let [first,second]=domino;
        return [second,first]
    }
  function canConnect(domino, chain) {
    if (chain.length === 0) {
      return true; // First domino can start a chain
    } //we can
    return domino[0] === chain[chain.length - 1][1] || domino[1] === chain[chain.length - 1][1];
  }

  return backtrack([]);
}
function chainDominoesGraph(dominoes) {
    // Construct the graph
    const graph = {};
    for (const domino of dominoes) {
      graph[domino] = [];
      for (const otherDomino of dominoes) {
        if (domino[1] === otherDomino[0] || domino[0] === otherDomino[1]) {
          graph[domino].push(otherDomino);
        }
      }
    }
  
    // Find a cycle using DFS
    function findCycle(startNode, visited = new Set()) {
      if (visited.has(startNode)) return null; // Cycle not found
      visited.add(startNode);
  
      for (const neighbor of graph[startNode]) {
        const cycle = findCycle(neighbor, visited);
        if (cycle) {
          return [...cycle, startNode]; // Cycle found, backtrack
        }
      }
  
      return null; // No cycle found from this node
    }
  
    // Find a valid cycle starting with any domino
    for (const domino of dominoes) {
      const cycle = findCycle(domino);
      if (cycle && cycle[0][0] === cycle[cycle.length - 1][1]) {
        return cycle; // Valid chain found
      }
    }
  
    return null; // No valid chain found
  }
  
  // Driver code
const dominoes = [[2, 1], [2, 3], [1, 3]];
const chain = chainDominoesBacktracking(dominoes);

if (chain) {
  console.log("Valid chain:", chain); // Output: [[1, 3], [3, 2], [2, 1]]
} else {
  console.log("No valid chain found.");
}