let light=prompt("enter the color of trafic light")

if(light=="red"){
    console.log("stop")
}
else if(light=="yellow"){
    console.log("ready")
}
else if(light=="green"){
    console.log("gone")
}
else{
    alert("the trafic light is not working properly")
}


//another example of discount on price rate 

let price=Number.parseInt(prompt("enter the price"))

if(price<="789"){
    console.log("discount of 20%")
}
 else if(price<="1999"||price>="1200"){
    console.log("discount of 60%")
 }
 else if(price>=50){
    console.log("no discount")
 }