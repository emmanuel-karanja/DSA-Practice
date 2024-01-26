const myArr= new Array(10).fill(0).map(()=>new Array(10).fill(false));
const numArr=new Array(10).fill(null).map(()=>new Array(10).fill(0))
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        if(i===j){
            myArr[i][j]=true;
        }
       
    }
 
}
console.log(myArr);