function isHappy(n) {
    const seen = new Set(); // Store seen numbers to detect cycles
  
    while (n !== 1 && !seen.has(n)) {
      seen.add(n);
      n = calculateNext(n);
    }
  
    return n === 1; // Happy if ends in 1, otherwise not
  }
  
  function calculateNext(n) {
    let sum = 0;
   //here we extract the digits
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  
//convert a number into an array
  function toArray(n){
    let arr=[];
    while(n>0){
        const digit=n%10;
        //add it to the array in the order that they appear
        arr.unshift(digit);
        n=Math.floor(n/10)
    }

    return arr;
  }

  const num=1913219;
  console.log("AsArr:",toArray(num))
  // Example usage
  const number = 19;
  const isHappyNumber = isHappy(number);
  console.log(isHappyNumber); // Output: true
  