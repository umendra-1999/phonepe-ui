let arr=["earphone","cover","datacable","charger"]
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
    console.log(present,"not search")
}
else{
    console.log(present,"search")
}
