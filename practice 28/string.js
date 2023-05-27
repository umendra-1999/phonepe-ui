//to add something in a string

// let str="superman";
// str=str+" , batman";
// console.log(str)

//something update and replace in the string

// let st="donald";
// let arr=[];
// for(let i=0;i<=st.length-1;i++){
// arr.push(st[i])
// }
// console.log(arr)

// arr[0]="r";
// console.log(arr)
// let bag="";
// for (let j=0;j<=arr.length-1;j++){


// }
// console.log(bag)


//another way to do thus coding

let strr="donaldduck";
let new_strr="";

for(let i=0;i<=strr.length-1;i++){
    if(i==0){
        new_strr=new_strr+"r";
    }
    else{
        new_strr=new_strr+strr[i];

    }
}
console.log(new_strr)