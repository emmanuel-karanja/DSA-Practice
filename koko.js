function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles); // Initial bounds for binary search
  
    while (left <= right) {
      const currentRate = Math.floor((left + right) / 2); // Potential eating speed
      const hoursTaken = calculateHoursToEat(piles, currentRate);
  
      if (hoursTaken <= h) {
        right = currentRate - 1; // Try a slower speed
      } else {
        left = currentRate + 1; // Try a faster speed
      }
    }
  
    return left; // Minimum speed that satisfies the condition
  }
  
  function calculateHoursToEat(piles, k) {
    let hours = 0;
    for (const pile of piles) {
      hours += Math.ceil(pile / k); // Round up for partial hours
    }
    return hours;
  }
  
  // Driver Code
  const piles = [3, 6, 7, 11];
  const h = 8;
  const minSpeed = minEatingSpeed(piles, h);
  console.log("Minimum eating speed:", minSpeed); // Output: 4
  