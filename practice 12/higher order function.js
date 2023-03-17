//for each will not return anything it will only give answere as in console form
let sweets=["kaju","laddu","khoya","rasgulla"]
let box=[]
 let x=sweets.forEach(function(e,i){
    // console.log(ele,i)
    return(e)
})
console.log(x)






// in map it will return values in console

let sweet=["kaju","laddu","khoya","rasgulla"]
// yaha par hame ek khalui array ki jarurat nahi h map me direct le lega

let y=sweet.map(function(ele,i){
    return(ele)
})
console.log(y)


//another example of  map 
let details=["rollno.","classs","name","marks","section","school","phoneno."]

let s=details.map(function(e,i){
    return(e)
})

console.log(s)


//foreach more example
let empdet=["empid","empname","empdeatails","emprole","companyname","area"]
empdet.forEach(function(elem,i) {
    console.log(elem,i);
});


//EK ARRAY H USME JITNE NUMBERS H UNKA DOUBLE PRINT HO JAYE
//using foreach
let numbers=[2,4,6,7,5,8,9]
let arr=[]
numbers.forEach(function(eleme,i){
    arr.push(eleme*2)
})
console.log(arr)

//same code using map 

let ar=[3,54,5,75,6,8,7,8,9,9,56,4,5,4,6]

let num=ar.map(function(elemen,i){
    return elemen*2
    
})
console.log(num)

//another example of  map

let nums=[12,45,56,78,980,90,67]

let res=nums.map(function(element,i){
    return element*.5;
})
console.log(res)





//using .filter method in filtering a single number from aN ARRAY

let numss=[1,2,3,4,56,7,8,9]
let reso=numss.filter(function(ele){
    return ele%2==0;
})
console.log(reso)


let fr=[1,2,3,434,54,4,78,5647,324,5476,78798,9897,,877,4534]
let re=fr.filter(function(ele){
    return ele%3==0;
})
console.log(re)




//filtering a number from an array 
//1
let number=[12,234,565,789,980,90]
let resolve = number.filter(function(ele){
    return ele%5==0;

})
console.log(resolve,"resolve numbers are");


//2
let arraya =[23,34,56,78,90,3,2,3,5,678,8]
arraya.forEach(function(e,i){

    console.log(e,i)
})

//3
console.log ("another example of for each loop in array ")
let aray=[0,2,23,24,423,434,32,5325,235,32,52,5]
aray.forEach(function(ele,i,array){
    console.log(   ele,i)
})


//4
console.log("next example of .map ")
let ra=[0.5,7,34,2,7,23,8,3,678,8];
let g=ra.map(function(ele,i){
    return ele;
})
console.log(g)



// 5
console.log("another example of .map in array")
let r=[21,31,41,51,6,61,76,87]
let f=r.map(function(elem,i){
    return (elem)
})
console.log(f)







