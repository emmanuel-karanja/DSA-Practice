 /**
   * Split by space
   */
 const words= "  Bob    Loves  Alice   ";
 function revWords(str){
   const splitTrimmed=str.trim()//remove leading and trailing spaces
                         .split(" ")//split by one space, we'll have words which are empty strings
                         .filter((word)=>word.trim().length>0);//remove any words that are just space

/**you could do this:=> const splitTrimmed=str.trim()//remove leading and trailing spaces
                          .split(" ")//split by one space, we'll have words which are empty strings
                          .filter((word)=>word.trim().length>0)
                          .reverse()
                          .join(" ");

   
    return splitTrimmed;
 */
   let output="";
   for(let i=splitTrimmed.length-1;i>=0;i--){
       let word=splitTrimmed[i];
       output+=word+" ";
   }

   return output.trim();//remove trailing space
 }

 console.log(revWords(words))


 function revWordsConsise(str){
    const splitTrimmed=str.trim()//remove leading and trailing spaces
                          .split(" ")//split by one space, we'll have words which are empty strings
                          .filter((word)=>word.trim().length>0)
                          .reverse()
                          .join(" ");

   
    return splitTrimmed;
  }

  console.log("revConsise:",revWordsConsise(words))