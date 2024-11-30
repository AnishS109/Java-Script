let box = document.getElementsByClassName("box")[0];
let userText = document.getElementsByClassName("input")[0];
let subBtn = document.getElementsByClassName("btn")[0];


function sendMessage(){
    if(userText.value !== ''){
        let d1 = document.createElement("div")
    d1.className = "msgBox"; 

    let userMessage = document.createElement("p");
    userMessage.className = "pmsg";
    userMessage.innerText = userText.value;
    

    d1.appendChild(userMessage);
    box.appendChild(d1);

    let response = getBotResponse();
    const botMessage = document.createElement("div");
    botMessage.className = "botMsg"
    botMessage.innerText = response;
    box.appendChild(botMessage)

    userText.value = '';
    } 
}


function getBotResponse() {
  
    
    if(userText.value.toLowerCase() === "hello"){
        return "Hello ! How can I help you?"
    }

    if(userText.value.toLowerCase() === "what is your name"){
        return "My name is Jarvis and I am CHATBOT"
    } 

    if(userText.value.toLowerCase() === "what is your hobby"){
        return "My hobby is to solve queries of peoples"
    } 
    else{
        return "Syntax Error"
    }
}



subBtn.addEventListener("click" , sendMessage)



