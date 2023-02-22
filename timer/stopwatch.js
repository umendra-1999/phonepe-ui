let h3=document.getElementById("watch");
let count=0;


function sec(){
if (count===60)
   count=0;
   count++;
   h3.innerText=count;


}

setInterval(sec,1000);



let h2=document.getElementById("watch2");
let count1=0;

function min(){
    if(count1===60)
    count1=0;
    count1++;
    h2.innerText=count1;

};
setInterval(min,60000);


let h1=document.getElementById("watch3");
let count2=0;

function hour(){
     if(count2===60)
     count2=0;
    count2++;
    h1.innerText=count2;

}
setInterval(hour,3600000 );