/*document.getElementById("input-txt").focus();

let body = document.getElementsByTagName("body");
body[0].addEventListener("keypress" , function(e){
    if(e.key == "Enter"){
        send();
    }
});

document.getElementById("send").addEventListener("click" , send);
function send (){
    let text = document.getElementById("input-txt").value;
    if(text == ""){

    }else {
        let request = document.createElement("div");
        request.className = "request";
        request.innerText = text;
        
        document.getElementsByClassName("main")[0].appendChild(request);
        document.getElementById("input-txt").value = "";

        fetch (`https://api.monkedev.com/fun/chat?msg=${text}`)
        .then(request => response.json())
        .then (function (data) {
            let response = document.createElement("div");
            response.className = "response";
            response.innerText = data.response;

            setTimeout(function (){
                document.getElementsByClassName("main")[0].appendChild(response);
                let a = document.getElementsByClassName("main")[0].scrollHeight;
                document.getElementsByClassName("main")[0].scrollTop = a+100;
            }, 1000)
        });

    }
    let a = document.getElementsByClassName("main")[0].scrollHeight;
    document.getElementsByClassName("main")[0].scrollTop = a;
}*/

const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "sk-0TOkgmPZESX5tgXbg1sbT3B1bkFJiNzu12PZ6O2k0jpIM0xQ";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
  <img src="./icons/user.png" alt="user icon"> <span>${message}</span>
  </div>`;

  // Use axios library to make a POST request to the OpenAI API
  const response = await axios.post(
    "https://api.chatbot.com/v2/stories",
    {
      prompt: message,
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
  <img src="./icons/chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});