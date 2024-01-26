function mergeArrays(arr1,arr2){
  
    let k=0;
    let i=0;
    let j=0;
    let result=new Array(arr1.length+arr2.length)
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
           result[k]=arr1[i];
           i++;
           k++;
        }else if(arr1[i]>arr2[j]){
            result[k]=arr2[j];
            j++;
            k++;
        }
    }//we've exited

   
    while (i < arr1.length){//we have not finished with tihs
        result[k]=arr1[i];
        i++;
        k++;
        
    }

    while(j<arr2.length){
        result[k]=(arr2[j]);
        j++;
        k++;
    
    }

    return result;
}

const arr1=[1,4,8,9,11]
const arr2=[2,3,5,7]

console.log(mergeArrays(arr1,arr2))