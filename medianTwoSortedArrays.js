
function medianTwoArrays(arr1,arr2){
    const totalLength=arr1.length+arr2.length;
    const isEven=totalLength % 2===0?true:false;

    const mid=Math.floor(totalLength/2);
    const merged=[];
    function merge(arr1,arr2){
        let i=0;
        let j=0;
        let k=0;
     
        while(i<arr1.length || j<arr2.length){
            if(arr1[i]<arr2[j]){
                merged[k]=arr1[i];
                i++;
                k++;
            }else{
                merged[k]=arr2[j]
                j++;
                k++;
            }
        }
        //
        while(i<arr1.length){
            merged[k]=arr1[i];
            i++;
            k++;
        }

        while(j<arr2.length){
            merged[k]=arr2[j];
            j++;
            k++;
        }

    }
    merge(arr1,arr2);

    return isEven? (merged[mid]+merged[mid+1])/2:merged[mid]
}

const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9]

console.log("median:",medianTwoArrays(arr1,arr2))