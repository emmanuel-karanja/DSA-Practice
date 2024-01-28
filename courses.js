
/** 
 * The thing is, we have we do a depth first search on each course.
 *  Why DFS? because we always visit the dependencies before we visit the peers.
 *  Actually just remember this, we are using the visiting set to avoid cyclic dependencies
 *  
 *    
 * }
 */

function topologicalSort(courses, prerequisites) {
    const sorted = [];
    const visited = new Set();
    const visiting = new Set();
  
    function dfs (course) {
      //check if we are visiting, what we are doing really is checking if a given course from
      if (visiting.has(course)) {
        throw new Error("Circular dependency detected");
      }

      if (visited.has(course)) return; //we've already checked this course

      visiting.add(course);

      //explore all its prerequisites for this course
      for (const prereq of prerequisites[course] || []) {
        dfs(prereq);
      }
  
      //visit
      visited.add(course);
      sorted.unshift(course); // Add to the beginning for topological order
      visiting.delete(course);//don't forget to unvisit
     
    }
  
    for (const course of courses) {
        dfs(course);
    }
  
    return sorted;
  }
  
  // Example usage:
  const courses = ["A", "B", "C", "D", "E"];

  //perequisites is really an array of arrays i.e. each 
  const prerequisites = new Map(
    [
    ["B", ["A"]],
    ["C", ["B"]],
    ["D", ["C", "B"]],
    ["E", ["A"]],
  ]);
  
  console.log(prerequisites)
  const sortedCourses = topologicalSort(courses, prerequisites);
  console.log(sortedCourses); // Output: ["A", "E", "B", "C", "D"]
  