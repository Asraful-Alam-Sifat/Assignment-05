

const signIn = () => {
    let inputUsername = document.getElementById("username");
let username = inputUsername.value;

let inputPassword = document.getElementById("password");
let password = inputPassword.value;

if(username === "admin" && password === "admin123"){
    alert("Login Succesfull");
    window.location.assign("/home.html")
}else{
    alert("Login Failed. Try Again");
}

    
}