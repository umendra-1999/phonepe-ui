// // i want to make an api call 

// fetch('https://fakestoreapi.com/products')

// .then(function(res){
//   return  res.json() // collecting stream which is readable
    

// })

// .then(function(res ){
//   console.log('res:',res);
// })

// .catch(function(err){
//     console.log('err:',err);
// });


//convert above code in async await
let container=document.getElementById('container')

let data;
 async function getdata(){
 
   let res= await fetch('https://fakestoreapi.com/products')


data=await res.json()
appendproducts(data);


} 

getdata();

//we need to do now append

function appendproducts(data){
  container.innerHTML=null;
    data.forEach(function(el){
       let div=document.createElement('div');
       
       let img=document.createElement('img');
       img.src=el.image;

       let title=document.createElement('p');
       title.innerText=el.title;

       let price=document.createElement('p')
       price.innerText=el.price;

       div.append(img,title,price)

       container.append(div);
    })

}

 function sortLH() {


 data = data.sort(function (a,b) {
    return a.price-b.price; //return -1

}); 
console.log('data:',data);

appendproducts(data);
 }



function sortHL(){
    data=data.sort(function(a,b){
        return b.price-a.price;
    });
    console.log('data:',data);

    appendproducts(data);
}



//hpw to keep original data
//dynamic filtering


function filter(){
    let query=document.getElementById("query").value
    let copy_data=data;
    copy_data=copy_data.filter(function(el){
 return el.title.toLowerCase().includes(query); 

    });
    appendproducts(copy_data);
}
 