let obj={
    name:"umendra",
    class:12,
    age:24,
    location:"amethi",
    state:"uttar pradesh"
}
obj.class="bca"; //how to update something in an object
console.log(obj)


let detail={
    hobbies:['biking','basketball','volleyball','music'],
    name:"umendrapratap",
    area:"mahanagar",
    pin:226006,
};
console.log(detail)//ye syntax hame pure object ko show karega console me 
console.log(detail.hobbies)//ye syntax hame sirf hobbies ke andar jo bhi data h usko show karega
console.log(detail.hobbies[2])//ye syntax hame hobbies ke andar index no. 2 ka element batayega ki 2 index pr kon si hobbie h
let arr=detail["hobbies"];
for(let i=0;i<=arr.length-1;i++){
    console.log(arr[i])
}

