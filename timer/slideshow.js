let counter=0;
let id;

function start(){
    let images=JSON.parse(localStorage.getItem('images'))
    let container=document.getElementById("container")
    container.innerHtml=null;
    let img=document.createElement('img')
    img.src=images[counter];
    container.append(img);
    counter++;

   id= setInterval(function(){
        if(counter===images.length)
        counter=0;
        img.src=images[counter];
        container.append(img);
        counter++;
        console.log('counter:',counter);
    },3000);
};

function paused(){
    console.log('paused at:',counter);
    clearInterval(id);
}


