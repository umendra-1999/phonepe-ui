let arr=[7,7,6,5,5,4,74,4,4,21,34,32];
let obj={};
for(let i=0;i<arr.length-1;i++){
    let one=arr[i];
    if(obj[one]==undefined){
        obj[one]=1;
    }
    else{
        obj[one]++;
    }
}
let sum=0;
for(key in obj){
    if(obj[key]==1){
        sum=sum+Number.parseInt(key);
    }
}
console.log(sum)
