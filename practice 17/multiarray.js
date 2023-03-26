function multi(arr1,arr2){
    let newrr=[];
    for (let i=0;i<=arr1.length-1;i++){
        let product=arr1[i]*arr2[i];
        newrr.push(product)
    }
    console.log(newrr)
}
multi([12,34,6,7,2],[89,2,3,8,10])