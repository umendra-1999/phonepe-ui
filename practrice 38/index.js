let images=[
    "https://static.toiimg.com/photo/msid-78686438/78686438.jpg" ,

    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/2022/EOSS-furn-home/Rec-cta-PC.gif" , 

    "https://static.toiimg.com/thumb/msid-85071129,width-1200,height-900,resizemode-4/.jpg" , 

    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/Amazon_great_india_sale.jpeg?VersionId=aR2exZEKTVMYLxxun5N5lbFaqcM9Hdqy" , 

    "https://dealgyan.com/wp-content/uploads/2021/06/Amazon-Upcoming-Sale-Date.png" ,

    "https://couponswala.com/blog/wp-content/uploads/2021/12/amazon-upcomming-sale-min-1.png" ,

    "https://offersable.com/wp-content/uploads/2018/10/Amazon-Upcoming-Sale-2021.jpg" ,
]

let leftbtn =document.getElementById("left")
let rightbtn =document.getElementById("right")
let image1 =document.getElementById("image1")

let imagestate=0;

rightbtn.addEventListener("click",function(){
    imagestate++;
    if(imagestate===images.length){
        imagestate=0;
    }
    image1.src=images[imagestate];
})

leftbtn.addEventListener("click",function(){
    imagestate--;
    if(imagestate<0){
        imagestate=images.length-1;
    }
    image1.src=images[imagestate]
})