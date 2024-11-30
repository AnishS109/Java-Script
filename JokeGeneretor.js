let body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";


let conatiner = document.createElement("div");
body.append(conatiner);

conatiner.style.height = "80vmin";
conatiner.style.width = "70vmin";
conatiner.style.color = "black";
conatiner.style.position = "absolute";
conatiner.style.top = "50px"

let Emoji = document.createElement("div");
Emoji.setAttribute("class" , "emojiBox");
conatiner.append(Emoji);

Emoji.style.height = "200px";
Emoji.style.width = "300px";
Emoji.style.backgroundImage = "url('/JavaScript/joke.jpeg')";
Emoji.style.backgroundSize = "cover";
Emoji.style.position = "relative";
Emoji.style.left = "125px"

let jokeDiv = document.createElement("div");
conatiner.append(jokeDiv);
jokeDiv.style.backgroundColor = "white";
jokeDiv.style.height = "100px";
jokeDiv.style.width = "500px";
jokeDiv.style.color = "black";
jokeDiv.style.position = "relative";
jokeDiv.style.left ="25px";
jokeDiv.style.bottom ="-40px";
jokeDiv.style.fontSize = "25px"


let joke = document.createElement("p");
jokeDiv.append(joke);

joke.style.fontSize ="30px";
joke.style.color = "black";

let jokeBtn = document.createElement("button");
conatiner.append(jokeBtn)
jokeBtn.innerText = "Get Joke";

let url = "https://official-joke-api.appspot.com/random_joke";

async function getJokes() {
    let response = await fetch(url ,  {Headers: {
        'Accept': 'application/json'
    }}) 
    let getData = await response.json();
    let jokeData = `${getData.setup}  ${getData.punchline}`;
    jokeDiv.innerText = jokeData;
}

console.log(getJokes());

jokeBtn.style.backgroundColor = "red";
jokeBtn.style.fontSize ="30px"
jokeBtn.style.color = "white";
jokeBtn.style.height = "50px";
jokeBtn.style.width = "300px";
jokeBtn.style.position = "relative";
jokeBtn.style.left = "125px";
jokeBtn.style.top = "80px";
jokeBtn.addEventListener("click" , (Event1) => getJokes())




