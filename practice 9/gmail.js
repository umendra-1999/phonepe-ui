let email="abc123@gmail.com";
let pass="abcd1234";

let input_email=prompt("enter the email")
let input_pass=prompt("enter the password")

if(email==input_email){
    if(pass==input_pass){
        alert("login successfull");
    }

else{
    alert("password is wrong ")
}
}
else{
    alert("email is wrong")
}