//from the given arrays make an array of object

let products=["mackbook","iphone","ipad","airpods"];
let price=[45000,75000,53466,6754];
let arr=[];
for(let i=0;i<products.length;i++){
    let obj={};
    obj["name"]=products[i];
    obj["price"]=price[i];
    arr.push(obj);
}
console.log(arr)





//find average rating of products

let amazon=[
    {name:"iphone12",price:70000,rating:4.5},
    {name:"mackbookpro",price:60000,rating:4},
    {name:"airpods",price:6553,rating:3.6},
    {name:"xbox",price:10000,rating:5}
]
let sum=0;
for(let j=0;j<=amazon.length-1;j++){
    let product=amazon[j];
    sum=sum+product["rating"]
}
console.log("sum is ",sum)
console.log("average is",sum/amazon.length)

