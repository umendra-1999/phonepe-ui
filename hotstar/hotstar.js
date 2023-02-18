 let movies_div=document.getElementById("movies");
 
 
 async function main(){

     try{
    let query=document.getElementById('query').value
    console.log('query:',query)


    let res = await fetch(`http://www.omdbapi.com/?apikey=31332e6d&s=${query} `);

    let data=await res.json();

let actual_data=data.Search;

    if(actual_data!=undefined){

   appendmovies(actual_data);
     }
}
catch(err){
    console.log('err:',err);
}
}


function appendmovies(data){
 movies_div.innerHTML=null;

    data.forEach(function (el) {
    let div=document.createElement('div');

    let p=document.createElement('p')
    p.innerText=el.Title
  
    let img=document.createElement('img');
    img.src=el.Poster;

     movies_div.append(img,p,);
     movies.append(div);
    });

}


