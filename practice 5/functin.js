function even(a){
    if(a%2==0){
        return true;
    }
    else{
        return false;
    }
}
for(let i=0;i<=100;i++){
    let check=even(i);
    if(check==true){
        console.log(i,"is even")
    }
    else{
        console.log(i,"is odd")
    }
}