let loginPageElement = document.createElement("div");
loginPageElement.setAttribute("class","loginPage");
let body = document.querySelector("body");
body.append(loginPageElement)

loginPageElement.innerText = "Instagram"
loginPageElement.style.backgroundColor = "white";
loginPageElement.style.color = "black";
loginPageElement.style.height = "450px";
loginPageElement.style.width = "400px";
loginPageElement.style.display = "flex";
loginPageElement.style.justifyContent = "center";
loginPageElement.style.alignItems = "center";
loginPageElement.style.flexWrap = "wrap"
loginPageElement.style.fontSize = "40px"
loginPageElement.style.position = "absolute"
loginPageElement.style.top = "150px"

body.style.display = "flex"
body.style.justifyContent = "center";
body.style.backgroundColor = "rgb(195, 224, 249)"

let userName = document.createElement("input")
userName.placeholder = "Username";
loginPageElement.append(userName);

let user = userName.innerText = " ";
userName.style.backgroundColor = "white";
userName.style.color = "black"
userName.style.height = "20px"
userName.style.width = "300px"
userName.style.border = "1px solid rgb(103, 103, 103)"
userName.style.padding = "10px"
userName.style.borderRadius = "8px"
userName.addEventListener("click", (Event) =>{userName.style.backgroundColor = "rgb(168, 208, 243)"});


let passWord = document.createElement("input");
passWord.placeholder = "Password";
loginPageElement.append(passWord);

let pass = passWord.innerText = " ";
passWord.style.backgroundColor = "white";
passWord.style.color = "black"
passWord.style.height = "20px"
passWord.style.width = "300px"
passWord.style.border = "1px solid rgb(103, 103, 103)"
passWord.style.padding = "10px"
passWord.style.borderRadius = "8px"
passWord.style.position = "relative";
passWord.style.bottom = "65px";
passWord.addEventListener("click", (Event2) =>{passWord.style.backgroundColor = "rgb(168, 208, 243)"})


function userStore () {
    let userStorePass = passWord.value
    let userStoretext = userName.value
    
    if(userStorePass === "anish@9098"   && userStoretext === "anish_saini_109"){
        open("/JavaScript/LoginPage2.html")
    } else {
      console.log("USer not found")
    }
}


let btn = document.createElement("button");
btn.innerText = "Log in";
loginPageElement.append(btn);
btn.style.width ="300px";
btn.style.height = "35px";
btn.style.backgroundColor = "rgb(18, 167, 225)";
btn.style.color = "white";
btn.style.fontSize = "20px";
btn.style.border = "none";
btn.style.borderRadius = "5px";
btn.style.position = "relative";
btn.style.bottom = "90px";
btn.addEventListener("click", (event3) =>{passWord.style.backgroundColor = "white"});
btn.addEventListener("click", (event4) =>{userName.style.backgroundColor = "white"});
btn.addEventListener("click", (event5) =>setTimeout(() => userStore(), 1000));


