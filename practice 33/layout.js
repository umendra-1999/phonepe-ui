let images_link=[
    "https://couponswala.com/blog/wp-content/uploads/2022/08/flipkart-dussehra-sale-.png",

    "https://trak.in/wp-content/uploads/2020/10/IMG_20201022_160443.jpg",

    "https://st.adda247.com/https://www.sscadda.com/wp-content/uploads/2019/10/696x505BA-Post.png",

    "https://www.91-cdn.com/hub/wp-content/uploads/2022/07/flipkart-sp-deal-1.png",

    "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/bestsellers.jpg?ssl=1",
    "https://www.findprix.com/blog/wp-content/uploads/2022/03/Flipkart-Upcoming-Sale-788x443-1-1024x576.jpg",
]



let leftbtn=document.getElementById("left");
let rightbtn=document.getElementById("right");
let crauser=document.getElementById("crauser");


let imagestate=0;
rightbtn.addEventListener("click",function(){
    imagestate++;
    if(imagestate===images_link.length){
        imagestate=0;
    }

     crauser.src=images_link[imagestate];
})

leftbtn.addEventListener("click" ,function(){
    imagestate--;
    if(imagestate<0){
        imagestate=images_link.length-1;
    }
    crauser.src=images_link[imagestate];
})