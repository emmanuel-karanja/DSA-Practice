
function minWindowSubstring(s,t){
    //we can do some early exits
    if(t.length===0) return ""; //or throw an exception
    if(s.length===0) return "";

    //keep track of the counts of characters in both t and st
    const tFreqMap=new Map();
    const sFreqMap=new Map();

    let left=0;
    let right=0;

    let required=0;//we'll use to keep track of the length

    let minWindow="";
    let minWindowLength=Infinity;//when we are checking for min, we initialize to infinity


    let formed=0;//the current formed string length
    //initialize the tFreqMap
    for(let char of t){
        tFreqMap.set(char,(tFreqMap.get(char) || 0)+1)
        required++;
    }

    while(right < s.length){
        let currentChar=s[right];//the current character
        sFreqMap.set(currentChar,(sFreqMap.get(currentChar) || 0)+1);

        //check if we have what we need
        if(tFreqMap.get(currentChar) && tFreqMap.get(currentChar)===sFreqMap.get(currentChar)){
            formed++;
        }

        while(left<=right && required===formed){
            //we've what we need, lets get the substring
            let currentWindow=s.substring(left,right+1);
            let currentWindowLength=currentWindow.length;

            //see if we need to reduce the length of the reigning minWindow
            if(currentWindowLength < minWindowLength){
                minWindow=currentWindow;
                minWindowLength=currentWindowLength;
            }

            //try to remove a char
            let leftChar=s[left];
            //remove it from the sFreqMap
            let count=sFreqMap.get(leftChar);
            count-=1;
            sFreqMap.set(leftChar,count);

            //if it has violated the rule, update formed so that if we violate the rule the condition
            //fails up top
            if(tFreqMap.get(leftChar) && sFreqMap.get(leftChar)<tFreqMap.get(leftChar)){
                formed--;
            }

            //incr left so we don't get stuck in infinite loop,
            left++;
        }

        right++;
    }
    return minWindow;
}

// Example usage
const s = "ADOBECODEBANC";
const t = "ABC";
const minSubstring = minWindowSubstring(s, t);
console.log(minSubstring); // Output: "BANC"

//Time O(m+n) space O(min(m,n)) 