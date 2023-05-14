let empdata=[
    {name:"aman",age:45,location:"delhi"},
    {name:"rahul",age:34,location:"mumbai"},
    {name:"ajad",age:39,location:"delhi"},
    {name:"roman",age:48,location:"mumbai"}
];
for(let i=0;i<=empdata.length-1;i++){
    let obj=empdata[i];
    if(obj["location"]=="delhi"){
        console.log(obj["name"]);
    }
}