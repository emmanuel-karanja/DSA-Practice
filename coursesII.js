
/**This is the second version you are only given an array matching a course and a prerequisite,
 * you need to first build a graph and then do the usual stuff 
 */
function findOrder(numCourses, prerequisites) {
    const graph = new Map();
    const inDegrees = new Array(numCourses).fill(0);//stores the number of incoming edges
  
    // Build the graph and calculate in-degrees
    for (const [course, prereq] of prerequisites) {
        //if it's not already there
      if (!graph.has(course)) {
        graph.set(course, []);
      }
      graph.get(course).push(prereq);
      inDegrees[prereq]++;
    }
  
    // Find courses with no prerequisites (zero in-degree)
    const zeroInDegreeQueue = [];
    for (let i = 0; i < numCourses; i++) {
      if (inDegrees[i] === 0) {
        zeroInDegreeQueue.push(i);
      }
    }
  
    const topologicalOrder = [];
  
    while (zeroInDegreeQueue.length > 0) {
      const course = zeroInDegreeQueue.shift();
      topologicalOrder.push(course);
  
      // Reduce in-degrees of its dependent courses
      if (graph.has(course)) {
        for (const dependentCourse of graph.get(course)) {
          inDegrees[dependentCourse]--;
          if (inDegrees[dependentCourse] === 0) {
            zeroInDegreeQueue.push(dependentCourse);
          }
        }
      }
    }
  
    // Check for cycles
    if (topologicalOrder.length !== numCourses) {
      return []; // Cyclic dependency detected
    }
  
    return topologicalOrder;
  }
  
  // Driver code
  const numCourses = 4;
  const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]];
  const order = findOrder(numCourses, prerequisites);
  
  if (order.length === 0) {
    console.log("Cyclic dependency detected!");
  } else {
    console.log("Valid course order:", order);
  }
  