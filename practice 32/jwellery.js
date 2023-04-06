let container=document.getElementById("container");
let res;
async function jwell(){
    try{
    let data=await fetch('https://fakestoreapi.com/products/category/jewelery');
    
    res=await data.json();
    appendproducts(res);

   
}
 catch(err){
    console.log('err:',err);

};

}
jwell();

  function appendproducts(res){
      container.innerHTML=null;
    res.forEach( function(el){
        let div=document.createElement('div');
       
        let img=document.createElement('img');
        img.src=el.image;
 
        let title=document.createElement('p');
        title.innerText=el.title;
 
        let price=document.createElement('p')
        price.innerText=el.price;
 
        div.append(img,title,price);
        container.append(div);
  
    }) ;
    }

    function sortlh(){
        res=res.sort(function(a,b){
            return a.price-b.price;
        });
        console.log('res:',res);
        appendproducts(res);
    }


    function sorthl(){
        res=res.sort(function(a,b){
            return b.price-a.price;
        });
        console.log('res:',res);
        appendproducts(res);
    }



    