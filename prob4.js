//user name and pass entered while registering
let reg_user = "xyz@gmail.com";
let reg_pass = "xyz@123";

//user name and pass entered while logging in 
let user = "xyz@gmail.com";
let pass = "xyz@123";

if(reg_user == user){
  
  if(reg_pass == pass){
    console.log("Login Successful");
  }
  else{
    console.log("Incorrect Password");
  }
  
}
else{
    console.log("Login Failed : Incorrect username");
  }