let obj={
    name:'arjunsingh',
    age:24,
    hobbies:['football','volleyball'],
    roll:'asistant'
}

let obj2=obj;
obj2.name='satish';
console.log("obj2",obj2);


let obj3={
  name2:'aryanpratap',
  age:43,
  class:9,
  hobbiss:['tracking','riding'],

}
obj3.hobbiss='football';
console.log("obj3",obj3)






//immutable data are those data which are  not change on the user recomendation  or jo change nhi ho skte h unhe ham primitive datatype bhi kehete h 
let str='raju'
str[0]='k'
console.log(str)



//mutable data are thos e data which are change on the user need and these data are known as non-primitive datatype
let arr=[12,34,45,67,8];
arr[3]=100;
console.log(arr)









//about logical operator using and operator

let a=13;
 let b=4;
 let c=9;
 let d=1;
if(a>b)
{
    if(c>d){
        console.log("biggest")
    }
    else{
        console.log("no output")
    }
    console.log("output not found")
}


//another example of logical opertor using and operator 

let f=13;
 let r=4;
 let t=9;
 let n=17;
 if(f>r&&t>n){
    console.log("biiger")
 }
 else{
    console.log("no output")
 }



 //logical operator using or  operator 
let gender="female"
 let age=25;
 if(gender=="male"&&age>=24){
    console.log("gender is elligible")
 }
 else if(gender=="female"&&age>=21){
    console.log("gender is also elligible")
 }
 else{
    console.log("not elligible")
 }
 if (gender==undefined) {
    console.log("select another gender")
 }


 //another method of using OR and AND operator 

 let gen="male";
 let ag=21;

 if((gen=="male"&&ag>16)||(gen=="female"&&ag>=21)){
    console.log("gende is elligible")
 }
 else{
    console.log("gende is not elligible")
 }






 //coding using switch case

 let l=parseInt(prompt("enter the number"));
 switch(l)
 {
    case 1:console.log("hindi");break;
    case 2:console.log("english");break;
    case 3:console.log("sanskrit");break;
    case 4:console.log("maths");break;
    case 5:console.log("science");break;
    default:console.log("you have press wrong number")
 }