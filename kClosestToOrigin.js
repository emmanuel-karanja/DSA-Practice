function kClosest(points, k) {
    points.sort((a, b) => {
      const distanceA = Math.sqrt(a[0] * a[0] + a[1] * a[1]);
      const distanceB = Math.sqrt(b[0] * b[0] + b[1] * b[1]);
      return distanceA - distanceB; // Sort by increasing distance from origin
    });
  
    //only take the first several pointsa
    return points.slice(0, k); // Take the first k elements
  }
  
  // Example usage
  const points = [[1, 3], [-2, 2], [2, -1]];

  const points1=[[3,3],[5,-1],[-2,4]]
  const k = 2;
  const k1=1;
  const closestPoints = kClosest(points, k);
  console.log(closestPoints); // Output: [[-2, 2], [2, -1]]
  console.log(kClosest(points1,k))
  