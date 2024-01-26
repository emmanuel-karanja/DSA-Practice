

const arr=[1,2,3,4]


const sum=arr.reduce((sum,num)=>sum+num,0)

const arr2=[['A',5],['B',6],['C',7]];

const obj=arr2.reduce((acc,[key,value])=> 
{
     acc[key]=value; 
     return acc;
},{})

console.log(obj)