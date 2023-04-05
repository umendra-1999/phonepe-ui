let container=document.getElementById("container");

let reso;

async function mobile(){

    let datas=await fetch('https://fakestoreapi.com/products');
    
    reso=await datas.json()

    appendproduct(reso);
 
    

}
mobile();

  function appendproduct(reso){
      container.innerHTML=null;
       reso.forEach(function(el){
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
        reso=reso.sort(function(a,b){
            return a.price-b.price;
        });
        console.log('reso:',reso);
        appendproduct(reso);
    }


    function sorthl(){
        reso=reso.sort(function(a,b){
            return b.price-a.price;
        });
        console.log('reso:',reso);
        appendproduct(reso);
    }
