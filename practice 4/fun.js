
//we didn,t use function in this code...
let str=prompt("enter the text you want to reverse");
let new_str="";
for(let i=str.length-1;i>=0;i--){
    new_str=new_str+str[i]
    ;
}
console.log(new_str);


//we use function in the above code...
function rev (str1){
    let n="";   
    for(let j=str1.length-1;j>=0;j--){
        n=n+str1[j];
    }
    console.log(n)

}
rev(prompt("enter the text"))