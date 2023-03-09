//find the frequency of each element occuring in the array 

let arr=[3,54,54,6,54,76,76,43,5,2,3,5,23,54,3,56,4,66,64,3,3,5,5,6,7]
let obj={};
for(let i=0;i<=arr.length-1;i++){
    let ele=arr[i];
    if(obj[ele]==undefined){
        obj[ele]=1;
    }
    else{
        obj[ele]++
    }
}
console.log(obj)


//find the sum of element whose occurance is two

let arrr=[54,54,6,54,76,76,43,5,2,3,5,23,54,3,56,4,66,64,5]
let obj1={};
for (let j=0;j<=arrr.length-1;j++){
    let sums =arrr[j];
    if(obj1[sums]==undefined){
        obj1[sums]=1;
    }else{
        obj1[sums]++
    }
}
let sum=0;
for(let key in obj1){
    if(obj1[key]==2){
        
        sum=sum+Number.parseInt(key);
    }
}
console.log(sum)