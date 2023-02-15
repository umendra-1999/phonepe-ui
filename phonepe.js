let img =document.getElementById("img")

function load(){
 return false;    
}

let mypr=new Promise(function(resolve,reject){
    let data = true;

    setTimeout(function(){
        data=load();
        
        if(data){
            resolve('payment-complete');

        }
        else{
            reject('payment-failed');
        }; 
        },6000);
    });

        console.log('mypr:', mypr)

        mypr.then(function(done){
            console.log('done:',done);
            im.src="https://cdn.dribbble.com/users/39201/screenshots/3694057/nutmeg.gif"
      
});

mypr.catch(function(failed){
    console.log('failed:',failed);
    im.src="https://cdn.dribbble.com/users/251873/screenshots/9388228/error-img.gif"


});
