
/**By removing one character can we make a string a palindrome? */

function isPalindrome(str,left,right){
    if(left===right) return true;
    while(left<right){
        if(str[left++]!==str[right--]) return false;
    }

    return true;
}

function canBePalindrome(s){
    if(s.length===1) return true;
    
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            //we have a possible hold out, we remove the current character on the left or one on the right
            //and test if the rest is a palindrome
            return isPalindrome(s,left+1,right) || isPalindrome(s,left,right-1);
        }
        left++;
        right--;
    }
    return true;
}