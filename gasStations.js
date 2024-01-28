/**To know if a solution exists, you must make sure that 
    sum gas>= sum of costs if this condition is not met, a solution does not exist  */

function findStartingStation(gas, cost) {
    // Keep track of current gas and minimum gas so far
    let currentGas = 0;
    let minGas = Number.MAX_VALUE;
    let startingStation = 0;
  
    // Loop through all stations
    for (let i = 0; i < gas.length; i++) {
      // Update current gas after filling up at current station
      currentGas += gas[i];
      
      // Subtract cost to move to next station
      currentGas -= cost[i];
  
      // Track the minimum gas and corresponding station
      if (currentGas < minGas) {
        minGas = currentGas;
        startingStation = (i + 1) % gas.length; // Account for circular route
        
      }
    }
  
    // Check if there's enough gas to complete the circuit
    return currentGas >= 0 ? startingStation : -1;
  }
  
  // Example usage
  const gas = [1, 2, 3, 4, 5];
  const cost = [3, 4, 5, 1, 2];
  const startingStation = findStartingStation(gas, cost);
  console.log(startingStation); // Output: 3
  