let arr=["earphone","back case","datacable","charger"]
let search=prompt("enter the product you want to search")
let present;

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]==search){
        present=search;
        break;
    }
    else{
        present=null;
    }
}
if(present==null){
    console.log(present,"not found")
}
else{
    console.log(present,"found")
}
