/**Perform a partial merge sort */

function findMedianSortedUnsorted(sortedArr, unsortedArr) {

    //calculate the middle index
    const totalLength = sortedArr.length + unsortedArr.length;
    const isEven = totalLength % 2 === 0;
    let middleIndex = Math.floor(totalLength / 2);

    let sortedPointer = 0;
    let unsortedPointer = 0;
    let elementCount = 0;
    let firstMiddle = null;
    let secondMiddle = null;
  
    while (elementCount <= middleIndex) {
      let nextElement;
      if (sortedPointer >= sortedArr.length) {
        nextElement = unsortedArr[unsortedPointer];
        unsortedPointer++;
      } else if (unsortedPointer >= unsortedArr.length) {
        nextElement = sortedArr[sortedPointer];
        sortedPointer++;
      } else {
        nextElement = sortedArr[sortedPointer] < unsortedArr[unsortedPointer]
          ? sortedArr[sortedPointer++]
          : unsortedArr[unsortedPointer++];
      }
  
      if (elementCount === middleIndex - 1) {
        firstMiddle = nextElement;
      }
      if (elementCount === middleIndex) {
        secondMiddle = nextElement;
        break;
      }
      elementCount++;
    }
  
    return isEven ? (firstMiddle + secondMiddle) / 2 : secondMiddle;
  }
//O(n*m)  

function findMedianSortedUnsorted2(sortedArr, unsortedArr) {
    //find the middleIndex of the combined array
    const totalLength = sortedArr.length + unsortedArr.length;
    const isEven = totalLength % 2 === 0;
    const totalMiddleIndex = Math.floor(totalLength / 2);

    const sortedMedianIndex=Math.floor(sortedArr.length / 2)
  
    // Partition unsorted array based on median of sorted array
    const unsortedMidIndex = partitionUnsorted(unsortedArr, sortedArr[sortedMedianIndex]);
  
    // Calculate required elements from sorted array considering unsorted partition
    const requiredFromSorted = totalMiddleIndex - unsortedMidIndex;

    const firstMiddle = sortedArr[requiredFromSorted - 1];
    const secondMiddle = sortedArr[requiredFromSorted];
  
    return isEven ? (firstMiddle + secondMiddle) / 2 : secondMiddle;
  }
  

  //the only thing different here, is that we already using the sortedArray's median as the
  //pivot
  function partitionUnsorted(unsortedArr, pivot) {
    let left = 0;
    let right = unsortedArr.length - 1;
  
    while (left <= right) {
        //advance the pointers
      while (left <= right && unsortedArr[left] < pivot)
         left++;
      while (left <= right && unsortedArr[right] >= pivot) 
         right--;
      if (left <= right) {
        //swap
        [unsortedArr[left], unsortedArr[right]] = [unsortedArr[right], unsortedArr[left]];
        left++;
        right--;
      }
    }
  
    return left;
  }

  //O(nlogm)
  const sorted=[1,2,3,5,7,12,13]
  const unsorted=[15,9,11,8]

  console.log("median:",findMedianSortedUnsorted2(sorted,unsorted))