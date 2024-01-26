function insertInterval(intervals, newInterval) {

    let inserted = false;
    const mergedIntervals = []; //we are allocating new space
  
    for (let i = 0; i < intervals.length; i++) {
      const currentInterval = intervals[i];
  
      //check if there is an overlap and need to merge
      if (newInterval.start <= currentInterval.end) {
        if (newInterval.end >= currentInterval.start) {
          newInterval = {
            start: Math.min(newInterval.start, currentInterval.start),
            end: Math.max(newInterval.end, currentInterval.end)
          };
        }
  
        mergedIntervals.push(newInterval);
        inserted = true;

      } else {//no need to erge
        mergedIntervals.push(currentInterval);
      }
  
      if (inserted) {
        mergedIntervals.push(...intervals.slice(i + 1));
        break;
      }
    }
  
    if (!inserted) {
      mergedIntervals.push(newInterval);
    }
  
    return mergedIntervals;
  }
  