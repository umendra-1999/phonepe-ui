
// function stored inside variable
let x=function(){
console.log("some functions are stored in variable");
};

x();



//function using return 

function sum(a,b){
    return a+b;
}
let z=sum(3,8);
console.log(z)


//function using console
  

function cons(v,b){
    console.log(v*b);
}

cons(8,10);


function eatbreakfast(item){
    console.log("i will eat my breakfast before",item)
}
eatbreakfast("idly");


//parameter and function

function eatbreakfasts(item,time){
    console.log("i will eat "+item+" as my breakfast at",+time)

}
eatbreakfasts("breadjam",10)


//when we pass function as a argument

function breakfast(item,time,dobrush){
    dobrush()
    console.log("i will eat "+item+" as my breakfast at ",+time)
}; 
breakfast("bunmakhan",12,dobrush);

function dobrush(){
    console.log("do brush on time");
 
};














