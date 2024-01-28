/*A company is planning to interview 2n people. Given the array costs where
 costs[i] = [aCosti, bCosti], the cost of flying the ith person to city a is aCosti,
   and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.


 APPROACH:
     1. Find the difference in costs for each person between each of the two.
        i.e. How much would we save by sending them to B?
    2. If we sort the diffs in the ascending order, we get whom to send to B
      e.g.
       [10,20],[30,200],[400,50],[30,20]
          10     170      -350     -10

        if sort the diffs
        -350,-10,10,170
     [450,50],[30,20],[10,20],[30,200]
        so, we'll send the first half to city B and the rest to city A

    */
    
        function twoCityScheduling(costs){
            //sort it in the ascending order of difference
            costs.sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]));
            //pick the half to go to b and their total costs
            let costsB=0; //we'll only take the half
            //or check of the current i < mid and pick the cost of b
            const mid=costs.length/2;
            for(let i=0;i<mid;i++){
                costsB+=costs[i][1];
            }
            console.log("costsB:",costsB)

            let costsA=0;
            for(let i=mid;i<costs.length;i++){
                costsA+=costs[i][0];
            }

            console.log("costsA:",costsA)

            return costsA+costsB;

        }

       
        function twoCitySchedulingRecursive(costs, n, cityA = 0, cityB = 0) {
            // Base case: all people sent
            if (n === 0) {
              return cityA + cityB;
            }
          
            // Sending to city A: recursively explore sending one more person to A and B
            const sendToA = twoCitySchedulingRecursive(costs, n - 1, cityA + costs[n - 1][0], cityB + costs[n - 1][1]);
          
            // Sending to city B: recursively explore sending one more person to B and A
            const sendToB = twoCitySchedulingRecursive(costs, n - 1, cityA + costs[n - 1][1], cityB + costs[n - 1][0]);
          
            // Return the minimum cost path
            return Math.min(sendToA, sendToB);
          }
      // Driver code
      const costs = [[10, 20], [30, 200], [400, 50], [30, 20]];
      const costs1 = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
      console.log(twoCityScheduling(costs))
      console.log(twoCityScheduling(costs1))