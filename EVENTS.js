let button = document.querySelector("button");
button.onclick = () => {
    console.log("Button is clicked");
}

let box = document.querySelector(".divv");
box.onclick = (e) => {
    console.log(e);
    console.log("You are inside div");
}

let button = document.querySelector("button");
button.addEventListener("mouseover" , (evt) => {
    console.log("Button was clicked");
});
let handler2 = () => {
   console.log("Button was clicked handler 2")
}
button.addEventListener("mouseover" , handler2);
button.removeEventListener("mouseover",handler2);
