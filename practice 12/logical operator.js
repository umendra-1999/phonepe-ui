let a=9;
let b=4;
let c=11;
let d=8;

if(a>b){

    if(c>d){
        console.log("bigger");
    }

    else{
        console.log("no output");
    }
    console.log("output not found");
}
    

//logical operator using AND opertor

let g=60;
let h=21;
let k=100;
let l=13;

if(g>h&&k>l){
    console.log("number is bigger");
}
else{
    console.log(" output not founded")
}




//using OR operator

console.log((5>=6&&8<=6)&&(9>4||9<=6))



//checking gender using logical opertor

// let gender=prompt("enter the gender")
// let age=prompt("Enter the age") ;
// age=Number.parseInt(age)

// if (gender=="male"&&age>="21"){
//     console.log("eligible for driving")
// }
// else{
//     console.log("not elligible for driving")
// };
//   if (gender=="female"&&age>="18"){
//     console.log("female is elligible")
// }
//    else  {
//     console.log("not elligible")
// }


//another way to write the above  code

let genders=prompt("enter the gender")
let ages=prompt("Enter the age") ;
ages=Number.parseInt(ages);


if((genders=="males"&&ages>=23)||(genders=="females"&&ages>=20))
{
    console.log(genders,"is elligible for ride");
}
else{
    console.log(genders,"is not elligible");
}
