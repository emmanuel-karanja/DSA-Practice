
function minMeetingRooms(intervals) {
    // Handle edge cases
    if (intervals.length <= 1) return intervals.length;
  
    // Sort start and end times separately
    const startTimes = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const endTimes = intervals.map(interval => interval[1]).sort((a, b) => a - b);
  
    let rooms = 0;
    let activeMeetings = 0;
    let startPointer = 0;
    let endPointer = 0;
  
    while (startPointer < intervals.length) {
      if (startTimes[startPointer] < endTimes[endPointer]) {
        // Start a new meeting
        rooms = Math.max(rooms, ++activeMeetings);
        startPointer++;
      } else {
        // End a meeting
        activeMeetings--;
        endPointer++;
      }
    }
  
    return rooms;
  }
  