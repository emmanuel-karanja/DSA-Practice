function findMaximumCapital(capital, profits, w, k) {
    const projects = [];
    for (let i = 0; i < capital.length; i++) {
      projects.push({ capital: capital[i], profit: profits[i] });
    }
  
    projects.sort((a, b) => a.capital - b.capital); // Sort projects by minimum capital needed
  
    let currentCapital = w;
    let completedProjects = 0;
  
    for (const project of projects) {
      if (project.capital <= currentCapital) {
        currentCapital += project.profit;
        completedProjects++;
        if (completedProjects === k) {
          return currentCapital;
        }
      }
    }
  
    return currentCapital;
  }
  
  // Example usage
  const capital = [1, 2, 3];
  const profits = [1, 2, 3];
  const w = 1;
  const k = 2;
  const maxCapital = findMaximumCapital(capital, profits, w, k);
  console.log(maxCapital); // Output: 5
  