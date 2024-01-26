function LCS(str1,str2){
    if(str1.length===0 || str2.length===0) return 0; //if one string has length 0, the, the LCS is 0

    if(str1[str1.length-1]===str2[str2.length-1]){//does not really matter where you remove it
        //at the beginning or the end.
        return 1 + LCS(str1.slice(1),str2.slice(1));//rempve one and yield
    }else{
        return Math.max(LCS(str1.slice(1),str2),LCS(str1,str2.slice(1)));//remove one from
        //either and maximise
    }
}

const str1="ABGSDS";
const str2="AGDS";

console.log("LCS",LCS(str1,str2))