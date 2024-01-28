/**You are given an array of tuples where the element 0 of each tuple is a course and element
 * 1 is the prerequisute, you are required to find the order in which the courses should be taken
 * in the form of an array and an empty one if cyclic dependency is detected
 */

function findCourseOrder(numCourses=0,courses){
    //create an inDegree array to hold details of how many courses a given course depends on
    const inDegree=new Array(numCourses).fill(0);
    const graph=new Map();

    //construct the graph from the tuple array
    for(let [course, prereq] of courses){
        if(!graph.has(course)){
            graph.set(course,[]);
        }
        //set dependencies and their indegrees i.e. incoming edges showing there is a course depends on it
        graph.get(course).push(prereq);
        inDegree[prereq]++;
    }

    //find all the courses with 0 indegrees and add them to the queue
    const zeroInDegreeQueue=[];
    for(let i=0;i<inDegree;i++){
         if(inDegree[i]===0){
            zeroInDegreeQueue.push(inDegree[i]);
         }
    }

    const topologicalOrder=[];

//do a BFS 
    while(zeroInDegreeQueue.length >0){
        let currentCourse=zeroInDegreeQueue.shift();
        topologicalOrder.push(currentCourse)

        if(graph.has(currentCourse)){
           for(let dependentCourse of graph.get(currentCourse)){
                inDegree[dependentCourse]--;
                if(inDegree[dependentCourse]===0){
                    zeroInDegreeQueue.push(dependentCourse)
                }
           }
        }
    }

    if(topologicalOrder.length !==numCourses){
        return [];
    }

    return topologicalOrder;
}