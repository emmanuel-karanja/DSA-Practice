 function sortColors(colors){
    let red=0;//keep track of end index of reds
    let blue=colors.length-1;//keep track of the start index of blues
    let i=0;//the roving pointer
    
    while(i<=blue){
        if(colors[i]===0){
            //swap i and red
            [colors[red],colors[i]]=[colors[i],colors[red]];
            red++;
            i++;
        }else if(colors[i]===2){
            //swap i and blue
            [colors[i],colors[blue]]=[colors[blue],colors[i]];
            blue--;
            //we don't update the i
        }else{//it's white we keep advancing i
            i++;
        }
    }
 }

 const nums1 = [2, 0, 2, 1, 1, 0];
sortColors(nums1);
console.log(nums1); // Output: [0, 0, 1, 1, 2, 2]

const nums2 = [1, 2, 0];
sortColors(nums2);
console.log(nums2); // Output: [0, 1, 2]