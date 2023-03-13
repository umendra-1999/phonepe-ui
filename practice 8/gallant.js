let str=prompt("enter the text you want search")

let obj={};
for(let i=0;i<=str.length-1;i++){
  let char=str[i] 
  if(obj[char]==undefined){ 
    obj[char]=1;
}
else{
    obj[char]++;
}

}
console.log(obj)