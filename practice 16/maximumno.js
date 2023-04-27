let arr=[10,11,20,30,40,22,56,89]
max=0;
for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>max)
    {
        max=arr[i]
    }
}
console.log(max)