let details={
    name:"umendra",
    age:24,
    address:{
        city:"lucknow",
        street:"456",
        house:"400",
        pin:"45912"
    }
};
console.log(details.address)//is syntax ke through ham address par pahuch jayenge
console.log(details.address.street)//is syntax ke through ham address ke baad ham street ko access kar skte h 

for(let key in details){   //in object we can use only for in loop because there is no concept of index number
console.log(key,details[key])
}