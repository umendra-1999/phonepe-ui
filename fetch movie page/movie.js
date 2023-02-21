
let container=document.getElementById('container');

let detail;
async function hollymovie(){
    
        let respond= await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=31332e6d'); 

    detail=await respond.json()

    appendmovie(detail);
     
}

 hollymovie();

 
 function appendmovie(detail){

    container.innerHTML=null;
  
	     detail.forEach(function(ele){

       let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.Images;

        let title = document.createElement('P');
        title.innerText = ele.Title;

        let year = document.createElement('p');
        year.innerText = ele.Year;

        div.append(img, title, year);

        container.append(div)

      })
      
}
