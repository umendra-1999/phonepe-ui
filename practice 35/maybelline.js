
let contain=document.getElementById("container");
let data;

async function getdata(){
    
    let x=await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');

    data = await x.json()
    console.log('data:',data);

appendpro(data);

}
getdata();



function appendpro(data){
    contain.innerHTML=null;
    data.forEach(function(el){
    let div=document.createElement('div');

    let img=document.createElement('img');
    img.src=el.api_featured_image;

    let brand=document.createElement('p')
    brand.innerText=el.brand;

    let name=document.createElement('p')
    name.innerText=el.name;

    let price=document.createElement('p');
    price.innerText=el.price;

    div.append(img,brand,name,price);

    contain.append(div);


    })
}



function sortlh(){
data=data.sort(function(a,b){
    return a.price-b.price;
});
console.log('data:',data)
appendpro(data)
};


function sorthl(){
    data=data.sort(function(a,b){
        return b.price-a.price;
    });
    console.log('data:',data)
    appendpro(data)
    };