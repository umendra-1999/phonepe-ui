let h2 = document.getElementById('timer');
let count=11;


function counter()
{
    let x=document.getElementById("txt").value;
    console.log('x:',x)

count=count-1;
    h2.innerText = count

    if(count === 0)
    clearInterval(h)
}
 let h=setInterval(counter,1000)