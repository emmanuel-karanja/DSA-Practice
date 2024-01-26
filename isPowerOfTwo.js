function isPowerOfTwo(n){
    return (n>0 && (n &(n-1))===0);
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(12))