/**There is a new alien language which uses the latin alphabet. 
 * However, the order among letters are unknown to you. 
 * You receive a list of non-empty words from the dictionary, where words are sorted lexicographically 
 * by the rules of this new language. 
 * Derive the order of letters in this language.
 * 
 * APPROACH:
 * 
 * 1. Start by comparing every pair of characters of two words. Compare their indexes
 * 
 *  */

function verifyWordCharOrder(word1,word2,alphabet){
    const length=Math.min(word1.length,word2.length);
    //iterate over each word checking the first chars for order
    let i=0;
    while(i<length){
        let firstWordCurrentCharIndex=alphabet.indexOf(word1[i]);
        let secondWordCurrentCharIndex=alphabet.indexOf(word2[i]);

        if(firstWordCurrentCharIndex > secondWordCurrentCharIndex){
            //the first char of word1 comes later in the alphabet than the first char of word2
            //no need to check the rest of the chars
            return false;
        }//if they are equal or in the right order, we move to the next char
        i++;
    }
    
    //if we have made this far without return false, they match,but the shorter word must come first
    //we sent them to this function in order
    return true;
}

//to verify the dictionary, we need to check every pair of words

function verifyDictionary(words,alphabet){
    for(let i=0;i<words.length-1;i++){
        if(!verifyWordCharOrder(words[i],words[i+1],alphabet)){
            return false;
        }
    }//if we've not returned we passed muster
    return true;
}

const words = ["wrt", "wrf", "er", "ett", "rftt"];
const alphabet="wertf";

console.log(verifyDictionary(words,alphabet))


