

let img=document.getElementById("img")

function getdata(){
    return true;

}

let mypromise=new Promise(function(resolve,reject){
let data = false;


setTimeout(function(){
data=getdata();

if(data){
    resolve('sweet');
}
else{
    reject('chappal');
}; 
});
},3000); 

console.log('mypromise:',mypromise)

mypromise.then(function(done){
    console.log('done:',done);
    img.src="https://media4.giphy.com/media/l0Iyl55kTeh71nTXy/200w.webp?cid=ecf05e47wtnojjzfar08xgqi3swa56xyjig23x41r79b408k&rid=200w.webp&ct=g"
})


mypromise.catch(function(fail){
    console.log('fail:',fail);
    img.src="https://media4.giphy.com/media/kIRlWFnCkV8eG0CSen/giphy.gif?cid=ecf05e47noi7ltai9g4wr029x0qtyes9a36me488pyvplh1h&rid=giphy.gif&ct=g"
})