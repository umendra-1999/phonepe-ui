function palin(str){
    let news="";
    for(let i=str.length-1;i>=0;i--){
        news=news+str[i];

    }
    return news;
}
let str=prompt("enter the text ")
let rev=palin(str);
if(str==rev){
    console.log(str,"is palindrome")
}
else{
    console.log(str,"is not a palindrome ")
}