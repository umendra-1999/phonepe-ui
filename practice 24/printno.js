
//print number 1 to 5 in one line
let r="";
for(let i=1;i<=5;i++){
    r=r+i;
}
console.log(r)


//print number in horizontal mannner

let k="";
for(let j=5;j>0;j--){
    k=k+j;
    // console.log(k) agar ham console ko for loop  ke andar hi likh dete hai to numberprint hoga decreasing order me 
}
console.log(k)


//print even no. between 1 to 20

let c="";
for(let v=1;v<=20;v++){
    if(v%2==0){
        c=c+v+ ",";
    }
}
console.log(c)


//print sum of even numbers

let m=0;
for (let p=0;p<=20;p++){
    if(p%2==0){
        m=m+p;
    }
}
console.log(m)


